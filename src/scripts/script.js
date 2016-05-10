$(document).ready(function() {
  
  $('.tile').css('height', $('.tile').width());

  $(window).resize(function() {
    $('.tile').css('height', $('.tile').width());
  });
  
  var flip = function() {
    var random = Math.floor(Math.random()*10);
    $(".tile").eq(random).toggleClass('tile--active');
  };
  
  var flipInterval = setInterval(flip, 2500);
  
  $('.open-button').click(function() {
    $('.tile').addClass('tile--active');
    clearInterval(flipInterval);
  });
  
});