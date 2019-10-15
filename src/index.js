import {
  h,
  render
} from 'https://unpkg.com/preact@10.0.0/dist/preact.module.js';
import htm from 'https://unpkg.com/htm@2.2.1/dist/htm.module.js';
window.html = htm.bind(h);

import App from './App.js';

render(
  html`
    <${App} />
  `,
  document.body
);
