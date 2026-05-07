/**
 * sundaes.js — Dazzlers & Sundaes tab logic
 * © 2025 HDIP, Inc. Internal use only.
 */

const Sundaes = (() => {
  let filter  = 'all';
  let sortKey = 'name';
  let sortDir = 1;

  function setFilter(f, btn) {
    filter = f;
    Utils.activatePill('panel-su', btn, 'pill-active');
    render();
  }

  function setSort(key, btn) {
    if (sortKey === key) sortDir *= -1;
    else { sortKey = key; sortDir = 1; }
    Utils.activateSortBtn('panel-su', btn);
    render();
  }

  function render() {
    const q = document.getElementById('su-search').value.toLowerCase();
    const rows = HD.sundaes.filter(d => {
      const match = (filter === 'all')
        || (filter === 'dazzler'  && d.sub  === 'dazzler')
        || (filter === 'sundae'   && d.sub  === 'sundae')
        || (filter === 'small'    && d.size === 'small')
        || (filter === 'regular'  && d.size === 'regular');
      const matchQ = !q || d.name.toLowerCase().includes(q);
      return match && matchQ;
    });

    rows.sort((a, b) => {
      if (sortKey === 'name') {
        const n = a.name.localeCompare(b.name);
        return n !== 0 ? sortDir * n : a.calories - b.calories;
      }
      return sortDir * (a[sortKey] - b[sortKey]);
    });

    const maxSugar = rows.length ? Math.max(...rows.map(d => d.sugar)) : 92;

    Cards.renderGrid(
      'su-grid', 'su-results', rows, HD.sundaes.length,
      d => Cards.buildCard(d, d.sub === 'sundae' ? 'sd' : 'su', Utils.cap(d.size), maxSugar)
    );
  }

  return { setFilter, setSort, render };
})();
