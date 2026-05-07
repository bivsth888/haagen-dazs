/**
 * shakes.js — Shakes & Frozen Lemonades tab logic
 * © 2025 HDIP, Inc. Internal use only.
 */

const Shakes = (() => {
  let filter  = 'all';
  let sortKey = 'name';
  let sortDir = 1;

  function setFilter(f, btn) {
    filter = f;
    Utils.activatePill('panel-sh', btn, 'pill-active');
    render();
  }

  function setSort(key, btn) {
    if (sortKey === key) sortDir *= -1;
    else { sortKey = key; sortDir = 1; }
    Utils.activateSortBtn('panel-sh', btn);
    render();
  }

  function render() {
    const q = document.getElementById('sh-search').value.toLowerCase();
    let rows = HD.shakes.filter(d => {
      const matchSub  = filter === 'all' || d.sub === filter;
      const matchSize = filter === 'small' || filter === 'regular' ? d.size === filter : true;
      const combined  = (filter === 'shake' && d.sub === 'shake')
                      || (filter === 'lemon' && d.sub === 'lemon')
                      || (filter === 'small' && d.size === 'small')
                      || (filter === 'regular' && d.size === 'regular')
                      || filter === 'all';
      const matchQ    = !q || d.name.toLowerCase().includes(q);
      return combined && matchQ;
    });

    rows.sort((a, b) => {
      if (sortKey === 'name') {
        const n = a.name.localeCompare(b.name);
        return n !== 0 ? sortDir * n : a.calories - b.calories;
      }
      return sortDir * (a[sortKey] - b[sortKey]);
    });

    const maxSugar = rows.length ? Math.max(...rows.map(d => d.sugar)) : 101;

    Cards.renderGrid(
      'sh-grid', 'sh-results', rows, HD.shakes.length,
      d => Cards.buildCard(d, d.sub === 'lemon' ? 'le' : 'sh', Utils.cap(d.size), maxSugar)
    );
  }

  return { setFilter, setSort, render };
})();
