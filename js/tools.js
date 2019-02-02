var ProgressBar = require('progressbar.js')
var line = new ProgressBar.Line('#container');

//check if server offline & init circles for offline
var offline = true;
var circle = [];

function check_server() {
    var http = new XMLHttpRequest();
    http.timeout = 5000;

    http.ontimeout = function (e) {
        offline = true;
        console.log("Server timed out ...");
        check_server();
        console.log("checking again...");
    }

    http.onerror = function (e) {
        offline = true;
        console.log("Server offline :/");
    };

    http.open("GET", "https://wdaan.me", /*async*/ true);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            console.log("Server online! ^__^");
            offline = false;
            request_data();
        }
    };
    try {
        http.send(null);
    } catch (exception) {}
};

check_server();
init_circles();

function request_data() {
    $.ajax({
        'type': "GET",
        'global': false,
        'dataType': 'json',
        'url': "https://wdaan.me/mijn_info/info.php",
        'data': {
            'request': "",
            'target': 'arrange_url',
            'method': 'method_target'
        },
        'success': function (data) {
            //console.log(data);
            save_values(data);
        },
    });
};

function save_values(info) {
    var total = info[0];
    var free = info[1];
    var media = info[2];
    var daan = info[3];
    document.getElementById('container').setAttribute("data-value", free);
    document.getElementById('container').setAttribute("text", 'Free');
    document.getElementById('container2').setAttribute("data-value", daan);
    document.getElementById('container2').setAttribute("text", 'Daan');
    document.getElementById('container3').setAttribute("data-value", media);
    document.getElementById('container3').setAttribute("text", 'Media');
    set_progress(total);
};



function init_circles() {
    $('.progress').each(function (i) {
        circle[i] = new ProgressBar.Circle(this, {
            color: '#64a19d',
            strokeWidth: 4,
            trailWidth: 2,
            easing: 'easeInOut',
            duration: 1400
        });
        circle[i].setText("Server offline");
    })
};



/* progress bar */
function set_progress(total) {
    $('.progress').each(function (i) {
        var value = ($(this).attr('data-value') / total);
        var type = $(this).attr('text');
        var amount = $(this).attr('data-value');
        circle[i].animate(value, {
            from: {
                color: '#64a19d'
            },
            to: {
                color: '#64a19d'
            },
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.setText(type + "\n" + amount + 'GB');
            }
        });
        circle[i].text.style.fontSize = '1.3em';
    });

};