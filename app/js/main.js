$(function name(params) {

    const swiper = new Swiper('.swiper', {
        // slidesPerView: 1,
        // loop: true,
        // loopedslides: 1,
        // slidesPerView: 2,
        // grid: {
        //     rows: 2,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    jQuery(document).ready(function () {
        jQuery('.scrollbar-inner').scrollbar();
    });

    $('.vacancies__box').on('click', function () {
        $('.vacancies__list').slideToggle();
    });



    $(".scroller").mCustomScrollbar({
        theme: "dark-2"
    });

    // var $header = $(".header")
    // var scroll = 0
    // var active = "active"
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > scroll) {
    //         $header.addClass(active)
    //     } else {
    //         $header.removeClass(active)
    //     }
    // })

    $(function () {
        let header = $('.menu');

        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                header.addClass('header-fixed');
            } else {
                header.removeClass('header-fixed');
            }
        });
    });

    $(function () {

        (function quantityProducts() {
            var $quantityArrowMinus = $(".quantity-arrow-minus");
            var $quantityArrowPlus = $(".quantity-arrow-plus");
            var $quantityNum = $(".quantity-num");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();

    });


    var mixer = mixitup('.slider-content');

    /*	$(".menu a").on("click", function (event) {
    	    event.preventDefault();
    	    var id = $(this).attr('href'),
    	        top = $(id).offset().top;
    	    $('body,html').animate({
    	        scrollTop: top
    	    }, 1500);
    	});

        /*для закрыть меню*/
    /*
              $('.menu__btn').on('click', function () {
                  $('.menu__items').toggleClass('menu__items--active');
              });
              $('.menu__btn').on('click', function () {
                  $('.menu__btn').toggleClass('active');
              });
           
            $('.home__slider').slick({
                dots: true,
                arrows: false,
                 responsive: [


                     {
                         breakpoint: 1150,
                         settings: {
                             slidesToShow: 4,
                         }
                     },
                     {
                         breakpoint: 1000,
                         settings: {
                             slidesToShow: 3,
                         }
                     },
                     {
                         breakpoint: 620,
                         settings: {
                             slidesToShow: 2,
                             slidesToScroll: 2,
                         }
                     },
                 ]
            });
           
           
           */



});