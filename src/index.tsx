import React from "react";
import ReactDOM from "react-dom";
import "style/fonts.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { THEME } from "global-style";
import App from "layout/app/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      useErrorBoundary: true,
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60 * 3,
    },
  },
});

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ThemeProvider theme={THEME}>
      {/* <React.StrictMode> */}
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </QueryClientProvider>
      {/* </React.StrictMode> */}
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
