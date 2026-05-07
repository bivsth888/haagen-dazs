/**
 * insights.js — All chart & visualization logic for the Insights tab
 * © 2025 HDIP, Inc. Internal use only.
 */

const Insights = (() => {

  /* Ice cream–only rows (used by bar chart, radar, rankings, scatter) */
  const IC_ONLY = HD.iceCream.filter(d => d.type === 'ic');
  let barMetric = 'sugar';

  /* ─────────────────────────────────────────
     1. BAR CHART — ranked horizontal bars
  ───────────────────────────────────────── */
  const BAR_UNITS = { sugar:'g', calories:'cal', fat:'g', protein:'g', sodium:'mg', carbs:'g' };

  function setBarMetric(metric, btn) {
    barMetric = metric;
    document.querySelectorAll('.insight-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    drawBar();
  }

  function drawBar() {
    const sorted = [...IC_ONLY].sort((a, b) => b[barMetric] - a[barMetric]);
    const max    = sorted[0][barMetric];
    const unit   = BAR_UNITS[barMetric] || '';

    document.getElementById('barChart').innerHTML = sorted.map((d, i) => {
      const pct = Math.round((d[barMetric] / max) * 100);
      /* Gradient: deep burgundy → warm amber across the ranked list */
      const hue = 340 + Math.round((i / sorted.length) * 55);
      const lit = 28  + Math.round((i / sorted.length) * 14);
      const col = `hsl(${hue}, 65%, ${lit}%)`;
      return `
        <div class="bar-row">
          <div class="bar-name" title="${d.name}">${d.name}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${pct}%;background:${col}">
              <span>${d[barMetric]}${unit}</span>
            </div>
          </div>
          <div class="bar-val-out" style="color:${col}">${d[barMetric]}</div>
        </div>`;
    }).join('');
  }

  /* ─────────────────────────────────────────
     2. CATEGORY COMPARISON TABLE
  ───────────────────────────────────────── */
  function buildCompareTable() {
    const categories = [
      { label: '🍦 Ice Cream (avg)',    data: IC_ONLY,                                                              dot: '#6B1A2A' },
      { label: '🍧 Sorbet (avg)',       data: HD.iceCream.filter(d => d.type === 'so'),                             dot: '#1D6B52' },
      { label: '🥤 Smoothie (sm · IC)',data: HD.smoothies.filter(d => d.size === 'small' && d.base === 'Ice Cream'),dot: '#1A4A7A' },
      { label: '🥛 Shake (small)',      data: HD.shakes.filter(d => d.sub === 'shake' && d.size === 'small'),       dot: '#4A1A7A' },
      { label: '🍋 Lemonade (small)',   data: HD.shakes.filter(d => d.sub === 'lemon'  && d.size === 'small'),      dot: '#4A7A1A' },
      { label: '🍨 Dazzler (small)',    data: HD.sundaes.filter(d => d.sub === 'dazzler' && d.size === 'small'),    dot: '#7A4A1A' },
    ];

    const metrics = ['calories','fat','satfat','carbs','sugar','protein','sodium'];
    const labels  = { calories:'Calories', fat:'Fat (g)', satfat:'Sat Fat (g)', carbs:'Carbs (g)', sugar:'Sugar (g)', protein:'Protein (g)', sodium:'Sodium (mg)' };

    const avgs = categories.map(c => ({
      label: c.label,
      dot:   c.dot,
      ...Object.fromEntries(metrics.map(m => [m, Utils.avg(c.data, m)])),
    }));

    /* find min/max per column for highlighting */
    const colMin = {}, colMax = {};
    metrics.forEach(m => {
      const vals = avgs.map(a => a[m]);
      colMin[m] = Math.min(...vals);
      colMax[m] = Math.max(...vals);
    });

    const thead = `<thead><tr>
      <th>Category</th>
      ${metrics.map(m => `<th style="text-align:right">${labels[m]}</th>`).join('')}
    </tr></thead>`;

    const tbody = `<tbody>${avgs.map(a => `
      <tr>
        <td><span class="cat-dot" style="background:${a.dot}"></span>${a.label}</td>
        ${metrics.map(m => {
          const cls = a[m] === colMax[m] ? 'cell-worst' : a[m] === colMin[m] ? 'cell-best' : '';
          return `<td class="num-cell ${cls}">${a[m]}</td>`;
        }).join('')}
      </tr>`).join('')}
    </tbody>`;

    document.getElementById('compareTable').innerHTML = thead + tbody;
  }

  /* ─────────────────────────────────────────
     3. RADAR CHART — head-to-head comparison
  ───────────────────────────────────────── */
  const RADAR_AXES = [
    { label: 'Sugar',    key: 'sugar',    max: 45  },
    { label: 'Calories', key: 'calories', max: 430 },
    { label: 'Fat',      key: 'fat',      max: 30  },
    { label: 'Sat Fat',  key: 'satfat',   max: 18  },
    { label: 'Carbs',    key: 'carbs',    max: 48  },
    { label: 'Protein',  key: 'protein',  max: 10  },
    { label: 'Sodium',   key: 'sodium',   max: 165 },
  ];

  function initRadar() {
    IC_ONLY.forEach((d, i) => {
      ['radarA', 'radarB'].forEach(id => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = d.name;
        document.getElementById(id).appendChild(opt);
      });
    });
    document.getElementById('radarA').value = 0;
    document.getElementById('radarB').value = 4;
    drawRadar();
  }

  function drawRadar() {
    const flavorA = IC_ONLY[+document.getElementById('radarA').value];
    const flavorB = IC_ONLY[+document.getElementById('radarB').value];
    if (!flavorA || !flavorB) return;

    document.getElementById('legendA').textContent = flavorA.name;
    document.getElementById('legendB').textContent = flavorB.name;

    const canvas = document.getElementById('radarCanvas');
    const ctx    = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const N  = RADAR_AXES.length;
    const cx = W / 2, cy = H / 2 + 10;
    const R  = Math.min(W, H) * 0.34;
    const step = (2 * Math.PI) / N;

    /* Grid rings */
    [0.25, 0.5, 0.75, 1].forEach(r => {
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const ang = -Math.PI / 2 + i * step;
        const x = cx + Math.cos(ang) * R * r;
        const y = cy + Math.sin(ang) * R * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(106,26,42,0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    /* Axis spokes */
    for (let i = 0; i < N; i++) {
      const ang = -Math.PI / 2 + i * step;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(ang) * R, cy + Math.sin(ang) * R);
      ctx.strokeStyle = 'rgba(106,26,42,0.15)';
      ctx.stroke();
    }

    /* Plot each flavor */
    function plotFlavor(flavor, strokeColor, fillColor) {
      ctx.beginPath();
      RADAR_AXES.forEach((ax, i) => {
        const ang = -Math.PI / 2 + i * step;
        const r   = Math.min(flavor[ax.key] / ax.max, 1) * R;
        const x   = cx + Math.cos(ang) * r;
        const y   = cy + Math.sin(ang) * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fillStyle   = fillColor;
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth   = 2;
      ctx.stroke();

      /* Dots at each axis point */
      RADAR_AXES.forEach((ax, i) => {
        const ang = -Math.PI / 2 + i * step;
        const r   = Math.min(flavor[ax.key] / ax.max, 1) * R;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(ang) * r, cy + Math.sin(ang) * r, 4, 0, 2 * Math.PI);
        ctx.fillStyle = strokeColor;
        ctx.fill();
      });
    }

    plotFlavor(flavorA, '#6B1A2A', 'rgba(107,26,42,0.18)');
    plotFlavor(flavorB, '#C8954A', 'rgba(200,149,74,0.18)');

    /* Axis labels */
    ctx.font         = '11px DM Sans, sans-serif';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    RADAR_AXES.forEach((ax, i) => {
      const ang = -Math.PI / 2 + i * step;
      ctx.fillStyle = '#4A3020';
      ctx.fillText(ax.label, cx + Math.cos(ang) * (R + 26), cy + Math.sin(ang) * (R + 26));
    });
  }

  /* ─────────────────────────────────────────
     4. RANKINGS — top-5 leaderboard cards
  ───────────────────────────────────────── */
  const RANK_CATS = [
    { title: '🍬 Highest Sugar',   key: 'sugar',    dir: -1, unit: 'g'   },
    { title: '🥗 Lowest Sugar',    key: 'sugar',    dir:  1, unit: 'g'   },
    { title: '🔥 Most Calories',   key: 'calories', dir: -1, unit: 'cal' },
    { title: '💪 Most Protein',    key: 'protein',  dir: -1, unit: 'g'   },
    { title: '🧂 Most Sodium',     key: 'sodium',   dir: -1, unit: 'mg'  },
    { title: '🥑 Most Fat',        key: 'fat',      dir: -1, unit: 'g'   },
  ];
  const POS_LABELS = ['🥇', '🥈', '🥉', '4.', '5.'];
  const POS_CLS    = ['gold', 'silver', 'bronze', '', ''];

  function buildRankings() {
    document.getElementById('rankingsGrid').innerHTML = RANK_CATS.map(cat => {
      const top5 = [...IC_ONLY].sort((a, b) => cat.dir * (a[cat.key] - b[cat.key])).slice(0, 5);
      return `
        <div class="rank-card">
          <div class="rank-card-title">${cat.title}</div>
          <div class="rank-card-body">
            ${top5.map((d, i) => `
              <div class="rank-item">
                <div class="rank-pos ${POS_CLS[i]}">${POS_LABELS[i]}</div>
                <div class="rank-name">${d.name}</div>
                <div class="rank-val">${d[cat.key]}${cat.unit}</div>
              </div>`).join('')}
          </div>
        </div>`;
    }).join('');
  }

  /* ─────────────────────────────────────────
     5. SCATTER PLOT — Calories vs Sugar
  ───────────────────────────────────────── */
  function drawScatter() {
    const canvas  = document.getElementById('scatterCanvas');
    const ctx     = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const PAD = { t: 20, r: 20, b: 50, l: 48 };
    const plotW = W - PAD.l - PAD.r;
    const plotH = H - PAD.t  - PAD.b;

    const X_MIN = 150, X_MAX = 430, Y_MIN = 0, Y_MAX = 50;
    const toX = v => PAD.l + ((v - X_MIN) / (X_MAX - X_MIN)) * plotW;
    const toY = v => PAD.t + plotH - ((v - Y_MIN) / (Y_MAX - Y_MIN)) * plotH;

    ctx.clearRect(0, 0, W, H);

    /* Grid lines */
    ctx.strokeStyle = 'rgba(106,26,42,0.07)';
    ctx.lineWidth   = 1;
    [200, 250, 300, 350, 400].forEach(x => {
      ctx.beginPath(); ctx.moveTo(toX(x), PAD.t); ctx.lineTo(toX(x), PAD.t + plotH); ctx.stroke();
    });
    [10, 20, 30, 40].forEach(y => {
      ctx.beginPath(); ctx.moveTo(PAD.l, toY(y)); ctx.lineTo(PAD.l + plotW, toY(y)); ctx.stroke();
    });

    /* Axes */
    ctx.strokeStyle = 'rgba(106,26,42,0.3)';
    ctx.lineWidth   = 1.5;
    ctx.beginPath();
    ctx.moveTo(PAD.l, PAD.t);
    ctx.lineTo(PAD.l, PAD.t + plotH);
    ctx.lineTo(PAD.l + plotW, PAD.t + plotH);
    ctx.stroke();

    /* Axis tick labels */
    ctx.fillStyle = '#8A7E74';
    ctx.font      = '11px sans-serif';
    ctx.textAlign = 'center';
    [200, 250, 300, 350, 400].forEach(x => ctx.fillText(x, toX(x), PAD.t + plotH + 16));
    ctx.textAlign = 'right';
    [0, 10, 20, 30, 40].forEach(y => ctx.fillText(`${y}g`, PAD.l - 6, toY(y) + 4));

    /* Axis titles */
    ctx.save();
    ctx.translate(13, PAD.t + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText('Sugar (g)', 0, 0);
    ctx.restore();
    ctx.textAlign = 'center';
    ctx.fillText('Calories', PAD.l + plotW / 2, H - 8);

    /* Data points */
    const points = [];
    HD.iceCream.forEach(d => {
      const x   = toX(d.calories);
      const y   = toY(d.sugar);
      const col = d.type === 'ic' ? '#6B1A2A' : '#1D6B52';
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, 2 * Math.PI);
      ctx.fillStyle   = col + 'CC';
      ctx.fill();
      ctx.strokeStyle = col;
      ctx.lineWidth   = 1.5;
      ctx.stroke();
      points.push({ x, y, d, col });
    });

    /* Label extreme points */
    const extremes = [
      ...[...HD.iceCream].sort((a, b) => b.sugar    - a.sugar).slice(0, 2),
      ...[...HD.iceCream].sort((a, b) => a.sugar    - b.sugar).slice(0, 2),
      ...[...HD.iceCream].sort((a, b) => b.calories - a.calories).slice(0, 1),
    ];
    const labeled = new Set();
    extremes.forEach(d => {
      if (labeled.has(d.name)) return;
      labeled.add(d.name);
      const col = d.type === 'ic' ? '#6B1A2A' : '#1D6B52';
      ctx.fillStyle = col;
      ctx.font      = '10px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(d.name.split(' ')[0], toX(d.calories) + 9, toY(d.sugar) + 4);
    });

    /* Tooltip on hover / touch */
    const tooltip = document.getElementById('scatterTooltip');

    function showTooltip(clientX, clientY) {
      const rect  = canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      const cx2   = (clientX - rect.left) * scaleX;
      const cy2   = (clientY - rect.top)  * scaleY;

      let closest = null, minDist = 999;
      points.forEach(p => {
        const dist = Math.hypot(p.x - cx2, p.y - cy2);
        if (dist < minDist) { minDist = dist; closest = p; }
      });

      if (closest && minDist < 28) {
        tooltip.style.display = 'block';
        tooltip.style.left    = `${Math.min((closest.x / W) * rect.width, rect.width - 170)}px`;
        tooltip.style.top     = `${(closest.y / H) * rect.height - 44}px`;
        tooltip.innerHTML     = `<strong>${closest.d.name}</strong><br>${closest.d.calories} cal · ${closest.d.sugar}g sugar`;
      } else {
        tooltip.style.display = 'none';
      }
    }

    canvas.addEventListener('mousemove',  e => showTooltip(e.clientX, e.clientY));
    canvas.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
    canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      showTooltip(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
  }

  /* ─────────────────────────────────────────
     Public init — called once by app.js
  ───────────────────────────────────────── */
  function init() {
    drawBar();
    buildCompareTable();
    initRadar();
    buildRankings();
    drawScatter();
  }

  return { init, setBarMetric, drawRadar };
})();
