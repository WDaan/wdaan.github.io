function init_stations() {
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
  }),
  (TOPSELECTION = {
    name: "TOPSELECTION",
    url: "http://str.topradio.be/TOPradioArena.aac"
  }),
  (QMUSIC = {
    name: "QMUSIC",
    url: "http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_live_128.mp3"
  }),
  (Q_NONSTOP = {
    name: "Q_NONSTOP",
    url: "http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_non-stop_128.mp3"
  }),
  (MNM = {
    name: "MNM",
    url: "http://icecast.vrtcdn.be/mnm-high.mp3"
  }),
  (MNM_HITS = {
    name: "MNM_HITS",
    url: "http://icecast.vrtcdn.be/mnm_hits-mid.mp3"
  }),
  (MNM_URBANICE = {
    name: "MNM_URBANICE",
    url: "http://icecast.vrtcdn.be/mnm_urb-high.mp3"
  }),
  (STUBRU = {
    name: "STUBRU",
    url: "http://icecast.vrtcdn.be/stubru-high.mp3"
  }),
  (Q_DANCE = {
    name: "Q_DANCE",
    url: "http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_dance_128.mp3"
  }),
  (RHR = {
    name: "RHR",
    url: "http://stream.rhr.fm/"
  }),
  (SLAM_HardStyle = {
    name: "SLAM_HardStyle",
    url: "http://streaming.slam.nl/web11_mp3"
  }),
  (DANCE_UK = {
    name: "DANCE_UK",
    url: "http://212.83.150.15:8022/stream/"
  })
];