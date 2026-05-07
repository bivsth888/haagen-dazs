/**
 * smoothies.js — Smoothies tab logic
 * © 2025 HDIP, Inc. Internal use only.
 */

const Smoothies = (() => {
  let filter  = 'all';
  let sortKey = 'name';
  let sortDir = 1;

  function setFilter(f, btn) {
    filter = f;
    Utils.activatePill('panel-sm', btn, 'pill-active');
    render();
  }

  function setSort(key, btn) {
    if (sortKey === key) sortDir *= -1;
    else { sortKey = key; sortDir = 1; }
    Utils.activateSortBtn('panel-sm', btn);
    render();
  }

  function render() {
    const q = document.getElementById('sm-search').value.toLowerCase();
    let rows = HD.smoothies.filter(d => {
      const matchSize = filter === 'all' || d.size === filter;
      const matchQ    = !q || d.name.toLowerCase().includes(q) || d.base.toLowerCase().includes(q);
      return matchSize && matchQ;
    });

    // Secondary sort by calories when names are equal
    rows.sort((a, b) => {
      if (sortKey === 'name') {
        const n = a.name.localeCompare(b.name);
        return n !== 0 ? sortDir * n : a.calories - b.calories;
      }
      return sortDir * (a[sortKey] - b[sortKey]);
    });

    const maxSugar = rows.length ? Math.max(...rows.map(d => d.sugar)) : 108;

    Cards.renderGrid(
      'sm-grid', 'sm-results', rows, HD.smoothies.length,
      d => Cards.buildCard(d, 'sm', `${Utils.cap(d.size)} · ${d.base} base`, maxSugar)
    );
  }

  return { setFilter, setSort, render };
})();
