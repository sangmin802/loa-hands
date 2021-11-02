import { createGlobalStyle, css } from "styled-components";

export const THEME = {
  gradientColor: {
    "gradient-1": "linear-gradient(135deg, #232323, #7a0000)",
    gradient0: "linear-gradient(135deg, #232323, #575757)",
    gradient1: "linear-gradient(135deg, #18220b, #304911)",
    gradient2: "linear-gradient(135deg, #111f2c, #113d5d)",
    gradient3: "linear-gradient(135deg, #261331, #480d5d)",
    gradient4: "linear-gradient(135deg, #362003, #9e5f04)",
    gradient5: "linear-gradient(135deg, #341a09, #a24006)",
    gradient6: "linear-gradient(135deg, #3d3325, #dcc999)",
    gradient7: "linear-gradient(135deg, #0c2e2c, #2faba8)",
  },
  backgroundColor: {
    darkDeep: "#000000",
    darkLow: "#1f222a",
  },
  contentBox: css`
    border-radius: 3px;
    border: 1px solid #f0f4f5;
  `,
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "oneMobile", sans-serif;
  }

  body {
    background : ${THEME.backgroundColor.darkDeep};
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media all and (min-width: 768px) {
    html {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 767px) {
    html {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 400px) {
    html {
      font-size: 10px;
    }
  }
`;
