/**
 * facts.js — 40 Key Facts tab logic
 * © 2025 HDIP, Inc. Internal use only.
 */

const Facts = (() => {

  /* Metadata per fact category */
  const CAT_META = {
    sugar: { numCls: 'fn-sugar', pillCls: 'fp-sugar', label: 'Sugar'    },
    cal:   { numCls: 'fn-cal',   pillCls: 'fp-cal',   label: 'Calories' },
    fat:   { numCls: 'fn-fat',   pillCls: 'fp-fat',   label: 'Fat'      },
    prot:  { numCls: 'fn-prot',  pillCls: 'fp-prot',  label: 'Protein'  },
    sod:   { numCls: 'fn-sod',   pillCls: 'fp-sod',   label: 'Sodium'   },
    carbs: { numCls: 'fn-carbs', pillCls: 'fp-carbs', label: 'Carbs'    },
    spec:  { numCls: 'fn-spec',  pillCls: 'fp-spec',  label: 'Special'  },
  };

  let activeFilter = 'all';

  function filter(cat, btn) {
    activeFilter = cat;
    document.querySelectorAll('.fact-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  }

  function render() {
    const rows = activeFilter === 'all'
      ? HD.facts
      : HD.facts.filter(f => f.cat === activeFilter);

    document.getElementById('facts-count').textContent =
      `Showing ${rows.length} of ${HD.facts.length} facts`;

    document.getElementById('facts-grid').innerHTML = rows.map(f => {
      const globalNum = HD.facts.indexOf(f) + 1;
      const m = CAT_META[f.cat] || CAT_META.spec;
      return `
        <div class="fact-card">
          <div class="fact-num ${m.numCls}">${globalNum}</div>
          <div>
            <div class="fact-question">
              ${f.q}
              <span class="fact-pill ${m.pillCls}">${m.label}</span>
            </div>
            <div class="fact-answer">${f.a}</div>
          </div>
        </div>`;
    }).join('');
  }

  function init() {
    render();
  }

  return { filter, init };
})();
