import { profile } from '../data/profile.js';
import { escapeHtml } from '../lib/dom.js';
import { icon } from '../lib/icons.js';
import { initCopyButtons } from '../components/interactions.js';

const PORTFOLIO_URL = 'https://kerarty.github.io/cv-octopus/';

export function contactMarkup() {
  return `
    <section class="contact" id="contact" aria-labelledby="contact-title">
      <div class="shell">
        <div class="contact__kicker reveal">07 / Contact / End of file</div>
        <h2 class="contact__title reveal reveal--d1" id="contact-title">Mission <span>complete</span></h2>
        <p class="contact__lead reveal reveal--d2">
          Спасибо за ознакомление с портфолио. Буду рад возможности обсудить свои проекты,
          подход к игровому дизайну и перспективы сотрудничества.
        </p>

        <div class="contact__grid">
          <article class="contact-card contact-card--wide reveal">
            <div class="contact-card__label">
              <span>Email / primary channel</span>
              <span class="mono sand">Direct</span>
            </div>
            <div class="contact-card__value contact-card__value--mono">${escapeHtml(profile.email)}</div>
            <div class="contact-card__actions">
              <a class="btn btn--primary btn--small" href="mailto:${escapeHtml(profile.email)}?subject=${encodeURIComponent('Game Designer — Portfolio')}">
                ${icon('mail')} Написать
              </a>
              <button class="btn btn--ghost btn--small" type="button" data-copy="${escapeHtml(profile.email)}" data-copy-message="Email скопирован">
                ${icon('copy')} Копировать
              </button>
            </div>
          </article>

          <article class="contact-card reveal reveal--d1">
            <div class="contact-card__label">
              <span>Phone</span>
              <span class="mono muted">BY</span>
            </div>
            <div class="contact-card__value contact-card__value--mono">${escapeHtml(profile.phone)}</div>
            <div class="contact-card__actions">
              <a class="btn btn--ghost btn--small" href="tel:${escapeHtml(profile.phoneHref)}">${icon('phone')} Позвонить</a>
              <button class="btn btn--ghost btn--small" type="button" data-copy="${escapeHtml(profile.phone)}" data-copy-message="Телефон скопирован">
                ${icon('copy')} Копировать
              </button>
            </div>
          </article>

          <article class="contact-card reveal reveal--d2">
            <div class="contact-card__label">
              <span>GitHub</span>
              <span class="mono muted">Code</span>
            </div>
            <div class="contact-card__value contact-card__value--mono">github.com/Kerarty</div>
            <div class="contact-card__actions">
              <a class="btn btn--ghost btn--small" href="${escapeHtml(profile.github)}" target="_blank" rel="noopener noreferrer">
                ${icon('github')} Открыть профиль
              </a>
            </div>
          </article>

          <article class="contact-card reveal reveal--d3">
            <div class="contact-card__label">
              <span>CV / PDF</span>
              <span class="mono muted">Verified</span>
            </div>
            <div class="contact-card__value contact-card__value--mono">Yaroslav_Kukar_CV.pdf</div>
            <div class="contact-card__actions">
              <a class="btn btn--ghost btn--small" href="./docs/Yaroslav_Kukar_CV.pdf" download="Yaroslav_Kukar_CV.pdf">
                ${icon('download')} Скачать
              </a>
            </div>
          </article>
        </div>

        <footer class="site-footer">
          <span>Tactical Design / Personnel database</span>
          <span>© 2026 Ярослав Кукар · GD-180</span>
          <span class="site-footer__links">
            <a class="text-link" href="${PORTFOLIO_URL}" target="_blank" rel="noopener noreferrer">Portfolio</a>
            <a class="text-link" href="${escapeHtml(profile.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a class="text-link" href="./docs/Yaroslav_Kukar_CV.pdf" download="Yaroslav_Kukar_CV.pdf">CV</a>
          </span>
        </footer>
      </div>
    </section>
  `;
}

export function initContact() {
  initCopyButtons(document.querySelector('#contact'));
}
