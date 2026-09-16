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

  // Videos below the fold (preload="none", no autoplay attribute)
  // only start fetching/playing once scrolled into view, so they
  // don't compete for bandwidth with the hero teaser video on load.
  var lazyVideos = document.querySelectorAll('.video-click-wrap video[preload="none"]');
  if (lazyVideos.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) {
          v.play().catch(function () {});
        } else {
          v.pause();
        }
      });
    }, { rootMargin: '200px 0px', threshold: 0.1 });

    lazyVideos.forEach(function (v) {
      observer.observe(v);
    });
  }
});
