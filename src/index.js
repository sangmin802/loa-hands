import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.js'
import { Provider } from 'react-redux'
import store from './store.js';

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);