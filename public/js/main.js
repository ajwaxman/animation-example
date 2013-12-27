$(document).ready(function(){
  
  $('.animation-1 .image').on('click', function(){
    $(this).toggleClass('toggle-on');
    $(this).toggleClass('toggle-animation-1');
  })

  $('.animation-2 .image').on('click', function(){
    $(this).toggleClass('toggle-on');
    $(this).toggleClass('toggle-animation-2');
  })

  $('.animation-3 .image').on('click', function(){
    $(this).toggleClass('toggle-loading');
  })
})