import './sass/app.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';


const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
