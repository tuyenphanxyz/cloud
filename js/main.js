(function($) {
    'use strict';

    // ================================== Preloader ==================================

    $(window).on('load', function() {
        var preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function() {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
    })

     $(document).ready(function(){
        $(window).scroll(function(){
            $('.text-slide').css("top",0 + $(window).scrollTop()/1) 
        })
    })
    $(document).ready(function(){
        $(window).scroll(function(){
            $('.text-slide').css("opacity", 1 - $(window).scrollTop()/450)
           
        })
    })
 // ================================== Button Back Top ==================================

    $(function() {

        // Scroll Event
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.back-top').addClass('active');
            if (scrolled < 300) $('.back-top').removeClass('active');
        });


        $('.back-top').click(function() {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });
    });


 
    // ================================== Header ==================================
 // add class fixed for menu when scroll
    if ($('.header').hasClass('header'))  {
        var header_height = $('header'),
            offset = header_height.offset();

        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $(".header").addClass('header-fixed');
            } else {
                $(".header").removeClass('header-fixed');
            }
        });
    };

    // show menu when scroll up, hide menu when scroll down
    var lastScroll = 200;
    $(window).on('scroll load', function(event) {
        var st = $(this).scrollTop();
        if (st > lastScroll && st > 300) {
            $('.header').addClass('hide-menu');

        } 
        else if (st < lastScroll) {
            $('.header').removeClass('hide-menu');
        }
        if ($(window).scrollTop() == 0) {
            $('.header').removeClass('.header-fixed').removeClass('hide-menu');
        };
        lastScroll = st;

    });
        // ================================== Menu Responsive JS ==================================
    $(function() {
        $('.menu-mobile').click(function() {
            $('.block-menu-mobile').addClass('show1');
            $('.overlay-black').addClass('show2');

            return false;
        })
        $('.close-mobile').click(function() {
            $('.block-menu-mobile').removeClass('show1');
            $('.overlay-black').removeClass('show2');
            return false;
        })
        $('.overlay-black').click(function() {
            $('.block-menu-mobile').removeClass('show1');
            $(this).removeClass('show2');
            return false;
        })
    })


    // ================================== Carousel Custom JS ==================================
   
           $(function() {
        $('#our-client-say').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true,
                    loop: false,
                    margin: 30
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: false,
                    margin: 30
                }
            }
        })
    })
  $(function() {
        $('#card-team').owlCarousel({
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true,
                    loop: true,
                    margin: 30,
                },
                960: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 15,
                }
            }
        })
    })

  // ================================== Animate JS ==================================

    $(function() {
        $('[class *= "animated"]').addClass('wow').attr('data-wow-duration', '1.5s');
        $('[class *= "animated-1"]').addClass('wow').attr('data-wow-duration', '4s');
        $('.animated-Fade-In-Left').addClass('fadeInLeft').attr('data-wow-delay', '0.5s');
        $('.animated-Fade-In-Right').addClass('fadeInRight').attr('data-wow-delay', '0.5s');
        $('.animated-Slide-In-Down').addClass('slideInDown').attr('data-wow-delay', '0.5s');
         $('.animated-1-Slide-In-Left').addClass('slideInLeft').attr('data-wow-delay', '0.5s');
        /*Fade In Up and Other Delay*/
        $('.animated-Fade-In-Up-1').addClass('fadeInUp').attr('data-wow-delay', '0.2s');
        $('.animated-Fade-In-Up-2').addClass('fadeInUp').attr('data-wow-delay', '0.4s');
        $('.animated-Fade-In-Up-3').addClass('fadeInUp').attr('data-wow-delay', '0.6s');
        $('.animated-Fade-In-Up-4').addClass('fadeInUp').attr('data-wow-delay', '0.8s');
        $('.animated-Fade-In-Up-5').addClass('fadeInUp').attr('data-wow-delay', '1s');
        $('.animated-Fade-In-Up-6').addClass('fadeInUp').attr('data-wow-delay', '1.2s');
        /*Fade In and Other Delay*/
        $('.animated-Fade-In-1').addClass('fadeIn').attr('data-wow-delay', '0.4s');
        $('.animated-Fade-In-2').addClass('fadeIn').attr('data-wow-delay', '0.6s');
        $('.animated-Fade-In-3').addClass('fadeIn').attr('data-wow-delay', '0.8s');
        $('.animated-Fade-In-4').addClass('fadeIn').attr('data-wow-delay', '1s');
        $('.animated-Fade-In-5').addClass('fadeIn').attr('data-wow-delay', '1.2s');
        $('.animated-Fade-In-6').addClass('fadeIn').attr('data-wow-delay', '1.4s');
    });
    $(function() {
        new WOW().init();
    });

// ================================== Counter JS ==================================

$('.counter').countUp({

});



// ================================== MixItUp JS ==================================

   $('#project').mixItUp();



})(jQuery);