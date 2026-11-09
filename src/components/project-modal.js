import { projects } from '../data/projects.js';
import { escapeHtml, qs, qsa } from '../lib/dom.js';
import { icon } from '../lib/icons.js';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'mechanics', label: 'Mechanics' },
  { id: 'process', label: 'Design Process' },
  { id: 'screenshots', label: 'Screenshots' },
  { id: 'contribution', label: 'My Contribution' },
];

let currentProject = null;
let currentTab = 'overview';
let lastFocused = null;

export function projectModalMarkup() {
  return `
    <div class="modal" id="project-modal" aria-hidden="true">
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal__top">
          <div class="modal__header">
            <div>
              <div class="modal__kicker" id="modal-kicker"></div>
              <h3 class="modal__title" id="modal-title"></h3>
            </div>
            <button class="icon-btn modal__close" type="button" data-modal-close aria-label="Закрыть проект">
              ${icon('close')}
            </button>
          </div>
          <div class="modal__tabs" id="modal-tabs" role="tablist" aria-label="Разделы проекта"></div>
        </div>
        <div class="modal__body" id="modal-body"></div>
      </div>
    </div>
  `;
}

function linkMarkup(link, primary = false) {
  const label = String(link.label || '');
  const isPlay = /play|demo/i.test(label);
  const isGithub = /github/i.test(label);
  const iconName = isPlay ? 'play' : isGithub ? 'github' : 'external';
  const external = link.external || String(link.href).startsWith('./demo');
  const target = external ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a class="btn ${primary || isPlay ? 'btn--primary' : 'btn--ghost'} btn--small" href="${escapeHtml(link.href)}"${target}>
    ${icon(iconName)} ${escapeHtml(label)}
  </a>`;
}

function linksMarkup(project) {
  if (!project.links?.length) return '';
  return `<div class="modal-links">${project.links.map((link) => linkMarkup(link)).join('')}</div>`;
}

function heroMarkup(project) {
  const shot = project.screenshots?.[0];
  if (shot?.placeholder) {
    return `
      <div class="modal__hero">
        <div class="placeholder-shot" style="height:100%">
          <div>
            <b>${escapeHtml(shot.title)}</b>
            <span>${escapeHtml(shot.text)}</span>
          </div>
        </div>
        <div class="modal__hero-caption">
          <span>${escapeHtml(project.genre)} / ${escapeHtml(project.engine)}</span>
          <span>${escapeHtml(project.status)}</span>
        </div>
      </div>`;
  }
  return `
    <div class="modal__hero">
      <img src="${escapeHtml(shot?.src || project.cardImage)}" alt="${escapeHtml(shot?.alt || project.cardAlt)}" loading="lazy" decoding="async" />
      <div class="modal__hero-caption">
        <span>${escapeHtml(project.genre)} / ${escapeHtml(project.engine)}</span>
        <span>${escapeHtml(project.status)}</span>
      </div>
    </div>`;
}

function factsMarkup(project) {
  return `<div class="modal-facts">
    ${project.facts
      .map(
        (fact) => `
        <div class="modal-fact">
          <b>${escapeHtml(fact.value)}</b>
          <span>${escapeHtml(fact.label)}</span>
        </div>`,
      )
      .join('')}
  </div>`;
}

function factoryMapMarkup(project) {
  const locations = project.overview.locations || [];
  if (!locations.length) return '';

  return `
    <div class="modal-section">
      <h4>Interactive map / five locations</h4>
      <div class="location-map">
        <div class="location-map__canvas">
          <svg viewBox="0 0 400 300" aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%">
            <path d="M40 205 120 150 220 160 360 120" fill="none" stroke="rgba(196,154,85,0.34)" stroke-width="1" stroke-dasharray="4 6"/>
            <path d="M80 70h105v55H80zM245 60h95v48h-95zM150 215h95v52h-95zM290 190h75v70h-75zM35 235h75v42H35z" fill="rgba(52,75,61,0.28)" stroke="rgba(215,222,216,0.18)" stroke-width="1"/>
            <path d="M90 80h85v35H90zM255 70h75v28h-75zM160 225h75v32h-75zM300 200h55v50h-55zM45 245h55v22H45z" fill="none" stroke="rgba(196,154,85,0.22)" stroke-width="1" stroke-dasharray="2 3"/>
            <text x="20" y="24" fill="rgba(137,149,141,0.6)" font-family="IBM Plex Mono, monospace" font-size="7" letter-spacing="1.2">PLANT LAYOUT / SCHEMATIC</text>
            <text x="380" y="284" text-anchor="end" fill="rgba(196,154,85,0.55)" font-family="IBM Plex Mono, monospace" font-size="7">GD-180 / 05 SITES</text>
          </svg>
          ${locations
            .map(
              (location, index) => `
              <button class="location-pin ${index === 0 ? 'is-active' : ''}" type="button" style="left:${location.x}%;top:${location.y}%" data-location="${escapeHtml(location.id)}" aria-pressed="${index === 0 ? 'true' : 'false'}">
                ${escapeHtml(location.name)}
              </button>`,
            )
            .join('')}
        </div>
        <div class="location-info" id="location-info" aria-live="polite"></div>
      </div>
    </div>`;
}

function ordersMarkup(project) {
  if (!project.overview.orders?.length) return '';
  return `
    <div class="modal-section">
      <h4>Three order types</h4>
      <div class="order-grid">
        ${project.overview.orders
          .map(
            (order) => `
            <div class="order-card order-card--${escapeHtml(order.tone)}">
              <b>${escapeHtml(order.type)}</b>
              <p>${escapeHtml(order.desc)}</p>
            </div>`,
          )
          .join('')}
      </div>
    </div>`;
}

function overviewMarkup(project) {
  return `
    ${heroMarkup(project)}
    <p class="modal__lede">${escapeHtml(project.overview.lede)}</p>
    ${factsMarkup(project)}
    ${project.overview.sections
      .map(
        (section) => `
        <div class="modal-section">
          <h4>${escapeHtml(section.title)}</h4>
          <p>${escapeHtml(section.body)}</p>
        </div>`,
      )
      .join('')}
    ${project.overview.list
      ? `<div class="modal-section">
          <h4>${escapeHtml(project.overview.listTitle || 'Key decisions')}</h4>
          <ul>${project.overview.list.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        </div>`
      : ''}
    ${factoryMapMarkup(project)}
    ${ordersMarkup(project)}
    ${linksMarkup(project)}
  `;
}

function mechanicsMarkup(project) {
  return `
    <p class="modal__lede">${escapeHtml(project.mechanics.intro)}</p>
    <div class="modal-cards">
      ${project.mechanics.cards
        .map(
          (card, index) => `
          <article class="modal-card">
            <span class="modal-card__num">${String(index + 1).padStart(2, '0')} / Mechanic</span>
            <h4>${escapeHtml(card.title)}</h4>
            <p>${escapeHtml(card.body)}</p>
          </article>`,
        )
        .join('')}
    </div>
    ${linksMarkup(project)}
  `;
}

function processMarkup(project) {
  return `
    <p class="modal__lede">${escapeHtml(project.process.intro)}</p>
    <ol class="process-steps">
      ${project.process.steps
        .map(
          (step, index) => `
          <li class="process-step">
            <span class="process-step__num">${String(index + 1).padStart(2, '0')}</span>
            <div>
              <h4>${escapeHtml(step.title)}</h4>
              <p>${escapeHtml(step.body)}</p>
            </div>
          </li>`,
        )
        .join('')}
    </ol>
    ${project.process.callout ? `<div class="modal-callout">${escapeHtml(project.process.callout)}</div>` : ''}
    ${linksMarkup(project)}
  `;
}

function screenshotsMarkup(project) {
  const shots = project.screenshots || [];
  return `
    <div class="screenshot-grid ${shots.length === 1 ? 'screenshot-grid--single' : ''}">
      ${shots
        .map((shot) => {
          if (shot.placeholder) {
            return `
              <figure>
                <div class="placeholder-shot">
                  <div>
                    <b>${escapeHtml(shot.title)}</b>
                    <span>${escapeHtml(shot.text)}</span>
                  </div>
                </div>
                <figcaption>${escapeHtml(shot.caption)}</figcaption>
              </figure>`;
          }
          return `
            <figure>
              <img src="${escapeHtml(shot.src)}" alt="${escapeHtml(shot.alt)}" loading="lazy" decoding="async" />
              <figcaption>${escapeHtml(shot.caption)}</figcaption>
            </figure>`;
        })
        .join('')}
    </div>
    <p class="lab-note" style="margin-top:16px">
      Только реальные материалы проекта. Если сборка ещё не опубликована,
      вместо экранных кадров используется проектная схема с явной пометкой.
    </p>
    ${linksMarkup(project)}
  `;
}

function contributionMarkup(project) {
  return `
    <p class="modal__lede">${escapeHtml(project.contribution.text)}</p>
    <div class="modal-section">
      <h4>What I did</h4>
      <ul>${project.contribution.list.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </div>
    ${project.contribution.note ? `<div class="modal-callout">${escapeHtml(project.contribution.note)}</div>` : ''}
    ${linksMarkup(project)}
  `;
}

function panelMarkup(project, tab) {
  if (tab === 'mechanics') return mechanicsMarkup(project);
  if (tab === 'process') return processMarkup(project);
  if (tab === 'screenshots') return screenshotsMarkup(project);
  if (tab === 'contribution') return contributionMarkup(project);
  return overviewMarkup(project);
}

function renderTabs(project) {
  const tabs = qs('#modal-tabs');
  if (!tabs) return;
  tabs.innerHTML = TABS.map(
    (tab, index) => `
      <button class="modal__tab ${index === 0 ? 'is-active' : ''}" type="button" role="tab" id="modal-tab-${tab.id}" aria-selected="${index === 0 ? 'true' : 'false'}" aria-controls="modal-panel" tabindex="${index === 0 ? '0' : '-1'}" data-modal-tab="${tab.id}">
        ${escapeHtml(tab.label)}
      </button>`,
  ).join('');
}

function renderPanel(project, tab) {
  const body = qs('#modal-body');
  if (!body) return;
  body.innerHTML = `
    <div class="modal__panel is-active" id="modal-panel" role="tabpanel" aria-labelledby="modal-tab-${tab}">
      ${panelMarkup(project, tab)}
    </div>`;
  body.scrollTop = 0;
  if (project.overview.locations) {
    renderLocationInfo(project, project.overview.locations[0].id);
  }
}

function renderLocationInfo(project, locationId) {
  const info = qs('#location-info');
  const locations = project.overview.locations || [];
  const location = locations.find((item) => item.id === locationId) || locations[0];
  if (!info || !location) return;
  const index = locations.indexOf(location);
  info.innerHTML = `
    <span class="location-info__index">${String(index + 1).padStart(2, '0')} / ${String(locations.length).padStart(2, '0')}</span>
    <h5>${escapeHtml(location.name)}</h5>
    <p>${escapeHtml(location.desc)}</p>
  `;
  qsa('[data-location]').forEach((pin) => {
    const active = pin.dataset.location === location.id;
    pin.classList.toggle('is-active', active);
    pin.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

function activateTab(tabId) {
  if (!currentProject) return;
  currentTab = tabId;
  qsa('[data-modal-tab]').forEach((tab) => {
    const active = tab.dataset.modalTab === tabId;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
    tab.setAttribute('tabindex', active ? '0' : '-1');
  });
  renderPanel(currentProject, tabId);
}

export function openProjectModal(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  const modal = qs('#project-modal');
  const dialog = qs('.modal__dialog', modal);
  if (!modal || !dialog) return;

  lastFocused = document.activeElement;
  currentProject = project;
  currentTab = 'overview';

  qs('#modal-kicker').innerHTML = `
    <span>${escapeHtml(project.index)} / Mission</span>
    <span>${escapeHtml(project.genre)}</span>
    <span>${escapeHtml(project.engine)}</span>
  `;
  qs('#modal-title').innerHTML = `${escapeHtml(project.title)}${
    project.subtitle ? ` <span class="modal__subtitle">${escapeHtml(project.subtitle)}</span>` : ''
  }`;
  renderTabs(project);
  renderPanel(project, 'overview');

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-locked');
  window.requestAnimationFrame(() => qs('.modal__close', modal)?.focus());
}

export function closeProjectModal() {
  const modal = qs('#project-modal');
  if (!modal || !modal.classList.contains('is-open')) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-locked');
  currentProject = null;
  if (lastFocused && lastFocused.isConnected) lastFocused.focus();
}

function trapFocus(event) {
  const modal = qs('#project-modal');
  if (!modal?.classList.contains('is-open') || event.key !== 'Tab') return;
  const dialog = qs('.modal__dialog', modal);
  const focusable = Array.from(
    dialog.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((node) => node.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function initProjectModal() {
  document.addEventListener('click', (event) => {
    const opener = event.target.closest('[data-open-project]');
    if (opener) {
      openProjectModal(opener.dataset.openProject);
      return;
    }
    if (event.target.closest('[data-modal-close]')) {
      closeProjectModal();
    }
  });

  document.addEventListener('tactical:open-project', (event) => {
    openProjectModal(event.detail?.id);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeProjectModal();
    trapFocus(event);
  });

  const tabs = qs('#modal-tabs');
  tabs?.addEventListener('click', (event) => {
    const tab = event.target.closest('[data-modal-tab]');
    if (tab) activateTab(tab.dataset.modalTab);
  });

  tabs?.addEventListener('keydown', (event) => {
    const items = qsa('[data-modal-tab]', tabs);
    const index = items.findIndex((item) => item.dataset.modalTab === currentTab);
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % items.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + items.length) % items.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = items.length - 1;
    if (next === index) return;
    event.preventDefault();
    activateTab(items[next].dataset.modalTab);
    items[next].focus();
  });

  const body = qs('#modal-body');
  body?.addEventListener('click', (event) => {
    const pin = event.target.closest('[data-location]');
    if (!pin || !currentProject) return;
    renderLocationInfo(currentProject, pin.dataset.location);
  });
}
