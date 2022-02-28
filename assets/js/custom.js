$(document).ready(function(){


    $('.client_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true
      });

      
      $('.projects_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,

        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true
      });


  });