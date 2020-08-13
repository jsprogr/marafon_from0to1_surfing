$(function(){

    $('.header__slider').slick({
      infinite: true,
      fade: true,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
      asNavFor: '.slider-dots'
    });

    $('.slider-dots').slick({
      slidesToShow: 3,
      slidesToScroll: 4,
      asNavFor: '.slider-for',
      responsive: [
        {
          breakpoint: 961,
          settings: "unslick"
        },
      ],

    });

    $('.surf-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
      asNavFor: '.slider-map',
      responsive: [
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

    $('.slider-map').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.surf-slider',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1103,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            centerMode: true,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          }
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          }
        },
      ]
    });

    $('.travel__slider, .shop__slider').slick({
      infinite: true,
      fade: true,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
    })


  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    $('.quantity-button').on('click', () => {
      let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests');
      $('.summ').html(summ);
    });
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests');
    $('.summ').html(summ);
  });

  $('.surfboard-box__circle').on('click', function(e) {
    $(this).toggleClass('active');
  });

  $('.menu-btn').on('click', function() {
    $('.menu').toggleClass('active');
  })

  new WOW().init();
});
