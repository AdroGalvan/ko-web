import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getByTitle } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// mensaje pesaña blur

let previusTitle = document.title

window.addEventListener('blur', () => {
  previusTitle = document.title
  document.title = 'Kodevs - Soluciones Digitales'
} )

window.addEventListener('focus', () => {
  document.title = previusTitle
})