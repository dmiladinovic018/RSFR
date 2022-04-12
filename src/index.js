import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const domain = 'http://bcwp.hltv.test';
const API = `${domain}/wp-json/wp/v2`;
let routeMap = [];

// [TO DO] cache routes
fetch(`${API}/posts?per_page=100`) // max 100 per request
.then(response => response.json())
.then(data => {
    data.forEach((post) => {
        routeMap.push({
            route: post.link.replace(domain, ''),
            id: post.id,
            type: 'post'
        });
    });

    fetch(`${API}/pages?per_page=100`) // max 100 per request
    .then(response => response.json())
    .then(data => {
        data.forEach((page) => {
            routeMap.push({
                route: page.link.replace(domain, ''),
                id: page.id,
                type: 'page'
            });
        });
        console.log(routeMap);

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App routeMap={routeMap} />);
    });
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
