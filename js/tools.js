var ProgressBar = require('progressbar.js')
var line = new ProgressBar.Line('#container');


var total;
var free;
var daan;
var media;

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


function save_values(info) {
    total = info[0];
    free = info[1];
    media = info[2];
    daan = info[3];
    document.getElementById('container').setAttribute("data-value", free);
    document.getElementById('container').setAttribute("text", 'Free');
    document.getElementById('container2').setAttribute("data-value", daan);
    document.getElementById('container2').setAttribute("text", 'Daan');
    document.getElementById('container3').setAttribute("data-value", media);
    document.getElementById('container3').setAttribute("text", 'Media');
    set_progress(total);
}


/* progress bar */
function set_progress(total) {
    $('.progress').each(function (i) {
        var circle = new ProgressBar.Circle(this, {
            color: '#64a19d',
            strokeWidth: 4,
            trailWidth: 2,
            easing: 'easeInOut',
            duration: 1400
        });
        var value = ($(this).attr('data-value') / total);
        var type = $(this).attr('text');
        var amount = $(this).attr('data-value');
        circle.animate(value, {
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
        circle.text.style.fontSize = '1.3em';
    });

};