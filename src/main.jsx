import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import cardArray from "./cardArray";
import App from "./components/App";

// CSS for styled components
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #fb6b6b;
    color: rgba(255, 255, 255, 0.87);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  a:hover {
    color: #535bf2;
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <GlobalStyle />
      <App />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);
