/**
 * cones.js — Cones & Cups tab logic
 * © 2025 HDIP, Inc. Internal use only.
 */

const Cones = (() => {
  let filter  = 'all';
  let sortKey = 'name';
  let sortDir = 1;

  function setFilter(f, btn) {
    filter = f;
    Utils.activatePill('panel-co', btn, 'pill-active');
    render();
  }

  function setSort(key, btn) {
    if (sortKey === key) sortDir *= -1;
    else { sortKey = key; sortDir = 1; }
    Utils.activateSortBtn('panel-co', btn);
    render();
  }

  function render() {
    const q = document.getElementById('co-search').value.toLowerCase();
    let rows = HD.cones.filter(d => {
      const matchSize = filter === 'all' || d.size === filter;
      const matchQ    = !q || d.name.toLowerCase().includes(q);
      return matchSize && matchQ;
    });

    rows.sort((a, b) => {
      if (sortKey === 'name') {
        const n = a.name.localeCompare(b.name);
        return n !== 0 ? sortDir * n : a.cMin - b.cMin;
      }
      if (sortKey === 'calories') return sortDir * (a.cMin - b.cMin);
      if (sortKey === 'sugar')    return sortDir * (a.sMin - b.sMin);
      return 0;
    });

    Cards.renderGrid(
      'co-grid', 'co-results', rows, HD.cones.length,
      d => Cards.buildConeCard(d)
    );
  }

  return { setFilter, setSort, render };
})();
