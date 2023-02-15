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
import Exemplo07_useContext from './hooks/Exemplo07_useContext';
import Exemplo08_useContext from './hooks/Exemplo08_useContext';
import Exemplo09_useContext from './hooks/Exemplo09_useContext';
import Exemplo10_useRef from './hooks/Exemplo10_useRef';
import Exemplo11_useReducer from './hooks/Exemplo11_useReducer';
import Exemplo12_useMemo from './hooks/Exemplo12_useMemo';
import Exemplo13_useCallback from './hooks/Exemplo13_useCallback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Exemplo13_useCallback />
  </React.StrictMode>
);

reportWebVitals();
