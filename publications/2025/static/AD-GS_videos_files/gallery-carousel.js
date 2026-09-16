(function () {
  var dataEl = document.getElementById('gallery-data');
  var root = document.getElementById('carousel-root');
  if (!dataEl || !root) return;

  var entries = JSON.parse(dataEl.textContent);

  var byDataset = {};
  var order = [];
  entries.forEach(function (e) {
    if (!byDataset[e.dataset]) {
      byDataset[e.dataset] = [];
      order.push(e.dataset);
    }
    byDataset[e.dataset].push(e);
  });
  order.sort();

  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function buildRow(datasetName, items) {
    var row = el('div', 'carousel-row');

    row.appendChild(el('h3', 'dataset-title', datasetName));

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

    row.appendChild(videoWrap);

    var panelLabels = el('div', 'panel-labels');
    panelLabels.appendChild(el('span', null, 'Ground Truth'));
    panelLabels.appendChild(el('span', 'panel-label-method'));
    panelLabels.appendChild(el('span', null, 'AD-GS'));
    row.appendChild(panelLabels);

    var caption = el('div', 'video-caption');
    row.appendChild(caption);

    var dots = el('div', 'carousel-dots');
    items.forEach(function (_, i) {
      var d = el('button', 'carousel-dot');
      d.setAttribute('aria-label', 'Go to example ' + (i + 1));
      dots.appendChild(d);
    });
    row.appendChild(dots);

    root.appendChild(row);

    var index = 0;

    function updateDots() {
      [].forEach.call(dots.children, function (d, i) {
        d.classList.toggle('is-active', i === index);
      });
    }

    function load(i, autoplay) {
      index = ((i % items.length) + items.length) % items.length;
      var item = items[index];
      video.src = 'videos/' + item.src;
      if (item.aspectRatio) {
        videoWrap.style.aspectRatio = item.aspectRatio;
      }
      panelLabels.querySelector('.panel-label-method').textContent =
        item.method.replace(/\s*vs\s*AD-GS\s*$/i, '');
      var viewsNum = (item.views.match(/\d+/) || [item.views])[0];
      caption.innerHTML =
        "<span class='caption-badge'>" + item.method + "</span>" +
        "<div class='caption-change'>" +
          "<span class='caption-scene'>Scene: " + item.scene + "</span>" +
          "<span class='caption-views-badge'>" + viewsNum + " views</span>" +
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
  }

  order.forEach(function (ds) {
    buildRow(ds, byDataset[ds]);
  });
})();
