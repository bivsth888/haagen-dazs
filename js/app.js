/**
 * app.js — Main application entry point
 * Initialises all modules and handles tab switching.
 * © 2025 HDIP, Inc. Internal use only.
 */

const App = (() => {

  /* Map tab key → { panel id, item count } */
  const TAB_CONFIG = {
    ic:    { panelId: 'panel-ic',    count: () => HD.iceCream.length,  suffix: ' flavors' },
    sm:    { panelId: 'panel-sm',    count: () => HD.smoothies.length, suffix: ' entries' },
    sh:    { panelId: 'panel-sh',    count: () => HD.shakes.length,    suffix: ' entries' },
    su:    { panelId: 'panel-su',    count: () => HD.sundaes.length,   suffix: ' entries' },
    co:    { panelId: 'panel-co',    count: () => HD.cones.length,     suffix: ' entries' },
    ins:   { panelId: 'panel-ins',   count: () => 5,                   suffix: ' charts'  },
    facts: { panelId: 'panel-facts', count: () => HD.facts.length,     suffix: ' facts'   },
  };

  function switchTab(tabKey, btn) {
    /* Hide all panels, deactivate all tabs */
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.main-tab').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });

    /* Show selected panel & activate button */
    const cfg = TAB_CONFIG[tabKey];
    if (!cfg) return;
    document.getElementById(cfg.panelId).classList.add('active');
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    /* Update header count */
    const hc = document.getElementById('headerCount');
    if (hc) hc.textContent = cfg.count() + cfg.suffix;
  }

  function init() {
    /* Render all data tabs */
    IceCream.render();
    Smoothies.render();
    Shakes.render();
    Sundaes.render();
    Cones.render();

    /* Init charts & facts */
    Insights.init();
    Facts.init();

    /* Set initial header count */
    document.getElementById('headerCount').textContent =
      HD.iceCream.length + ' flavors';
  }

  /* Kick off when DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { switchTab };
})();
