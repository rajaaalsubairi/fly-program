var $btn = $('.btn-pause');
var $video = document.querySelector('.smasher-vid');

$btn.on('click', function () {
  if ($video.paused) {
    $video.play();
    $btn.html('Pause');
  } else {
    $video.pause();
    $btn.html('Play');
  }
});
