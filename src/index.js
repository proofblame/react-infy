import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'
import {
  BrowserRouter as Router,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router basename="/react-infy">
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

