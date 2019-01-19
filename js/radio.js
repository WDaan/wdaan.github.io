function init_stations() {
    /*alfabetisch sorteren */
    station_array.sort(function(a, b) {
        var nameA = a.name,
            nameB = b.name;
        if (nameA < nameB)
            //sort string ascending
            return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
    });
    var i;
    for (i = 0; i < station_array.length; i++) {
        var div = document.createElement("div");
        div.classList.add("col-md-");
        div.classList.add("m-1");
        var functionname = "set_station(" + station_array[i].name + ")";
        div.setAttribute("onclick", functionname);
        var btn = document.createElement("button");
        btn.classList.add("btn");
        btn.classList.add("btn-primary");
        btn.classList.add("p-3");
        btn.innerHTML = station_array[i].name;
        btn.id = station_array[i].name;
        div.appendChild(btn);
        $("#stationbtns").append(div);
    }
}

function set_station(station) {
    reset_selected();
    $("#radio").attr("src", station.url);
    $("#" + station.name).addClass("selected");
}

function reset_selected() {
    $("button").removeClass("selected");
}
/*     STATIONS     */
var station_array = [
    (TOPRADIO = {
        name: "TOPRADIO",
        url: "http://jwmp3.topradio.be/topradio.mp3"
    }), (TOPSELECTION = {
        name: "TOPSELECTION",
        url: "http://str.topradio.be/TOPradioArena.aac"
    }), (QMUSIC = {
        name: "QMUSIC",
        url: "http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_live_128.mp3"
    }), (QMUSIC_NONSTOP = {
        name: "QMUSIC_NONSTOP",
        url: "http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_non-stop_128.mp3"
    }), (MNM = {
        name: "MNM",
        url: "http://icecast.vrtcdn.be/mnm-high.mp3"
    }), (MNM_HITS = {
        name: "MNM_HITS",
        url: "http://icecast.vrtcdn.be/mnm_hits-mid.mp3"
    }), (MNM_URBANICE = {
        name: "MNM_URBANICE",
        url: "http://icecast.vrtcdn.be/mnm_urb-high.mp3"
    }), (STUBRU = {
        name: "STUBRU",
        url: "http://icecast.vrtcdn.be/stubru-high.mp3"
    }), (QMUSIC_DANCE = {
        name: "QMUSIC_DANCE",
        url: "http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_dance_128.mp3"
    }), (RHR = {
        name: "RHR",
        url: "http://stream.rhr.fm/"
    }), (SLAM_HardStyle = {
        name: "SLAM_HardStyle",
        url: "http://streaming.slam.nl/web11_mp3"
    }), (DANCE_UK = {
        name: "DANCE_UK",
        url: "http://212.83.150.15:8022/stream/"
    }), (DNB_RADIO = {
        name: "DNB_RADIO",
        url: "http://source.dnbradio.com/dnbradio_main.mp3"
    }), (TRAP_FM = {
        name: "TRAP_FM",
        url: "http://stream.trap.fm:6004/;stream.mp3"
    }), (DUBBASE_FM = {
        name: "DUBBASE_FM",
        url: "http://stream.dubbase.fm:7004/;stream.mp3"
    }), (DNB_FM = {
        name: "DNB_FM",
        url: "http://stream.drumandbass.fm:9004/;stream.mp3"
    }), (OUR_HOUSE_FM = {
        name: "OUR_HOUSE_FM",
        url: "http://shoutcast.ourhouse.fm:8055/;stream1.mp3"
    }), (SLAM = {
        name: "SLAM",
        url: "https://stream.slam.nl/slam_mp3?allradio.nl&1547484924"
    }), (DEEP_RADIO = {
        name: "DEEP_RADIO",
        url: "http://stream.deep.radio/sd?allradio.nl&1547485103"
    }), (Q_DANCE_RADIO = {
        name: "Q_DANCE_RADIO",
        url: "http://19993.live.streamtheworld.com/Q_DANCEAAC.aac"
    })
];

/* waarbij 7.html werkt! 
http://212.83.150.15:8022/7.html
http://stream.trap.fm:6004/7.html
http://stream.dubbase.fm:7004/7.html
http://shoutcast.ourhouse.fm:8055/7.html
*/


