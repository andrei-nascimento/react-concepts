import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exemplo01_useState from './hooks/Exemplo01_useState';
import Exemplo02_useState from './hooks/Exemplo02_useState';
import Exemplo03_useState from './hooks/Exemplo03_useState';
import Exemplo04_useState from './hooks/Exemplo04_useState';
import Exemplo05_useEffect from './hooks/Exemplo05_useEffect';
import Exemplo06_useEffect from './hooks/Exemplo06_useEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Exemplo06_useEffect />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
