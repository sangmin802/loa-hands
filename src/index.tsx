import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import {store} from './store';
import AppContainer from './components/AppContainer';

// test

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <React.StrictMode> */}
        <AppContainer />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);