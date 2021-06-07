import React from "react";
import ReactDOM from "react-dom";
import "./style/global.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { ThemeProvider } from "styled-components";
import { THEME } from "./global-style";
import App from "layout/app";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={THEME}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
