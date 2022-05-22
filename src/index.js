import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

