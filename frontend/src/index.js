import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RouterApp from './routes'
import './global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterApp/>
);

