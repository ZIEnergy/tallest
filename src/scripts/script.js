$(document).ready(function() {
  
  $('.tile').css('height', $('.tile').width());

  $(window).resize(function() {
    $('.tile').css('height', $('.tile').width());
  });
  
  if ($(window).width() > 640) {
    var flip = function() {
      var random = Math.floor(Math.random()*10);
      $(".tile").eq(random).toggleClass('tile--active');
    };
  };
  
  if ($(window).width() < 640) {
    $('.tile').addClass('tile--active');
  };
  
  var flipInterval = setInterval(flip, 2500);
  
  $('.open-button').click(function() {
    $('.tile').addClass('tile--active');
    clearInterval(flipInterval);
  });
  
});