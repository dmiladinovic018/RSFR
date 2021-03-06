import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Constants from './components/Constants';


fetch(`${Constants().pluginAPI}/routes`)
.then(response => response.json())
.then(data => {
    const root = ReactDOM.createRoot(document.querySelector('html'));
    root.render(<App routeMap={JSON.parse(data).routes} />);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
