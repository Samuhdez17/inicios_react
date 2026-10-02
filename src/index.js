import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/app/App';
import SumarNumeros from './components/sumar_numeros/SumarNumeros';
import SaludoPadre from './components/SaludoPadre';
import PadreMatematicas from './components/PadreMatematicas';
import Contador from './components/Contador';
import Coche from './ejercicio/components/Coche';
import ContadorJSX from './ejercicio2/components/ContadorJSX';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContadorJSX />
    {/* 
    <Coche marca='Audi' modelo='RS6' velMax='320' aceleracion='30' />
    <Coche marca='Mazda' modelo='3' velMax='240' aceleracion='15' />
    <Contador/>
    <PadreMatematicas />
    <SaludoPadre />
    <SumarNumeros numero1 = '2' numero2 = '9' />
    <SumarNumeros numero1 = '1' numero2 = '9' /> 
    */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
