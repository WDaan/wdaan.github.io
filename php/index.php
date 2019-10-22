<?php
function CalcDirectorySize($DirectoryPath) {
     $Size = 0;
     $Dir = opendir($DirectoryPath);
     if (!$Dir)
        return -1;
 
    while (($File = readdir($Dir)) !== false) {
         // Skip file pointers
        if ($File[0] == '.') continue; 
         // Go recursive down, or add the file size
        if (is_dir($DirectoryPath . $File))            
            $Size += CalcDirectorySize($DirectoryPath . $File . DIRECTORY_SEPARATOR);
        else 
            $Size += filesize($DirectoryPath . $File);        
    }
     closedir($Dir);
     return $Size;
}

$total = round(disk_total_space("/NAS") / 1024 / 1024 / 1024);
$free = round(disk_free_space("/NAS") / 1024 / 1024 / 1024);
$Daan = round(CalcDirectorySize('/NAS/Daan/') / 1024 / 1024 / 1024);
$Media = round(CalcDirectorySize('/NAS/Media/') / 1024 / 1024 / 1024);
echo "Total: $total GB <br/>";
echo "Free: $free GB <br/>";
echo "Daan: $Daan GB <br/>";
echo "Media: $Media GB <br/>";

$array = json_encode([$total, $free, $Daan, $Media]);
echo '<div id="array">';
echo "Array : $array";
echo '</div>';
 