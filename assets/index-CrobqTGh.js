(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=a(n);fetch(n.href,l)}})();function i(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function k(e,t=document){return t.querySelector(e)}function F(e,t=document){return Array.from(t.querySelectorAll(e))}function X(e,t,a){return Math.min(a,Math.max(t,e))}function fe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const v=e=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${e}</svg>`,ce={target:v('<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>'),crosshair:v('<path d="M12 3v5M12 16v5M3 12h5M16 12h5"/><circle cx="12" cy="12" r="3.2"/><circle cx="12" cy="12" r="8.4" stroke-dasharray="2 4"/>'),code:v('<path d="M8.5 6.5 3 12l5.5 5.5M15.5 6.5 21 12l-5.5 5.5M13.5 4l-3 16"/>'),tool:v('<path d="M14.5 6.5a4.2 4.2 0 0 0 5.4 5.4L11 20.8a2.1 2.1 0 0 1-3-3L16.9 8.9"/><path d="m14.5 6.5 2.2-2.2a4.2 4.2 0 0 1 2.9 2.9l-2.2 2.2"/>'),book:v('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 18.5V5.5M8 7h8M8 11h6"/>'),download:v('<path d="M12 3v12M7 10l5 5 5-5M4 19h16"/>'),arrow:v('<path d="M4 12h16M14 6l6 6-6 6"/>'),arrowUpRight:v('<path d="M6 18 18 6M8 6h10v10"/>'),external:v('<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>'),play:v('<path d="M8 5v14l11-7z"/>'),mail:v('<path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/>'),phone:v('<path d="M7 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5L16 12.5l5 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5 5.2 2 2 0 0 1 7 3z"/>'),github:v('<path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.5 1.3a12.2 12.2 0 0 0-6.2 0C6.4 3.8 5.4 4.1 5.4 4.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22"/>'),copy:v('<rect x="8" y="8" width="12" height="12"/><path d="M16 8V4H4v12h4"/>'),close:v('<path d="M5 5l14 14M19 5 5 19"/>'),menu:v('<path d="M3 6h18M3 12h18M3 18h18"/>'),check:v('<path d="m4 12 5 5L20 6"/>'),reset:v('<path d="M4 4v6h6"/><path d="M4.5 10a8 8 0 1 1 1 6"/>'),chevronDown:v('<path d="m5 9 7 7 7-7"/>'),layers:v('<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>'),shield:v('<path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z"/><path d="m9 12 2 2 4-4"/>'),chart:v('<path d="M4 20V4M4 20h16M8 16v-5M12 16V7M16 16v-8M20 16V5"/>'),clock:v('<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>'),map:v('<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>'),coins:v('<ellipse cx="9" cy="7" rx="5" ry="2.5"/><path d="M4 7v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7"/><path d="M4 11v4c0 1.4 2.2 2.5 5 2.5 1.2 0 2.3-.2 3.1-.6"/><ellipse cx="16" cy="13" rx="4" ry="2"/><path d="M12 13v4c0 1.1 1.8 2 4 2s4-.9 4-2v-4"/>'),phoneDevice:v('<rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M10 5h4M11 18.5h2"/>'),eye:v('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>'),zap:v('<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>'),info:v('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>'),plus:v('<path d="M12 5v14M5 12h14"/>'),minus:v('<path d="M5 12h14"/>')};function w(e){return ce[e]||ce.target}let de=0;function G(e){const t=k("#toast");t&&(t.textContent=e,t.classList.add("is-visible"),window.clearTimeout(de),de=window.setTimeout(()=>t.classList.remove("is-visible"),2600))}function we(){return'<div class="toast" id="toast" role="status" aria-live="polite"></div>'}async function Le(e,t="Скопировано"){try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(e);else{const a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="fixed",a.style.opacity="0",document.body.append(a),a.select(),document.execCommand("copy"),a.remove()}return G(t),!0}catch{return G("Не удалось скопировать — выделите текст вручную"),!1}}function Ae(){const e=Array.from(document.querySelectorAll(".reveal"));if(!e.length)return;if(fe()||!("IntersectionObserver"in window)){e.forEach(a=>a.classList.add("is-visible"));return}const t=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),t.unobserve(s.target))})},{rootMargin:"0px 0px -12% 0px",threshold:.08});e.forEach(a=>t.observe(a))}function Ee(){return`
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
      <button class="init-screen__skip" id="init-skip" type="button">Skip ${w("arrow")}</button>
    </div>
  `}function Ce(){const e=k("#init-screen");if(!e)return;const t=k("#init-skip",e),a=k("#init-status",e),s=k("#init-percent",e),n=Array.from(e.querySelectorAll("[data-init-line]")),l=[];let o=!1;const u=()=>{o||(o=!0,l.forEach(f=>window.clearTimeout(f)),e.classList.add("is-hidden"),e.setAttribute("aria-hidden","true"),window.setTimeout(()=>e.remove(),500),document.body.classList.remove("is-initializing"))};fe()?(n.forEach(f=>f.classList.add("is-ok")),a.textContent="Access granted",s.textContent="100%",l.push(window.setTimeout(u,250))):(document.body.classList.add("is-initializing"),l.push(window.setTimeout(()=>{a.textContent="Loading profile",s.textContent="42%",n[0]?.classList.add("is-ok")},360),window.setTimeout(()=>{a.textContent="Verifying portfolio",s.textContent="78%",n[1]?.classList.add("is-ok")},740),window.setTimeout(()=>{a.textContent="Access granted",s.textContent="100%",n[2]?.classList.add("is-ok")},1080),window.setTimeout(u,1320))),t?.addEventListener("click",u),document.addEventListener("keydown",f=>{f.key==="Escape"&&!o&&u()})}function ge(e=document){e.querySelectorAll("[data-copy]").forEach(t=>{t.dataset.copyReady!=="true"&&(t.dataset.copyReady="true",t.addEventListener("click",()=>{const a=t.getAttribute("data-copy"),s=t.getAttribute("data-copy-message")||"Скопировано";a&&Le(a,s)}))})}const E={role:"Game Designer",email:"kukar.yar@gmail.com",phone:"+375 44 783-84-89",phoneHref:"+375447838489",github:"https://github.com/Kerarty",summary:"Начинающий геймдизайнер с техническим образованием в области информационных систем и технологий игровой индустрии. Интересуюсь проектированием игровых механик, игровых систем, баланса и прогрессии. Имею опыт разработки собственных игровых прототипов на Unity и работы над игровыми концепциями.",about:["Геймдизайнер с профильным техническим образованием в сфере игровой индустрии. Хорошо понимаю основные игровые механики проекта и особенно интересуюсь балансом техники, боевыми характеристиками, экономикой и влиянием изменений на игровой процесс.","Имею аналитический и системный склад мышления, техническую базу в программировании и работе с данными. Владею основами геймдизайна, баланса и анализа игровых систем, самостоятельно изучаю соответствующие подходы и развиваю собственные проекты.","Техническое образование позволяет хорошо понимать взаимосвязь между дизайном механики и её реализацией, а опыт тестирования — системно искать проблемы и проверять изменения."],principle:"Механика — это не список кнопок. Это правило, из которого рождается решение игрока.",stats:[{value:"4",label:"проекта в портфолио"},{value:"8",label:"уровней ECHOLOOP"},{value:"26",label:"EditMode-тестов"},{value:"472",label:"КБ playable-билд"}],education:{institution:"БГУИР",fullName:"Белорусский государственный университет информатики и радиоэлектроники",program:"Информационные системы и технологии в игровой индустрии",degree:"Бакалавр, инженер-программист",years:"2023 — 2027",current:"4-й курс",note:"Выпуск 2027 · дипломная работа — производственная симуляция «Механизм» на Unity"},languages:[{name:"Русский",level:"родной"},{name:"Английский",level:"A2"},{name:"Белорусский",level:"свободно"}],interests:[{title:"Gameplay Design",short:"Правила, из которых складывается опыт игрока.",more:"Проектирую базовые действия, ограничения и обратную связь так, чтобы у игрока появлялись осмысленные решения. В ECHOLOOP это правило эха, в MOB RUSH — выбор ворот за долю секунды."},{title:"Game Systems",short:"Связанные механики вместо набора отдельных фич.",more:"Смотрю на игру как на систему: как изменения одного параметра отражаются на остальных. В «Механизме» материалы, персонал и заказы связаны в один производственный цикл."},{title:"Game Balance",short:"Числа, которые делают выбор интересным.",more:"Работаю с боевыми характеристиками, временем, стоимостью и риском. Проверяю баланс через расчёты, таблицы и плейтесты, а не только через ощущение «так кажется правильнее»."},{title:"Game Progression",short:"Рост игрока и открытие новых возможностей.",more:"Проектирую последовательность уровней, улучшений и наград так, чтобы сложность росла вместе с пониманием механик. В ECHOLOOP каждый уровень вводит одно новое следствие правила."},{title:"Level Design",short:"Пространство как часть правила.",more:"Строю уровни вокруг конкретной механики: где игрок должен остановиться, что попробовать и какое решение найти. Проверяю проходимость данными и тестами, а не только ручным прохождением."},{title:"Mobile Games",short:"Короткая сессия, понятный ввод, быстрый цикл.",more:"Изучаю мобильный геймплей: тач-управление, онбординг без текста, длину сессии и читаемость интерфейса. MOB RUSH — практический пример playable-сессии на 25–35 секунд."}],approach:[{title:"Сначала задача",text:"Начинаю с вопроса, какое решение должен принять игрок. Механика появляется как ответ, а не как список возможностей."},{title:"Потом система",text:"Раскладываю механику на параметры, состояния и обратную связь. Проверяю, что изменения не ломают соседние системы."},{title:"Затем проверка",text:"Считаю, документирую и тестирую. Если правило нельзя проверить — его нельзя считать спроектированным."}]},ae=[{id:"briefing",index:"01",label:"Briefing"},{id:"profile",index:"02",label:"Profile"},{id:"equipment",index:"03",label:"Equipment"},{id:"missions",index:"04",label:"Missions"},{id:"lab",index:"05",label:"Design Lab"},{id:"debrief",index:"06",label:"Debrief"},{id:"contact",index:"07",label:"Contact"}],Pe=`
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="17" fill="none" stroke="#C49A55" stroke-width="1.5"/>
    <circle cx="32" cy="32" r="4" fill="#C49A55"/>
    <path d="M32 6v12M32 46v12M6 32h12M46 32h12" stroke="#C49A55" stroke-width="1.5"/>
    <path d="M18 18l6 6M46 18l-6 6M18 46l6-6M46 46l-6-6" stroke="#344B3D" stroke-width="1.5"/>
  </svg>
`;function Oe(){const e=ae.map(a=>`
        <a class="nav__link" href="#${a.id}" data-nav="${a.id}">
          <span class="nav__num">${a.index}</span>${i(a.label)}
        </a>`).join(""),t=ae.map(a=>`
        <a class="mobile-menu__link" href="#${a.id}" data-mobile-nav>
          ${i(a.label)} <span>${a.index}</span>
        </a>`).join("");return`
    <header class="site-header" id="site-header">
      <div class="site-header__inner">
        <a class="brand" href="#briefing" aria-label="TACTICAL DESIGN — в начало">
          <span class="brand__mark">${Pe}</span>
          <span class="brand__text">
            <span class="brand__name">Tactical Design</span>
            <span class="brand__sub">Personnel database / GD-180</span>
          </span>
        </a>
        <nav class="nav" aria-label="Основная навигация">${e}</nav>
        <div class="header-actions">
          <span class="status-pill">System online</span>
          <a class="btn btn--primary btn--small" href="./docs/Yaroslav_Kukar_CV.pdf" download="Yaroslav_Kukar_CV.pdf">
            ${w("download")} Download CV
          </a>
          <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Открыть меню">
            ${w("menu")}
          </button>
        </div>
      </div>
      <span class="scroll-progress" id="scroll-progress" aria-hidden="true"></span>
    </header>
    <div class="mobile-menu" id="mobile-menu">
      <nav class="mobile-menu__nav" aria-label="Мобильная навигация">${t}</nav>
      <div class="mobile-menu__footer">
        <span class="mono muted">${i(E.role)} / Minsk</span>
        <a class="btn btn--primary btn--small" href="./docs/Yaroslav_Kukar_CV.pdf" download="Yaroslav_Kukar_CV.pdf">
          ${w("download")} CV
        </a>
      </div>
    </div>
  `}function De(){const e=k("#site-header"),t=k("#menu-toggle"),a=k("#mobile-menu"),s=k("#scroll-progress"),n=F("[data-nav]"),l=F("[data-mobile-nav]"),o=ae.map(r=>document.getElementById(r.id)).filter(Boolean),u=()=>{!a||!t||(a.classList.remove("is-open"),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Открыть меню"),t.innerHTML=w("menu"))},f=()=>{!a||!t||(a.classList.add("is-open"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Закрыть меню"),t.innerHTML=w("close"))};t?.addEventListener("click",()=>{a?.classList.contains("is-open")?u():f()}),l.forEach(r=>r.addEventListener("click",u)),document.addEventListener("keydown",r=>{r.key==="Escape"&&u()}),window.addEventListener("resize",()=>{window.innerWidth>1024&&u()});let b=!1;const c=()=>{b=!1;const r=window.scrollY||document.documentElement.scrollTop,h=document.documentElement.scrollHeight-window.innerHeight,_=h>0?Math.min(1,Math.max(0,r/h)):0;s&&(s.style.transform=`scaleX(${_})`);const D=r+(e?.offsetHeight||74)+140;let C=o[0]?.id||"briefing";o.forEach(S=>{S.offsetTop<=D&&(C=S.id)}),n.forEach(S=>{const y=S.dataset.nav===C;S.classList.toggle("is-active",y),y?S.setAttribute("aria-current","page"):S.removeAttribute("aria-current")})},p=()=>{b||(b=!0,window.requestAnimationFrame(c))};window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),c()}const Te=[{id:"all",label:"All projects"},{id:"unity",label:"Unity"},{id:"web",label:"Web"},{id:"dev",label:"In development"}],_e=[{id:"echoloop",index:"01",title:"ECHOLOOP",genre:"Puzzle Platformer",engine:"Unity 6 + URP",tech:["C#","URP","Input System"],status:"Завершённый прототип",statusType:"done",year:"2026",filters:["unity"],cardImage:"./images/projects/echoloop-echo-gate.png",cardAlt:"ECHOLOOP: эхо удерживает нажимную плиту, врата открыты",summary:"Головоломка о времени: каждый проход оставляет эхо, которое повторяет ваши действия и становится частью уровня.",cardDesc:"8 уровней, механика временных петель и 26 EditMode-тестов на проходимость игровых данных.",tags:["8 уровней","26 тестов","Unity 6"],links:[{label:"GitHub",href:"https://github.com/Kerarty/echoloop-playble",external:!0}],facts:[{value:"8",label:"уровней"},{value:"26",label:"EditMode-тестов"},{value:"60",label:"тиков в секунду"},{value:"0",label:"бинарных ассетов"}],overview:{lede:"ECHOLOOP — головоломка о времени на Unity 6 + URP. Петля длится несколько секунд, мир сбрасывается, но эхо прошлых проходов остаётся и повторяет записанные движения. Эхо твёрдое: на него можно встать, оно держит нажимные плиты и открывает врата.",sections:[{title:"Задача проекта",body:"Сделать головоломку, в которой одна механика — временная петля — объясняет себя без длинного туториала. Игрок сначала разведывает уровень, а затем проходит его начисто вместе с собственными копиями."},{title:"Ограничение дизайна",body:"Точка, где нужно встать эхо, всегда достижима обычным ходом. То, что эхо открывает, недостижимо без него. Это единственное правило, на котором держатся все восемь уровней, и главная причина, по которой головоломки не зацикливаются."},{title:"Что получилось",body:"Восемь уровней с прогрессией: движение → эхо-плита → эхо-платформа → две двери → опасности → композиция → экзамен → финал. Уровни описаны данными, а не сценами, поэтому их можно проверять автоматически."}],listTitle:"Ключевые решения",list:["Уровень — это данные: LevelDefinition описывает опоры, плиты, врата и осколки, а LevelRuntime собирает геометрию в рантайме.","Петля живёт по целочисленным тикам, а не по кадрам: 60 тиков в секунду, фиксированный порядок обновления.","Эхо проигрывает запись позы, а не пересимулирует физику — оно не «расползается» из-за накопления ошибок.","Нажатие плит считается вручную через AABB, чтобы правило «плите всё равно, кто на ней стоит» было явным."]},mechanics:{intro:"Механика строится вокруг одного вопроса: как использовать прошлое, чтобы изменить настоящее?",cards:[{title:"Временная петля",body:"LoopClock — единственный источник времени. Когда петля заканчивается, мир сбрасывается, но записанные проходы остаются."},{title:"Твёрдое эхо",body:"Эхо воспроизводит позу игрока на каждом тике и остаётся физическим телом. На него можно встать, оно держит плиты и открывает врата."},{title:"Нажимные плиты",body:"Плита реагирует на любое тело в своей зоне — игрока или эхо. Это позволяет строить головоломки на кооперации с самим собой."},{title:"Врата и осколки",body:"Врата открываются только когда нажаты все связанные плиты. Осколки переживают петлю, поэтому прогресс внутри уровня сохраняется."},{title:"Опасности",body:"Разломы и шипы наказывают за неверный маршрут, но не отменяют правило: сначала разведка, потом чистый проход."},{title:"Архив эхо",body:"Количество активных копий ограничено. Игрок выбирает, какие проходы записывать, а какие перезаписывать."}]},process:{intro:"Проект создан на пустом URP-шаблоне: сцена, свет, постпроцессинг и точка входа собираются кодом.",steps:[{title:"Правило вместо туториала",body:"Сначала сформулировал инвариант уровня, затем начал строить уровни вокруг него. Правило проверяется тестами, а не только ощущением."},{title:"Уровни как данные",body:"Отказался от редактирования .unity-сцен: уровень описывается списками опор, плит, врат и осколков. Это упростило итерации и убрало конфликты слияния."},{title:"Прогрессия из восьми шагов",body:"Каждый уровень вводит одно новое следствие механики: от простого движения до финальной композиции с тремя плитами и разломом."},{title:"Автоматическая проверка",body:"26 EditMode-тестов проверяют, что врата нельзя обойти, плиты не в стенах, осколки достижимы, а маршрут влезает в длину петли."},{title:"Итерация по багам",body:"Тесты нашли четыре реальных бага в дизайне уровней: плиту в пропасти на финале и три незакрытых обхода вокруг дверей."}],callout:"Главный результат проекта — не восемь уровней, а правило, которое позволяет добавлять новые уровни без пересборки всей игры."},screenshots:[{src:"./images/projects/echoloop-echo-gate.png",alt:"Эхо удерживает нажимную плиту, врата растворены",caption:"Осколок собран, эхо держит плиту, врата растворились"},{src:"./images/projects/echoloop-level-05.png",alt:"Уровень с разломом и эхо-прыжком",caption:"Прыжок с эхо через пропасть"},{src:"./images/projects/echoloop-level-03.png",alt:"Уступ, недостижимый без эхо",caption:"Уступ, недостижимый без эхо как платформы"},{src:"./images/projects/echoloop-level-08.png",alt:"Финальный уровень с тремя плитами и разломом",caption:"«Сердце цикла»: три плиты и разлом"}],contribution:{text:"Соло-проект: концепция, дизайн механики, проектирование восьми уровней, реализация на C#, тесты и сборка.",list:["Сформулировал правило уровня и проверил его на всех восьми уровнях.","Спроектировал систему эха: запись, воспроизведение, твёрдое тело, лимит архива.","Реализовал уровни как данные и рантайм-сборку геометрии.","Написал 26 EditMode-тестов на проходимость и корректность данных.","Собрал проект без бинарных ассетов: геометрия, материалы и звук генерируются кодом."],note:"Публичная сборка не опубликована — проект запускается из Unity 6000.0.73f1."}},{id:"factory",index:"02",title:"FACTORY SIMULATOR",subtitle:"«Механизм»",genre:"Simulation / Management",engine:"Unity",tech:["C#","Unity","GDD"],status:"В разработке",statusType:"dev",year:"2026 — сейчас",filters:["unity","dev"],cardImage:"./images/projects/factory-schematic.svg",cardAlt:"Схема производственного цикла завода «Механизм»",summary:"Производственная симуляция завода: заказы, чертежи, изготовление, качество и развитие предприятия.",cardDesc:"Дипломный проект: связанные экономики материалов, персонала и заказов; полный цикл от заказа до сдачи.",tags:["5 локаций","3 типа заказов","в разработке"],links:[],facts:[{value:"5",label:"локаций"},{value:"3",label:"типа заказов"},{value:"3",label:"уровня развития"},{value:"1",label:"связанная экономика"}],overview:{lede:"«Механизм» — дипломная производственная симуляция завода на Unity. Игрок принимает заказы, проектирует изделия, организует производственный процесс, следит за качеством и развивает предприятие.",sections:[{title:"Роль игрока",body:"Игрок — не оператор одного станка, а человек, который отвечает за весь цикл: от согласования заказа и чертежа до сдачи готовой продукции и следующего улучшения завода."},{title:"Связанные экономики",body:"Материалы, персонал и заказы связаны в одну систему. Дешёвая партия металла может сэкономить деньги, но увеличить риск брака; уставший оператор делает ошибки; срочный заказ приносит больше, но требует запаса."},{title:"Статус",body:"Проект находится в активной разработке. Публичная сборка пока не опубликована, поэтому вместо скриншотов игры здесь показана проектная схема и описание систем."}],locations:[{id:"kb",name:"КБ и приёмка",x:18,y:26,desc:"Конструкторское бюро и точка приёма заказов. Здесь игрок согласует параметры изделия, выбирает запас и запускает производственный цикл."},{id:"territory",name:"Территория завода",x:52,y:14,desc:"Связующая зона между объектами: логистика, перемещение ресурсов и доступ к производственным помещениям."},{id:"shop",name:"Цех",x:78,y:42,desc:"Основное производство: работа на оборудовании, изготовление изделий, контроль качества и переделка брака."},{id:"tram",name:"Трамвай",x:40,y:66,desc:"Маршрут между заводом и общежитием. Ограничивает время и добавляет логистическое решение в распорядок дня."},{id:"dorm",name:"Общежитие",x:16,y:82,desc:"Восстановление персонала и кадровые решения. Отдых снижает усталость, но забирает время, которое можно было потратить на заказ."}],orders:[{type:"Срочный",tone:"risk",desc:"Короткий срок, высокая награда и почти нет права на ошибку. Требует запаса материалов и свободных мощностей."},{type:"Обычный",tone:"base",desc:"Базовый рабочий цикл: предсказуемая оплата, умеренный срок и место для манёвра по качеству."},{type:"Долгосрочный",tone:"calm",desc:"Меньше давления по времени, но деньги приходят позже. Подходит для планомерного развития завода."}]},mechanics:{intro:"Основной цикл строится на производстве: получить заказ → спроектировать изделие → подготовить материалы → изготовить → проверить качество → сдать.",cards:[{title:"Система заказов",body:"Срочные заказы дают высокую награду и короткий срок. Обычные — баланс риска и прибыли. Долгосрочные — меньше давления, но длиннее окупаемость."},{title:"Создание чертежей",body:"Игрок выбирает параметры изделия. Запас надёжности увеличивает расход металла и времени, но снижает риск брака и даёт надбавку к оплате."},{title:"Изготовление",body:"Работа на производственном оборудовании: последовательность операций, время, расход материалов и загрузка мощностей."},{title:"Система качества",body:"Качество зависит от партии материала, состояния оборудования и усталости оператора. Брак требует переделки, а переделка стоит денег и времени."},{title:"Развитие завода",body:"Улучшения открывают новые возможности: более точное оборудование, дополнительные заказы и новые уровни производства."},{title:"Прогрессия производства",body:"Завод растёт от небольшой мастерской до продвинутого предприятия. Каждый уровень меняет доступные заказы и экономические решения."}]},process:{intro:"Проект проектируется как система, где каждое число имеет причину и последствие.",steps:[{title:"Определить цикл",body:"Сначала описал полный производственный цикл и точки, где игрок принимает решения. Только после этого начал работать с параметрами."},{title:"Связать экономики",body:"Материалы, персонал и заказы не существуют отдельно: изменение цены материала влияет на риск брака, а усталость — на качество и срок."},{title:"Развести типы заказов",body:"Срочные, обычные и долгосрочные заказы отличаются не только наградой, но и структурой риска. Это создаёт выбор, а не просто «бери самый дорогой»."},{title:"Проверить на бумаге",body:"Считаю окупаемость улучшений и стоимость брака в таблицах до реализации. Баланс-лаборатория на этом сайте — уменьшенная модель такого расчёта."},{title:"Итерировать в Unity",body:"Собираю вертикальный срез, проверяю, какие решения игрок принимает чаще, и правлю параметры. Проект продолжает развиваться."}],callout:"«Механизм» — дипломная работа. Публичная сборка появится после завершения вертикального среза; сейчас проект показывает систему и подход к её проектированию."},screenshots:[{src:"./images/projects/factory-schematic.svg",alt:"Схема производственного цикла завода",caption:"Проектная схема: заказ → чертёж → производство → качество → сдача"},{placeholder:!0,title:"Скриншоты в разработке",text:"Реальные экранные материалы появятся после сборки вертикального среза. Вымышленные скриншоты не используются.",caption:"Build materials pending"}],contribution:{text:"Соло-проект в рамках дипломной работы: концепция, игровые системы, экономика, документация и реализация на Unity.",list:["Спроектировал полный производственный цикл и три типа заказов.","Связал экономики материалов, персонала и заказов в одну модель.","Описала систему качества и влияние запаса на риск брака.","Готовлю GDD и вертикальный срез на Unity.","Проект продолжает развиваться — публичная сборка ещё не опубликована."],note:"Репозиторий проекта закрыт до завершения дипломной работы."}},{id:"mobrush",index:"03",title:"MOB RUSH!",genre:"Hypercasual / Crowd Runner",engine:"PixiJS 7",tech:["JavaScript","PixiJS","esbuild","MRAID"],status:"Playable ad",statusType:"done",year:"2026",filters:["web"],cardImage:"./images/projects/mobrush-gates.png",cardAlt:"MOB RUSH: толпа выбирает ворота-множители",summary:"Короткая мобильная сессия: ведёшь толпу через ворота-множители и ловушки, в финале пробиваешь стену-босса.",cardDesc:"Вся игра в одном HTML-файле 472 КБ: процедурный арт и звук, 25–35 секунд, ноль сетевых запросов.",tags:["472 КБ","25–35 сек","MRAID"],links:[{label:"Play demo",href:"https://kerarty.github.io/playable-ad-mob-rush/",external:!0},{label:"GitHub",href:"https://github.com/Kerarty/playable-ad-mob-rush",external:!0}],facts:[{value:"472",label:"КБ весь билд"},{value:"25–35",label:"секунд сессия"},{value:"0",label:"сетевых запросов"},{value:"60",label:"FPS"}],overview:{lede:"MOB RUSH! — playable ad жанра crowd runner. Игрок ведёт пальцем растущую толпу через ворота-множители и ловушки, а в конце пробивает стену-босса. Вся игра — один HTML-файл 472 КБ без внешних зависимостей, картинок и аудиофайлов.",sections:[{title:"Задача формата",body:"Playable-реклама должна объяснить игру за несколько секунд, не требуя звука и текста. Поэтому онбординг — это первое касание, а не экран с инструкцией."},{title:"Ограничения рекламных сетей",body:"Вес до 2 МБ, один файл, отсутствие сетевых запросов в рантайме, MRAID и понятность без звука. Билд весит 472 КБ и работает офлайн после загрузки."},{title:"Результат",body:"Детерминированный уровень на seeded RNG, 25–35 секунд до победы, end card с CTA и событиями воронки. Победа достижима, но требует хорошего прохождения."}],listTitle:"Ключевые решения",list:["Ворота ×2 / +30 растят толпу, ÷2 / −40 уменьшают. Выбор занимает секунду.","Лопасти и шипы срезают тех, кто не увернулся; толпа уменьшается наглядно.","HP босса не захардкожено: генератор прогоняет «идеальный проход» и ставит 45% от результата.","Число толпы и число отрисованных агентов разделены: 3088 в счётчике — 240 спрайтов на экране."]},mechanics:{intro:"Сессия строится на одном решении, которое повторяется с растущей ценой ошибки: куда направить толпу?",cards:[{title:"Выбор ворот",body:"Каждая развилка предлагает два эффекта. Игрок читает числа и выбирает между ростом, потерей и риском."},{title:"Риск и награда",body:"Ворота с большим множителем часто стоят рядом с препятствием. Быстрый рост толпы увеличивает и потенциальную потерю."},{title:"Увеличение и уменьшение",body:"Толпа — одновременно ресурс и счётчик. Потеря части агентов не заканчивает забег, но снижает шансы на финале."},{title:"Финальное испытание",body:"Стена-босс с числом: если толпы больше — краш-вин, если меньше — мгновенный рестарт. Это проверяет решения всей сессии."},{title:"Длина сессии",body:"Победа достигается за 25–35 секунд. Сессия заканчивается end card с кнопкой INSTALL NOW."},{title:"Воронка",body:"trackEvent() фиксирует tutorial_start / complete, run_failed, level_complete и cta_click — понятно, где игрок отваливается."}]},process:{intro:"Проект собран как один файл: PixiJS, стили и код инлайнятся на сборке, а арт и звук генерируются процедурно.",steps:[{title:"Core за 15 секунд",body:"Сначала проверил, что смысл игры читается без текста: толпа, ворота, препятствие, финальная стена. Только потом добавил туториал-руку."},{title:"Детерминированный уровень",body:"Seeded RNG делает каждый показ рекламы одинаковым. Это важно для тестирования и предсказуемости креатива."},{title:"Автобаланс босса",body:"Генератор прогоняет симуляцию идеального прохода и ставит HP стены в 45% от результата. Уровень всегда проходим, но требует играть хорошо."},{title:"Процедурный арт и звук",body:"Человечки, лопасти, ворота, босс и рука туториала рисуются на canvas. Звук синтезируется через WebAudio. Ни одного png и mp3."},{title:"Проверка формата",body:"Собрал один HTML-файл, проверил офлайн-запуск, MRAID-паузу и события воронки. Вес — 472 КБ при лимите 2 МБ."}],callout:"Форма отвечает содержанию: если продукт — playable-реклама, то и портфолио должно показывать не только игру, но и понимание ограничений формата."},screenshots:[{src:"./images/projects/mobrush-tutorial.png",alt:"Туториал MOB RUSH с рукой и толпой",caption:"Туториал: управление осваивается первым касанием"},{src:"./images/projects/mobrush-gates.png",alt:"Ворота-множители в MOB RUSH",caption:"Развилка: ×2 против +30"},{src:"./images/projects/mobrush-win.png",alt:"Экран победы MOB RUSH",caption:"Финал: толпа пробивает стену-босса"},{src:"./images/projects/mobrush-endcard.png",alt:"End card с кнопкой INSTALL NOW",caption:"End card с CTA и событиями воронки"}],contribution:{text:"Соло-проект: дизайн механик, баланс, реализация на PixiJS, процедурный арт и звук, сборка в один файл и аналитика.",list:["Спроектировал цикл «выбор ворот → рост/потеря → финальная проверка».","Настроил автобаланс HP босса через симуляцию идеального прохода.","Реализовал пул агентов, частиц и попапов; разделил счётчик толпы и число спрайтов.","Собрал один HTML-файл 472 КБ с MRAID и событиями воронки.","Проверил офлайн-запуск и 60 FPS на мобильном форм-факторе."],note:"Живая демоверсия доступна на GitHub Pages; проект также открывается локально из dist/playable.html."}},{id:"runner",index:"04",title:"RUNNER",genre:"Runner",engine:"PixiJS 8",tech:["TypeScript","PixiJS","Vite"],status:"Прототип",statusType:"done",year:"2026",filters:["web"],cardImage:"./images/projects/runner-shot.png",cardAlt:"Портретный раннер: персонаж, монеты и препятствия",summary:"Небольшой портретный раннер, созданный в процессе изучения PixiJS и TypeScript.",cardDesc:"Тап — прыжок, 3 HP, монеты, препятствия и финиш на дистанции 6200. Один экран, один ввод, понятный цикл.",tags:["3 HP","1 кнопка","PixiJS 8"],links:[{label:"GitHub",href:"https://github.com/Kerarty/runner",external:!0},{label:"Play demo",href:"./demo/runner/index.html",external:!1}],facts:[{value:"3",label:"единицы здоровья"},{value:"45",label:"монет за подбор"},{value:"6200",label:"дистанция финиша"},{value:"1",label:"кнопка управления"}],overview:{lede:"RUNNER — небольшой самостоятельный прототип, созданный в процессе изучения PixiJS 8 и TypeScript. Портретный экран, одно касание и короткий цикл: беги, прыгай, собирай монеты, не теряй здоровье.",sections:[{title:"Задача проекта",body:"Разобраться в игровом цикле, состоянии игры, спавне сущностей и UI на PixiJS. Сделать не «демку ради демки», а законченный цикл с победой и поражением."},{title:"Управление",body:"Одно касание — прыжок. Игрок не управляет скоростью: она растёт автоматически, а сложность — через интервалы спавна и комбинации препятствий."},{title:"Результат",body:"Рабочий прототип с тремя единицами здоровья, монетами, препятствиями, монстрами, финишем и экранами победы/поражения. Проект стал упражнением по архитектуре и игровому циклу."}],listTitle:"Ключевые решения",list:["Фиксированное логическое поле 640×960 с масштабированием под экран.","Машина состояний intro → playing → win / lose; пауза на обучении перед первым препятствием.","Паттерны спавна: монеты, конусы, монстры и комбинированные последовательности.","Скорость и интервал спавна зависят от пройденной дистанции."]},mechanics:{intro:"Раннер держится на одном действии, но постепенно увеличивает цену ошибки.",cards:[{title:"Прыжок",body:"Тап или клик вызывает прыжок. Персонаж не может прыгнуть дважды в воздухе; при первом запуске игра замирает и показывает подсказку."},{title:"Здоровье",body:"Три единицы здоровья. Столкновение с монстром или препятствием отнимает одну единицу и даёт короткую неуязвимость."},{title:"Монеты",body:"Каждая монета добавляет 45 к балансу. Каждые пять монет показывается короткое сообщение-похвала."},{title:"Препятствия",body:"Конусы и монстры появляются паттернами. Интервал спавна уменьшается с дистанцией, а скорость бега постоянна."},{title:"Финиш",body:"На дистанции 6200 появляется финишная линия. Победа открывает экран результата с собранным балансом."},{title:"Поражение",body:"При нуле здоровья игра переходит в состояние lose, останавливает музыку и показывает экран с таймером."}]},process:{intro:"Проект делался как учебный, поэтому главным результатом было понимание архитектуры, а не объём контента.",steps:[{title:"Разобрать цикл",body:"Начал с состояний игры и порядка обновления: фон, мир, игрок, сущности, UI. Это позволило не смешивать логику и отрисовку."},{title:"Собрать сущности",body:"Монета, препятствие и монстр получили общий интерфейс. Спавн строится на паттернах, а не на случайных объектах."},{title:"Добавить обратную связь",body:"Летающие монеты, всплывающий текст, звуки и экраны победы/поражения. Обратная связь важна даже в маленьком прототипе."},{title:"Проверить на телефоне",body:"Портретный формат, один тап, крупные элементы UI. Проверял масштабирование и поведение на узком экране."},{title:"Оставить как есть",body:"Прототип не превращался в большой проект: цель была проверить цикл и научиться работать с PixiJS. Это честная граница учебного кейса."}],callout:"Учебный проект ценен не масштабом, а тем, что в нём есть полный цикл: старт, игра, победа, поражение и рестарт."},screenshots:[{src:"./images/projects/runner-shot.png",alt:"Экран игры Runner с персонажем и монетами",caption:"Игровой экран: персонаж, монеты и препятствия"}],contribution:{text:"Соло-проект: игровой цикл, состояния, спавн, UI, звук и сборка.",list:["Собрал машину состояний и основной игровой цикл.","Реализовал прыжок, здоровье, неуязвимость и столкновения.","Сделал паттерны спавна монет, препятствий и монстров.","Добавил UI, звуки и экраны победы/поражения.","Проверил портретный формат и масштабирование."],note:"Прототип создан как учебный проект по PixiJS и TypeScript."}}],He=[{id:"overview",label:"Overview"},{id:"mechanics",label:"Mechanics"},{id:"process",label:"Design Process"},{id:"screenshots",label:"Screenshots"},{id:"contribution",label:"My Contribution"}];let z=null,le="overview",K=null;function qe(){return`
    <div class="modal" id="project-modal" aria-hidden="true">
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal__top">
          <div class="modal__header">
            <div>
              <div class="modal__kicker" id="modal-kicker"></div>
              <h3 class="modal__title" id="modal-title"></h3>
            </div>
            <button class="icon-btn modal__close" type="button" data-modal-close aria-label="Закрыть проект">
              ${w("close")}
            </button>
          </div>
          <div class="modal__tabs" id="modal-tabs" role="tablist" aria-label="Разделы проекта"></div>
        </div>
        <div class="modal__body" id="modal-body"></div>
      </div>
    </div>
  `}function Re(e,t=!1){const a=String(e.label||""),s=/play|demo/i.test(a),n=/github/i.test(a),l=s?"play":n?"github":"external",u=e.external||String(e.href).startsWith("./demo")?' target="_blank" rel="noopener noreferrer"':"";return`<a class="btn ${t||s?"btn--primary":"btn--ghost"} btn--small" href="${i(e.href)}"${u}>
    ${w(l)} ${i(a)}
  </a>`}function Y(e){return e.links?.length?`<div class="modal-links">${e.links.map(t=>Re(t)).join("")}</div>`:""}function Be(e){const t=e.screenshots?.[0];return t?.placeholder?`
      <div class="modal__hero">
        <div class="placeholder-shot" style="height:100%">
          <div>
            <b>${i(t.title)}</b>
            <span>${i(t.text)}</span>
          </div>
        </div>
        <div class="modal__hero-caption">
          <span>${i(e.genre)} / ${i(e.engine)}</span>
          <span>${i(e.status)}</span>
        </div>
      </div>`:`
    <div class="modal__hero">
      <img src="${i(t?.src||e.cardImage)}" alt="${i(t?.alt||e.cardAlt)}" loading="lazy" decoding="async" />
      <div class="modal__hero-caption">
        <span>${i(e.genre)} / ${i(e.engine)}</span>
        <span>${i(e.status)}</span>
      </div>
    </div>`}function Ie(e){return`<div class="modal-facts">
    ${e.facts.map(t=>`
        <div class="modal-fact">
          <b>${i(t.value)}</b>
          <span>${i(t.label)}</span>
        </div>`).join("")}
  </div>`}function Ue(e){const t=e.overview.locations||[];return t.length?`
    <div class="modal-section">
      <h4>Interactive map / five locations</h4>
      <div class="location-map">
        <div class="location-map__canvas">
          <svg viewBox="0 0 400 300" aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%">
            <path d="M40 205 120 150 220 160 360 120" fill="none" stroke="rgba(196,154,85,0.34)" stroke-width="1" stroke-dasharray="4 6"/>
            <path d="M80 70h105v55H80zM245 60h95v48h-95zM150 215h95v52h-95zM290 190h75v70h-75zM35 235h75v42H35z" fill="rgba(52,75,61,0.28)" stroke="rgba(215,222,216,0.18)" stroke-width="1"/>
            <path d="M90 80h85v35H90zM255 70h75v28h-75zM160 225h75v32h-75zM300 200h55v50h-55zM45 245h55v22H45z" fill="none" stroke="rgba(196,154,85,0.22)" stroke-width="1" stroke-dasharray="2 3"/>
            <text x="20" y="24" fill="rgba(137,149,141,0.6)" font-family="IBM Plex Mono, monospace" font-size="7" letter-spacing="1.2">PLANT LAYOUT / SCHEMATIC</text>
            <text x="380" y="284" text-anchor="end" fill="rgba(196,154,85,0.55)" font-family="IBM Plex Mono, monospace" font-size="7">GD-180 / 05 SITES</text>
          </svg>
          ${t.map((a,s)=>`
              <button class="location-pin ${s===0?"is-active":""}" type="button" style="left:${a.x}%;top:${a.y}%" data-location="${i(a.id)}" aria-pressed="${s===0?"true":"false"}">
                ${i(a.name)}
              </button>`).join("")}
        </div>
        <div class="location-info" id="location-info" aria-live="polite"></div>
      </div>
    </div>`:""}function Ge(e){return e.overview.orders?.length?`
    <div class="modal-section">
      <h4>Three order types</h4>
      <div class="order-grid">
        ${e.overview.orders.map(t=>`
            <div class="order-card order-card--${i(t.tone)}">
              <b>${i(t.type)}</b>
              <p>${i(t.desc)}</p>
            </div>`).join("")}
      </div>
    </div>`:""}function ze(e){return`
    ${Be(e)}
    <p class="modal__lede">${i(e.overview.lede)}</p>
    ${Ie(e)}
    ${e.overview.sections.map(t=>`
        <div class="modal-section">
          <h4>${i(t.title)}</h4>
          <p>${i(t.body)}</p>
        </div>`).join("")}
    ${e.overview.list?`<div class="modal-section">
          <h4>${i(e.overview.listTitle||"Key decisions")}</h4>
          <ul>${e.overview.list.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        </div>`:""}
    ${Ue(e)}
    ${Ge(e)}
    ${Y(e)}
  `}function Ne(e){return`
    <p class="modal__lede">${i(e.mechanics.intro)}</p>
    <div class="modal-cards">
      ${e.mechanics.cards.map((t,a)=>`
          <article class="modal-card">
            <span class="modal-card__num">${String(a+1).padStart(2,"0")} / Mechanic</span>
            <h4>${i(t.title)}</h4>
            <p>${i(t.body)}</p>
          </article>`).join("")}
    </div>
    ${Y(e)}
  `}function je(e){return`
    <p class="modal__lede">${i(e.process.intro)}</p>
    <ol class="process-steps">
      ${e.process.steps.map((t,a)=>`
          <li class="process-step">
            <span class="process-step__num">${String(a+1).padStart(2,"0")}</span>
            <div>
              <h4>${i(t.title)}</h4>
              <p>${i(t.body)}</p>
            </div>
          </li>`).join("")}
    </ol>
    ${e.process.callout?`<div class="modal-callout">${i(e.process.callout)}</div>`:""}
    ${Y(e)}
  `}function Ve(e){const t=e.screenshots||[];return`
    <div class="screenshot-grid ${t.length===1?"screenshot-grid--single":""}">
      ${t.map(a=>a.placeholder?`
              <figure>
                <div class="placeholder-shot">
                  <div>
                    <b>${i(a.title)}</b>
                    <span>${i(a.text)}</span>
                  </div>
                </div>
                <figcaption>${i(a.caption)}</figcaption>
              </figure>`:`
            <figure>
              <img src="${i(a.src)}" alt="${i(a.alt)}" loading="lazy" decoding="async" />
              <figcaption>${i(a.caption)}</figcaption>
            </figure>`).join("")}
    </div>
    <p class="lab-note" style="margin-top:16px">
      Только реальные материалы проекта. Если сборка ещё не опубликована,
      вместо экранных кадров используется проектная схема с явной пометкой.
    </p>
    ${Y(e)}
  `}function Fe(e){return`
    <p class="modal__lede">${i(e.contribution.text)}</p>
    <div class="modal-section">
      <h4>What I did</h4>
      <ul>${e.contribution.list.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
    </div>
    ${e.contribution.note?`<div class="modal-callout">${i(e.contribution.note)}</div>`:""}
    ${Y(e)}
  `}function We(e,t){return t==="mechanics"?Ne(e):t==="process"?je(e):t==="screenshots"?Ve(e):t==="contribution"?Fe(e):ze(e)}function Ye(e){const t=k("#modal-tabs");t&&(t.innerHTML=He.map((a,s)=>`
      <button class="modal__tab ${s===0?"is-active":""}" type="button" role="tab" id="modal-tab-${a.id}" aria-selected="${s===0?"true":"false"}" aria-controls="modal-panel" tabindex="${s===0?"0":"-1"}" data-modal-tab="${a.id}">
        ${i(a.label)}
      </button>`).join(""))}function $e(e,t){const a=k("#modal-body");a&&(a.innerHTML=`
    <div class="modal__panel is-active" id="modal-panel" role="tabpanel" aria-labelledby="modal-tab-${t}">
      ${We(e,t)}
    </div>`,a.scrollTop=0,e.overview.locations&&xe(e,e.overview.locations[0].id))}function xe(e,t){const a=k("#location-info"),s=e.overview.locations||[],n=s.find(o=>o.id===t)||s[0];if(!a||!n)return;const l=s.indexOf(n);a.innerHTML=`
    <span class="location-info__index">${String(l+1).padStart(2,"0")} / ${String(s.length).padStart(2,"0")}</span>
    <h5>${i(n.name)}</h5>
    <p>${i(n.desc)}</p>
  `,F("[data-location]").forEach(o=>{const u=o.dataset.location===n.id;o.classList.toggle("is-active",u),o.setAttribute("aria-pressed",u?"true":"false")})}function pe(e){z&&(le=e,F("[data-modal-tab]").forEach(t=>{const a=t.dataset.modalTab===e;t.classList.toggle("is-active",a),t.setAttribute("aria-selected",a?"true":"false"),t.setAttribute("tabindex",a?"0":"-1")}),$e(z,e))}function ue(e){const t=_e.find(n=>n.id===e);if(!t)return;const a=k("#project-modal"),s=k(".modal__dialog",a);!a||!s||(K=document.activeElement,z=t,le="overview",k("#modal-kicker").innerHTML=`
    <span>${i(t.index)} / Mission</span>
    <span>${i(t.genre)}</span>
    <span>${i(t.engine)}</span>
  `,k("#modal-title").innerHTML=`${i(t.title)}${t.subtitle?` <span class="modal__subtitle">${i(t.subtitle)}</span>`:""}`,Ye(),$e(t,"overview"),a.classList.add("is-open"),a.setAttribute("aria-hidden","false"),document.body.classList.add("is-locked"),window.requestAnimationFrame(()=>k(".modal__close",a)?.focus()))}function me(){const e=k("#project-modal");!e||!e.classList.contains("is-open")||(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"),document.body.classList.remove("is-locked"),z=null,K&&K.isConnected&&K.focus())}function Je(e){const t=k("#project-modal");if(!t?.classList.contains("is-open")||e.key!=="Tab")return;const a=k(".modal__dialog",t),s=Array.from(a.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(o=>o.offsetParent!==null);if(!s.length)return;const n=s[0],l=s[s.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),l.focus()):!e.shiftKey&&document.activeElement===l&&(e.preventDefault(),n.focus())}function Ke(){document.addEventListener("click",a=>{const s=a.target.closest("[data-open-project]");if(s){ue(s.dataset.openProject);return}a.target.closest("[data-modal-close]")&&me()}),document.addEventListener("tactical:open-project",a=>{ue(a.detail?.id)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&me(),Je(a)});const e=k("#modal-tabs");e?.addEventListener("click",a=>{const s=a.target.closest("[data-modal-tab]");s&&pe(s.dataset.modalTab)}),e?.addEventListener("keydown",a=>{const s=F("[data-modal-tab]",e),n=s.findIndex(o=>o.dataset.modalTab===le);let l=n;(a.key==="ArrowRight"||a.key==="ArrowDown")&&(l=(n+1)%s.length),(a.key==="ArrowLeft"||a.key==="ArrowUp")&&(l=(n-1+s.length)%s.length),a.key==="Home"&&(l=0),a.key==="End"&&(l=s.length-1),l!==n&&(a.preventDefault(),pe(s[l].dataset.modalTab),s[l].focus())}),k("#modal-body")?.addEventListener("click",a=>{const s=a.target.closest("[data-location]");!s||!z||xe(z,s.dataset.location)})}const Xe=`
  <svg viewBox="0 0 400 440" role="img" aria-label="Карта направлений: механики, системы, баланс, прогрессия, уровни и мобильные игры вокруг ядра геймдизайна">
    <defs>
      <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#C49A55" stop-opacity="0.16"/>
        <stop offset="100%" stop-color="#C49A55" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="200" cy="220" r="150" fill="url(#mapGlow)"/>
    <circle cx="200" cy="220" r="150" fill="none" stroke="rgba(215,222,216,0.12)" stroke-dasharray="2 8"/>
    <circle cx="200" cy="220" r="104" fill="none" stroke="rgba(196,154,85,0.16)" stroke-dasharray="1 6"/>
    <path class="map-route" d="M200 92 311 156 311 284 200 348 89 284 89 156Z"/>
    <path class="map-route map-route--dim" d="M200 92V220M311 156 200 220M311 284 200 220M200 348V220M89 284 200 220M89 156 200 220"/>
    <path d="M200 190 230 220 200 250 170 220Z" fill="rgba(52,75,61,0.55)" stroke="#C49A55" stroke-width="1"/>
    <path d="M200 205v30M185 220h30" stroke="rgba(196,154,85,0.6)" stroke-width="1"/>
    <circle cx="200" cy="220" r="4" fill="#C49A55"/>

    <g class="map-node">
      <rect x="193" y="85" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 200 92)"/>
      <circle class="map-marker map-marker--pulse" cx="200" cy="92" r="3" fill="#C49A55"/>
      <text class="map-label map-label--sand" x="200" y="68" text-anchor="middle">MECHANICS</text>
    </g>
    <g class="map-node">
      <rect x="304" y="149" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 311 156)"/>
      <circle cx="311" cy="156" r="3" fill="#C49A55"/>
      <text class="map-label" x="328" y="153">SYSTEMS</text>
      <text class="map-label" x="328" y="166" style="fill: rgba(137,149,141,0.6)">LOOPS / ECONOMY</text>
    </g>
    <g class="map-node">
      <rect x="304" y="277" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 311 284)"/>
      <circle cx="311" cy="284" r="3" fill="#C49A55"/>
      <text class="map-label" x="328" y="281">BALANCE</text>
      <text class="map-label" x="328" y="294" style="fill: rgba(137,149,141,0.6)">NUMBERS / RISK</text>
    </g>
    <g class="map-node">
      <rect x="193" y="341" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 200 348)"/>
      <circle cx="200" cy="348" r="3" fill="#C49A55"/>
      <text class="map-label map-label--sand" x="200" y="374" text-anchor="middle">PROGRESSION</text>
    </g>
    <g class="map-node">
      <rect x="82" y="277" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 89 284)"/>
      <circle cx="89" cy="284" r="3" fill="#C49A55"/>
      <text class="map-label" x="72" y="281" text-anchor="end">LEVELS</text>
      <text class="map-label" x="72" y="294" text-anchor="end" style="fill: rgba(137,149,141,0.6)">SPACE / FLOW</text>
    </g>
    <g class="map-node">
      <rect x="82" y="149" width="14" height="14" fill="#1B2420" stroke="#C49A55" stroke-width="1" transform="rotate(45 89 156)"/>
      <circle cx="89" cy="156" r="3" fill="#C49A55"/>
      <text class="map-label" x="72" y="153" text-anchor="end">MOBILE</text>
      <text class="map-label" x="72" y="166" text-anchor="end" style="fill: rgba(137,149,141,0.6)">TOUCH / SESSION</text>
    </g>

    <text class="map-label" x="18" y="30" style="fill: rgba(137,149,141,0.55)">GRID 54.19 / 27.33</text>
    <text class="map-label" x="382" y="30" text-anchor="end" style="fill: rgba(137,149,141,0.55)">SCALE 1:1</text>
    <text class="map-label" x="18" y="420" style="fill: rgba(137,149,141,0.55)">SECTOR 06 / DESIGN</text>
    <text class="map-label" x="382" y="420" text-anchor="end" style="fill: rgba(196,154,85,0.75)">GD-180</text>
  </svg>
`;function Qe(){const e=["Gameplay Mechanics","Game Systems","Balance","Progression","Level Design","Mobile"];return`
    <section class="hero" id="briefing" aria-labelledby="briefing-title">
      <div class="shell hero__grid">
        <div class="hero__content">
          <div class="hero__meta reveal">
            <span>Personnel file / GD-180</span>
            <span>Minsk, Belarus</span>
            <span>Status: open to offers</span>
          </div>
          <h1 class="hero__name reveal reveal--d1" id="briefing-title">
            <span>Ярослав</span>
            <span class="is-outline">Кукар</span>
          </h1>
          <div class="hero__role reveal reveal--d2">
            <strong>Game Designer</strong>
            <span aria-hidden="true"></span>
            <strong style="color: var(--text-soft); letter-spacing: 0.18em">Systems / Balance / Progression</strong>
          </div>
          <p class="hero__summary reveal reveal--d2">
            ${i(E.summary)}
          </p>
          <div class="hero__chips reveal reveal--d3">
            ${e.map(t=>`<span class="chip">${i(t)}</span>`).join("")}
          </div>
          <div class="hero__actions reveal reveal--d3">
            <a class="btn btn--primary" href="#missions">${w("target")} View projects</a>
            <a class="btn btn--ghost" href="./docs/Yaroslav_Kukar_CV.pdf" download="Yaroslav_Kukar_CV.pdf">
              ${w("download")} Download CV
            </a>
          </div>
          <div class="hero__stats reveal reveal--d4">
            ${E.stats.map(t=>`
                <div class="hero__stat">
                  <b>${i(t.value)}</b>
                  <span>${i(t.label)}</span>
                </div>`).join("")}
          </div>
        </div>

        <div class="hero__map reveal reveal--d2">
          <div class="map-panel">
            <div class="map-panel__bar">
              <span><strong>Sector map</strong> / competency grid</span>
              <span>GD-180</span>
            </div>
            <div class="map-panel__canvas">
              <span class="scanline" aria-hidden="true"></span>
              ${Xe}
            </div>
            <div class="map-panel__footer">
              <span>6 directions / 1 operator</span>
              <span class="map-panel__signal">Signal active</span>
            </div>
          </div>
        </div>
      </div>
      <a class="hero__scroll" href="#profile" aria-label="Перейти к профилю">Scroll to profile</a>
    </section>
  `}const Ze="https://kerarty.github.io/cv-octopus/";function et(){return`
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
            <div class="contact-card__value contact-card__value--mono">${i(E.email)}</div>
            <div class="contact-card__actions">
              <a class="btn btn--primary btn--small" href="mailto:${i(E.email)}?subject=${encodeURIComponent("Game Designer — Portfolio")}">
                ${w("mail")} Написать
              </a>
              <button class="btn btn--ghost btn--small" type="button" data-copy="${i(E.email)}" data-copy-message="Email скопирован">
                ${w("copy")} Копировать
              </button>
            </div>
          </article>

          <article class="contact-card reveal reveal--d1">
            <div class="contact-card__label">
              <span>Phone</span>
              <span class="mono muted">BY</span>
            </div>
            <div class="contact-card__value contact-card__value--mono">${i(E.phone)}</div>
            <div class="contact-card__actions">
              <a class="btn btn--ghost btn--small" href="tel:${i(E.phoneHref)}">${w("phone")} Позвонить</a>
              <button class="btn btn--ghost btn--small" type="button" data-copy="${i(E.phone)}" data-copy-message="Телефон скопирован">
                ${w("copy")} Копировать
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
              <a class="btn btn--ghost btn--small" href="${i(E.github)}" target="_blank" rel="noopener noreferrer">
                ${w("github")} Открыть профиль
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
                ${w("download")} Скачать
              </a>
            </div>
          </article>
        </div>

        <footer class="site-footer">
          <span>Tactical Design / Personnel database</span>
          <span>© 2026 Ярослав Кукар · GD-180</span>
          <span class="site-footer__links">
            <a class="text-link" href="${Ze}" target="_blank" rel="noopener noreferrer">Portfolio</a>
            <a class="text-link" href="${i(E.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a class="text-link" href="./docs/Yaroslav_Kukar_CV.pdf" download="Yaroslav_Kukar_CV.pdf">CV</a>
          </span>
        </footer>
      </div>
    </section>
  `}function tt(){ge(document.querySelector("#contact"))}const se=[{num:"01",label:"Research & Analysis",title:"Research & Analysis",text:"Сначала разбираю задачу и ограничения: что игрок должен понять, какие решения принять и что уже работает в жанре. Смотрю на референсы не как на картинки, а как на набор решений.",bullets:["Разбор целевой аудитории, сессии и ограничений платформы.","Сравнение механик в референсах: что именно создаёт напряжение.","Формулировка гипотезы, которую можно проверить."],artifact:"Пример: разбор формата playable-рекламы для MOB RUSH — вес, отсутствие звука, один экран и 25–35 секунд сессии.",action:{type:"project",id:"mobrush",label:"Открыть MOB RUSH"}},{num:"02",label:"Concept Design",title:"Concept Design",text:"Превращаю задачу в одну понятную идею. Для ECHOLOOP это правило: эхо повторяет прошлый проход и остаётся твёрдым телом. Из него рождаются уровни, а не наоборот.",bullets:["Одно правило, которое объясняет игру без длинного туториала.","Проверка: какое решение появляется у игрока каждые несколько секунд.","Границы концепта: что игра не будет делать."],artifact:"Пример: правило ECHOLOOP — точка эха достижима обычным ходом, а то, что эхо открывает, недостижимо без него.",action:{type:"project",id:"echoloop",label:"Открыть ECHOLOOP"}},{num:"03",label:"Systems & Mechanics",title:"Systems & Mechanics",text:"Раскладываю концепт на состояния, параметры и обратную связь. Проверяю, как изменения одного числа отражаются на соседних системах, а не только на одной характеристике.",bullets:["Связанные экономики: материалы, персонал, заказы.","Параметры, которые игрок может менять осознанно.","Обратная связь на каждое важное действие."],artifact:"Пример: «Механизм» — производственный цикл, где дешёвый материал экономит деньги, но повышает риск брака.",action:{type:"project",id:"factory",label:"Открыть «Механизм»"}},{num:"04",label:"Documentation",title:"Documentation",text:"Записываю решение так, чтобы его можно было реализовать и проверить без устных пояснений. Документация для меня — не отчёт, а инструмент поиска противоречий.",bullets:["GDD: механики, прогрессия, параметры, ограничения.","README и технические заметки по архитектуре.","Таблицы данных и критерии проверки."],artifact:"Пример: README ECHOLOOP с правилом дизайна уровней, описанием архитектуры и списком тестов.",action:{type:"link",href:"https://github.com/Kerarty/echoloop-playble",label:"README на GitHub"}},{num:"05",label:"Prototyping",title:"Prototyping",text:"Собираю минимальную версию, в которой уже можно принять решение. Прототип нужен, чтобы проверить гипотезу, а не чтобы доказать, что она верна.",bullets:["Сначала главный цикл, потом обвязка.","Один экран, один ввод, понятная цель.","Честная граница: что прототип проверяет, а что нет."],artifact:"Пример: RUNNER — портретный прототип на PixiJS 8 с одним касанием, 3 HP, монетами и финишем.",action:{type:"project",id:"runner",label:"Открыть RUNNER"}},{num:"06",label:"Testing & Iteration",title:"Testing & Iteration",text:"Проверяю не «нравится / не нравится», а конкретные следствия правила. Если проверку нельзя повторить, результат считается наблюдением, а не доказательством.",bullets:["Автоматические проверки данных уровней.","Плейтесты и наблюдение за решениями игрока.","Исправление причины, а не только симптома."],artifact:"Пример: 26 EditMode-тестов ECHOLOOP нашли четыре реальных бага в дизайне уровней.",action:{type:"project",id:"echoloop",label:"Смотреть тесты"}}];function at(e){return e?e.type==="link"?`<a class="btn btn--ghost btn--small" href="${i(e.href)}" target="_blank" rel="noopener noreferrer">${w("external")} ${i(e.label)}</a>`:`<button class="btn btn--ghost btn--small" type="button" data-timeline-action="${e.type}" data-target="${i(e.id)}">${w("arrowUpRight")} ${i(e.label)}</button>`:""}function ke(e,t){return`
    <div class="timeline-detail__main">
      <span class="eyebrow">Stage ${e.num} / 06</span>
      <h4>${i(e.title)}</h4>
      <p>${i(e.text)}</p>
      <ul>${e.bullets.map(a=>`<li>${i(a)}</li>`).join("")}</ul>
    </div>
    <div class="timeline-detail__aside">
      <span class="mono">Artifact</span>
      <p class="timeline-detail__artifact">${i(e.artifact)}</p>
      ${at(e.action)}
    </div>
  `}function st(){return`
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
          ${se.map((e,t)=>`
            <button class="timeline__step ${t===0?"is-active":""}" type="button" role="tab" id="timeline-tab-${t}" aria-selected="${t===0?"true":"false"}" aria-controls="timeline-panel" tabindex="${t===0?"0":"-1"}">
              <span class="timeline__num">${e.num}</span>
              <span class="timeline__label">${i(e.label)}</span>
            </button>`).join("")}
        </div>

        <div class="timeline-detail" id="timeline-panel" role="tabpanel" tabindex="0" aria-labelledby="timeline-tab-0">
          ${ke(se[0])}
        </div>
      </div>
    </section>
  `}function it(){const e=document.querySelector("#timeline"),t=document.querySelector("#timeline-panel");if(!e||!t)return;const a=Array.from(e.querySelectorAll('[role="tab"]')),s=n=>{const l=se[n];l&&(a.forEach((o,u)=>{const f=u===n;o.classList.toggle("is-active",f),o.setAttribute("aria-selected",f?"true":"false"),o.setAttribute("tabindex",f?"0":"-1")}),t.setAttribute("aria-labelledby",`timeline-tab-${n}`),t.innerHTML=ke(l),t.scrollIntoView({block:"nearest",behavior:"smooth"}))};a.forEach((n,l)=>{n.addEventListener("click",()=>s(l)),n.addEventListener("keydown",o=>{let u=l;(o.key==="ArrowRight"||o.key==="ArrowDown")&&(u=(l+1)%a.length),(o.key==="ArrowLeft"||o.key==="ArrowUp")&&(u=(l-1+a.length)%a.length),o.key==="Home"&&(u=0),o.key==="End"&&(u=a.length-1),u!==l&&(o.preventDefault(),s(u),a[u].focus())})}),t.addEventListener("click",n=>{const l=n.target.closest("[data-timeline-action]");l&&(l.dataset.timelineAction==="project"&&document.dispatchEvent(new CustomEvent("tactical:open-project",{detail:{id:l.dataset.target}})),l.dataset.timelineAction==="section"&&document.getElementById(l.dataset.target)?.scrollIntoView({behavior:"smooth"}))})}const ie=[{key:"damage",label:"Damage",min:20,max:120,step:1,unit:"HP",decimals:0},{key:"rate",label:"Fire rate",min:20,max:120,step:1,unit:"RPM",decimals:0},{key:"reload",label:"Reload time",min:1,max:6,step:.1,unit:"s",decimals:1},{key:"mag",label:"Magazine size",min:3,max:20,step:1,unit:"rds",decimals:0}],W={a:{name:"VECTOR-9",type:"Assault rifle",damage:34,rate:78,reload:2.4,mag:12},b:{name:"LONGSHOT",type:"Marksman rifle",damage:72,rate:38,reload:3.6,mag:6}},nt={default:W,cqc:{a:{name:"VECTOR-9",type:"Assault rifle",damage:24,rate:110,reload:1.6,mag:18},b:{name:"LONGSHOT",type:"Marksman rifle",damage:46,rate:72,reload:2.8,mag:10}},marksman:{a:{name:"VECTOR-9",type:"Assault rifle",damage:52,rate:48,reload:3,mag:8},b:{name:"LONGSHOT",type:"Marksman rifle",damage:96,rate:30,reload:4.8,mag:5}}},lt=[{key:"damageMag",label:"Damage / magazine",unit:"HP",decimals:0},{key:"burst",label:"Burst DPS",unit:"HP/s",decimals:1},{key:"sustained",label:"Sustained DPS",unit:"HP/s",decimals:1},{key:"cycle",label:"Full cycle",unit:"s",decimals:1}];function Z(e){return{a:{...e.a},b:{...e.b}}}function ne(e){const t=e.rate/60,a=e.damage*e.mag,s=e.damage*t,n=(e.mag-1)/t,l=n+e.reload,o=a/l;return{damageShot:e.damage,damageMag:a,burst:s,sustained:o,emptyTime:n,cycle:l}}function ot(e,t,a){const s=`balance-${e}-${t.key}`,n=(a-t.min)/(t.max-t.min)*100;return`
    <div class="slider-row">
      <div class="slider-row__top">
        <label class="slider-row__label" for="${s}">${t.label}</label>
        <span class="slider-row__value"><b data-value="${s}">${a.toFixed(t.decimals)}</b> ${t.unit}</span>
      </div>
      <input
        id="${s}"
        type="range"
        min="${t.min}"
        max="${t.max}"
        step="${t.step}"
        value="${a}"
        data-stat="${t.key}"
        data-weapon="${e}"
        style="--fill: ${n}%"
      />
    </div>
  `}function be(e,t){return`
    <div class="weapon-panel ${e==="b"?"weapon-panel--b":""}" data-weapon-panel="${e}">
      <div class="weapon-panel__head">
        <div class="weapon-panel__name">
          <span class="weapon-badge">${e.toUpperCase()}</span>
          ${t.name}
        </div>
        <span class="weapon-panel__type">${t.type}</span>
      </div>
      ${ie.map(s=>ot(e,s,t[s.key])).join("")}
      <div class="weapon-metrics">
        <div class="weapon-metric"><span>Damage / shot</span><b data-metric="${e}-damageShot">—</b></div>
        <div class="weapon-metric"><span>Damage / magazine</span><b data-metric="${e}-damageMag">—</b></div>
        <div class="weapon-metric"><span>Burst DPS</span><b data-metric="${e}-burst">—</b></div>
        <div class="weapon-metric"><span>Sustained DPS</span><b data-metric="${e}-sustained">—</b></div>
      </div>
    </div>
  `}function rt(){return`
    <div class="lab-head">
      <div>
        <h3>Tactical Balance Lab</h3>
        <p>
          Два условных профиля оружия. Меняйте урон, темп, перезарядку и магазин —
          метрики пересчитываются сразу, а график показывает, как размер магазина влияет
          на длительный DPS.
        </p>
      </div>
      <span class="lab-head__tag">Module A / Demo data</span>
    </div>
    <div class="balance-grid">
      ${be("a",W.a)}
      <div class="compare-panel">
        <div class="compare-panel__head">
          <h4>Live comparison</h4>
          <div class="chart-legend">
            <span><i></i>Profile A</span>
            <span><i class="legend-b"></i>Profile B</span>
          </div>
        </div>
        <div class="chart-wrap">
          <svg id="balance-chart" viewBox="0 0 360 180" role="img" aria-labelledby="balance-chart-title">
            <title id="balance-chart-title">Сравнение длительного DPS в зависимости от размера магазина</title>
          </svg>
        </div>
        <div class="metric-bars" id="balance-bars"></div>
        <div class="verdict" id="balance-verdict" aria-live="polite"></div>
      </div>
      ${be("b",W.b)}
    </div>
    <div class="lab-actions">
      <div class="preset-row" role="group" aria-label="Пресеты характеристик">
        <button class="preset-btn" type="button" data-preset="default">Default</button>
        <button class="preset-btn" type="button" data-preset="cqc">CQC</button>
        <button class="preset-btn" type="button" data-preset="marksman">Marksman</button>
      </div>
      <button class="btn btn--ghost btn--small" type="button" id="balance-reset">Reset profile</button>
    </div>
    <p class="lab-note">
      Условные демонстрационные параметры, не связанные с балансом Sniper: Ghost Warrior.
      Damage / magazine = урон × патроны. Burst DPS = урон × (RPM / 60).
      Sustained DPS = урон магазина / (время опустошения магазина + перезарядка).
    </p>
  `}function ct(e,t){const c=Array.from({length:18},(d,x)=>x+3),p=d=>c.map(x=>{const T=ne({...d,mag:x});return{mag:x,value:T.sustained}}),r=p(e),h=p(t),_=Math.max(...r.map(d=>d.value),...h.map(d=>d.value),1),D=Math.ceil(_/10)*10,C=d=>38+(d-3)/17*310,S=d=>16+(1-d/D)*136,y=d=>d.map(x=>`${C(x.mag).toFixed(1)},${S(x.value).toFixed(1)}`).join(" "),$=r.find(d=>d.mag===e.mag),m=h.find(d=>d.mag===t.mag),g=[0,.5,1].map(d=>{const x=16+136*d,T=D*(1-d);return`
        <line class="chart-grid-line" x1="38" y1="${x}" x2="348" y2="${x}"/>
        <text class="chart-axis" x="31" y="${x+2.5}" text-anchor="end">${Math.round(T)}</text>`}).join(""),L=[3,8,14,20].map(d=>`<text class="chart-axis" x="${C(d).toFixed(1)}" y="172" text-anchor="middle">${d}</text>`).join("");return`
    ${g}
    ${L}
    <text class="chart-axis" x="38" y="160" text-anchor="start">Magazine, rounds</text>
    <text class="chart-axis" x="348" y="160" text-anchor="end">DPS</text>
    <polyline class="chart-line chart-line--a-glow" points="${y(r)}"/>
    <polyline class="chart-line chart-line--b-glow" points="${y(h)}"/>
    <polyline class="chart-line chart-line--a" points="${y(r)}"/>
    <polyline class="chart-line chart-line--b" points="${y(h)}"/>
    <circle cx="${C($.mag)}" cy="${S($.value)}" r="3" fill="#C49A55" stroke="#111513" stroke-width="1.5"/>
    <circle cx="${C(m.mag)}" cy="${S(m.value)}" r="3" fill="#7F9DA6" stroke="#111513" stroke-width="1.5"/>
  `}function R(e,t){return Number(e).toLocaleString("ru-RU",{minimumFractionDigits:t,maximumFractionDigits:t})}function dt(e,t,a,s){const n=(s.sustained-a.sustained)/Math.max(a.sustained,.001)*100,l=Math.abs(n),o=R(a.cycle,1),u=R(s.cycle,1);if(l<3)return`<b>Паритет по sustained DPS.</b> A даёт ${R(a.damageMag,0)} HP за магазин, B — ${R(s.damageMag,0)} HP. Разница в длительном уроне ${R(l,1)}%, поэтому выбор решают альфа, время перезарядки и комфорт попадания. Полный цикл: A ${o} с, B ${u} с.`;const f=n>0?"B":"A",b=f==="A"?"B":"A",c=f==="A"?a:s,p=f==="A"?s:a;return`<b>${f} лидирует по sustained DPS на ${R(l,1)}%</b> (${R(c.sustained,1)} против ${R(p.sustained,1)} HP/s). ${b} компенсирует это ${p.burst>c.burst?"более высоким burst DPS":"другим профилем урона"}. Полный цикл: A ${o} с, B ${u} с — проверьте, насколько часто в игре реально происходит полная перезарядка.`}function pt(){const e=document.querySelector("[data-balance-lab]");if(!e)return;let t=Z(W);const a=e.querySelector("#balance-chart"),s=e.querySelector("#balance-bars"),n=e.querySelector("#balance-verdict"),l=()=>{e.querySelectorAll('input[type="range"]').forEach(b=>{const c=t[b.dataset.weapon];if(!c)return;const p=ie.find(_=>_.key===b.dataset.stat);if(!p)return;const r=c[p.key];b.value=r,b.style.setProperty("--fill",`${(r-p.min)/(p.max-p.min)*100}%`);const h=e.querySelector(`[data-value="${b.id}"]`);h&&(h.textContent=r.toFixed(p.decimals))})},o=(b,c)=>{const p=(r,h,_,D)=>{const C=e.querySelector(`[data-metric="${b}-${r}"]`);C&&(C.textContent=`${R(h,D)} ${_}`)};p("damageShot",c.damageShot,"HP",0),p("damageMag",c.damageMag,"HP",0),p("burst",c.burst,"HP/s",1),p("sustained",c.sustained,"HP/s",1)},u=(b,c)=>{s.innerHTML=lt.map(p=>{const r=b[p.key],h=c[p.key],_=Math.max(r,h,.001);return`
        <div class="metric-bar">
          <div class="metric-bar__top">
            <span class="metric-bar__label">${p.label}</span>
            <span class="metric-bar__values">A ${R(r,p.decimals)} · B ${R(h,p.decimals)} ${p.unit}</span>
          </div>
          <div class="metric-bar__track">
            <i style="width:${X(r/_*100,0,100).toFixed(1)}%"></i>
            <i style="width:${X(h/_*100,0,100).toFixed(1)}%"></i>
          </div>
        </div>`}).join("")},f=()=>{const b=ne(t.a),c=ne(t.b);o("a",b),o("b",c),u(b,c),a.innerHTML=`
      <title id="balance-chart-title">Сравнение длительного DPS в зависимости от размера магазина</title>
      ${ct(t.a,t.b)}
    `,n.innerHTML=dt(t.a,t.b,b,c)};e.addEventListener("input",b=>{const c=b.target.closest('input[type="range"]');if(!c)return;const p=t[c.dataset.weapon],r=ie.find(_=>_.key===c.dataset.stat);if(!p||!r)return;p[r.key]=Number(c.value),c.style.setProperty("--fill",`${(p[r.key]-r.min)/(r.max-r.min)*100}%`);const h=e.querySelector(`[data-value="${c.id}"]`);h&&(h.textContent=p[r.key].toFixed(r.decimals)),f()}),e.querySelectorAll("[data-preset]").forEach(b=>{b.addEventListener("click",()=>{const c=nt[b.dataset.preset];c&&(t=Z(c),l(),f())})}),e.querySelector("#balance-reset")?.addEventListener("click",()=>{t=Z(W),l(),f()}),l(),f()}const B=[{id:"workshop1",index:"01",name:"Workshop I",baseCost:800,reputation:0,multiplier:1.25,requires:null,unlock:"обычные заказы",desc:"Базовая мастерская: расширяет поток обычных заказов и повышает оплату на 25%."},{id:"workshop2",index:"02",name:"Workshop II",baseCost:1600,reputation:3,multiplier:1.6,requires:"workshop1",unlock:"срочные заказы",desc:"Второй цех: открывает срочные заказы с повышенной оплатой и более высоким риском."},{id:"advanced",index:"03",name:"Advanced Factory",baseCost:2800,reputation:6,multiplier:2.1,requires:"workshop2",unlock:"долгосрочные контракты",desc:"Продвинутое производство: долгосрочные контракты, максимальная выручка и новый уровень предприятия."}],ve=()=>({balance:1200,reputation:0,purchased:[],selected:"workshop1",reward:180,costFactor:1,orders:0,message:"Выберите улучшение в дереве. Заказы приносят прибыль и репутацию.",messageTone:""});function H(e){return Number(e).toLocaleString("ru-RU")}function ut(e){return B.filter(a=>e.purchased.includes(a.id)).reduce((a,s)=>Math.max(a,s.multiplier),1)}function he(e){const t=ut(e),a=Math.round(e.reward*t),s=Math.round(e.reward*.35),n=a-s;return{multiplier:t,income:a,cost:s,net:n}}function ee(e,t){return Math.round(e.baseCost*t.costFactor/10)*10}function j(e,t){return t.purchased.includes(e.id)?"purchased":e.requires&&!t.purchased.includes(e.requires)||t.reputation<e.reputation?"locked":"available"}function V(e,t){return t.purchased.includes(e.id)?"Уже куплено":e.requires&&!t.purchased.includes(e.requires)?`Сначала купите ${B.find(s=>s.id===e.requires)?.name||"предыдущее улучшение"}`:t.reputation<e.reputation?`Нужно ${e.reputation} репутации (сейчас ${t.reputation})`:""}function te(e){return B.find(t=>t.id===e.selected)||B[0]}function mt(){return`
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
          ${B.map(e=>`
            <button class="tree-node" type="button" data-node="${e.id}" aria-pressed="false">
              <span class="tree-node__top">
                <span class="tree-node__num">${e.index}</span>
                <span class="tree-node__state" data-node-state="${e.id}">—</span>
              </span>
              <span class="tree-node__name">${e.name}</span>
              <span class="tree-node__desc">${e.desc}</span>
              <span class="tree-node__cost" data-node-cost="${e.id}">—</span>
            </button>`).join("")}
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
  `}function bt(){const e=document.querySelector("[data-economy-lab]");if(!e)return;let t=ve();const a=e.querySelector("#economy-level"),s=e.querySelector("#economy-balance"),n=e.querySelector("#economy-reputation"),l=e.querySelector("#economy-net"),o=e.querySelector("#economy-message"),u=e.querySelector("#economy-summary-net"),f=e.querySelector("#economy-payback"),b=e.querySelector("#economy-next"),c=e.querySelector("#economy-selected-title"),p=e.querySelector("#economy-selected-desc"),r=e.querySelector("#economy-selected-req"),h=e.querySelector("#economy-buy"),_=e.querySelector("#economy-reward"),D=e.querySelector("#economy-cost"),C=e.querySelector("#economy-reward-value"),S=e.querySelector("#economy-cost-value"),y=(m,g="")=>{t.message=m,t.messageTone=g},$=()=>{const m=he(t),g=te(t),L=ee(g,t),d=j(g,t),x=m.net>0?Math.ceil(L/m.net):1/0;a.textContent=String(1+t.purchased.length).padStart(2,"0"),s.textContent=H(t.balance),n.textContent=H(t.reputation),l.textContent=`${m.net>=0?"+":""}${H(m.net)}`,u.textContent=`${m.net>=0?"+":""}${H(m.net)} cr`,f.textContent=d==="purchased"?"—":Number.isFinite(x)?`${H(x)} заказов`:"не окупается";const T=B.find(P=>!t.purchased.includes(P.id));if(T){const P=j(T,t);b.textContent=P==="locked"?`${T.name} · ${V(T,t)}`:T.name}else b.textContent="Все улучшения куплены";e.querySelectorAll("[data-node]").forEach(P=>{const O=B.find(N=>N.id===P.dataset.node);if(!O)return;const q=j(O,t),I=ee(O,t);P.classList.toggle("is-purchased",q==="purchased"),P.classList.toggle("is-locked",q==="locked"),P.classList.toggle("is-selected",O.id===t.selected),P.setAttribute("aria-pressed",O.id===t.selected?"true":"false"),P.title=q==="locked"?V(O,t):O.desc;const J=P.querySelector(`[data-node-state="${O.id}"]`);J&&(J.textContent=q==="purchased"?"Куплено":q==="locked"?"Заблокировано":O.id===t.selected?"Выбрано":"Доступно");const U=P.querySelector(`[data-node-cost="${O.id}"]`);U&&(U.textContent=q==="purchased"?"—":`${H(I)} cr`)}),c.textContent=`Selected / ${g.name}`,p.textContent=g.desc,d==="purchased"?r.innerHTML=`<span class="is-ok">Куплено. Множитель предприятия: ×${g.multiplier}.</span>`:d==="locked"?r.innerHTML=`<span class="is-warn">${V(g,t)}</span>`:r.innerHTML=`Стоимость: <b>${H(L)} cr</b> · окупаемость: <b>${Number.isFinite(x)?`${H(x)} заказов`:"—"}</b> · открывает: <b>${g.unlock}</b>`,h&&(h.textContent=d==="purchased"?"Уже куплено":`Купить: ${H(L)} cr`),o.textContent=t.message,o.classList.toggle("is-ok",t.messageTone==="ok"),o.classList.toggle("is-warn",t.messageTone==="warn"),C.textContent=H(t.reward),S.textContent=H(Math.round(t.costFactor*100)),_.value=t.reward,D.value=Math.round(t.costFactor*100),_.style.setProperty("--fill",`${(t.reward-100)/300*100}%`),D.style.setProperty("--fill",`${(t.costFactor*100-50)/150*100}%`)};e.querySelectorAll("[data-node]").forEach(m=>{m.addEventListener("click",()=>{t.selected=m.dataset.node;const g=te(t),L=j(g,t);L==="locked"?y(`${g.name}: ${V(g,t)}`,"warn"):y(L==="purchased"?`${g.name} уже куплен. Выберите следующее улучшение.`:`${g.name} выбран. Проверьте стоимость и окупаемость.`,""),$()})}),e.querySelector("#economy-order")?.addEventListener("click",()=>{const m=he(t);t.balance+=m.net,t.reputation+=1,t.orders+=1,y(`Заказ выполнен: +${H(m.net)} cr прибыли, +1 репутации. Всего заказов: ${t.orders}.`,"ok"),$()}),h?.addEventListener("click",()=>{const m=te(t),g=j(m,t),L=ee(m,t);if(g==="purchased"){y(`${m.name} уже куплен.`,""),$();return}if(g==="locked"){y(`${m.name}: ${V(m,t)}`,"warn"),$();return}if(t.balance<L){y(`Не хватает ${H(L-t.balance)} cr. Выполните ещё заказы или снизьте стоимость улучшений.`,"warn"),$();return}t.balance-=L,t.purchased.push(m.id);const d=B.find(x=>!t.purchased.includes(x.id));d&&(t.selected=d.id),y(`${m.name} куплен. Открыто: ${m.unlock}. Уровень предприятия: ${1+t.purchased.length}.`,"ok"),$()}),_?.addEventListener("input",()=>{t.reward=Number(_.value),y("Награда за заказ изменена. Пересчитайте окупаемость улучшений.",""),$()}),D?.addEventListener("input",()=>{t.costFactor=Number(D.value)/100,y("Стоимость улучшений изменена. Проверьте, какие уровни теперь доступны.",""),$()}),e.querySelector("#economy-reset")?.addEventListener("click",()=>{t=ve(),y("Экономика сброшена к стартовым значениям.",""),$()}),$()}const vt={stick:{title:"Виртуальный стик",zone:"Нижний левый угол",desc:"Движение и стрейф. Стик не должен пересекаться с зоной обзора: палец, лежащий на нём, не вращает камеру.",rule:"Радиус 64–80 px, мёртвая зона 10–12%, кольцо подсвечивается при касании.",feedback:"Кольцо и точка касания показывают, что ввод принят."},fire:{title:"Огонь",zone:"Нижний правый угол",desc:"Основное действие под большой палец. Кнопка крупнее остальных и отделена от зоны прицеливания, чтобы не нажиматься случайно.",rule:"Диаметр 56–64 px, не ближе 16 px к краю экрана.",feedback:"Вспышка, отдача, звук и трассер подтверждают выстрел."},aim:{title:"Прицеливание (ADS)",zone:"Над кнопкой огня",desc:"Переход в оптику меняет FOV и чувствительность. Выход — повторное нажатие; состояние должно читаться без текста.",rule:"В пределах большого пальца, не перекрывает центр обзора.",feedback:"Плавный zoom 120–160 мс, прицел меняет форму, HUD приглушается."},reload:{title:"Перезарядка",zone:"Рядом с огнём",desc:"Редкое действие. На мобильном его можно оставить отдельной кнопкой или автоматизировать, если перезарядка не является решением.",rule:"Вне зоны свайпа камеры; 44 px минимум.",feedback:"Счётчик патронов, анимация и короткая тактильная отдача."},jump:{title:"Прыжок",zone:"Верхний правый блок",desc:"Дополнительное действие. На мобильном лучше не перегружать основной кластер: прыжок нужен реже, чем огонь и обзор.",rule:"44 px минимум, но вне зоны обзора.",feedback:"Короткая анимация камеры и изменение высоты силуэта."},crouch:{title:"Присесть",zone:"Верхний правый блок",desc:"Меняет силуэт и точность. В шутере важно, чтобы состояние читалось и не включалось случайно во время свайпа.",rule:"Рядом с прыжком, зазор 8 px.",feedback:"Иконка состояния в HUD и опущенная камера."},look:{title:"Зона обзора",zone:"Правая половина экрана",desc:"Свайп вращает камеру. Чувствительность зависит от FOV и режима прицеливания; на краях экрана свайп не должен начинаться на органе управления.",rule:"Не перекрывать кнопками; свайп начинается только на свободной области.",feedback:"Кроссхейр, лёгкий сдвиг мира и отсутствие рывков."}};function ht(){return`
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
  `}function yt(){const e=document.querySelector("[data-mobile-study]");if(!e)return;const t=e.querySelector("#study-phone"),a=e.querySelector("#phone-screen"),s=e.querySelector("#phone-world"),n=e.querySelector("#phone-ammo"),l=e.querySelector("#study-title"),o=e.querySelector("#study-zone"),u=e.querySelector("#study-desc"),f=e.querySelector("#study-rule"),b=e.querySelector("#study-feedback"),c=e.querySelector("#study-sensitivity"),p=e.querySelector("#study-sensitivity-value"),r=e.querySelector("#study-feedback-toggle"),h=e.querySelector("#study-layout"),_=e.querySelector("#study-ads-toggle"),D=e.querySelector("#phone-muzzle"),C=e.querySelector("#phone-hitmarker");let S=30,y=!0,$=!1,m=!1,g=!1,L=0,d=0,x=!1,T=0,P=0;const O=()=>{s.style.setProperty("--pan-x",`${L}px`),s.style.setProperty("--pan-y",`${d}px`)},q=()=>{n.textContent=String(S).padStart(2,"0"),n.style.color=S===0?"var(--danger)":""},I=M=>{const A=vt[M];A&&(l.textContent=A.title,o.textContent=A.zone,u.textContent=A.desc,f.textContent=A.rule,b.textContent=A.feedback,e.querySelectorAll("[data-control]").forEach(re=>{re.classList.toggle("is-active",re.dataset.control===M)}))},J=()=>{y&&(t.classList.remove("phone__recoil"),t.offsetWidth,t.classList.add("phone__recoil"),D.classList.remove("is-fire"),D.offsetWidth,D.classList.add("is-fire"),C.classList.remove("is-hit"),C.offsetWidth,C.classList.add("is-hit"))},U=M=>{$=M,t.classList.toggle("phone--ads",$),_.classList.toggle("is-on",$),_.setAttribute("aria-pressed",$?"true":"false"),_.textContent=$?"ADS on":"ADS"},N=M=>{m=M,t.classList.toggle("phone--lefty",m),h.classList.toggle("is-on",m),h.setAttribute("aria-pressed",m?"true":"false"),h.textContent=m?"Left hand":"Right hand"},oe=M=>{g=M,d=g?12:0,O(),e.querySelector('[data-control="crouch"]')?.classList.toggle("is-active",g)},Me=()=>{if(S<=0){b.textContent="Магазин пуст. Нажмите R, чтобы перезарядиться.",G("Магазин пуст — перезарядка");return}S-=1,q(),J()},Se=()=>{S=30,q(),G("Магазин перезаряжен: 30 / 30")};e.querySelectorAll("[data-control]").forEach(M=>{M.addEventListener("click",()=>{const A=M.dataset.control;I(A),A==="fire"&&Me(),A==="reload"&&Se(),A==="aim"&&U(!$),A==="stick"&&N(!m),A==="jump"&&(d=-16,O(),window.setTimeout(()=>{d=g?12:0,O()},220)),A==="crouch"&&oe(!g)})}),a.querySelector('[data-control="look"]')?.addEventListener("pointerdown",M=>{x=!0,T=M.clientX,P=M.clientY,M.currentTarget.setPointerCapture?.(M.pointerId),a.style.cursor="grabbing"}),a.querySelector('[data-control="look"]')?.addEventListener("pointermove",M=>{if(!x)return;const A=Number(c.value)/5*($?.55:1);L=X(L+(M.clientX-T)*A,-46,46),d=X(d+(M.clientY-P)*A,-30,30),T=M.clientX,P=M.clientY,O()});const Q=()=>{x=!1,a.style.cursor=""};a.querySelector('[data-control="look"]')?.addEventListener("pointerup",Q),a.querySelector('[data-control="look"]')?.addEventListener("pointercancel",Q),a.querySelector('[data-control="look"]')?.addEventListener("pointerleave",Q),c?.addEventListener("input",()=>{p.textContent=c.value,c.style.setProperty("--fill",`${(Number(c.value)-1)/9*100}%`)}),r?.addEventListener("click",()=>{y=!y,r.classList.toggle("is-on",y),r.setAttribute("aria-pressed",y?"true":"false"),r.textContent=y?"On":"Off",G(y?"Обратная связь включена":"Обратная связь выключена")}),h?.addEventListener("click",()=>N(!m)),_?.addEventListener("click",()=>{U(!$),I("aim")}),e.querySelector("#study-reset")?.addEventListener("click",()=>{S=30,q(),U(!1),N(!1),oe(!1),L=0,d=0,O(),y=!0,r.classList.add("is-on"),r.setAttribute("aria-pressed","true"),r.textContent="On",c.value=6,p.textContent="6",c.style.setProperty("--fill","55.6%"),I("look"),G("Макет сброшен")}),q(),c.style.setProperty("--fill","55.6%"),I("look")}const ft=[{id:"balance",letter:"A",label:"Tactical Balance"},{id:"economy",letter:"B",label:"Progression & Economy"},{id:"mobile",letter:"C",label:"Mobile Study"}];function gt(){return`
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
          ${ft.map((e,t)=>`
            <button class="lab-tab ${t===0?"is-active":""}" type="button" role="tab" id="lab-tab-${e.id}" aria-selected="${t===0?"true":"false"}" aria-controls="lab-panel-${e.id}" tabindex="${t===0?"0":"-1"}" data-lab-tab="${e.id}">
              <span>${e.letter}</span> ${e.label}
            </button>`).join("")}
        </div>

        <div class="lab-panel is-active" id="lab-panel-balance" role="tabpanel" aria-labelledby="lab-tab-balance">
          <div class="lab-frame" data-balance-lab>${rt()}</div>
        </div>
        <div class="lab-panel" id="lab-panel-economy" role="tabpanel" aria-labelledby="lab-tab-economy" hidden>
          <div class="lab-frame" data-economy-lab>${mt()}</div>
        </div>
        <div class="lab-panel" id="lab-panel-mobile" role="tabpanel" aria-labelledby="lab-tab-mobile" hidden>
          <div class="lab-frame" data-mobile-study>${ht()}</div>
        </div>
      </div>
    </section>
  `}function _t(){const e=Array.from(document.querySelectorAll("[data-lab-tab]")),t=Array.from(document.querySelectorAll(".lab-panel")),a=s=>{e.forEach(n=>{const l=n.dataset.labTab===s;n.classList.toggle("is-active",l),n.setAttribute("aria-selected",l?"true":"false"),n.setAttribute("tabindex",l?"0":"-1")}),t.forEach(n=>{const l=n.id===`lab-panel-${s}`;n.classList.toggle("is-active",l),n.hidden=!l})};e.forEach((s,n)=>{s.addEventListener("click",()=>a(s.dataset.labTab)),s.addEventListener("keydown",l=>{let o=n;(l.key==="ArrowRight"||l.key==="ArrowDown")&&(o=(n+1)%e.length),(l.key==="ArrowLeft"||l.key==="ArrowUp")&&(o=(n-1+e.length)%e.length),l.key==="Home"&&(o=0),l.key==="End"&&(o=e.length-1),o!==n&&(l.preventDefault(),a(e[o].dataset.labTab),e[o].focus())})}),pt(),bt(),yt()}const $t={practical:"Practical Experience",basic:"Basic Knowledge",learning:"Currently Learning"},xt=[{id:"design",title:"Game Design",icon:"crosshair",items:[{name:"Gameplay Mechanics",status:"practical",desc:"Проектирование базовых действий, правил и обратной связи, из которых складывается игровой опыт.",example:"ECHOLOOP: эхо повторяет движения игрока и остаётся твёрдым телом. MOB RUSH: ворота ×2 / +30 / ÷2 / −40."},{name:"Core Gameplay Loops",status:"practical",desc:"Понимание короткого и длинного цикла: что игрок делает каждые 5 секунд и что меняется за сессию.",example:"«Механизм»: заказ → чертёж → материалы → производство → качество → сдача → улучшение завода."},{name:"Game Progression",status:"practical",desc:"Последовательность уровней, улучшений и наград, которая учит механикам и поддерживает интерес.",example:"ECHOLOOP: 8 уровней от движения до финальной композиции из трёх плит и разлома."},{name:"Game Balance",status:"practical",desc:"Работа с боевыми и экономическими параметрами, временем, риском и ценой решения.",example:"Варгейм «Королевства Эридора»: 15+ плейтест-сессий и итеративная правка характеристик."},{name:"Game Economy",status:"practical",desc:"Связанные источники и траты ресурсов: награда, себестоимость, улучшения и окупаемость.",example:"«Механизм»: экономики материалов, персонала и заказов как одна система. Balance Lab на этом сайте."},{name:"GDD Documentation",status:"practical",desc:"Структурированное описание механик, прогрессии, баланса и арт-стиля для передачи команде.",example:"Полный GDD стратегии с элементами градостроительного симулятора: механики, прогрессия, ресурсы."},{name:"Game Logic",status:"practical",desc:"Формализация правил: состояния, условия, порядок событий и предсказуемое поведение системы.",example:"ECHOLOOP: фиксированный порядок тика — эхо, игрок, мир, запись. Runner: машина состояний intro / playing / win / lose."},{name:"Level Design Basics",status:"practical",desc:"Построение пространства вокруг механики и проверка того, что уровень решается задуманным способом.",example:"ECHOLOOP: правило «точка эха достижима обычным ходом; то, что эхо открывает, недостижимо без него»."}]},{id:"development",title:"Game Development",icon:"code",items:[{name:"Unity",status:"practical",desc:"Сборка прототипов, сцен, префабов, физики, UI и постпроцессинга в Unity 6 + URP.",example:"ECHOLOOP: Unity 6, URP 17, новый Input System. «Механизм»: дипломная симуляция завода."},{name:"C#",status:"practical",desc:"Геймплейная логика, компоненты, системы данных и EditMode-тесты.",example:"ECHOLOOP: LoopClock, LoopTape, PressurePlate, LevelRuntime, 26 тестов на данные уровней."},{name:"Python",status:"learning",desc:"Базовые скрипты, обработка данных и автоматизация небольших задач.",example:"Использую для учебных задач и вспомогательных расчётов; продолжаю изучать."},{name:"C / C++",status:"basic",desc:"Понимание памяти, типов, структур и низкоуровневой логики.",example:"Университетская база: алгоритмы и структуры данных, основы программирования."},{name:"JavaScript",status:"practical",desc:"Интерактивные веб-прототипы, DOM, Canvas и игровые циклы в браузере.",example:"MOB RUSH: PixiJS 7, один HTML-файл 472 КБ. Runner: PixiJS 8 + TypeScript. Этот сайт."},{name:"GitHub",status:"practical",desc:"Ведение репозиториев, коммиты, ветки, публикация проектов и GitHub Pages.",example:"25 публичных репозиториев, включая ECHOLOOP, MOB RUSH и серию интерактивных резюме."}]},{id:"tools",title:"Tools",icon:"tool",items:[{name:"VS Code",status:"practical",desc:"Основной редактор для веб-проектов, скриптов и документации.",example:"MOB RUSH, Runner, интерактивные резюме и этот сайт."},{name:"Git",status:"practical",desc:"Контроль версий, осмысленные коммиты и работа с удалёнными репозиториями.",example:"Ведение всех публичных проектов на GitHub."},{name:"Android Studio",status:"basic",desc:"Базовое понимание структуры Android-проекта и запуска приложения.",example:"Учебные задачи и знакомство с мобильной сборкой."},{name:"Postman",status:"basic",desc:"Проверка HTTP-запросов и понимание клиент-серверного взаимодействия.",example:"Учебные лабораторные работы по сетевым запросам."},{name:"Codex",status:"practical",desc:"Использование AI-ассистента для ускорения разработки и проверки кода.",example:"Быстрые прототипы, рефакторинг и генерация вспомогательных материалов."},{name:"Claude",status:"practical",desc:"Работа с длинным контекстом: разбор документации, структуры и текстов.",example:"Подготовка GDD, описание механик и проверка согласованности материалов."}]},{id:"additional",title:"Additional Knowledge",icon:"book",items:[{name:"Основы программирования",status:"practical",desc:"Переменные, ветвления, циклы, функции, структуры данных и алгоритмы.",example:"Применяю в Unity/C# и веб-прототипах; техническое образование БГУИР."},{name:"Таблицы и базы данных",status:"basic",desc:"Понимание структуры данных, таблиц, связей и SQL-запросов.",example:"Учебные задания по базам данных; балансные таблицы для игровых систем."},{name:"Основы тестирования",status:"practical",desc:"Проверка граничных случаев, воспроизводимость багов и автоматические проверки.",example:"ECHOLOOP: 26 EditMode-тестов на проходимость уровней; тесты нашли 4 реальных бага."},{name:"Клиент-серверное взаимодействие",status:"basic",desc:"Понимание запросов, ответов, статусов и базовой работы с API.",example:"Учебные лабораторные работы, Postman, понимание сетевых ограничений playable-рекламы."},{name:"Техническая документация",status:"practical",desc:"Чтение и составление документации: требования, механики, параметры, ограничения.",example:"GDD стратегии, README проектов, описание архитектуры ECHOLOOP."}]}];function kt(){return`
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
          ${xt.map((e,t)=>`
              <div class="skill-group reveal reveal--d${t%2+1}">
                <div class="skill-group__head">
                  <h3 class="skill-group__title">${w(e.icon)} ${i(e.title)}</h3>
                  <span class="skill-group__count">${String(e.items.length).padStart(2,"0")} items</span>
                </div>
                <div class="skill-list">
                  ${e.items.map((a,s)=>`
                      <div class="skill-item">
                        <button class="skill-card" type="button" aria-expanded="false" id="skill-${e.id}-${s}" aria-controls="skill-detail-${e.id}-${s}">
                          <span class="skill-card__name">${i(a.name)}</span>
                          <span class="skill-card__status">${i($t[a.status])}</span>
                          <span class="skill-card__plus" aria-hidden="true"></span>
                        </button>
                        <div class="skill-detail" id="skill-detail-${e.id}-${s}" role="region" aria-labelledby="skill-${e.id}-${s}">
                          <div>
                            <div class="skill-detail__inner">
                              <b>Application</b>
                              ${i(a.desc)}
                              <b>Project example</b>
                              ${i(a.example)}
                            </div>
                          </div>
                        </div>
                      </div>`).join("")}
                </div>
              </div>`).join("")}
        </div>
      </div>
    </section>
  `}function Mt(){const e=Array.from(document.querySelectorAll(".skill-item"));e.forEach(t=>{const a=t.querySelector(".skill-card");a?.addEventListener("click",()=>{const s=t.classList.contains("is-open");e.forEach(n=>{n.classList.remove("is-open"),n.querySelector(".skill-card")?.setAttribute("aria-expanded","false")}),s||(t.classList.add("is-open"),a.setAttribute("aria-expanded","true"))})})}function St(){return`
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
          ${Te.map((e,t)=>`
              <button class="filter-btn ${t===0?"is-active":""}" type="button" data-filter="${e.id}" aria-pressed="${t===0?"true":"false"}">
                ${i(e.label)}
              </button>`).join("")}
        </div>

        <div class="missions-grid" id="missions-grid">
          ${_e.map(e=>`
              <article class="project-card reveal" data-filters="${e.filters.join(" ")}" data-project-card="${e.id}">
                <div class="project-card__media">
                  <img src="${i(e.cardImage)}" alt="${i(e.cardAlt)}" loading="lazy" decoding="async" />
                  <span class="project-card__index">${i(e.index)} / Mission</span>
                  <span class="project-card__status ${e.statusType==="dev"?"project-card__status--dev":""}">
                    ${i(e.status)}
                  </span>
                </div>
                <div class="project-card__body">
                  <div class="project-card__kicker">
                    <span>${i(e.genre)}</span>
                    <span>${i(e.engine)}</span>
                    <span>${i(e.year)}</span>
                  </div>
                  <h3 class="project-card__title">${i(e.title)}</h3>
                  ${e.subtitle?`<p class="project-card__subtitle">${i(e.subtitle)}</p>`:""}
                  <p class="project-card__desc">${i(e.cardDesc)}</p>
                  <div class="project-card__foot">
                    <div class="project-card__tags">
                      ${e.tags.map(t=>`<span class="tag">${i(t)}</span>`).join("")}
                    </div>
                    <button class="project-card__open" type="button" data-open-project="${e.id}" aria-label="Открыть проект ${i(e.title)}">
                      Project details
                    </button>
                  </div>
                </div>
              </article>`).join("")}
        </div>
        <p class="lab-note">
          Все изображения — реальные материалы проектов. Для «Механизма» используется проектная схема:
          публичная сборка ещё не опубликована.
        </p>
      </div>
    </section>
  `}function wt(){const e=Array.from(document.querySelectorAll("[data-filter]")),t=Array.from(document.querySelectorAll("[data-project-card]")),a=s=>{e.forEach(n=>{const l=n.dataset.filter===s;n.classList.toggle("is-active",l),n.setAttribute("aria-pressed",l?"true":"false")}),t.forEach(n=>{const l=(n.dataset.filters||"").split(" "),o=s==="all"||l.includes(s);n.classList.toggle("is-hidden",!o)})};e.forEach(s=>{s.addEventListener("click",()=>a(s.dataset.filter))}),document.querySelectorAll(".project-card__media img").forEach(s=>{s.addEventListener("error",()=>{const n=s.closest(".project-card__media");if(!n||n.querySelector(".placeholder-shot"))return;const l=document.createElement("div");l.className="placeholder-shot",l.style.height="100%",l.innerHTML="<div><b>Материал не загрузился</b><span>Изображение появится после добавления реального файла.</span></div>",s.replaceWith(l)})})}function Lt(){const e=E.education;return`
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
            ${E.about.map(t=>`<p>${i(t)}</p>`).join("")}
            <div class="about-panel__quote">
              <span class="about-panel__quote-label">Принцип работы</span>
              ${i(E.principle)}
            </div>
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
                  <div class="edu-step__date">${i(e.years)} · ${i(e.current)}</div>
                  <div class="edu-step__title">${i(e.institution)}</div>
                  <div class="edu-step__desc">
                    ${i(e.fullName)}<br />
                    ${i(e.program)}<br />
                    ${i(e.degree)}
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
                ${E.languages.map(t=>`<span class="chip">${i(t.name)} · ${i(t.level)}</span>`).join("")}
              </div>
              ${i(e.note)}
            </div>
          </article>
        </div>

        <div class="interests" id="interests">
          ${E.interests.map((t,a)=>`
              <button class="interest-card reveal reveal--d${a%3+1}" type="button" aria-expanded="false">
                <span class="interest-card__num">${String(a+1).padStart(2,"0")} / Direction</span>
                <span class="interest-card__title">${i(t.title)}</span>
                <span class="interest-card__short">${i(t.short)}</span>
                <span class="interest-card__more"><span>${i(t.more)}</span></span>
                <span class="interest-card__toggle" aria-hidden="true">+</span>
              </button>`).join("")}
        </div>

        <div class="approach">
          ${E.approach.map((t,a)=>`
              <div class="approach__item reveal reveal--d${a+1}">
                <b>${String(a+1).padStart(2,"0")} / ${i(t.title)}</b>
                <p>${i(t.text)}</p>
              </div>`).join("")}
        </div>
      </div>
    </section>
  `}function At(){const e=Array.from(document.querySelectorAll(".interest-card"));e.forEach(t=>{t.addEventListener("click",()=>{const a=t.classList.contains("is-open");e.forEach(s=>{s.classList.remove("is-open"),s.setAttribute("aria-expanded","false")}),a||(t.classList.add("is-open"),t.setAttribute("aria-expanded","true"))})})}const ye=document.querySelector("#app");ye&&(ye.innerHTML=`
    ${Ee()}
    ${Oe()}
    <main id="main">
      ${Qe()}
      ${Lt()}
      ${kt()}
      ${St()}
      ${gt()}
      ${st()}
      ${et()}
    </main>
    ${qe()}
    ${we()}
  `,Ce(),De(),At(),Mt(),wt(),_t(),it(),tt(),Ke(),ge(),Ae());
