function set_station(station) {
    reset_selected();
    $('#radio').attr('src', station.url);
    $('#' + station.name).addClass("selected");
}

function reset_selected() {
    $('button').removeClass("selected");
}


/*     STATIONS     */
var TOPRADIO = {
    name: 'TOPRADIO',
    url: 'http://jwmp3.topradio.be/topradio.mp3'
};

var TOPSELECTION = {
    name: 'TOPSELECTION',
    url: 'http://str.topradio.be/TOPradioArena.aac'
};

var QMUSIC = {
    name: 'QMUSIC',
    url: 'http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_live_128.mp3'
};

var QMUSIC_NONSTOP = {
    name: 'QMUSIC_NONSTOP',
    url: 'http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_non-stop_128.mp3'
};

var MNM = {
    name: 'MNM',
    url: 'http://icecast.vrtcdn.be/mnm-high.mp3'
};

var MNM_HITS = {
    name: 'MNM_HITS',
    url: 'http://icecast.vrtcdn.be/mnm_hits-mid.mp3'
};

var MNM_URBANICE = {
    name: 'MNM_URBANICE',
    url: 'http://icecast.vrtcdn.be/mnm_urb-high.mp3'
};

var STUBRU = {
    name: 'STUBRU',
    url: 'http://icecast.vrtcdn.be/stubru-high.mp3'
};

var Q_DANCE = {
    name: 'Q_DANCE',
    url: 'http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_dance_128.mp3'
}

var RHR = {
    name: 'RHR',
    url: 'http://stream.rhr.fm/'
};

var SLAM_HardStyle = {
    name: 'SLAM_HardStyle',
    url: 'http://streaming.slam.nl/web11_mp3'
};

var DANCE_UK = {
    name: 'DANCE_UK',
    url: 'http://212.83.150.15:8022/stream/'
};