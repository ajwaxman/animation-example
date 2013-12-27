$(document).ready(function(){
  
  $('.animation-1 .image').on('click', function(){
    $(this).toggleClass('toggle-animation');
  })

  $('.animation-2 .image').on('click', function(){
    $(this).toggleClass('toggle-animation-slow');
  })

  $('.animation-3 .image').on('click', function(){
    $(this).toggleClass('toggle-loading');
  })
  
})