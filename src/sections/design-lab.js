import { balanceLabMarkup, initBalanceLab } from '../components/balance-lab.js';
import { economyLabMarkup, initEconomyLab } from '../components/economy-lab.js';
import { mobileStudyMarkup, initMobileStudy } from '../components/mobile-study.js';

const LABS = [
  { id: 'balance', letter: 'A', label: 'Tactical Balance' },
  { id: 'economy', letter: 'B', label: 'Progression & Economy' },
  { id: 'mobile', letter: 'C', label: 'Mobile Study' },
];

export function designLabMarkup() {
  return `
    <section class="section" id="lab" aria-labelledby="lab-title">
      <div class="shell">
        <div class="section-head reveal">
          <div class="section-head__index">05 / Laboratory</div>
          <h2 class="section-head__title" id="lab-title">Design <em>lab</em></h2>
          <p class="section-head__lead">
            Три рабочих инструмента: баланс оружия, экономика прогрессии и мобильный
            дизайн-кейс. <strong>Все параметры меняются, все расчёты выполняются на месте.</strong>
          </p>
        </div>

        <div class="lab-tabs" role="tablist" aria-label="Модули Design Lab">
          ${LABS.map(
            (lab, index) => `
            <button class="lab-tab ${index === 0 ? 'is-active' : ''}" type="button" role="tab" id="lab-tab-${lab.id}" aria-selected="${index === 0 ? 'true' : 'false'}" aria-controls="lab-panel-${lab.id}" tabindex="${index === 0 ? '0' : '-1'}" data-lab-tab="${lab.id}">
              <span>${lab.letter}</span> ${lab.label}
            </button>`,
          ).join('')}
        </div>

        <div class="lab-panel is-active" id="lab-panel-balance" role="tabpanel" aria-labelledby="lab-tab-balance">
          <div class="lab-frame" data-balance-lab>${balanceLabMarkup()}</div>
        </div>
        <div class="lab-panel" id="lab-panel-economy" role="tabpanel" aria-labelledby="lab-tab-economy" hidden>
          <div class="lab-frame" data-economy-lab>${economyLabMarkup()}</div>
        </div>
        <div class="lab-panel" id="lab-panel-mobile" role="tabpanel" aria-labelledby="lab-tab-mobile" hidden>
          <div class="lab-frame" data-mobile-study>${mobileStudyMarkup()}</div>
        </div>
      </div>
    </section>
  `;
}

export function initDesignLab() {
  const tabs = Array.from(document.querySelectorAll('[data-lab-tab]'));
  const panels = Array.from(document.querySelectorAll('.lab-panel'));

  const select = (id) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.labTab === id;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
      tab.setAttribute('tabindex', active ? '0' : '-1');
    });
    panels.forEach((panel) => {
      const active = panel.id === `lab-panel-${id}`;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab.dataset.labTab));
    tab.addEventListener('keydown', (event) => {
      let next = index;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === index) return;
      event.preventDefault();
      select(tabs[next].dataset.labTab);
      tabs[next].focus();
    });
  });

  initBalanceLab();
  initEconomyLab();
  initMobileStudy();
}
