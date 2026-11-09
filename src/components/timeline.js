import { escapeHtml } from '../lib/dom.js';
import { icon } from '../lib/icons.js';

const STEPS = [
  {
    num: '01',
    label: 'Research & Analysis',
    title: 'Research & Analysis',
    text: 'Сначала разбираю задачу и ограничения: что игрок должен понять, какие решения принять и что уже работает в жанре. Смотрю на референсы не как на картинки, а как на набор решений.',
    bullets: [
      'Разбор целевой аудитории, сессии и ограничений платформы.',
      'Сравнение механик в референсах: что именно создаёт напряжение.',
      'Формулировка гипотезы, которую можно проверить.',
    ],
    artifact:
      'Пример: разбор формата playable-рекламы для MOB RUSH — вес, отсутствие звука, один экран и 25–35 секунд сессии.',
    action: { type: 'project', id: 'mobrush', label: 'Открыть MOB RUSH' },
  },
  {
    num: '02',
    label: 'Concept Design',
    title: 'Concept Design',
    text: 'Превращаю задачу в одну понятную идею. Для ECHOLOOP это правило: эхо повторяет прошлый проход и остаётся твёрдым телом. Из него рождаются уровни, а не наоборот.',
    bullets: [
      'Одно правило, которое объясняет игру без длинного туториала.',
      'Проверка: какое решение появляется у игрока каждые несколько секунд.',
      'Границы концепта: что игра не будет делать.',
    ],
    artifact:
      'Пример: правило ECHOLOOP — точка эха достижима обычным ходом, а то, что эхо открывает, недостижимо без него.',
    action: { type: 'project', id: 'echoloop', label: 'Открыть ECHOLOOP' },
  },
  {
    num: '03',
    label: 'Systems & Mechanics',
    title: 'Systems & Mechanics',
    text: 'Раскладываю концепт на состояния, параметры и обратную связь. Проверяю, как изменения одного числа отражаются на соседних системах, а не только на одной характеристике.',
    bullets: [
      'Связанные экономики: материалы, персонал, заказы.',
      'Параметры, которые игрок может менять осознанно.',
      'Обратная связь на каждое важное действие.',
    ],
    artifact:
      'Пример: «Механизм» — производственный цикл, где дешёвый материал экономит деньги, но повышает риск брака.',
    action: { type: 'project', id: 'factory', label: 'Открыть «Механизм»' },
  },
  {
    num: '04',
    label: 'Documentation',
    title: 'Documentation',
    text: 'Записываю решение так, чтобы его можно было реализовать и проверить без устных пояснений. Документация для меня — не отчёт, а инструмент поиска противоречий.',
    bullets: [
      'GDD: механики, прогрессия, параметры, ограничения.',
      'README и технические заметки по архитектуре.',
      'Таблицы данных и критерии проверки.',
    ],
    artifact:
      'Пример: README ECHOLOOP с правилом дизайна уровней, описанием архитектуры и списком тестов.',
    action: {
      type: 'link',
      href: 'https://github.com/Kerarty/echoloop-playble',
      label: 'README на GitHub',
    },
  },
  {
    num: '05',
    label: 'Prototyping',
    title: 'Prototyping',
    text: 'Собираю минимальную версию, в которой уже можно принять решение. Прототип нужен, чтобы проверить гипотезу, а не чтобы доказать, что она верна.',
    bullets: [
      'Сначала главный цикл, потом обвязка.',
      'Один экран, один ввод, понятная цель.',
      'Честная граница: что прототип проверяет, а что нет.',
    ],
    artifact:
      'Пример: RUNNER — портретный прототип на PixiJS 8 с одним касанием, 3 HP, монетами и финишем.',
    action: { type: 'project', id: 'runner', label: 'Открыть RUNNER' },
  },
  {
    num: '06',
    label: 'Testing & Iteration',
    title: 'Testing & Iteration',
    text: 'Проверяю не «нравится / не нравится», а конкретные следствия правила. Если проверку нельзя повторить, результат считается наблюдением, а не доказательством.',
    bullets: [
      'Автоматические проверки данных уровней.',
      'Плейтесты и наблюдение за решениями игрока.',
      'Исправление причины, а не только симптома.',
    ],
    artifact:
      'Пример: 26 EditMode-тестов ECHOLOOP нашли четыре реальных бага в дизайне уровней.',
    action: { type: 'project', id: 'echoloop', label: 'Смотреть тесты' },
  },
];

function actionMarkup(action) {
  if (!action) return '';
  if (action.type === 'link') {
    return `<a class="btn btn--ghost btn--small" href="${escapeHtml(action.href)}" target="_blank" rel="noopener noreferrer">${icon('external')} ${escapeHtml(action.label)}</a>`;
  }
  return `<button class="btn btn--ghost btn--small" type="button" data-timeline-action="${action.type}" data-target="${escapeHtml(action.id)}">${icon('arrowUpRight')} ${escapeHtml(action.label)}</button>`;
}

function detailMarkup(step, index) {
  return `
    <div class="timeline-detail__main">
      <span class="eyebrow">Stage ${step.num} / 06</span>
      <h4>${escapeHtml(step.title)}</h4>
      <p>${escapeHtml(step.text)}</p>
      <ul>${step.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>
    </div>
    <div class="timeline-detail__aside">
      <span class="mono">Artifact</span>
      <p class="timeline-detail__artifact">${escapeHtml(step.artifact)}</p>
      ${actionMarkup(step.action)}
    </div>
  `;
}

export function debriefMarkup() {
  return `
    <section class="section" id="debrief" aria-labelledby="debrief-title">
      <div class="shell">
        <div class="section-head reveal">
          <div class="section-head__index">06 / Process</div>
          <h2 class="section-head__title" id="debrief-title">Debrief <em>approach</em></h2>
          <p class="section-head__lead">
            Шесть этапов работы над игровой задачей — от анализа до итерации.
            <strong>Выберите этап, чтобы увидеть описание и конкретный пример из портфолио.</strong>
          </p>
        </div>

        <div class="timeline" id="timeline" role="tablist" aria-label="Этапы работы над игровой задачей">
          ${STEPS.map(
            (step, index) => `
            <button class="timeline__step ${index === 0 ? 'is-active' : ''}" type="button" role="tab" id="timeline-tab-${index}" aria-selected="${index === 0 ? 'true' : 'false'}" aria-controls="timeline-panel" tabindex="${index === 0 ? '0' : '-1'}">
              <span class="timeline__num">${step.num}</span>
              <span class="timeline__label">${escapeHtml(step.label)}</span>
            </button>`,
          ).join('')}
        </div>

        <div class="timeline-detail" id="timeline-panel" role="tabpanel" tabindex="0" aria-labelledby="timeline-tab-0">
          ${detailMarkup(STEPS[0], 0)}
        </div>
      </div>
    </section>
  `;
}

export function initDebrief() {
  const timeline = document.querySelector('#timeline');
  const panel = document.querySelector('#timeline-panel');
  if (!timeline || !panel) return;

  const tabs = Array.from(timeline.querySelectorAll('[role="tab"]'));

  const select = (index) => {
    const step = STEPS[index];
    if (!step) return;
    tabs.forEach((tab, tabIndex) => {
      const active = tabIndex === index;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
      tab.setAttribute('tabindex', active ? '0' : '-1');
    });
    panel.setAttribute('aria-labelledby', `timeline-tab-${index}`);
    panel.innerHTML = detailMarkup(step, index);
    panel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(index));
    tab.addEventListener('keydown', (event) => {
      let next = index;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === index) return;
      event.preventDefault();
      select(next);
      tabs[next].focus();
    });
  });

  panel.addEventListener('click', (event) => {
    const button = event.target.closest('[data-timeline-action]');
    if (!button) return;
    if (button.dataset.timelineAction === 'project') {
      document.dispatchEvent(
        new CustomEvent('tactical:open-project', { detail: { id: button.dataset.target } }),
      );
    }
    if (button.dataset.timelineAction === 'section') {
      document.getElementById(button.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
