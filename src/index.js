import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const domain = 'http://bcwp.hltv.test';
const restAPI = `${domain}/wp-json/wp/v2`;
const pluginAPI = `${domain}/wp-json/rsfr`;

fetch(`${pluginAPI}/routes`)
.then(response => response.json())
.then(data => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App routeMap={JSON.parse(data)} />);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
