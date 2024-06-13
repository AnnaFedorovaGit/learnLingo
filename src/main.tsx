import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <BrowserRouter basename="/learnLingo">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
