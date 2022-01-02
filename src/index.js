import {
  h,
  render,
} from 'https://unpkg.com/preact@10.6.4/dist/preact.module.js';
import htm from 'https://unpkg.com/htm@3.1.0/dist/htm.module.js';
window.html = htm.bind(h);

import App from './components/App.js';

render(html` <${App} /> `, document.body);
