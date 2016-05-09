$(document).ready(function() {
  
  $('.tile').css('height', $('.tile').width());

  $(window).resize(function() {
    $('.tile').css('height', $('.tile').width());
  });
  
  window.setInterval(function(){
    var random = Math.floor(Math.random()*10);
    $(".tile").eq(random).toggleClass('tile--active');
  }, 3000);
  
});