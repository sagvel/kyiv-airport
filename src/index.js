import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
const e = React.createElement;
const rootElem = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElem);
root.render(e(App));
