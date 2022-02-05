import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { THEME } from "../src/globalStyle";
import "../src/style/fonts.css";

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
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
