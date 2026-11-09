/* Линейные иконки 24×24. Набор выдержан в одном штрихе и одной геометрии. */

const wrap = (body) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${body}</svg>`;

export const icons = {
  target: wrap(
    '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>',
  ),
  crosshair: wrap(
    '<path d="M12 3v5M12 16v5M3 12h5M16 12h5"/><circle cx="12" cy="12" r="3.2"/><circle cx="12" cy="12" r="8.4" stroke-dasharray="2 4"/>',
  ),
  code: wrap('<path d="M8.5 6.5 3 12l5.5 5.5M15.5 6.5 21 12l-5.5 5.5M13.5 4l-3 16"/>'),
  tool: wrap(
    '<path d="M14.5 6.5a4.2 4.2 0 0 0 5.4 5.4L11 20.8a2.1 2.1 0 0 1-3-3L16.9 8.9"/><path d="m14.5 6.5 2.2-2.2a4.2 4.2 0 0 1 2.9 2.9l-2.2 2.2"/>',
  ),
  book: wrap(
    '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 18.5V5.5M8 7h8M8 11h6"/>',
  ),
  download: wrap('<path d="M12 3v12M7 10l5 5 5-5M4 19h16"/>'),
  arrow: wrap('<path d="M4 12h16M14 6l6 6-6 6"/>'),
  arrowUpRight: wrap('<path d="M6 18 18 6M8 6h10v10"/>'),
  external: wrap('<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>'),
  play: wrap('<path d="M8 5v14l11-7z"/>'),
  mail: wrap('<path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/>'),
  phone: wrap(
    '<path d="M7 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5L16 12.5l5 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5 5.2 2 2 0 0 1 7 3z"/>',
  ),
  github: wrap(
    '<path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.5 1.3a12.2 12.2 0 0 0-6.2 0C6.4 3.8 5.4 4.1 5.4 4.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22"/>',
  ),
  copy: wrap('<rect x="8" y="8" width="12" height="12"/><path d="M16 8V4H4v12h4"/>'),
  close: wrap('<path d="M5 5l14 14M19 5 5 19"/>'),
  menu: wrap('<path d="M3 6h18M3 12h18M3 18h18"/>'),
  check: wrap('<path d="m4 12 5 5L20 6"/>'),
  reset: wrap('<path d="M4 4v6h6"/><path d="M4.5 10a8 8 0 1 1 1 6"/>'),
  chevronDown: wrap('<path d="m5 9 7 7 7-7"/>'),
  layers: wrap('<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>'),
  shield: wrap('<path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z"/><path d="m9 12 2 2 4-4"/>'),
  chart: wrap('<path d="M4 20V4M4 20h16M8 16v-5M12 16V7M16 16v-8M20 16V5"/>'),
  clock: wrap('<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>'),
  map: wrap('<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>'),
  coins: wrap(
    '<ellipse cx="9" cy="7" rx="5" ry="2.5"/><path d="M4 7v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7"/><path d="M4 11v4c0 1.4 2.2 2.5 5 2.5 1.2 0 2.3-.2 3.1-.6"/><ellipse cx="16" cy="13" rx="4" ry="2"/><path d="M12 13v4c0 1.1 1.8 2 4 2s4-.9 4-2v-4"/>',
  ),
  phoneDevice: wrap('<rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M10 5h4M11 18.5h2"/>'),
  eye: wrap('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>'),
  zap: wrap('<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>'),
  info: wrap('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>'),
  plus: wrap('<path d="M12 5v14M5 12h14"/>'),
  minus: wrap('<path d="M5 12h14"/>'),
};

export function icon(name) {
  return icons[name] || icons.target;
}
