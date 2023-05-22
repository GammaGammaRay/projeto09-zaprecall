import { useState } from "react";
import Cards from "./CardsContainer";
import Footer from "./Footer";
import styled from "styled-components";

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
  console.log(result);
  
  return (
    <>
      <Header>
        <img src="src/assets/logo.png" alt="zap logo" />
        <h1>ZapRecall</h1>
      </Header>
      <Cards
        setAnswerCt={setAnswerCt}
        answerCt={answerCt}
        result={result}
        setResult={setResult}
      />
      <Footer answerCt={answerCt} result={result}/>
    </>
  );
}

