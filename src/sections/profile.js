import { profile } from '../data/profile.js';
import { escapeHtml } from '../lib/dom.js';
import { icon } from '../lib/icons.js';

export function profileMarkup() {
  const education = profile.education;

  return `
    <section class="section" id="profile" aria-labelledby="profile-title">
      <div class="shell">
        <div class="section-head reveal">
          <div class="section-head__index">02 / Personnel</div>
          <h2 class="section-head__title" id="profile-title">Operator <em>profile</em></h2>
          <p class="section-head__lead">
            Техническое образование, аналитический подход и практика собственных прототипов.
            <strong>Не список инструментов, а способ думать о правилах и последствиях.</strong>
          </p>
        </div>

        <div class="profile-grid">
          <article class="about-panel reveal">
            <div class="about-panel__top">
              <h3>About me</h3>
              <span class="mono">Profile / 01</span>
            </div>
            ${profile.about.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
            <div class="about-panel__quote">«${escapeHtml(profile.quote)}»</div>
          </article>

          <article class="education-card reveal reveal--d1">
            <div class="education-card__head">
              <h3>Education</h3>
              <span class="mono muted">EDU-01</span>
            </div>
            <div class="edu-timeline">
              <div class="edu-step is-current">
                <span class="edu-step__dot" aria-hidden="true"></span>
                <div>
                  <div class="edu-step__date">${escapeHtml(education.years)} · ${escapeHtml(education.current)}</div>
                  <div class="edu-step__title">${escapeHtml(education.institution)}</div>
                  <div class="edu-step__desc">
                    ${escapeHtml(education.fullName)}<br />
                    ${escapeHtml(education.program)}<br />
                    ${escapeHtml(education.degree)}
                  </div>
                </div>
              </div>
              <div class="edu-step">
                <span class="edu-step__dot" aria-hidden="true"></span>
                <div>
                  <div class="edu-step__date">2027 · Diploma</div>
                  <div class="edu-step__title">Производственная симуляция</div>
                  <div class="edu-step__desc">
                    Дипломная работа — симуляция завода «Механизм» на Unity: заказы, чертежи,
                    производство, качество и развитие предприятия.
                  </div>
                </div>
              </div>
            </div>
            <div class="education-card__foot">
              <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px">
                ${profile.languages
                  .map(
                    (language) =>
                      `<span class="chip">${escapeHtml(language.name)} · ${escapeHtml(language.level)}</span>`,
                  )
                  .join('')}
              </div>
              ${escapeHtml(education.note)}
            </div>
          </article>
        </div>

        <div class="interests" id="interests">
          ${profile.interests
            .map(
              (interest, index) => `
              <button class="interest-card reveal reveal--d${(index % 3) + 1}" type="button" aria-expanded="false">
                <span class="interest-card__num">${String(index + 1).padStart(2, '0')} / Direction</span>
                <span class="interest-card__title">${escapeHtml(interest.title)}</span>
                <span class="interest-card__short">${escapeHtml(interest.short)}</span>
                <span class="interest-card__more"><span>${escapeHtml(interest.more)}</span></span>
                <span class="interest-card__toggle" aria-hidden="true">+</span>
              </button>`,
            )
            .join('')}
        </div>

        <div class="approach">
          ${profile.approach
            .map(
              (item, index) => `
              <div class="approach__item reveal reveal--d${index + 1}">
                <b>${String(index + 1).padStart(2, '0')} / ${escapeHtml(item.title)}</b>
                <p>${escapeHtml(item.text)}</p>
              </div>`,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

export function initProfile() {
  const cards = Array.from(document.querySelectorAll('.interest-card'));
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const isOpen = card.classList.contains('is-open');
      cards.forEach((other) => {
        other.classList.remove('is-open');
        other.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        card.classList.add('is-open');
        card.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
