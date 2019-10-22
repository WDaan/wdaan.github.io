const Swal = require('sweetalert2');

window.check_server = check_server;
window.error_popup = error_popup;
window.open_page = open_page;


function error_popup() {
    if (timeout) {
        var span = document.createElement("span");
        span.innerHTML = 'Server timed out... &#128533 <br> Try again';
        Swal.fire({
            type: 'question',
            title: 'Oops...',
            html: span,
            customClass: 'swal-smal'
        });
    } else {
        var span = document.createElement("span");
        span.innerHTML = 'Server offline &#128549 <br> Zeg da Daan zijn pc moe aanzetten! &#128539';
        Swal.fire({
            type: 'error',
            title: 'OOF...',
            html: span,
            customClass: 'swal-smal'
        });
    }
}

var local = false;
var timeout = true;

/*remove local when not connected from my home*/
$.getJSON("https://ipapi.co/json/", function (data) {
    var ip = data.ip;
    if (ip === "178.118.138.211") {
        console.log("dag Daan ^_^");
        local = true;
    }
});


function check_server() {
    set_links();
}

function set_links() {
    var f1 = 'open_page(' + FileRun.name + ')';
    document.getElementById("FileRun").setAttribute("onclick", f1);
    var f2 = 'open_page(' + Plex.name + ')';
    document.getElementById("Plex").setAttribute("onclick", f2);
    var f3 = 'open_page(' + Transmission.name + ')';
    document.getElementById("Transmission").setAttribute("onclick", f3);
    var f4 = 'open_page(' + Ombi.name + ')';
    document.getElementById("Ombi").setAttribute("onclick", f4);
    var f5 = 'open_page(' + Portainer.name + ')';
    document.getElementById("Portainer").setAttribute("onclick", f5);
    var f6 = 'open_page(' + Resilio.name + ')';
    document.getElementById("Resilio").setAttribute("onclick", f6);
};

function open_page(name) {
    window.open(name.url);
};

var page_array = [
    (FileRun = {
        name: "FileRun",
        url: "https://files.wdaan.me?page=login&action=login&nonajax=1&username=woofy&password=woofyiscute"
    }),
    (Plex = {
        name: "Plex",
        url: "https://plex.wdaan.me"
    }),
    (Transmission = {
        name: "Transmission",
        url: "https://transmission.wdaan.me"
    }),
    (Ombi = {
        name: "Ombi",
        url: "https://ombi.wdaan.me"
    }),
    (Portainer = {
        name: "Portainer",
        url: "https://portainer.wdaan.me"
    }),
    (Resilio = {
        name: "Resilio",
        url: "https://sync.wdaan.me"
    })
];