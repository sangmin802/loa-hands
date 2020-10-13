import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './connect.js';
import { Provider } from 'react-redux'
import store from './store.js';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store = { store }>
    {/* <HashRouter basename="/loa-hands/"> */}
    <HashRouter>
      <React.StrictMode>
        <App.App />
      </React.StrictMode>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);