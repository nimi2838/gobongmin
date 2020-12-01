function SliderBox1__init() {
  $('.slider-box-1 > .slick').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".slider-box-1 > .arrows > .btn-arrows-left",
    nextArrow: ".slider-box-1 > .arrows > .btn-arrows-right"
  });
}

$(function () {
  SliderBox1__init();
});

function SliderBox2__init() {
  $('.slider-box-2 > .slick').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1
  });
}

$(function () {
  SliderBox2__init();
});



function SliderBox3__init() {
  $('.slider-box-3 > .slick').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
}

$(function () {
  SliderBox3__init();
});