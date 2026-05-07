/**
 * utils.js — Shared utility functions
 * © 2025 HDIP, Inc. Internal use only.
 */

const Utils = (() => {

  /**
   * Build a sugar progress bar HTML string
   * @param {number} value - sugar value
   * @param {number} max   - max value for scaling
   */
  function sugarBar(value, max) {
    const pct = Math.min(100, Math.round((value / max) * 100));
    return `<div class="sugar-bar-bg"><div class="sugar-bar-fill" style="width:${pct}%"></div></div>`;
  }

  /**
   * Sort an array of objects by a key
   * @param {Array}  arr
   * @param {string} key
   * @param {number} dir - 1 ascending, -1 descending
   */
  function sortBy(arr, key, dir) {
    return [...arr].sort((a, b) => {
      const av = a[key], bv = b[key];
      if (typeof av === 'string') return dir * av.localeCompare(bv);
      return dir * (av - bv);
    });
  }

  /**
   * Reset all sort buttons in a container, activate clicked one
   * @param {string} panelId - id of the panel element
   * @param {Element} btn    - the clicked button
   */
  function activateSortBtn(panelId, btn) {
    document.querySelectorAll(`#${panelId} .sort-btn`).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  /**
   * Reset all pill buttons in a container, activate clicked one with a class
   * @param {string}  panelId
   * @param {Element} btn
   * @param {string}  activeClass
   */
  function activatePill(panelId, btn, activeClass = 'pill-active') {
    document.querySelectorAll(`#${panelId} .pill-btn`).forEach(b => b.className = 'pill-btn');
    btn.classList.add(activeClass);
  }

  /**
   * Capitalise first letter of a string
   */
  function cap(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Compute average of a numeric field across an array
   */
  function avg(arr, key) {
    if (!arr.length) return 0;
    return Math.round(arr.reduce((s, d) => s + (d[key] || 0), 0) / arr.length);
  }

  return { sugarBar, sortBy, activateSortBtn, activatePill, cap, avg };
})();
