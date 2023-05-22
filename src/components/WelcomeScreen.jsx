import React from "react";
import styled from "styled-components";

const WelcomeScreenDiv = styled.div`
  font-family: "Righteous", sans-serif;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #fb6b6b;

`;

const EnterButton = styled.button`
  font-family: "Recursive", sans-serif;
  background: #ffffff;
  height: 54px;
  width: 246px;
  border: 1px solid #d70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  font-size: 18px;
  &:hover {
    box-shadow: 5px 8px 8px rgba(0, 0, 0, 0.15);
  }
`;
function WelcomeScreen({ setWelcome }) {
  return (
    <WelcomeScreenDiv>
      <img src="src/assets/logo.png" alt="zap logo" />
      <h1>ZapRecall</h1>
      <EnterButton onClick={setWelcome} data-test="start-btn">IniciarRecall!</EnterButton>
    </WelcomeScreenDiv>
  );
}

export default WelcomeScreen;
