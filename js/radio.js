function TOPRADIO() {
    $('#radio').attr('src', 'http://jwmp3.topradio.be/topradio.mp3');
    reset_selected();
    $('#TOPRADIO').addClass("selected");
}
function TOPRADIO_TOPSELECTION() {
    $('#radio').attr('src', 'http://str.topradio.be/TOPradioArena.aac');
    reset_selected();
    $('#TOPSELECTION').addClass("selected");
}

function QMUSIC_NONSTOP() {
    $('#radio').attr('src', 'http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_non-stop_128.mp3');
    reset_selected();
    $('#Q_NONSTOP').addClass("selected");
}

function QMUSIC() {
    $('#radio').attr('src', 'http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_live_128.mp3');
    reset_selected();
    $('#QMUSIC').addClass("selected");
}

function Q_DANCE() {
    $('#radio').attr('src', 'http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_dance_128.mp3');
    reset_selected();
    $('#Q_DANCE').addClass("selected");
}

function MNM() {
    $('#radio').attr('src', 'http://icecast.vrtcdn.be/mnm-high.mp3');
    reset_selected();
    $('#MNM').addClass("selected");
}

function MNM_HITS() {
    $('#radio').attr('src', 'http://icecast.vrtcdn.be/mnm_hits-mid.mp3');
    reset_selected();
    $('#MNM_HITS').addClass("selected");
}

function MNM_URBANICE() {
    $('#radio').attr('src', 'http://icecast.vrtcdn.be/mnm_urb-high.mp3');
    reset_selected();
    $('#MNM_URBANICE').addClass("selected");
}

function STUBRU() {
    $('#radio').attr('src', 'http://icecast.vrtcdn.be/stubru-high.mp3');
    reset_selected();
    $('#STUBRU').addClass("selected");
}

function RHR() {
    $('#radio').attr('src', 'http://stream.rhr.fm/');
    reset_selected();
    $('#RHR').addClass("selected");
}

function SLAM_HardStyle() {
    $('#radio').attr('src', 'http://streaming.slam.nl/web11_mp3	');
    reset_selected();
    $('#SLAM!_HardStyle').addClass("selected");
}

function reset_selected() {
    $('button').removeClass("selected");
}

