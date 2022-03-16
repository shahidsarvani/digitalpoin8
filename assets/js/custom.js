$(document).ready(function () {
  $(".mobile-nav-close-btn").click(function(){
    $("#collapsibleNavbar").removeClass("show");
  });
  $('.home-select2').select2();
    $('.client_slider').slick({
      autoplay:true,
      autoplaySpeed:2000,
      dots: false,
      pauseOnHover: true,
      arrows: false,
      infinite: true,
      centerMode: true,
      speed: 300,
      slidesToShow: 4,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
  
    $('.projects_slider').on('init', function (event, slick) {
      $(slick.$slides[0]).addClass('main-slide')
      $(slick.$slides[1]).addClass('right-slide')
      if ($('.projects_slider div.slick-slide.slick-cloned.slick-active').attr('data-slick-index') == -1) {
        $('.projects_slider div.slick-slide.slick-cloned.slick-active').addClass('left-slide')
      }
    })
    $('.projects_slider')
      .slick({
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover: true,
        dots: false,
        arrows: false,
        centerMode: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        //   infinite: false
      })
      .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.projects_slider .slick-slide').removeClass('right-slide').removeClass('left-slide')
        $(slick.$slides[currentSlide]).removeClass('main-slide')
        $(slick.$slides[nextSlide]).removeClass('left-slide').removeClass('right-slide').addClass('main-slide')
        $(slick.$slides[nextSlide + 1]).addClass('right-slide')
        $(slick.$slides[nextSlide - 1]).addClass('left-slide')
      }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
        if ($('.projects_slider div.slick-slide.slick-cloned.slick-active').attr('data-slick-index') == -1) {
          $('.projects_slider div.slick-slide.slick-cloned.slick-active').addClass('left-slide')
        }
        if ($('.projects_slider div.slick-slide.slick-cloned.slick-active').attr('data-slick-index') == 4) {
          $('.projects_slider div.slick-slide.slick-cloned.slick-active').addClass('right-slide')
        }
      })
  })


