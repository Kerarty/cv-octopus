import { prefersReducedMotion, qs } from '../lib/dom.js';
import { icon } from '../lib/icons.js';

/* ---------- Toast ---------- */

let toastTimer = 0;

export function toast(message) {
  const node = qs('#toast');
  if (!node) return;
  node.textContent = message;
  node.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => node.classList.remove('is-visible'), 2600);
}

export function toastMarkup() {
  return '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
}

/* ---------- Копирование ---------- */

export async function copyText(text, successMessage = 'Скопировано') {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.append(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    toast(successMessage);
    return true;
  } catch {
    toast('Не удалось скопировать — выделите текст вручную');
    return false;
  }
}

/* ---------- Появление секций ---------- */

export function initReveal() {
  const nodes = Array.from(document.querySelectorAll('.reveal'));
  if (!nodes.length) return;

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    nodes.forEach((node) => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );

  nodes.forEach((node) => observer.observe(node));
}

/* ---------- Экран инициализации ---------- */

export function initScreenMarkup() {
  return `
    <div class="init-screen" id="init-screen" aria-label="Инициализация интерфейса">
      <div class="init-screen__inner">
        <div class="init-screen__brand">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="17" fill="none" stroke="#C49A55" stroke-width="1.5"/>
            <circle cx="32" cy="32" r="4" fill="#C49A55"/>
            <path d="M32 6v12M32 46v12M6 32h12M46 32h12" stroke="#C49A55" stroke-width="1.5"/>
            <path d="M18 18l6 6M46 18l-6 6M18 46l6-6M46 46l-6-6" stroke="#344B3D" stroke-width="1.5"/>
          </svg>
          <div>
            <b>Tactical Design</b>
            <span>Personnel Database</span>
          </div>
        </div>
        <div class="init-screen__status">
          <span id="init-status">Initializing</span>
          <b id="init-percent">00%</b>
        </div>
        <div class="init-screen__bar"><i></i></div>
        <div class="init-screen__lines">
          <span data-init-line="0">Loading profile <b>...</b></span>
          <span data-init-line="1">Verifying portfolio <b>...</b></span>
          <span data-init-line="2">Access granted <b>...</b></span>
        </div>
      </div>
      <button class="init-screen__skip" id="init-skip" type="button">Skip ${icon('arrow')}</button>
    </div>
  `;
}

export function initInitScreen() {
  const screen = qs('#init-screen');
  if (!screen) return;

  const skip = qs('#init-skip', screen);
  const status = qs('#init-status', screen);
  const percent = qs('#init-percent', screen);
  const lines = Array.from(screen.querySelectorAll('[data-init-line]'));
  const timers = [];

  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    timers.forEach((id) => window.clearTimeout(id));
    screen.classList.add('is-hidden');
    screen.setAttribute('aria-hidden', 'true');
    window.setTimeout(() => screen.remove(), 500);
    document.body.classList.remove('is-initializing');
  };

  if (prefersReducedMotion()) {
    lines.forEach((line) => line.classList.add('is-ok'));
    status.textContent = 'Access granted';
    percent.textContent = '100%';
    timers.push(window.setTimeout(close, 250));
  } else {
    document.body.classList.add('is-initializing');
    timers.push(
      window.setTimeout(() => {
        status.textContent = 'Loading profile';
        percent.textContent = '42%';
        lines[0]?.classList.add('is-ok');
      }, 360),
      window.setTimeout(() => {
        status.textContent = 'Verifying portfolio';
        percent.textContent = '78%';
        lines[1]?.classList.add('is-ok');
      }, 740),
      window.setTimeout(() => {
        status.textContent = 'Access granted';
        percent.textContent = '100%';
        lines[2]?.classList.add('is-ok');
      }, 1080),
      window.setTimeout(close, 1320),
    );
  }

  skip?.addEventListener('click', close);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !closed) close();
  });
}

/* ---------- Кнопки копирования ---------- */

export function initCopyButtons(root = document) {
  root.querySelectorAll('[data-copy]').forEach((button) => {
    if (button.dataset.copyReady === 'true') return;
    button.dataset.copyReady = 'true';
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-copy');
      const message = button.getAttribute('data-copy-message') || 'Скопировано';
      if (value) copyText(value, message);
    });
  });
}
