import React from "react";
import ReactDOM from "react-dom";
import "style/fonts.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { THEME } from "global-style";
import App from "layout/app/index";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={THEME}>
        {/* <React.StrictMode> */}
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
        {/* </React.StrictMode> */}
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
