import { clamp, round } from '../lib/dom.js';

const STATS = [
  { key: 'damage', label: 'Damage', min: 20, max: 120, step: 1, unit: 'HP', decimals: 0 },
  { key: 'rate', label: 'Fire rate', min: 20, max: 120, step: 1, unit: 'RPM', decimals: 0 },
  { key: 'reload', label: 'Reload time', min: 1, max: 6, step: 0.1, unit: 's', decimals: 1 },
  { key: 'mag', label: 'Magazine size', min: 3, max: 20, step: 1, unit: 'rds', decimals: 0 },
];

const DEFAULT_WEAPONS = {
  a: { name: 'VECTOR-9', type: 'Assault rifle', damage: 34, rate: 78, reload: 2.4, mag: 12 },
  b: { name: 'LONGSHOT', type: 'Marksman rifle', damage: 72, rate: 38, reload: 3.6, mag: 6 },
};

const PRESETS = {
  default: DEFAULT_WEAPONS,
  cqc: {
    a: { name: 'VECTOR-9', type: 'Assault rifle', damage: 24, rate: 110, reload: 1.6, mag: 18 },
    b: { name: 'LONGSHOT', type: 'Marksman rifle', damage: 46, rate: 72, reload: 2.8, mag: 10 },
  },
  marksman: {
    a: { name: 'VECTOR-9', type: 'Assault rifle', damage: 52, rate: 48, reload: 3.0, mag: 8 },
    b: { name: 'LONGSHOT', type: 'Marksman rifle', damage: 96, rate: 30, reload: 4.8, mag: 5 },
  },
};

const METRICS = [
  { key: 'damageMag', label: 'Damage / magazine', unit: 'HP', decimals: 0 },
  { key: 'burst', label: 'Burst DPS', unit: 'HP/s', decimals: 1 },
  { key: 'sustained', label: 'Sustained DPS', unit: 'HP/s', decimals: 1 },
  { key: 'cycle', label: 'Full cycle', unit: 's', decimals: 1 },
];

function cloneWeapons(source) {
  return {
    a: { ...source.a },
    b: { ...source.b },
  };
}

function weaponMetrics(weapon) {
  const roundsPerSecond = weapon.rate / 60;
  const damageMag = weapon.damage * weapon.mag;
  const burst = weapon.damage * roundsPerSecond;
  const emptyTime = (weapon.mag - 1) / roundsPerSecond;
  const cycle = emptyTime + weapon.reload;
  const sustained = damageMag / cycle;
  return {
    damageShot: weapon.damage,
    damageMag,
    burst,
    sustained,
    emptyTime,
    cycle,
  };
}

function sliderMarkup(weaponKey, stat, value) {
  const id = `balance-${weaponKey}-${stat.key}`;
  const fill = ((value - stat.min) / (stat.max - stat.min)) * 100;
  return `
    <div class="slider-row">
      <div class="slider-row__top">
        <label class="slider-row__label" for="${id}">${stat.label}</label>
        <span class="slider-row__value"><b data-value="${id}">${value.toFixed(stat.decimals)}</b> ${stat.unit}</span>
      </div>
      <input
        id="${id}"
        type="range"
        min="${stat.min}"
        max="${stat.max}"
        step="${stat.step}"
        value="${value}"
        data-stat="${stat.key}"
        data-weapon="${weaponKey}"
        style="--fill: ${fill}%"
      />
    </div>
  `;
}

function weaponPanelMarkup(weaponKey, weapon) {
  const isB = weaponKey === 'b';
  return `
    <div class="weapon-panel ${isB ? 'weapon-panel--b' : ''}" data-weapon-panel="${weaponKey}">
      <div class="weapon-panel__head">
        <div class="weapon-panel__name">
          <span class="weapon-badge">${weaponKey.toUpperCase()}</span>
          ${weapon.name}
        </div>
        <span class="weapon-panel__type">${weapon.type}</span>
      </div>
      ${STATS.map((stat) => sliderMarkup(weaponKey, stat, weapon[stat.key])).join('')}
      <div class="weapon-metrics">
        <div class="weapon-metric"><span>Damage / shot</span><b data-metric="${weaponKey}-damageShot">—</b></div>
        <div class="weapon-metric"><span>Damage / magazine</span><b data-metric="${weaponKey}-damageMag">—</b></div>
        <div class="weapon-metric"><span>Burst DPS</span><b data-metric="${weaponKey}-burst">—</b></div>
        <div class="weapon-metric"><span>Sustained DPS</span><b data-metric="${weaponKey}-sustained">—</b></div>
      </div>
    </div>
  `;
}

export function balanceLabMarkup() {
  return `
    <div class="lab-head">
      <div>
        <h3>Tactical Balance Lab</h3>
        <p>
          Два условных профиля оружия. Меняйте урон, темп, перезарядку и магазин —
          метрики пересчитываются сразу, а график показывает, как размер магазина влияет
          на длительный DPS.
        </p>
      </div>
      <span class="lab-head__tag">Module A / Demo data</span>
    </div>
    <div class="balance-grid">
      ${weaponPanelMarkup('a', DEFAULT_WEAPONS.a)}
      <div class="compare-panel">
        <div class="compare-panel__head">
          <h4>Live comparison</h4>
          <div class="chart-legend">
            <span><i></i>Profile A</span>
            <span><i class="legend-b"></i>Profile B</span>
          </div>
        </div>
        <div class="chart-wrap">
          <svg id="balance-chart" viewBox="0 0 360 180" role="img" aria-labelledby="balance-chart-title">
            <title id="balance-chart-title">Сравнение длительного DPS в зависимости от размера магазина</title>
          </svg>
        </div>
        <div class="metric-bars" id="balance-bars"></div>
        <div class="verdict" id="balance-verdict" aria-live="polite"></div>
      </div>
      ${weaponPanelMarkup('b', DEFAULT_WEAPONS.b)}
    </div>
    <div class="lab-actions">
      <div class="preset-row" role="group" aria-label="Пресеты характеристик">
        <button class="preset-btn" type="button" data-preset="default">Default</button>
        <button class="preset-btn" type="button" data-preset="cqc">CQC</button>
        <button class="preset-btn" type="button" data-preset="marksman">Marksman</button>
      </div>
      <button class="btn btn--ghost btn--small" type="button" id="balance-reset">Reset profile</button>
    </div>
    <p class="lab-note">
      Условные демонстрационные параметры, не связанные с балансом Sniper: Ghost Warrior.
      Damage / magazine = урон × патроны. Burst DPS = урон × (RPM / 60).
      Sustained DPS = урон магазина / (время опустошения магазина + перезарядка).
    </p>
  `;
}

function chartMarkup(a, b) {
  const width = 360;
  const height = 180;
  const left = 38;
  const right = 12;
  const top = 16;
  const bottom = 28;
  const plotW = width - left - right;
  const plotH = height - top - bottom;
  const mags = Array.from({ length: 18 }, (_, index) => index + 3);

  const series = (weapon) =>
    mags.map((mag) => {
      const metrics = weaponMetrics({ ...weapon, mag });
      return { mag, value: metrics.sustained };
    });

  const seriesA = series(a);
  const seriesB = series(b);
  const maxValue = Math.max(...seriesA.map((point) => point.value), ...seriesB.map((point) => point.value), 1);
  const niceMax = Math.ceil(maxValue / 10) * 10;
  const x = (mag) => left + ((mag - 3) / 17) * plotW;
  const y = (value) => top + (1 - value / niceMax) * plotH;

  const points = (data) => data.map((point) => `${x(point.mag).toFixed(1)},${y(point.value).toFixed(1)}`).join(' ');
  const currentA = seriesA.find((point) => point.mag === a.mag);
  const currentB = seriesB.find((point) => point.mag === b.mag);

  const grid = [0, 0.5, 1]
    .map((ratio) => {
      const yy = top + plotH * ratio;
      const value = niceMax * (1 - ratio);
      return `
        <line class="chart-grid-line" x1="${left}" y1="${yy}" x2="${width - right}" y2="${yy}"/>
        <text class="chart-axis" x="${left - 7}" y="${yy + 2.5}" text-anchor="end">${Math.round(value)}</text>`;
    })
    .join('');

  const xLabels = [3, 8, 14, 20]
    .map(
      (mag) =>
        `<text class="chart-axis" x="${x(mag).toFixed(1)}" y="${height - 8}" text-anchor="middle">${mag}</text>`,
    )
    .join('');

  return `
    ${grid}
    ${xLabels}
    <text class="chart-axis" x="${left}" y="${height - 20}" text-anchor="start">Magazine, rounds</text>
    <text class="chart-axis" x="${width - right}" y="${height - 20}" text-anchor="end">DPS</text>
    <polyline class="chart-line chart-line--a-glow" points="${points(seriesA)}"/>
    <polyline class="chart-line chart-line--b-glow" points="${points(seriesB)}"/>
    <polyline class="chart-line chart-line--a" points="${points(seriesA)}"/>
    <polyline class="chart-line chart-line--b" points="${points(seriesB)}"/>
    <circle cx="${x(currentA.mag)}" cy="${y(currentA.value)}" r="3" fill="#C49A55" stroke="#111513" stroke-width="1.5"/>
    <circle cx="${x(currentB.mag)}" cy="${y(currentB.value)}" r="3" fill="#7F9DA6" stroke="#111513" stroke-width="1.5"/>
  `;
}

function format(value, decimals) {
  return Number(value).toLocaleString('ru-RU', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function verdictText(a, b, metricsA, metricsB) {
  const diff = ((metricsB.sustained - metricsA.sustained) / Math.max(metricsA.sustained, 0.001)) * 100;
  const abs = Math.abs(diff);
  const cycleA = format(metricsA.cycle, 1);
  const cycleB = format(metricsB.cycle, 1);

  if (abs < 3) {
    return `<b>Паритет по sustained DPS.</b> A даёт ${format(metricsA.damageMag, 0)} HP за магазин, B — ${format(metricsB.damageMag, 0)} HP. Разница в длительном уроне ${format(abs, 1)}%, поэтому выбор решают альфа, время перезарядки и комфорт попадания. Полный цикл: A ${cycleA} с, B ${cycleB} с.`;
  }

  const leader = diff > 0 ? 'B' : 'A';
  const other = leader === 'A' ? 'B' : 'A';
  const leaderMetrics = leader === 'A' ? metricsA : metricsB;
  const otherMetrics = leader === 'A' ? metricsB : metricsA;

  return `<b>${leader} лидирует по sustained DPS на ${format(abs, 1)}%</b> (${format(leaderMetrics.sustained, 1)} против ${format(otherMetrics.sustained, 1)} HP/s). ${other} компенсирует это ${otherMetrics.burst > leaderMetrics.burst ? 'более высоким burst DPS' : 'другим профилем урона'}. Полный цикл: A ${cycleA} с, B ${cycleB} с — проверьте, насколько часто в игре реально происходит полная перезарядка.`;
}

export function initBalanceLab() {
  const root = document.querySelector('[data-balance-lab]');
  if (!root) return;

  let state = cloneWeapons(DEFAULT_WEAPONS);
  const chart = root.querySelector('#balance-chart');
  const bars = root.querySelector('#balance-bars');
  const verdict = root.querySelector('#balance-verdict');

  const syncInputs = () => {
    root.querySelectorAll('input[type="range"]').forEach((input) => {
      const weapon = state[input.dataset.weapon];
      if (!weapon) return;
      const stat = STATS.find((item) => item.key === input.dataset.stat);
      if (!stat) return;
      const value = weapon[stat.key];
      input.value = value;
      input.style.setProperty('--fill', `${((value - stat.min) / (stat.max - stat.min)) * 100}%`);
      const output = root.querySelector(`[data-value="${input.id}"]`);
      if (output) output.textContent = value.toFixed(stat.decimals);
    });
  };

  const renderMetrics = (weaponKey, metrics) => {
    const set = (name, value, unit, decimals) => {
      const node = root.querySelector(`[data-metric="${weaponKey}-${name}"]`);
      if (node) node.textContent = `${format(value, decimals)} ${unit}`;
    };
    set('damageShot', metrics.damageShot, 'HP', 0);
    set('damageMag', metrics.damageMag, 'HP', 0);
    set('burst', metrics.burst, 'HP/s', 1);
    set('sustained', metrics.sustained, 'HP/s', 1);
  };

  const renderBars = (metricsA, metricsB) => {
    bars.innerHTML = METRICS.map((metric) => {
      const a = metricsA[metric.key];
      const b = metricsB[metric.key];
      const max = Math.max(a, b, 0.001);
      return `
        <div class="metric-bar">
          <div class="metric-bar__top">
            <span class="metric-bar__label">${metric.label}</span>
            <span class="metric-bar__values">A ${format(a, metric.decimals)} · B ${format(b, metric.decimals)} ${metric.unit}</span>
          </div>
          <div class="metric-bar__track">
            <i style="width:${clamp((a / max) * 100, 0, 100).toFixed(1)}%"></i>
            <i style="width:${clamp((b / max) * 100, 0, 100).toFixed(1)}%"></i>
          </div>
        </div>`;
    }).join('');
  };

  const render = () => {
    const metricsA = weaponMetrics(state.a);
    const metricsB = weaponMetrics(state.b);
    renderMetrics('a', metricsA);
    renderMetrics('b', metricsB);
    renderBars(metricsA, metricsB);
    chart.innerHTML = `
      <title id="balance-chart-title">Сравнение длительного DPS в зависимости от размера магазина</title>
      ${chartMarkup(state.a, state.b)}
    `;
    verdict.innerHTML = verdictText(state.a, state.b, metricsA, metricsB);
  };

  root.addEventListener('input', (event) => {
    const input = event.target.closest('input[type="range"]');
    if (!input) return;
    const weapon = state[input.dataset.weapon];
    const stat = STATS.find((item) => item.key === input.dataset.stat);
    if (!weapon || !stat) return;
    weapon[stat.key] = Number(input.value);
    input.style.setProperty('--fill', `${((weapon[stat.key] - stat.min) / (stat.max - stat.min)) * 100}%`);
    const output = root.querySelector(`[data-value="${input.id}"]`);
    if (output) output.textContent = weapon[stat.key].toFixed(stat.decimals);
    render();
  });

  root.querySelectorAll('[data-preset]').forEach((button) => {
    button.addEventListener('click', () => {
      const preset = PRESETS[button.dataset.preset];
      if (!preset) return;
      state = cloneWeapons(preset);
      syncInputs();
      render();
    });
  });

  root.querySelector('#balance-reset')?.addEventListener('click', () => {
    state = cloneWeapons(DEFAULT_WEAPONS);
    syncInputs();
    render();
  });

  syncInputs();
  render();
}
