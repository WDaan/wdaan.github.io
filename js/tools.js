const cheerio = require("cheerio");
const request = require("request");
const ProgressBar = require('progressbar.js')


//check if server offline & init circles for offline
var offline = true;
var circle = [];

function check_server() {
    request({
            url: "https://yeet.wdaan.me/php/index.php",
            json: false,
        },
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                //console.log(body); // Print the json response
                let $ = cheerio.load(body);
                data = $('#array');
                console.log(data.text());
                data_arr = JSON.parse(data.text().substring(7));
                save_values(data_arr);
                this.offline = false;
            }
        }
    );
};

check_server();
init_circles();

function save_values(info) {
    var total = info[0];
    var free = info[1];
    var media = info[3];
    var daan = info[2];
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