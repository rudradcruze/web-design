$(function() {

    // preloader
    $(window).on('load', function () {
        $('.preloader').delay(500).fadeOut(500);
    });

    // Animated Scroll Js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });

    // Banner Slider
    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        prevArrow: ".banner_slider_arrow_left",
        nextArrow: ".banner_slider_arrow_right",
    });

    // Portfolio Slider
    $('.portfolio_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Portfolio Pop Up
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling': true,
        'positionFromTop': 200,
    })

    // Testimonial 
    $('.testimonial_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial_slider_img',
    });

    $('.testimonial_slider_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial_content',
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa fa-chevron-up prev_arrow"></i>',
        nextArrow: '<i class="fa fa-chevron-down next_arrow"></i>',
        vertical: true,
        verticalSwiping: true,
        centerPadding: '0px',
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                }
            }
        ]
    });


    // Service Slider
    $('.services_slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<i class="fa fa fa-chevron-up prev_arrow"></i>',
        nextArrow: '<i class="fa fa-chevron-down next_arrow"></i>',
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,  
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Counter Up
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });

    // Sponsor
    $('.sponsor_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1500,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                }
            }
        ]
    });

    // back to top
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 500) {
            $('.scroll_top').addClass('scroll_animate');
            $('.scroll_animate').fadeIn(500);
        }
        else if (scrolling > 200){
            $('.scroll_animate').fadeOut(500);
        }
        if (scrolling > 153) {
            $('.menu_style').addClass('fixed_menu');
        }
        else {
            $('.menu_style').removeClass('fixed_menu');
        }
    });

    $(".scroll_top").click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });

})