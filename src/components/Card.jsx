import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  line-height: 65px;
  text-align: center;
  width: 80%;
  max-width: 600px;
  background: ${({ active }) => (active ? "#FFFFD4" : "white")};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  h1 {
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #333333;
    margin-left: 16px;
    line-height: 1.4;
  }
  img {
    margin-right: 16px;
    transform: scale(0.8);
  }
`;

const AnswerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100%;
`;

const AnswerBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 300px;
  margin: 16px;
`;

const AnswerButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 85px;
  height: 35px;
  background-color: ${({ color }) => color};
`;

function CardHolder({ index }) {
  return (
    <>
      <h1>Pergunta {index}</h1>
      <img src="src/assets/seta_play.png" alt="icon-play" />
    </>
  );
}


function AnswerButtons({ setAnswerCt, setResult, result, answerCt }) {
  function handleAnswer(opt) {
    setAnswerCt((prevAnswerCt) => prevAnswerCt + 1);
    setResult((prevResult) => [...prevResult, opt]);
  }


  return (
    <AnswerBtnContainer>
      <AnswerButton color="#FF3030" onClick={() => handleAnswer(0)}>
        Não lembrei
      </AnswerButton>
      <AnswerButton color="#FF922E" onClick={() => handleAnswer(1)}>
        Quase não lembrei
      </AnswerButton>
      <AnswerButton color="#2FBE34" onClick={() => handleAnswer(2)}>
        Zap!
      </AnswerButton>
    </AnswerBtnContainer>
  );
}



function CardActive({ question, answer, setAnswerCt, answerCt, setResult }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };


  return (
    <>
      {showAnswer ? (
        <AnswerCard>
          <h1>{answer}</h1>
          <AnswerButtons setAnswerCt={setAnswerCt} setResult={setResult} answerCt={answerCt} />
        </AnswerCard>
      ) : (
        <>
          <h1>{question}</h1>
          <img
            src="src/assets/seta_virar.png"
            alt="icon-flip"
            onClick={toggleAnswer}
          />
        </>
      )}
    </>
  );
}


export default function Card({ card, index, active, setAnswerCt, result, setResult, onClick }) {
  const handleAnswer = (opt) => {
    setAnswerCt((prevAnswerCt) => prevAnswerCt + 1);
    setResult((prevResult) => [...prevResult, opt]);
  };

  return (
    <CardDiv active={active} onClick={onClick} result={result}>
      {active ? (
        <CardActive
          question={card.question}
          answer={card.answer}
          handleAnswer={handleAnswer}
          setAnswerCt={setAnswerCt}
          setResult={setResult}
        />
      ) : (
        <CardHolder index={index} />
      )}
    </CardDiv>
  );
}