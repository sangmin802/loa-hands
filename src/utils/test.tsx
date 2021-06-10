import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store/index";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "global-style";

const AllProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={THEME}>{children}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

const customRender = (ui, options?) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
