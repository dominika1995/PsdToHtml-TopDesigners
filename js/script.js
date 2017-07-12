
$(document).ready(function () {


    /* NAVBAR */

    var check=false;
    var isActive = false;
    $('.js-menu').on('click', function () {
        if (isActive) {
            $(this).removeClass('active');
            $('body').removeClass('menu-open');
            check=false;
        } else {
            $(this).addClass('active');
            $('body').addClass('menu-open');
            check=true;
        }
        isActive = !isActive;
    });

    $('.slider__content,.numbers,.top,.team,.portfolio,.foot').on('click', function () {
        if(check===true)
        {
            $('.js-menu').removeClass('active');
            $('body').removeClass('menu-open');
            isActive=!isActive;
        }
    });

    /* NUMBER */


    $(function ($, win) {
        $.fn.inViewport = function (cb) {
            return this.each(function (i, el) {
                function visPx() {
                    var H = $(this).height(),
                        r = el.getBoundingClientRect(),
                        t = r.top,
                        b = r.bottom;
                    return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
                }
                visPx();
                $(win).on("resize scroll", visPx);
            });
        };
    }(jQuery, window));

    jQuery(function ($) {
        $(".numbers__circle--count").inViewport(function (px) {
            if (px > 0 && !this.visibilityFlag) {
                this.visibilityFlag = true;
                $(".numbers__circle--colors").addClass("numbers__circle--animation");
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            }
        });
    });



    /*Przewijanie strony*/

    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: (target.offset().top-80)
            }, 1000);

            $('.js-menu').removeClass('active');
            $('body').removeClass('menu-open');
            isActive=!isActive;

        }
    });


});



