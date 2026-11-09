import { skillGroups, statusLabels } from '../data/skills.js';
import { escapeHtml } from '../lib/dom.js';
import { icon } from '../lib/icons.js';

export function equipmentMarkup() {
  return `
    <section class="section" id="equipment" aria-labelledby="equipment-title">
      <div class="shell">
        <div class="section-head reveal">
          <div class="section-head__index">03 / Loadout</div>
          <h2 class="section-head__title" id="equipment-title">Equipment <em>&amp; skills</em></h2>
          <p class="section-head__lead">
            Навыки без процентов и выдуманных уровней. Только статус,
            <strong>описание и конкретный пример применения в проектах.</strong>
          </p>
        </div>

        <div class="equipment-legend reveal">
          <span class="status-dot status-dot--practical">Practical experience</span>
          <span class="status-dot status-dot--basic">Basic knowledge</span>
          <span class="status-dot status-dot--learning">Currently learning</span>
          <span class="muted">Нажмите на навык, чтобы раскрыть детали</span>
        </div>

        <div class="skill-groups">
          ${skillGroups
            .map(
              (group, groupIndex) => `
              <div class="skill-group reveal reveal--d${(groupIndex % 2) + 1}">
                <div class="skill-group__head">
                  <h3 class="skill-group__title">${icon(group.icon)} ${escapeHtml(group.title)}</h3>
                  <span class="skill-group__count">${String(group.items.length).padStart(2, '0')} items</span>
                </div>
                <div class="skill-list">
                  ${group.items
                    .map(
                      (skill, index) => `
                      <div class="skill-item">
                        <button class="skill-card" type="button" aria-expanded="false" id="skill-${group.id}-${index}" aria-controls="skill-detail-${group.id}-${index}">
                          <span class="skill-card__name">${escapeHtml(skill.name)}</span>
                          <span class="skill-card__status">${escapeHtml(statusLabels[skill.status])}</span>
                          <span class="skill-card__plus" aria-hidden="true"></span>
                        </button>
                        <div class="skill-detail" id="skill-detail-${group.id}-${index}" role="region" aria-labelledby="skill-${group.id}-${index}">
                          <div>
                            <div class="skill-detail__inner">
                              <b>Application</b>
                              ${escapeHtml(skill.desc)}
                              <b>Project example</b>
                              ${escapeHtml(skill.example)}
                            </div>
                          </div>
                        </div>
                      </div>`,
                    )
                    .join('')}
                </div>
              </div>`,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

export function initEquipment() {
  const items = Array.from(document.querySelectorAll('.skill-item'));
  items.forEach((item) => {
    const button = item.querySelector('.skill-card');
    button?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      items.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.skill-card')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
