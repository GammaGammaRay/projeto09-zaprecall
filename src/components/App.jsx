import { useState } from "react";
import React from "react";
import Cards from "./CardsContainer";
import Footer from "./Footer";
import styled from "styled-components";
import cardArray from "../cardArray";
import WelcomeScreen from "./WelcomeScreen";

const Header = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Righteous", sans-serif;
    font-size: 36px;
    margin-left: 26px;
  }
  img {
    width: 52px;
    height: 60px;
  }
`;


export default function App() {
  const [answerCt, setAnswerCt] = useState(0);
  const [result, setResult] = useState([]);
  const [welcome, setWelcome] = useState(false);
  console.log(result);

  return (
    <>
      {welcome ? (
        <React.Fragment>
          <Header>
            <img src="src/assets/logo.png" alt="zap logo" />
            <h1>ZapRecall</h1>
          </Header>
          <Cards
            cardArray={cardArray}
            setAnswerCt={setAnswerCt}
            answerCt={answerCt}
            result={result}
            setResult={setResult}
          />
          <Footer cardArray={cardArray} answerCt={answerCt} result={result} />
        </React.Fragment>
      ) : (
        <WelcomeScreen welcome={welcome} setWelcome={setWelcome} />
      )}
    </>
  );
}
