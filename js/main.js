$(function(){
  $('body').removeClass('noscript');

  $('.toggle-btn, .close-btn').click(function(){
    toggleNav();
  });
});

function toggleNav(){
  if($('.site-wrapper').attr('data-state') == 'slide-closed'){
    $('.site-wrapper').attr('data-state', 'slide-open');
  }else{
    $('.site-wrapper').attr('data-state', 'slide-closed');
  }
}

