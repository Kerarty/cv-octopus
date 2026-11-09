import { clamp } from '../lib/dom.js';
import { toast } from './interactions.js';

const CONTROLS = {
  stick: {
    title: 'Виртуальный стик',
    zone: 'Нижний левый угол',
    desc: 'Движение и стрейф. Стик не должен пересекаться с зоной обзора: палец, лежащий на нём, не вращает камеру.',
    rule: 'Радиус 64–80 px, мёртвая зона 10–12%, кольцо подсвечивается при касании.',
    feedback: 'Кольцо и точка касания показывают, что ввод принят.',
  },
  fire: {
    title: 'Огонь',
    zone: 'Нижний правый угол',
    desc: 'Основное действие под большой палец. Кнопка крупнее остальных и отделена от зоны прицеливания, чтобы не нажиматься случайно.',
    rule: 'Диаметр 56–64 px, не ближе 16 px к краю экрана.',
    feedback: 'Вспышка, отдача, звук и трассер подтверждают выстрел.',
  },
  aim: {
    title: 'Прицеливание (ADS)',
    zone: 'Над кнопкой огня',
    desc: 'Переход в оптику меняет FOV и чувствительность. Выход — повторное нажатие; состояние должно читаться без текста.',
    rule: 'В пределах большого пальца, не перекрывает центр обзора.',
    feedback: 'Плавный zoom 120–160 мс, прицел меняет форму, HUD приглушается.',
  },
  reload: {
    title: 'Перезарядка',
    zone: 'Рядом с огнём',
    desc: 'Редкое действие. На мобильном его можно оставить отдельной кнопкой или автоматизировать, если перезарядка не является решением.',
    rule: 'Вне зоны свайпа камеры; 44 px минимум.',
    feedback: 'Счётчик патронов, анимация и короткая тактильная отдача.',
  },
  jump: {
    title: 'Прыжок',
    zone: 'Верхний правый блок',
    desc: 'Дополнительное действие. На мобильном лучше не перегружать основной кластер: прыжок нужен реже, чем огонь и обзор.',
    rule: '44 px минимум, но вне зоны обзора.',
    feedback: 'Короткая анимация камеры и изменение высоты силуэта.',
  },
  crouch: {
    title: 'Присесть',
    zone: 'Верхний правый блок',
    desc: 'Меняет силуэт и точность. В шутере важно, чтобы состояние читалось и не включалось случайно во время свайпа.',
    rule: 'Рядом с прыжком, зазор 8 px.',
    feedback: 'Иконка состояния в HUD и опущенная камера.',
  },
  look: {
    title: 'Зона обзора',
    zone: 'Правая половина экрана',
    desc: 'Свайп вращает камеру. Чувствительность зависит от FOV и режима прицеливания; на краях экрана свайп не должен начинаться на органе управления.',
    rule: 'Не перекрывать кнопками; свайп начинается только на свободной области.',
    feedback: 'Кроссхейр, лёгкий сдвиг мира и отсутствие рывков.',
  },
};

export function mobileStudyMarkup() {
  return `
    <div class="lab-head">
      <div>
        <h3>Mobile Gameplay Design Study</h3>
        <p>
          Концептуальное исследование адаптации тактического FPS под сенсорное управление.
          Нажимайте на элементы макета, меняйте чувствительность и проверяйте,
          как раскладка влияет на обзор и обратную связь.
        </p>
      </div>
      <span class="lab-head__tag">Module C / Concept study</span>
    </div>

    <div class="mobile-study">
      <div class="phone-stage">
        <div class="phone" id="study-phone">
          <div class="phone__screen" id="phone-screen">
            <div class="phone__world" id="phone-world">
              <div class="phone__building phone__building--1"></div>
              <div class="phone__building phone__building--2"></div>
              <div class="phone__building phone__building--3"></div>
              <div class="phone__target"></div>
            </div>
            <div class="phone__hud">
              <div class="phone__compass">N 000 / E 090</div>
              <div class="phone__health"><i></i><i></i><i></i><span>100</span></div>
              <div class="phone__minimap"></div>
              <div class="phone__ammo"><b id="phone-ammo">30</b> / 30</div>
            </div>
            <div class="crosshair"><i></i></div>
            <div class="phone__scope"></div>
            <div class="muzzle" id="phone-muzzle"></div>
            <div class="hitmarker" id="phone-hitmarker"></div>
            <div class="phone__controls">
              <button class="phone__control phone__control--stick" type="button" data-control="stick" aria-label="Виртуальный стик">
                <span class="sr-only">Виртуальный стик</span>
              </button>
              <button class="phone__control phone__control--fire" type="button" data-control="fire" aria-label="Огонь">FIRE</button>
              <button class="phone__control phone__control--aim" type="button" data-control="aim" aria-label="Прицеливание">ADS</button>
              <button class="phone__control phone__control--reload" type="button" data-control="reload" aria-label="Перезарядка">R</button>
              <button class="phone__control phone__control--jump" type="button" data-control="jump" aria-label="Прыжок">JMP</button>
              <button class="phone__control phone__control--crouch" type="button" data-control="crouch" aria-label="Присесть">CRCH</button>
              <button class="phone__control phone__control--look" type="button" data-control="look" aria-label="Зона обзора — свайп для поворота камеры">
                LOOK / SWIPE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-study__side">
        <div class="study-info">
          <div class="study-info__top">
            <h4 id="study-title">Зона обзора</h4>
            <span class="study-info__zone" id="study-zone">Правая половина</span>
          </div>
          <p id="study-desc">
            Свайп вращает камеру. Чувствительность зависит от FOV и режима прицеливания;
            на краях экрана свайп не должен начинаться на органе управления.
          </p>
          <div class="study-info__grid">
            <div class="study-info__box"><b>Правило</b><span id="study-rule">Не перекрывать кнопками; свайп начинается только на свободной области.</span></div>
            <div class="study-info__box"><b>Обратная связь</b><span id="study-feedback">Кроссхейр, лёгкий сдвиг мира и отсутствие рывков.</span></div>
          </div>
        </div>

        <div class="study-controls">
          <div class="study-controls__row">
            <span>Sensitivity</span>
            <input id="study-sensitivity" type="range" min="1" max="10" step="1" value="6" aria-label="Чувствительность камеры" />
            <b id="study-sensitivity-value">6</b>
          </div>
          <div class="study-controls__row">
            <span>Feedback</span>
            <button class="toggle-btn is-on" type="button" id="study-feedback-toggle" aria-pressed="true">On</button>
            <span>Layout</span>
            <button class="toggle-btn" type="button" id="study-layout" aria-pressed="false">Right hand</button>
          </div>
          <div class="study-controls__row">
            <span>Mode</span>
            <button class="toggle-btn" type="button" id="study-ads-toggle" aria-pressed="false">ADS</button>
            <button class="toggle-btn" type="button" id="study-reset">Reset</button>
          </div>
          <div class="study-legend">
            <span><i></i>Нажмите на элемент</span>
            <span><i></i>Свайп в зоне LOOK</span>
            <span><i></i>Демонстрационный макет</span>
          </div>
        </div>
      </div>
    </div>
    <p class="lab-note">
      Самостоятельное концептуальное исследование, а не описание реальной разработки
      Sniper: Ghost Warrior. Макет не использует игровые ассеты и не является playable-прототипом.
    </p>
  `;
}

export function initMobileStudy() {
  const root = document.querySelector('[data-mobile-study]');
  if (!root) return;

  const phone = root.querySelector('#study-phone');
  const screen = root.querySelector('#phone-screen');
  const world = root.querySelector('#phone-world');
  const ammoNode = root.querySelector('#phone-ammo');
  const title = root.querySelector('#study-title');
  const zone = root.querySelector('#study-zone');
  const desc = root.querySelector('#study-desc');
  const rule = root.querySelector('#study-rule');
  const feedback = root.querySelector('#study-feedback');
  const sensitivity = root.querySelector('#study-sensitivity');
  const sensitivityValue = root.querySelector('#study-sensitivity-value');
  const feedbackToggle = root.querySelector('#study-feedback-toggle');
  const layoutToggle = root.querySelector('#study-layout');
  const adsToggle = root.querySelector('#study-ads-toggle');
  const muzzle = root.querySelector('#phone-muzzle');
  const hitmarker = root.querySelector('#phone-hitmarker');

  let ammo = 30;
  let feedbackOn = true;
  let ads = false;
  let lefty = false;
  let crouched = false;
  let panX = 0;
  let panY = 0;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;

  const applyCamera = () => {
    world.style.setProperty('--pan-x', `${panX}px`);
    world.style.setProperty('--pan-y', `${panY}px`);
  };

  const renderAmmo = () => {
    ammoNode.textContent = String(ammo).padStart(2, '0');
    ammoNode.style.color = ammo === 0 ? 'var(--danger)' : '';
  };

  const setInfo = (key) => {
    const info = CONTROLS[key];
    if (!info) return;
    title.textContent = info.title;
    zone.textContent = info.zone;
    desc.textContent = info.desc;
    rule.textContent = info.rule;
    feedback.textContent = info.feedback;
    root.querySelectorAll('[data-control]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.control === key);
    });
  };

  const flashFeedback = () => {
    if (!feedbackOn) return;
    phone.classList.remove('phone__recoil');
    void phone.offsetWidth;
    phone.classList.add('phone__recoil');
    muzzle.classList.remove('is-fire');
    void muzzle.offsetWidth;
    muzzle.classList.add('is-fire');
    hitmarker.classList.remove('is-hit');
    void hitmarker.offsetWidth;
    hitmarker.classList.add('is-hit');
  };

  const setAds = (value) => {
    ads = value;
    phone.classList.toggle('phone--ads', ads);
    adsToggle.classList.toggle('is-on', ads);
    adsToggle.setAttribute('aria-pressed', ads ? 'true' : 'false');
    adsToggle.textContent = ads ? 'ADS on' : 'ADS';
  };

  const setLefty = (value) => {
    lefty = value;
    phone.classList.toggle('phone--lefty', lefty);
    layoutToggle.classList.toggle('is-on', lefty);
    layoutToggle.setAttribute('aria-pressed', lefty ? 'true' : 'false');
    layoutToggle.textContent = lefty ? 'Left hand' : 'Right hand';
  };

  const setCrouch = (value) => {
    crouched = value;
    panY = crouched ? 12 : 0;
    applyCamera();
    root.querySelector('[data-control="crouch"]')?.classList.toggle('is-active', crouched);
  };

  const fire = () => {
    if (ammo <= 0) {
      feedback.textContent = 'Магазин пуст. Нажмите R, чтобы перезарядиться.';
      toast('Магазин пуст — перезарядка');
      return;
    }
    ammo -= 1;
    renderAmmo();
    flashFeedback();
  };

  const reload = () => {
    ammo = 30;
    renderAmmo();
    toast('Магазин перезаряжен: 30 / 30');
  };

  root.querySelectorAll('[data-control]').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.control;
      setInfo(key);
      if (key === 'fire') fire();
      if (key === 'reload') reload();
      if (key === 'aim') setAds(!ads);
      if (key === 'stick') setLefty(!lefty);
      if (key === 'jump') {
        panY = -16;
        applyCamera();
        window.setTimeout(() => {
          panY = crouched ? 12 : 0;
          applyCamera();
        }, 220);
      }
      if (key === 'crouch') setCrouch(!crouched);
    });
  });

  screen.querySelector('[data-control="look"]')?.addEventListener('pointerdown', (event) => {
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    screen.style.cursor = 'grabbing';
  });

  screen.querySelector('[data-control="look"]')?.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    const multiplier = (Number(sensitivity.value) / 5) * (ads ? 0.55 : 1);
    panX = clamp(panX + (event.clientX - lastX) * multiplier, -46, 46);
    panY = clamp(panY + (event.clientY - lastY) * multiplier, -30, 30);
    lastX = event.clientX;
    lastY = event.clientY;
    applyCamera();
  });

  const stopDrag = () => {
    dragging = false;
    screen.style.cursor = '';
  };
  screen.querySelector('[data-control="look"]')?.addEventListener('pointerup', stopDrag);
  screen.querySelector('[data-control="look"]')?.addEventListener('pointercancel', stopDrag);
  screen.querySelector('[data-control="look"]')?.addEventListener('pointerleave', stopDrag);

  sensitivity?.addEventListener('input', () => {
    sensitivityValue.textContent = sensitivity.value;
    sensitivity.style.setProperty('--fill', `${((Number(sensitivity.value) - 1) / 9) * 100}%`);
  });

  feedbackToggle?.addEventListener('click', () => {
    feedbackOn = !feedbackOn;
    feedbackToggle.classList.toggle('is-on', feedbackOn);
    feedbackToggle.setAttribute('aria-pressed', feedbackOn ? 'true' : 'false');
    feedbackToggle.textContent = feedbackOn ? 'On' : 'Off';
    toast(feedbackOn ? 'Обратная связь включена' : 'Обратная связь выключена');
  });

  layoutToggle?.addEventListener('click', () => setLefty(!lefty));

  adsToggle?.addEventListener('click', () => {
    setAds(!ads);
    setInfo('aim');
  });

  root.querySelector('#study-reset')?.addEventListener('click', () => {
    ammo = 30;
    renderAmmo();
    setAds(false);
    setLefty(false);
    setCrouch(false);
    panX = 0;
    panY = 0;
    applyCamera();
    feedbackOn = true;
    feedbackToggle.classList.add('is-on');
    feedbackToggle.setAttribute('aria-pressed', 'true');
    feedbackToggle.textContent = 'On';
    sensitivity.value = 6;
    sensitivityValue.textContent = '6';
    sensitivity.style.setProperty('--fill', '55.6%');
    setInfo('look');
    toast('Макет сброшен');
  });

  renderAmmo();
  sensitivity.style.setProperty('--fill', '55.6%');
  setInfo('look');
}
