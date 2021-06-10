import React from "react";
import ReactDOM from "react-dom";
import "style/fonts.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { THEME } from "global-style";
import App from "layout/app/index";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={THEME}>
        {/* <React.StrictMode> */}
        <GlobalStyle />
        <App />
        {/* </React.StrictMode> */}
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
