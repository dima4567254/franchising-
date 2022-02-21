$(function name(params) {

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        loopedslides: 1,
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

    // $('.product-detalis__input').styler();



    
  
        // (function ($) {
        //     $(window).on("load", function () {
        //         $(".div").mCustomScrollbar();
        //     });
        // })(jQuery); 

        $(".scroller").mCustomScrollbar({
            theme: "dark-2"
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

    // function getAlignedText(text) {
    //     text = text.split('\n');
    //     while (text.length > 0 && $.trim(text[0]) == '') {
    //         text.shift();
    //     }
    //     var tabs = (text[0] || '').replace(/^(\s+).+$/, '$1');
    //     for (var i = 0; i < text.length; i++) {
    //         text[i] = text[i].replace(tabs, '');
    //     }
    //     if (text.length > 0 && text[text.length - 1].match(/^\s*$/)) {
    //         text.pop();
    //     }
    //     return text.join('\n');
    // }

    // $('.container').each(function () {

    //     var content = $(this).find('.content');
    //     var controls = $(this).find('.controls');

    //     $('<pre></pre>').addClass('prettyprint linenums lang-html').text(getAlignedText(content.find('.demo').html())).appendTo(content.find('.html'));
    //     $('<pre></pre>').addClass('prettyprint linenums lang-css').text(getAlignedText($('#css-common').html()) + "\n" + getAlignedText(content.find('style').html())).appendTo(content.find('.css'));
    //     $('<pre></pre>').addClass('prettyprint linenums lang-js').text(getAlignedText(content.find('script').html())).appendTo(content.find('.js'));

    //     controls.on('click', 'span', function () {
    //         content.find('.' + $(this).removeClass('active').attr('class')).show().siblings('div').hide();
    //         $(this).addClass('active').siblings('span').removeClass('active');
    //     });
    //     controls.find('.demo').click();
    // });

    // $('.container').on('click', '.add-content', function () {
    //     $('#lorem-ipsum').clone().removeAttr('id').appendTo($(this).closest('.container').find('.scroll-content'));
    //     return false;
    // });
    // $('.container').on('click', '.remove-content', function () {
    //     $(this).closest('.container').find('.scroll-content').find('p').not('.permanent').last().remove();
    //     return false;
    // });

    // window.prettyPrint && prettyPrint();
    // $('.wrapper').scrollbar();


    // const demo = document.querySelector('.demo1 .demo');
    // const ps = new PerfectScrollbar(demo);

    // // Handle size change
    // document.querySelector('#resize').addEventListener('click', () => {

    //     // Get updated values
    //     // width = document.querySelector('#width').value;
    //     height = document.querySelector('#height').value;

    //     // Set demo sizes
    //     // demo.style.width = `${width}px`;
    //     demo.style.height = `${height}px`;

    //     // Update Perfect Scrollbar
    //     ps.update();
    // });

});