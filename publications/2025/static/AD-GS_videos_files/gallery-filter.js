(function () {
  var figures = Array.prototype.slice.call(document.querySelectorAll('#video-comparisons-floaters > figure[data-dataset]'));

  var state = { dataset: null, scene: null, views: null };

  var pillsDatasetEl = document.getElementById('pills-dataset');
  var pillsSceneEl = document.getElementById('pills-scene');
  var pillsViewsEl = document.getElementById('pills-views');
  var rowScene = document.getElementById('filter-row-scene');
  var rowViews = document.getElementById('filter-row-views');
  var countEl = document.getElementById('filter-count');
  var resetBtn = document.getElementById('filter-reset');

  function uniqueSorted(values) {
    var seen = {};
    var out = [];
    values.forEach(function (v) {
      if (!seen[v]) { seen[v] = true; out.push(v); }
    });
    out.sort(function (a, b) {
      var na = parseInt(a, 10), nb = parseInt(b, 10);
      if (!isNaN(na) && !isNaN(nb) && na !== nb) return na - nb;
      return a.localeCompare(b);
    });
    return out;
  }

  function figuresMatching(filters) {
    return figures.filter(function (fig) {
      if (filters.dataset && fig.dataset.dataset !== filters.dataset) return false;
      if (filters.scene && fig.dataset.scene !== filters.scene) return false;
      if (filters.views && fig.dataset.views !== filters.views) return false;
      return true;
    });
  }

  function makePill(label, active, onClick) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-pill' + (active ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', onClick);
    return btn;
  }

  function renderDatasetPills() {
    pillsDatasetEl.innerHTML = '';
    var datasets = uniqueSorted(figures.map(function (f) { return f.dataset.dataset; }));
    datasets.forEach(function (ds) {
      pillsDatasetEl.appendChild(makePill(ds, state.dataset === ds, function () {
        selectDataset(state.dataset === ds ? null : ds);
      }));
    });
  }

  function renderScenePills() {
    pillsSceneEl.innerHTML = '';
    var scenes = uniqueSorted(figuresMatching({ dataset: state.dataset }).map(function (f) { return f.dataset.scene; }));
    scenes.forEach(function (sc) {
      pillsSceneEl.appendChild(makePill(sc, state.scene === sc, function () {
        selectScene(state.scene === sc ? null : sc);
      }));
    });
  }

  function renderViewsPills() {
    pillsViewsEl.innerHTML = '';
    var views = uniqueSorted(figuresMatching({ dataset: state.dataset, scene: state.scene }).map(function (f) { return f.dataset.views; }));
    views.forEach(function (vw) {
      pillsViewsEl.appendChild(makePill(vw, state.views === vw, function () {
        selectViews(state.views === vw ? null : vw);
      }));
    });
  }

  function selectDataset(ds) {
    state.dataset = ds;
    state.scene = null;
    state.views = null;
    renderDatasetPills();
    if (ds) {
      rowScene.hidden = false;
      renderScenePills();
    } else {
      rowScene.hidden = true;
    }
    rowViews.hidden = true;
    applyFilter();
  }

  function selectScene(sc) {
    state.scene = sc;
    state.views = null;
    renderScenePills();
    if (sc) {
      rowViews.hidden = false;
      renderViewsPills();
    } else {
      rowViews.hidden = true;
    }
    applyFilter();
  }

  function selectViews(vw) {
    state.views = vw;
    renderViewsPills();
    applyFilter();
  }

  function applyFilter() {
    var matches = figuresMatching(state);
    var matchSet = new Set(matches);
    figures.forEach(function (fig) {
      fig.hidden = !matchSet.has(fig);
    });

    var anyFilter = state.dataset || state.scene || state.views;
    resetBtn.hidden = !anyFilter;

    if (!anyFilter) {
      countEl.textContent = figures.length + ' videos';
    } else {
      countEl.textContent = matches.length + ' of ' + figures.length + ' videos';
    }
  }

  resetBtn.addEventListener('click', function () {
    selectDataset(null);
  });

  renderDatasetPills();
  applyFilter();
})();
