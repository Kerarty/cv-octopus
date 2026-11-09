import { profile } from '../data/profile.js';
import { escapeHtml } from '../lib/dom.js';
import { icon } from '../lib/icons.js';

const tacticalMap = `
  <svg viewBox="0 0 400 440" role="img" aria-label="Карта направлений: механики, системы, баланс, прогрессия, уровни и мобильные игры вокруг ядра геймдизайна">
    <defs>
      <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#C49A55" stop-opacity="0.16"/>
        <stop offset="100%" stop-color="#C49A55" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="200" cy="220" r="150" fill="url(#mapGlow)"/>
    <circle cx="200" cy="220" r="150" fill="none" stroke="rgba(215,222,216,0.12)" stroke-dasharray="2 8"/>
    <circle cx="200" cy="220" r="104" fill="none" stroke="rgba(196,154,85,0.16)" stroke-dasharray="1 6"/>
    <path class="map-route" d="M200 92 311 156 311 284 200 348 89 284 89 156Z"/>
    <path class="map-route map-route--dim" d="M200 92V220M311 156 200 220M311 284 200 220M200 348V220M89 284 200 220M89 156 200 220"/>
    <path d="M200 190 230 220 200 250 170 220Z" fill="rgba(52,75,61,0.55)" stroke="#C49A55" stroke-width="1"/>
    <path d="M200 205v30M185 220h30" stroke="rgba(196,154,85,0.6)" stroke-width="1"/>
    <circle cx="200" cy="220" r="4" fill="#C49A55"/>

    <g class="map-node">
      <rect x="193" y="85" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 200 92)"/>
      <circle class="map-marker map-marker--pulse" cx="200" cy="92" r="3" fill="#C49A55"/>
      <text class="map-label map-label--sand" x="200" y="68" text-anchor="middle">MECHANICS</text>
    </g>
    <g class="map-node">
      <rect x="304" y="149" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 311 156)"/>
      <circle cx="311" cy="156" r="3" fill="#C49A55"/>
      <text class="map-label" x="328" y="153">SYSTEMS</text>
      <text class="map-label" x="328" y="166" style="fill: rgba(137,149,141,0.6)">LOOPS / ECONOMY</text>
    </g>
    <g class="map-node">
      <rect x="304" y="277" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 311 284)"/>
      <circle cx="311" cy="284" r="3" fill="#C49A55"/>
      <text class="map-label" x="328" y="281">BALANCE</text>
      <text class="map-label" x="328" y="294" style="fill: rgba(137,149,141,0.6)">NUMBERS / RISK</text>
    </g>
    <g class="map-node">
      <rect x="193" y="341" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 200 348)"/>
      <circle cx="200" cy="348" r="3" fill="#C49A55"/>
      <text class="map-label map-label--sand" x="200" y="374" text-anchor="middle">PROGRESSION</text>
    </g>
    <g class="map-node">
      <rect x="82" y="277" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 89 284)"/>
      <circle cx="89" cy="284" r="3" fill="#C49A55"/>
      <text class="map-label" x="72" y="281" text-anchor="end">LEVELS</text>
      <text class="map-label" x="72" y="294" text-anchor="end" style="fill: rgba(137,149,141,0.6)">SPACE / FLOW</text>
    </g>
    <g class="map-node">
      <rect x="82" y="149" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 89 156)"/>
      <circle cx="89" cy="156" r="3" fill="#C49A55"/>
      <text class="map-label" x="72" y="153" text-anchor="end">MOBILE</text>
      <text class="map-label" x="72" y="166" text-anchor="end" style="fill: rgba(137,149,141,0.6)">TOUCH / SESSION</text>
    </g>

    <text class="map-label" x="18" y="30" style="fill: rgba(137,149,141,0.55)">GRID 54.19 / 27.33</text>
    <text class="map-label" x="382" y="30" text-anchor="end" style="fill: rgba(137,149,141,0.55)">SCALE 1:1</text>
    <text class="map-label" x="18" y="420" style="fill: rgba(137,149,141,0.55)">SECTOR 06 / DESIGN</text>
    <text class="map-label" x="382" y="420" text-anchor="end" style="fill: rgba(196,154,85,0.75)">GD-180</text>
  </svg>
`;

export function briefingMarkup() {
  const chips = [
    'Gameplay Mechanics',
    'Game Systems',
    'Balance',
    'Progression',
    'Level Design',
    'Mobile',
  ];

  return `
    <section class="hero" id="briefing" aria-labelledby="briefing-title">
      <div class="shell hero__grid">
        <div class="hero__content">
          <div class="hero__meta reveal">
            <span>Personnel file / GD-180</span>
            <span>Minsk, Belarus</span>
            <span>Status: open to offers</span>
          </div>
          <h1 class="hero__name reveal reveal--d1" id="briefing-title">
            <span>Ярослав</span>
            <span class="is-outline">Кукар</span>
          </h1>
          <div class="hero__role reveal reveal--d2">
            <strong>Game Designer</strong>
            <span aria-hidden="true"></span>
            <strong style="color: var(--text-soft); letter-spacing: 0.18em">Systems / Balance / Progression</strong>
          </div>
          <p class="hero__summary reveal reveal--d2">
            ${escapeHtml(profile.summary)}
          </p>
          <div class="hero__chips reveal reveal--d3">
            ${chips.map((chip) => `<span class="chip">${escapeHtml(chip)}</span>`).join('')}
          </div>
          <div class="hero__actions reveal reveal--d3">
            <a class="btn btn--primary" href="#missions">${icon('target')} View projects</a>
            <a class="btn btn--ghost" href="./docs/Yaroslav_Kukar_CV.pdf" download="Yaroslav_Kukar_CV.pdf">
              ${icon('download')} Download CV
            </a>
          </div>
          <div class="hero__stats reveal reveal--d4">
            ${profile.stats
              .map(
                (stat) => `
                <div class="hero__stat">
                  <b>${escapeHtml(stat.value)}</b>
                  <span>${escapeHtml(stat.label)}</span>
                </div>`,
              )
              .join('')}
          </div>
        </div>

        <div class="hero__map reveal reveal--d2">
          <div class="map-panel">
            <div class="map-panel__bar">
              <span><strong>Sector map</strong> / competency grid</span>
              <span>GD-180</span>
            </div>
            <div class="map-panel__canvas">
              <span class="scanline" aria-hidden="true"></span>
              ${tacticalMap}
            </div>
            <div class="map-panel__footer">
              <span>6 directions / 1 operator</span>
              <span class="map-panel__signal">Signal active</span>
            </div>
          </div>
        </div>
      </div>
      <a class="hero__scroll" href="#profile" aria-label="Перейти к профилю">Scroll to profile</a>
    </section>
  `;
}
