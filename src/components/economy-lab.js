import { clamp } from '../lib/dom.js';

const NODES = [
  {
    id: 'workshop1',
    index: '01',
    name: 'Workshop I',
    baseCost: 800,
    reputation: 0,
    multiplier: 1.25,
    requires: null,
    unlock: 'обычные заказы',
    desc: 'Базовая мастерская: расширяет поток обычных заказов и повышает оплату на 25%.',
  },
  {
    id: 'workshop2',
    index: '02',
    name: 'Workshop II',
    baseCost: 1600,
    reputation: 3,
    multiplier: 1.6,
    requires: 'workshop1',
    unlock: 'срочные заказы',
    desc: 'Второй цех: открывает срочные заказы с повышенной оплатой и более высоким риском.',
  },
  {
    id: 'advanced',
    index: '03',
    name: 'Advanced Factory',
    baseCost: 2800,
    reputation: 6,
    multiplier: 2.1,
    requires: 'workshop2',
    unlock: 'долгосрочные контракты',
    desc: 'Продвинутое производство: долгосрочные контракты, максимальная выручка и новый уровень предприятия.',
  },
];

const initialState = () => ({
  balance: 1200,
  reputation: 0,
  purchased: [],
  selected: 'workshop1',
  reward: 180,
  costFactor: 1,
  orders: 0,
  message: 'Выберите улучшение в дереве. Заказы приносят прибыль и репутацию.',
  messageTone: '',
});

function format(value) {
  return Number(value).toLocaleString('ru-RU');
}

function multiplierOf(state) {
  const purchased = NODES.filter((node) => state.purchased.includes(node.id));
  return purchased.reduce((max, node) => Math.max(max, node.multiplier), 1);
}

function economics(state) {
  const multiplier = multiplierOf(state);
  const income = Math.round(state.reward * multiplier);
  const cost = Math.round(state.reward * 0.35);
  const net = income - cost;
  return { multiplier, income, cost, net };
}

function nodeCost(node, state) {
  return Math.round((node.baseCost * state.costFactor) / 10) * 10;
}

function nodeState(node, state) {
  if (state.purchased.includes(node.id)) return 'purchased';
  if (node.requires && !state.purchased.includes(node.requires)) return 'locked';
  if (state.reputation < node.reputation) return 'locked';
  return 'available';
}

function lockReason(node, state) {
  if (state.purchased.includes(node.id)) return 'Уже куплено';
  if (node.requires && !state.purchased.includes(node.requires)) {
    const required = NODES.find((item) => item.id === node.requires);
    return `Сначала купите ${required?.name || 'предыдущее улучшение'}`;
  }
  if (state.reputation < node.reputation) {
    return `Нужно ${node.reputation} репутации (сейчас ${state.reputation})`;
  }
  return '';
}

function selectedNode(state) {
  return NODES.find((node) => node.id === state.selected) || NODES[0];
}

export function economyLabMarkup() {
  return `
    <div class="lab-head">
      <div>
        <h3>Progression &amp; Economy Lab</h3>
        <p>
          Демонстрационная экономика производственного предприятия. Покупайте улучшения,
          выполняйте заказы и сравнивайте окупаемость. Репутация открывает следующие уровни,
          а стоимость и награда настраиваются ползунками.
        </p>
      </div>
      <span class="lab-head__tag">Module B / Demo data</span>
    </div>

    <div class="economy-grid">
      <div class="economy-left">
        <div class="economy-stats">
          <div class="economy-stat"><span>Enterprise level</span><b id="economy-level">01</b></div>
          <div class="economy-stat"><span>Balance</span><b class="is-sand" id="economy-balance">1 200</b></div>
          <div class="economy-stat"><span>Reputation</span><b id="economy-reputation">0</b></div>
          <div class="economy-stat"><span>Net / order</span><b id="economy-net">+117</b></div>
        </div>

        <div class="tree" id="economy-tree" role="group" aria-label="Дерево развития предприятия">
          ${NODES.map(
            (node) => `
            <button class="tree-node" type="button" data-node="${node.id}" aria-pressed="false">
              <span class="tree-node__top">
                <span class="tree-node__num">${node.index}</span>
                <span class="tree-node__state" data-node-state="${node.id}">—</span>
              </span>
              <span class="tree-node__name">${node.name}</span>
              <span class="tree-node__desc">${node.desc}</span>
              <span class="tree-node__cost" data-node-cost="${node.id}">—</span>
            </button>`,
          ).join('')}
        </div>

        <div class="economy-summary">
          <div><span>Чистая прибыль / заказ</span><b class="is-sand" id="economy-summary-net">+117 cr</b></div>
          <div><span>Окупаемость выбранного</span><b id="economy-payback">7 заказов</b></div>
          <div><span>Следующая возможность</span><b id="economy-next">Workshop II</b></div>
        </div>
      </div>

      <div class="economy-right">
        <div class="economy-controls">
          <div class="economy-controls__head">
            <h4>Control panel</h4>
            <span class="mono muted">Config</span>
          </div>
          <div class="slider-row">
            <div class="slider-row__top">
              <label class="slider-row__label" for="economy-reward">Order reward</label>
              <span class="slider-row__value"><b id="economy-reward-value">180</b> cr</span>
            </div>
            <input id="economy-reward" type="range" min="100" max="400" step="10" value="180" style="--fill: 26.7%" />
          </div>
          <div class="slider-row">
            <div class="slider-row__top">
              <label class="slider-row__label" for="economy-cost">Upgrade cost</label>
              <span class="slider-row__value"><b id="economy-cost-value">100</b> %</span>
            </div>
            <input id="economy-cost" type="range" min="50" max="200" step="5" value="100" style="--fill: 33.3%" />
          </div>
          <div class="economy-actions">
            <button class="btn btn--primary" type="button" id="economy-order">Выполнить заказ</button>
            <button class="btn btn--ghost" type="button" id="economy-buy">Купить улучшение</button>
          </div>
          <button class="btn btn--ghost btn--small btn--block" type="button" id="economy-reset" style="margin-top:8px">Сбросить экономику</button>
          <div class="economy-message" id="economy-message" role="status" aria-live="polite"></div>
        </div>

        <div class="economy-selected" id="economy-selected">
          <span class="mono sand" id="economy-selected-title">Selected / Workshop I</span>
          <p id="economy-selected-desc">—</p>
          <div class="economy-selected__req" id="economy-selected-req">—</div>
        </div>

        <div class="economy-note">
          <b>Как читать модель</b>
          <p>
            Награда × множитель текущего предприятия = доход заказа. Себестоимость —
            35% базовой награды. Окупаемость — стоимость улучшения, делённая на чистую
            прибыль одного заказа.
          </p>
        </div>
      </div>
    </div>
    <p class="lab-note">
      Демонстрационная модель, не связанная с реальным балансом проекта «Механизм».
      Все значения можно менять ползунками; улучшения покупаются за игровую валюту.
    </p>
  `;
}

export function initEconomyLab() {
  const root = document.querySelector('[data-economy-lab]');
  if (!root) return;

  let state = initialState();

  const level = root.querySelector('#economy-level');
  const balance = root.querySelector('#economy-balance');
  const reputation = root.querySelector('#economy-reputation');
  const netNode = root.querySelector('#economy-net');
  const message = root.querySelector('#economy-message');
  const summaryNet = root.querySelector('#economy-summary-net');
  const paybackNode = root.querySelector('#economy-payback');
  const nextNode = root.querySelector('#economy-next');
  const selectedTitle = root.querySelector('#economy-selected-title');
  const selectedDesc = root.querySelector('#economy-selected-desc');
  const selectedReq = root.querySelector('#economy-selected-req');
  const buyButton = root.querySelector('#economy-buy');
  const rewardInput = root.querySelector('#economy-reward');
  const costInput = root.querySelector('#economy-cost');
  const rewardValue = root.querySelector('#economy-reward-value');
  const costValue = root.querySelector('#economy-cost-value');

  const setMessage = (text, tone = '') => {
    state.message = text;
    state.messageTone = tone;
  };

  const render = () => {
    const eco = economics(state);
    const node = selectedNode(state);
    const cost = nodeCost(node, state);
    const status = nodeState(node, state);
    const payback = eco.net > 0 ? Math.ceil(cost / eco.net) : Infinity;

    level.textContent = String(1 + state.purchased.length).padStart(2, '0');
    balance.textContent = format(state.balance);
    reputation.textContent = format(state.reputation);
    netNode.textContent = `${eco.net >= 0 ? '+' : ''}${format(eco.net)}`;
    summaryNet.textContent = `${eco.net >= 0 ? '+' : ''}${format(eco.net)} cr`;
    paybackNode.textContent =
      status === 'purchased' ? '—' : Number.isFinite(payback) ? `${format(payback)} заказов` : 'не окупается';

    const next = NODES.find((item) => !state.purchased.includes(item.id));
    if (next) {
      const nextStatus = nodeState(next, state);
      nextNode.textContent = nextStatus === 'locked' ? `${next.name} · ${lockReason(next, state)}` : next.name;
    } else {
      nextNode.textContent = 'Все улучшения куплены';
    }

    root.querySelectorAll('[data-node]').forEach((button) => {
      const nodeData = NODES.find((item) => item.id === button.dataset.node);
      if (!nodeData) return;
      const nodeStatus = nodeState(nodeData, state);
      const nodePrice = nodeCost(nodeData, state);
      button.classList.toggle('is-purchased', nodeStatus === 'purchased');
      button.classList.toggle('is-locked', nodeStatus === 'locked');
      button.classList.toggle('is-selected', nodeData.id === state.selected);
      button.setAttribute('aria-pressed', nodeData.id === state.selected ? 'true' : 'false');
      button.title = nodeStatus === 'locked' ? lockReason(nodeData, state) : nodeData.desc;

      const stateLabel = button.querySelector(`[data-node-state="${nodeData.id}"]`);
      if (stateLabel) {
        stateLabel.textContent =
          nodeStatus === 'purchased'
            ? 'Куплено'
            : nodeStatus === 'locked'
              ? 'Заблокировано'
              : nodeData.id === state.selected
                ? 'Выбрано'
                : 'Доступно';
      }
      const costLabel = button.querySelector(`[data-node-cost="${nodeData.id}"]`);
      if (costLabel) costLabel.textContent = nodeStatus === 'purchased' ? '—' : `${format(nodePrice)} cr`;
    });

    selectedTitle.textContent = `Selected / ${node.name}`;
    selectedDesc.textContent = node.desc;
    if (status === 'purchased') {
      selectedReq.innerHTML = `<span class="is-ok">Куплено. Множитель предприятия: ×${node.multiplier}.</span>`;
    } else if (status === 'locked') {
      selectedReq.innerHTML = `<span class="is-warn">${lockReason(node, state)}</span>`;
    } else {
      selectedReq.innerHTML = `Стоимость: <b>${format(cost)} cr</b> · окупаемость: <b>${Number.isFinite(payback) ? `${format(payback)} заказов` : '—'}</b> · открывает: <b>${node.unlock}</b>`;
    }

    if (buyButton) {
      buyButton.textContent =
        status === 'purchased' ? 'Уже куплено' : `Купить: ${format(cost)} cr`;
    }

    message.textContent = state.message;
    message.classList.toggle('is-ok', state.messageTone === 'ok');
    message.classList.toggle('is-warn', state.messageTone === 'warn');

    rewardValue.textContent = format(state.reward);
    costValue.textContent = format(Math.round(state.costFactor * 100));
    rewardInput.value = state.reward;
    costInput.value = Math.round(state.costFactor * 100);
    rewardInput.style.setProperty('--fill', `${((state.reward - 100) / 300) * 100}%`);
    costInput.style.setProperty('--fill', `${((state.costFactor * 100 - 50) / 150) * 100}%`);
  };

  root.querySelectorAll('[data-node]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selected = button.dataset.node;
      const node = selectedNode(state);
      const status = nodeState(node, state);
      if (status === 'locked') {
        setMessage(`${node.name}: ${lockReason(node, state)}`, 'warn');
      } else if (status === 'purchased') {
        setMessage(`${node.name} уже куплен. Выберите следующее улучшение.`, '');
      } else {
        setMessage(`${node.name} выбран. Проверьте стоимость и окупаемость.`, '');
      }
      render();
    });
  });

  root.querySelector('#economy-order')?.addEventListener('click', () => {
    const eco = economics(state);
    state.balance += eco.net;
    state.reputation += 1;
    state.orders += 1;
    setMessage(
      `Заказ выполнен: +${format(eco.net)} cr прибыли, +1 репутации. Всего заказов: ${state.orders}.`,
      'ok',
    );
    render();
  });

  buyButton?.addEventListener('click', () => {
    const node = selectedNode(state);
    const status = nodeState(node, state);
    const cost = nodeCost(node, state);

    if (status === 'purchased') {
      setMessage(`${node.name} уже куплен.`, '');
      render();
      return;
    }
    if (status === 'locked') {
      setMessage(`${node.name}: ${lockReason(node, state)}`, 'warn');
      render();
      return;
    }
    if (state.balance < cost) {
      setMessage(
        `Не хватает ${format(cost - state.balance)} cr. Выполните ещё заказы или снизьте стоимость улучшений.`,
        'warn',
      );
      render();
      return;
    }

    state.balance -= cost;
    state.purchased.push(node.id);
    const next = NODES.find((item) => !state.purchased.includes(item.id));
    if (next) state.selected = next.id;
    setMessage(`${node.name} куплен. Открыто: ${node.unlock}. Уровень предприятия: ${1 + state.purchased.length}.`, 'ok');
    render();
  });

  rewardInput?.addEventListener('input', () => {
    state.reward = Number(rewardInput.value);
    setMessage('Награда за заказ изменена. Пересчитайте окупаемость улучшений.', '');
    render();
  });

  costInput?.addEventListener('input', () => {
    state.costFactor = Number(costInput.value) / 100;
    setMessage('Стоимость улучшений изменена. Проверьте, какие уровни теперь доступны.', '');
    render();
  });

  root.querySelector('#economy-reset')?.addEventListener('click', () => {
    state = initialState();
    setMessage('Экономика сброшена к стартовым значениям.', '');
    render();
  });

  render();
}
