import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { THEME } from "../src/global-style";
import { Provider } from "react-redux";
import { store } from "../src/store/index";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];
