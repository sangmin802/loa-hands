import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './connect.js';
import { Provider } from 'react-redux'
import store from './store.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter basename="/loa-hands/">
      <React.StrictMode>
        <App.App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);