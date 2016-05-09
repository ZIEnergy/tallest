$(document).ready(function() {
  
  $('.tile').css('height', $('.tile').width());

  $(window).resize(function() {
    $('.tile').css('height', $('.tile').width());
  });
  
});