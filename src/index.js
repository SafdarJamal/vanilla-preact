import {
  h,
  render
} from 'https://unpkg.com/preact@10.4.8/dist/preact.module.js';
import htm from 'https://unpkg.com/htm@3.0.4/dist/htm.module.js';
window.html = htm.bind(h);

import App from './components/App.js';

render(html` <${App} /> `, document.body);
