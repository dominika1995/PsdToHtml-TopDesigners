/* NAVBAR */

$(document).ready(function() {
    $(".slider__header--menu").click(function(){
        $(this).toggleClass("active");
        $(".slider__header--menu--text").toggleClass("hidden");
    });
});



/* NUMBER */
/*

$(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i,el){
            function visPx(){
                var H = $(this).height(),
                    r = el.getBoundingClientRect(),
                    t=r.top,
                    b=r.bottom;
                return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
            } visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));

jQuery(function($) {
    $(".numbers__circle--count").inViewport(function(px) {

        if(px>0 && !this.visibilityFlag) {
            this.visibilityFlag = true;
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
    });
});*/



