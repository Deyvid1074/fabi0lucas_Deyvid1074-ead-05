(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('.slider').slider();
});

$('.carousel.carousel-slider').carousel({fullWidth: true});