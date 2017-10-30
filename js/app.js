$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 118) {
      $('header').addClass('header-scroll')
    } else {
      $('header').removeClass('header-scroll');
    }
  });
});