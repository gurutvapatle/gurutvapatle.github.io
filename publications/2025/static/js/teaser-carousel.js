document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('teaser-carousel');
  var dataEl = document.getElementById('teaser-carousel-data');
  if (!root || !dataEl) return;

  var items = JSON.parse(dataEl.textContent);

  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  var videoWrap = el('div', 'video-wrap');

  var video = document.createElement('video');
  video.muted = true;
  video.playsInline = true;
  video.preload = 'auto';
  videoWrap.appendChild(video);

  var prevBtn = el('button', 'carousel-arrow carousel-arrow-left', '&#8249;');
  prevBtn.setAttribute('aria-label', 'Previous example');
  var nextBtn = el('button', 'carousel-arrow carousel-arrow-right', '&#8250;');
  nextBtn.setAttribute('aria-label', 'Next example');
  videoWrap.appendChild(prevBtn);
  videoWrap.appendChild(nextBtn);

  root.appendChild(videoWrap);

  var caption = el('div', 'video-caption');
  root.appendChild(caption);

  var dots = el('div', 'carousel-dots');
  items.forEach(function (_, i) {
    var d = el('button', 'carousel-dot');
    d.setAttribute('aria-label', 'Go to example ' + (i + 1));
    dots.appendChild(d);
  });
  root.appendChild(dots);

  var index = 0;

  function updateDots() {
    [].forEach.call(dots.children, function (d, i) {
      d.classList.toggle('is-active', i === index);
    });
  }

  function load(i, autoplay) {
    index = ((i % items.length) + items.length) % items.length;
    var item = items[index];
    video.src = item.src;
    if (item.aspectRatio) {
      videoWrap.style.aspectRatio = item.aspectRatio;
    }
    caption.innerHTML =
      "<span class='caption-badge'>" + item.method + "</span>" +
      "<div class='caption-change'>" +
        "<span class='caption-scene'>Scene: " + item.scene + "</span>" +
        "<span class='caption-views-badge'>" + item.views + " views</span>" +
      "</div>";
    updateDots();
    if (autoplay !== false) {
      video.play().catch(function () {});
    }
  }

  video.addEventListener('ended', function () {
    load(index + 1, true);
  });

  videoWrap.addEventListener('click', function (ev) {
    if (ev.target === prevBtn || ev.target === nextBtn) return;
    if (video.paused) {
      video.play().catch(function () {});
    } else {
      video.pause();
    }
  });

  prevBtn.addEventListener('click', function (ev) {
    ev.stopPropagation();
    load(index - 1, true);
  });

  nextBtn.addEventListener('click', function (ev) {
    ev.stopPropagation();
    load(index + 1, true);
  });

  [].forEach.call(dots.children, function (d, i) {
    d.addEventListener('click', function () {
      load(i, true);
    });
  });

  load(0, true);
});
