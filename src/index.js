import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Collapsible.css';
import reportWebVitals from './reportWebVitals';
import Collapsible from './Collapsible';
import retText from './retText';
import Slideshow from "./Slideshow";
import SomePage from "./SomePage";
import Home from "./HeadsetPage";


import App from './redirect';

import { Navigate } from 'react-router';

ReactDOM.render(
    <React.StrictMode>

        <div
            // className="general-column"
        >
            {/*<div className = "pagename">Oculus Quest 2</div>*/}
            <App />
        </div>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
