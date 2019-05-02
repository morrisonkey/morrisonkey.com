import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

import { BrowserRouter as Router } from 'react-router-dom';

ReactGA.initialize('UA-139320066-1'); // Google analytics tracking ID
// tracking specific pathname
// ReactGA.pageview("/");
// general automated tracking (using react router)
// history.listen(location => ReactGA.pageview(location.pathname));

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
