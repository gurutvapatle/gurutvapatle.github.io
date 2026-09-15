document.addEventListener('DOMContentLoaded', function () {
  var wraps = document.querySelectorAll('.video-click-wrap');
  var CONTROLS_BAR_HEIGHT = 40;

  wraps.forEach(function (wrap) {
    var video = wrap.querySelector('video');
    if (!video) return;

    wrap.addEventListener('click', function (ev) {
      // These videos keep their native controls bar; a click there
      // already toggles play/pause natively, so re-toggling here
      // (since the click also bubbles to this wrapper) would just
      // cancel it back out. Skip clicks landing in that bottom strip.
      var rect = video.getBoundingClientRect();
      if (ev.clientY > rect.bottom - CONTROLS_BAR_HEIGHT) return;

      if (video.paused) {
        video.play().catch(function () {});
      } else {
        video.pause();
      }
    });
  });
});
