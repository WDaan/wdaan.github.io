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
    document.getElementById('Time').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

let info;
/*ip loggen*/


$.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function (data) {
    let ip = data.geoplugin_request;
    get_ip(ip);
});

function check_ip() {
    if (info !== '178.118.138.211') {
        $("#local").addClass("hide");
    }
    else {
        $("#local").removeClass("hide");
    }
}

function get_ip(ip) {
    info = ip;
}





















/* animation wnnr zichtbaar
;(function($, win) {
    $.fn.inViewport = function(cb) {
       return this.each(function(i,el){
         function visPx(){
           var H = $(this).height(),
               r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
           return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
         } visPx();
         $(win).on("resize scroll", visPx);
       });
    };
  }(jQuery, window));
  
  
  
  $("#daan").inViewport(function(px){
      if(px) $(this).addClass("animated fadeInRigt") ;
      else {
          $(this).removeClass("animated fadeInRigt");
      }
  });

  */