/**
 * cards.js — HTML builders for flavor cards and cone cards
 * © 2025 HDIP, Inc. Internal use only.
 */

const Cards = (() => {

  /* Map type codes → CSS classes and labels */
  const META = {
    ic: { cardCls: 'cat-ic', hlCls: 'hl-ic', badgeCls: 'badge-ic', label: 'Ice Cream'  },
    so: { cardCls: 'cat-so', hlCls: 'hl-so', badgeCls: 'badge-so', label: 'Sorbet'     },
    sm: { cardCls: 'cat-sm', hlCls: 'hl-sm', badgeCls: 'badge-sm', label: 'Smoothie'   },
    sh: { cardCls: 'cat-sh', hlCls: 'hl-sh', badgeCls: 'badge-sh', label: 'Shake'      },
    le: { cardCls: 'cat-le', hlCls: 'hl-le', badgeCls: 'badge-le', label: 'Lemonade'   },
    su: { cardCls: 'cat-su', hlCls: 'hl-su', badgeCls: 'badge-su', label: 'Dazzler'    },
    sd: { cardCls: 'cat-su', hlCls: 'hl-su', badgeCls: 'badge-su', label: 'Sundae'     },
    co: { cardCls: 'cat-co', hlCls: 'hl-co', badgeCls: 'badge-co', label: 'Cone / Cup' },
  };

  /**
   * Build attribute tag HTML
   */
  function _tags(d) {
    const tags = [];
    if (d.gf)      tags.push('<span class="attr-tag tag-gf">Gluten Free</span>');
    if (d.kosher)  tags.push('<span class="attr-tag tag-ko">Kosher OU-D</span>');
    if (d.dairy === false) tags.push('<span class="attr-tag tag-nd">Non-Dairy</span>');
    if (d.alcohol) tags.push('<span class="attr-tag tag-al">&lt;0.5% Alcohol</span>');
    if (d.maySoy)  tags.push('<span class="attr-tag tag-info">May contain Soy</span>');
    if (d.allergens) tags.push(`<span class="attr-tag tag-info">${d.allergens}</span>`);
    return tags.length ? `<div class="card-footer">${tags.join('')}</div>` : '';
  }

  /**
   * Build the 8-cell nutrition grid
   */
  function _nutritionGrid(d, hlCls) {
    const calDisplay = typeof d.calories === 'number' ? d.calories : `${d.cMin}–${d.cMax}`;
    return `
      <div class="nutrition-grid">
        <div class="nutr-cell"><div class="nutr-val ${hlCls}">${calDisplay}</div><div class="nutr-label">Cal</div></div>
        <div class="nutr-cell"><div class="nutr-val">${d.fat}<span class="nutr-unit">g</span></div><div class="nutr-label">Fat</div></div>
        <div class="nutr-cell"><div class="nutr-val">${d.satfat}<span class="nutr-unit">g</span></div><div class="nutr-label">Sat Fat</div></div>
        <div class="nutr-cell"><div class="nutr-val">${d.protein}<span class="nutr-unit">g</span></div><div class="nutr-label">Protein</div></div>
        <div class="nutr-cell"><div class="nutr-val">${d.carbs}<span class="nutr-unit">g</span></div><div class="nutr-label">Carbs</div></div>
        <div class="nutr-cell"><div class="nutr-val">${d.fiber}<span class="nutr-unit">g</span></div><div class="nutr-label">Fiber</div></div>
        <div class="nutr-cell"><div class="nutr-val">${d.chol}<span class="nutr-unit">mg</span></div><div class="nutr-label">Chol</div></div>
        <div class="nutr-cell"><div class="nutr-val">${d.sodium}<span class="nutr-unit">mg</span></div><div class="nutr-label">Sodium</div></div>
      </div>`;
  }

  /**
   * Build a standard flavor card (ice cream, smoothie, shake, sundae…)
   * @param {Object} d        - data object
   * @param {string} type     - type code: 'ic','so','sm','sh','le','su','sd'
   * @param {string} sizeLabel- text shown in the card-size slot
   * @param {number} maxSugar - max sugar across visible set (for bar scaling)
   */
  function buildCard(d, type, sizeLabel, maxSugar) {
    const m   = META[type] || META.ic;
    const sv  = typeof d.sugar === 'number' ? d.sugar : d.sMin;
    const svDisplay = typeof d.sugar === 'number' ? `${d.sugar}g` : `${d.sMin}–${d.sMax}g`;
    const addedHtml = d.added ? `<div class="sugar-added">Added: ${d.added}g</div>` : '';
    const descHtml  = d.desc  ? `<div class="card-desc">${d.desc}</div>` : '';
    const baseHtml  = d.base  ? `<div class="card-desc">${d.base} base</div>` : '';

    return `
      <div class="flavor-card ${m.cardCls}">
        <div class="card-header">
          <div class="card-top">
            <div class="card-name">${d.name}</div>
            <span class="type-badge ${m.badgeCls}">${m.label}</span>
          </div>
          ${descHtml}${baseHtml}
          <div class="card-size">${sizeLabel || ''}</div>
        </div>

        <div class="sugar-row">
          <div>
            <div class="sugar-label">Sugar</div>
            ${addedHtml}
          </div>
          <div class="sugar-bar-wrap">${Utils.sugarBar(sv, maxSugar)}</div>
          <div class="sugar-value">${svDisplay}</div>
        </div>

        ${_nutritionGrid(d, m.hlCls)}
        ${_tags(d)}
      </div>`;
  }

  /**
   * Build a cone / cup card (uses range values)
   * @param {Object} d - cone data object
   */
  function buildConeCard(d) {
    const m = META.co;
    return `
      <div class="flavor-card ${m.cardCls}">
        <div class="card-header">
          <div class="card-top">
            <div class="card-name">${d.name}</div>
            <span class="type-badge ${m.badgeCls}">${m.label}</span>
          </div>
          <div class="card-size">${Utils.cap(d.size)} size</div>
        </div>

        <div class="sugar-row">
          <div>
            <div class="sugar-label">Sugar Range</div>
            <div class="sugar-added">depends on flavor chosen</div>
          </div>
          <div class="sugar-bar-wrap">${Utils.sugarBar(d.sMax, 110)}</div>
          <div class="sugar-value">${d.sMin}–${d.sMax}g</div>
        </div>

        <div class="nutrition-grid">
          <div class="nutr-cell"><div class="nutr-val ${m.hlCls}" style="font-size:11px">${d.calR}</div><div class="nutr-label">Cal</div></div>
          <div class="nutr-cell"><div class="nutr-val" style="font-size:11px">${d.fat}g</div><div class="nutr-label">Fat</div></div>
          <div class="nutr-cell"><div class="nutr-val" style="font-size:11px">${d.satfat}g</div><div class="nutr-label">Sat Fat</div></div>
          <div class="nutr-cell"><div class="nutr-val" style="font-size:11px">${d.protein}g</div><div class="nutr-label">Protein</div></div>
          <div class="nutr-cell"><div class="nutr-val" style="font-size:11px">${d.carbs}g</div><div class="nutr-label">Carbs</div></div>
          <div class="nutr-cell"><div class="nutr-val" style="font-size:11px">${d.fiber}g</div><div class="nutr-label">Fiber</div></div>
          <div class="nutr-cell"><div class="nutr-val" style="font-size:11px">${d.chol}mg</div><div class="nutr-label">Chol</div></div>
          <div class="nutr-cell"><div class="nutr-val" style="font-size:11px">${d.sodium}mg</div><div class="nutr-label">Sodium</div></div>
        </div>
        <div class="card-footer">
          <span class="attr-tag tag-info">Ranges vary depending on ice cream flavor chosen</span>
        </div>
      </div>`;
  }

  /**
   * Render a list of cards into a grid element, with a results count
   * @param {string} gridId    - id of the .cards-grid element
   * @param {string} resultsId - id of the .results-bar element
   * @param {Array}  rows      - filtered + sorted data
   * @param {number} total     - total unfiltered count
   * @param {Function} cardFn  - function(item) => HTML string
   */
  function renderGrid(gridId, resultsId, rows, total, cardFn) {
    const grid = document.getElementById(gridId);
    const res  = document.getElementById(resultsId);
    if (!rows.length) {
      grid.innerHTML = '<div class="empty-state"><p>No items match your search.</p></div>';
    } else {
      grid.innerHTML = rows.map(cardFn).join('');
    }
    if (res) {
      res.innerHTML = `Showing <strong>${rows.length}</strong> of ${total}`;
    }
  }

  return { buildCard, buildConeCard, renderGrid };
})();
