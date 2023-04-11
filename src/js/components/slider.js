import $ from "jquery";

$(document).ready(function () {
  $(".main-slider").slick({
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  });
  $(".gallery-slider").slick({
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  });
  $(".news-slider").slick({
    centerMode: true,
    centerPadding: 60,
    dots: true,
    arrows: true,
    appendArrows: $(".news-arrows"),
    appendDots: $(".news-dots"),
    speed: 1000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 790,
        settings: {
          centerPadding: 60,
          centerMode: true,
          slidesToShow: 1.5,
          infinite: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".uudised-slider").slick({
    dots: true,
    arrows: true,
    gap: 20,
    rows: 3,
    appendArrows: $(".uudised-arrows"),
    appendDots: $(".uudised-dots"),
    speed: 1000,
    slidesToShow: 3,
  });
  $(".breeders-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 7,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          centerPadding: "40px",
          centerMode: true,
          slidesToShow: 1.5,
          infinite: false,
        },
      },
    ],
  });
});
