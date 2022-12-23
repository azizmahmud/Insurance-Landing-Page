$(document).ready(function () {
  $("#button1").click(function () {
    $("#button1").addClass("active");
    $("#button2").removeClass("active");
    $("#monthly").addClass("pricing-active");
    $("#yearly").removeClass("pricing-active");
  });
  $("#button2").click(function () {
    $("#button2").addClass("active");
    $("#button1").removeClass("active");
    $("#yearly").addClass("pricing-active");
    $("#monthly").removeClass("pricing-active");
  });

  $(".slick-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nav: true,
    prevArrow: `<button type="button" class="slick-prev"><i class="uil uil-arrow-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="uil uil-arrow-right"></i></button>`,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
