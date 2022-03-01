$(document).ready(function () {
  $(".client_slider").slick({
    dots: false,
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
          dots: true,
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
  });

  $(".projects_slider").on("init", function (event, slick) {
    console.log(slick);
    $(slick.$slides[0]).addClass("main-slide");
    $(slick.$slides[1]).addClass("right-slide");
    if (
      $(".projects_slider div.slick-slide.slick-cloned.slick-active").attr(
        "data-slick-index"
      ) == -1
    ) {
      $(".projects_slider div.slick-slide.slick-cloned.slick-active").addClass(
        "left-slide"
      );
    }
  });
  $(".projects_slider")
    .slick({
      dots: false,
      arrows: false,
      centerMode: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
      centerPadding: '0px',
      //   infinite: false
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
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

    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $(".projects_slider .slick-slide")
        .removeClass("right-slide")
        .removeClass("left-slide");
      $(slick.$slides[currentSlide]).removeClass("main-slide");
      $(slick.$slides[nextSlide])
        .removeClass("left-slide")
        .removeClass("right-slide")
        .addClass("main-slide");
      $(slick.$slides[nextSlide + 1]).addClass("right-slide");
      $(slick.$slides[nextSlide - 1]).addClass("left-slide");
    });
});
