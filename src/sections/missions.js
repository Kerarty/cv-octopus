import { projectFilters, projects } from '../data/projects.js';
import { escapeHtml } from '../lib/dom.js';
import { icon } from '../lib/icons.js';

export function missionsMarkup() {
  return `
    <section class="section" id="missions" aria-labelledby="missions-title">
      <div class="shell">
        <div class="section-head reveal">
          <div class="section-head__index">04 / Portfolio</div>
          <h2 class="section-head__title" id="missions-title">Mission <em>log</em></h2>
          <p class="section-head__lead">
            Четыре проекта: от головоломки на Unity до playable-рекламы в одном HTML-файле.
            <strong>Каждый открывается в досье с механиками, процессом и личным вкладом.</strong>
          </p>
        </div>

        <div class="mission-filter reveal" role="group" aria-label="Фильтр проектов">
          ${projectFilters
            .map(
              (filter, index) => `
              <button class="filter-btn ${index === 0 ? 'is-active' : ''}" type="button" data-filter="${filter.id}" aria-pressed="${index === 0 ? 'true' : 'false'}">
                ${escapeHtml(filter.label)}
              </button>`,
            )
            .join('')}
        </div>

        <div class="missions-grid" id="missions-grid">
          ${projects
            .map(
              (project) => `
              <article class="project-card reveal" data-filters="${project.filters.join(' ')}" data-project-card="${project.id}">
                <div class="project-card__media">
                  <img src="${escapeHtml(project.cardImage)}" alt="${escapeHtml(project.cardAlt)}" loading="lazy" decoding="async" />
                  <span class="project-card__index">${escapeHtml(project.index)} / Mission</span>
                  <span class="project-card__status ${project.statusType === 'dev' ? 'project-card__status--dev' : ''}">
                    ${escapeHtml(project.status)}
                  </span>
                </div>
                <div class="project-card__body">
                  <div class="project-card__kicker">
                    <span>${escapeHtml(project.genre)}</span>
                    <span>${escapeHtml(project.engine)}</span>
                    <span>${escapeHtml(project.year)}</span>
                  </div>
                  <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
                  ${project.subtitle ? `<p class="project-card__subtitle">${escapeHtml(project.subtitle)}</p>` : ''}
                  <p class="project-card__desc">${escapeHtml(project.cardDesc)}</p>
                  <div class="project-card__foot">
                    <div class="project-card__tags">
                      ${project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
                    </div>
                    <button class="project-card__open" type="button" data-open-project="${project.id}" aria-label="Открыть проект ${escapeHtml(project.title)}">
                      Project details
                    </button>
                  </div>
                </div>
              </article>`,
            )
            .join('')}
        </div>
        <p class="lab-note">
          Все изображения — реальные материалы проектов. Для «Механизма» используется проектная схема:
          публичная сборка ещё не опубликована.
        </p>
      </div>
    </section>
  `;
}

export function initMissions() {
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const cards = Array.from(document.querySelectorAll('[data-project-card]'));

  const applyFilter = (filter) => {
    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    cards.forEach((card) => {
      const filters = (card.dataset.filters || '').split(' ');
      const visible = filter === 'all' || filters.includes(filter);
      card.classList.toggle('is-hidden', !visible);
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.filter));
  });

  document.querySelectorAll('.project-card__media img').forEach((image) => {
    image.addEventListener('error', () => {
      const media = image.closest('.project-card__media');
      if (!media || media.querySelector('.placeholder-shot')) return;
      const placeholder = document.createElement('div');
      placeholder.className = 'placeholder-shot';
      placeholder.style.height = '100%';
      placeholder.innerHTML =
        '<div><b>Материал не загрузился</b><span>Изображение появится после добавления реального файла.</span></div>';
      image.replaceWith(placeholder);
    });
  });
}
