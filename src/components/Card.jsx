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

function CardHolder({ index, cardState }) {
  if (cardState === "unanswered") {
    return (
      <>
        <h1>Pergunta {index}</h1>
        <img src="src/assets/seta_play.png" alt="icon-play" />
      </>
    );
  }
  if (cardState === "wrong") {
    return (
      <>
        <h1 style={{ color: "#FF3030", textDecoration: "line-through" }}>
          Pergunta {index}
        </h1>
        <img src="src/assets/seta_play.png" alt="icon-play" />
      </>
    );
  }
  if (cardState === "almost") {
    return (
      <>
        <h1 style={{ color: "#FF922E", textDecoration: "line-through" }}>
          Pergunta {index}
        </h1>
        <img src="src/assets/seta_play.png" alt="icon-play" />
      </>
    );
  }
  if (cardState === "correct") {
    return (
      <>
        <h1 style={{ color: "#2FBE34", textDecoration: "line-through" }}>
          Pergunta {index}
        </h1>
        <img src="src/assets/seta_play.png" alt="icon-play" />
      </>
    );
  }
}

function AnswerButtons({ handleAnswer, setCardState }) {
  return (
    <AnswerBtnContainer>
      <AnswerButton
        color="#FF3030"
        onClick={() => {
          handleAnswer(0);
          setCardState("wrong");
        }}
      >
        Não lembrei
      </AnswerButton>
      <AnswerButton
        color="#FF922E"
        onClick={() => {
          handleAnswer(1);
          setCardState("almost");
        }}
      >
        Quase não lembrei
      </AnswerButton>
      <AnswerButton
        color="#2FBE34"
        onClick={() => {
          handleAnswer(2);
          setCardState("correct");
        }}
      >
        Zap!
      </AnswerButton>
    </AnswerBtnContainer>
  );
}

function CardActive({ question, answer, handleAnswer, setCardState }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <>
      {showAnswer ? (
        <AnswerCard setCardState={setCardState}>
          <h1>{answer}</h1>
          <AnswerButtons
            handleAnswer={handleAnswer}
            setCardState={setCardState}
          />
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

export default function Card({
  card,
  index,
  active,
  setAnswerCt,
  setActive,
  activeIndex,
}) {
  const [cardState, setCardState] = useState("unanswered");

  const handleAnswer = () => {
    setAnswerCt((prevAnswerCt) => prevAnswerCt + 1);
    setActive(0, () => {
      console.log(active);
    });
  };

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <CardDiv
      active={active}
      onClick={() => {
        if (activeIndex === null) {
          setActive(index);
        }
      }}
    >
      {active ? (
        <CardActive
          question={card.question}
          answer={card.answer}
          setAnswerCt={setAnswerCt}
          setActive={setActive}
          handleAnswer={handleAnswer}
          setCardState={setCardState}
        />
      ) : (
        <CardHolder cardState={cardState} index={index} />
      )}
    </CardDiv>
  );
}
