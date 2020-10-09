import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './connect.js';
import { Provider } from 'react-redux'
import store from './store.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
      <React.StrictMode>
        <App.App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);