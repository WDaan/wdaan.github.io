const Swal = require('sweetalert2');

window.check_server = check_server;
window.error_popup = error_popup;

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
var timeout = false;

/*remove local when not connected from my home*/
$.getJSON("https://ipapi.co/json/", function (data) {
    var ip = data.ip;
    if (ip === "178.118.138.211") {
        $("#local").removeClass("hide");
        console.log("dag Daan ^_^");
        local = true;
    } else {
        $("#local").addClass("hide");
    }
});



function check_server() {
    var http = new XMLHttpRequest();
    http.timeout = 5000;

    http.ontimeout = function (e) {
        timeout = true;
        server_offline();
        console.log("Server timed out ...");
        check_server();
        console.log("checking again...");
    }

    http.onerror = function (e) {
        timeout = false;
        server_offline();
        console.log("Server offline :/");
    };

    http.open("GET", "https://wdaan.me", /*async*/ true);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            set_links(local);
            console.log("Server online! ^__^");
        }
    };
    try {
        http.send(null);
    } catch (exception) {}
};


/*remote functions always, local necessary check with boolean*/
function set_links(local) {
    var f1 = 'open_page(' + FileRun.name + ')';
    document.getElementById("FileRun").setAttribute("onclick", f1);
    var f2 = 'open_page(' + Plex.name + ')';
    document.getElementById("Plex").setAttribute("onclick", f2);
    var f3 = 'open_page(' + Transmission.name + ')';
    document.getElementById("Transmission").setAttribute("onclick", f3);
    if (local === true) {
        var f4 = 'open_page(' + Plex_local.name + ')';
        document.getElementById("Plex_local").setAttribute("onclick", f4);
        var f5 = 'open_page(' + Transmission_local.name + ')';
        document.getElementById("Transmission_local").setAttribute("onclick", f5);
        var f6 = 'open_page(' + Resilio.name + ')';
        document.getElementById("Resilio").setAttribute("onclick", f6);

    }
};

function server_offline() {
    var f = "error_popup()";
    document.getElementById("FileRun").setAttribute("onclick", f);
    document.getElementById("Plex").setAttribute("onclick", f);
    document.getElementById("Transmission").setAttribute("onclick", f);
};

function open_page(name) {
    window.open(name.url);
};


var page_array = [
    (FileRun = {
        name: "FileRun",
        url: "https://wdaan.me?page=login&action=login&nonajax=1&username=woofy&password=woofyiscute"
    }),
    (Plex = {
        name: "Plex",
        url: "http://plex.wdaan.me"
    }),
    (Transmission = {
        name: "Transmission",
        url: "http://tor.wdaan.me"
    }),
    (Plex_local = {
        name: "Plex_local",
        url: "https://app.plex.tv/desktop"
    }),
    (Transmission_local = {
        name: "Transmission_local",
        url: "http://10.0.0.11:9091/"
    }),
    (Resilio = {
        name: "Resilio",
        url: "http://10.0.0.11:8888/gui/"
    })
];