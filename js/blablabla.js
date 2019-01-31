//Fire it when the page first loads:

function scroll() {
    if ($("#mainNav").offset().top > 0) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("Time").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}


var local = false;


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

    http.onerror = function (e) {
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

function error_popup() {
    alert("Server offline :/ \nZeg da Daan zijn pc moe aanzetten! :p");
}

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
