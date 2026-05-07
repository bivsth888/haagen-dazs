/**
 * icecream.js — Ice Cream & Sorbet tab logic
 * © 2025 HDIP, Inc. Internal use only.
 */

const IceCream = (() => {
  let filter = 'all';
  let sortKey = 'name';
  let sortDir = 1;

  function setFilter(f, btn) {
    filter = f;
    const cls = f === 'ic' ? 'pill-ic' : f === 'so' ? 'pill-so' : 'pill-active';
    Utils.activatePill('panel-ic', btn, cls);
    render();
  }

  function setSort(key, btn) {
    if (sortKey === key) sortDir *= -1;
    else { sortKey = key; sortDir = 1; }
    Utils.activateSortBtn('panel-ic', btn);
    render();
  }

  function render() {
    const q = document.getElementById('ic-search').value.toLowerCase();
    let rows = HD.iceCream.filter(d => {
      const matchCat = filter === 'all' || d.type === filter;
      const matchQ   = !q || d.name.toLowerCase().includes(q) || (d.allergens || '').toLowerCase().includes(q);
      return matchCat && matchQ;
    });

    rows = Utils.sortBy(rows, sortKey, sortDir);
    const maxSugar = rows.length ? Math.max(...rows.map(d => d.sugar)) : 44;

    Cards.renderGrid(
      'ic-grid', 'ic-results', rows, HD.iceCream.length,
      d => Cards.buildCard(d, d.type, '2/3 cup serving', maxSugar)
    );
  }

  return { setFilter, setSort, render };
})();
