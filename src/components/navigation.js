import { profile } from '../data/profile.js';
import { escapeHtml, qs, qsa } from '../lib/dom.js';
import { icon } from '../lib/icons.js';

export const sections = [
  { id: 'briefing', index: '01', label: 'Briefing' },
  { id: 'profile', index: '02', label: 'Profile' },
  { id: 'equipment', index: '03', label: 'Equipment' },
  { id: 'missions', index: '04', label: 'Missions' },
  { id: 'lab', index: '05', label: 'Design Lab' },
  { id: 'debrief', index: '06', label: 'Debrief' },
  { id: 'contact', index: '07', label: 'Contact' },
];

const brandMark = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="17" fill="none" stroke="#C49A55" stroke-width="1.5"/>
    <circle cx="32" cy="32" r="4" fill="#C49A55"/>
    <path d="M32 6v12M32 46v12M6 32h12M46 32h12" stroke="#C49A55" stroke-width="1.5"/>
    <path d="M18 18l6 6M46 18l-6 6M18 46l6-6M46 46l-6-6" stroke="#344B3D" stroke-width="1.5"/>
  </svg>
`;

export function navigationMarkup() {
  const navLinks = sections
    .map(
      (section) => `
        <a class="nav__link" href="#${section.id}" data-nav="${section.id}">
          <span class="nav__num">${section.index}</span>${escapeHtml(section.label)}
        </a>`,
    )
    .join('');

  const mobileLinks = sections
    .map(
      (section) => `
        <a class="mobile-menu__link" href="#${section.id}" data-mobile-nav>
          ${escapeHtml(section.label)} <span>${section.index}</span>
        </a>`,
    )
    .join('');

  return `
    <header class="site-header" id="site-header">
      <div class="site-header__inner">
        <a class="brand" href="#briefing" aria-label="TACTICAL DESIGN — в начало">
          <span class="brand__mark">${brandMark}</span>
          <span class="brand__text">
            <span class="brand__name">Tactical Design</span>
            <span class="brand__sub">Personnel database / GD-180</span>
          </span>
        </a>
        <nav class="nav" aria-label="Основная навигация">${navLinks}</nav>
        <div class="header-actions">
          <span class="status-pill">System online</span>
          <a class="btn btn--primary btn--small" href="./docs/Yaroslav_Kukar_CV.pdf" download="Yaroslav_Kukar_CV.pdf">
            ${icon('download')} Download CV
          </a>
          <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Открыть меню">
            ${icon('menu')}
          </button>
        </div>
      </div>
      <span class="scroll-progress" id="scroll-progress" aria-hidden="true"></span>
    </header>
    <div class="mobile-menu" id="mobile-menu">
      <nav class="mobile-menu__nav" aria-label="Мобильная навигация">${mobileLinks}</nav>
      <div class="mobile-menu__footer">
        <span class="mono muted">${escapeHtml(profile.role)} / Minsk</span>
        <a class="btn btn--primary btn--small" href="./docs/Yaroslav_Kukar_CV.pdf" download="Yaroslav_Kukar_CV.pdf">
          ${icon('download')} CV
        </a>
      </div>
    </div>
  `;
}

export function initNavigation() {
  const header = qs('#site-header');
  const toggle = qs('#menu-toggle');
  const menu = qs('#mobile-menu');
  const progress = qs('#scroll-progress');
  const navLinks = qsa('[data-nav]');
  const mobileLinks = qsa('[data-mobile-nav]');
  const sectionNodes = sections
    .map((section) => document.getElementById(section.id))
    .filter(Boolean);

  const closeMenu = () => {
    if (!menu || !toggle) return;
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Открыть меню');
    toggle.innerHTML = icon('menu');
  };

  const openMenu = () => {
    if (!menu || !toggle) return;
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Закрыть меню');
    toggle.innerHTML = icon('close');
  };

  toggle?.addEventListener('click', () => {
    if (menu?.classList.contains('is-open')) closeMenu();
    else openMenu();
  });

  mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) closeMenu();
  });

  let ticking = false;
  const update = () => {
    ticking = false;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
    if (progress) progress.style.transform = `scaleX(${ratio})`;

    const probe = scrollTop + (header?.offsetHeight || 74) + 140;
    let current = sectionNodes[0]?.id || 'briefing';
    sectionNodes.forEach((section) => {
      if (section.offsetTop <= probe) current = section.id;
    });

    navLinks.forEach((link) => {
      const active = link.dataset.nav === current;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}
