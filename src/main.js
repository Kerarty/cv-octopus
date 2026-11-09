import './styles/variables.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/responsive.css';

import {
  initCopyButtons,
  initInitScreen,
  initReveal,
  initScreenMarkup,
  toastMarkup,
} from './components/interactions.js';
import { initNavigation, navigationMarkup } from './components/navigation.js';
import { initProjectModal, projectModalMarkup } from './components/project-modal.js';
import { briefingMarkup } from './sections/briefing.js';
import { contactMarkup, initContact } from './sections/contact.js';
import { debriefMarkup, initDebrief } from './sections/debrief.js';
import { designLabMarkup, initDesignLab } from './sections/design-lab.js';
import { equipmentMarkup, initEquipment } from './sections/equipment.js';
import { initMissions, missionsMarkup } from './sections/missions.js';
import { initProfile, profileMarkup } from './sections/profile.js';

const app = document.querySelector('#app');

if (app) {
  app.innerHTML = `
    ${initScreenMarkup()}
    ${navigationMarkup()}
    <main id="main">
      ${briefingMarkup()}
      ${profileMarkup()}
      ${equipmentMarkup()}
      ${missionsMarkup()}
      ${designLabMarkup()}
      ${debriefMarkup()}
      ${contactMarkup()}
    </main>
    ${projectModalMarkup()}
    ${toastMarkup()}
  `;

  initInitScreen();
  initNavigation();
  initProfile();
  initEquipment();
  initMissions();
  initDesignLab();
  initDebrief();
  initContact();
  initProjectModal();
  initCopyButtons();
  initReveal();
}
