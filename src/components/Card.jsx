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
  &:hover {
    box-shadow: 5px 8px 8px rgba(0, 0, 0, 0.15);
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
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

function CardHolder({ index, cardState }) {
  if (cardState === "unanswered") {
    return (
      <>
        <h1 data-test="flashcard-text">Pergunta {index}</h1>
        <img
          data-test="play-btn"
          src="src/assets/seta_play.png"
          alt="icon-play"
        />
      </>
    );
  }
  if (cardState === "wrong") {
    return (
      <>
        <h1
          data-test="flashcard-text"
          style={{ color: "#FF3030", textDecoration: "line-through" }}
        >
          Pergunta {index}
        </h1>
        <img
          data-test="no-icon"
          src="src/assets/icone_erro.png"
          alt="icon-wrong"
        />
      </>
    );
  }
  if (cardState === "almost") {
    return (
      <>
        <h1
          data-test="flashcard-text"
          style={{ color: "#FF922E", textDecoration: "line-through" }}
        >
          Pergunta {index}
        </h1>
        <img
          data-test="partial-icon"
          src="src/assets/icone_quase.png"
          alt="icon-almost"
        />
      </>
    );
  }
  if (cardState === "correct") {
    return (
      <>
        <h1
          data-test="flashcard-text"
          style={{ color: "#2FBE34", textDecoration: "line-through" }}
        >
          Pergunta {index}
        </h1>
        <img
          data-test="zap-icon"
          src="src/assets/icone_certo.png"
          alt="icon-correct"
        />
      </>
    );
  }
}

function AnswerButtons({ handleAnswer, setCardState }) {
  return (
    <AnswerBtnContainer>
      <AnswerButton
        data-test="no-btn"
        color="#FF3030"
        onClick={() => {
          handleAnswer(0);
          setCardState("wrong");
        }}
      >
        Não lembrei
      </AnswerButton>
      <AnswerButton
        data-test="partial-btn"
        color="#FF922E"
        onClick={() => {
          handleAnswer(1);
          setCardState("almost");
        }}
      >
        Quase não lembrei
      </AnswerButton>
      <AnswerButton
        data-test="zap-btn"
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
        <AnswerCard data-test="flashcard">
          <h1 data-test="flashcard-text">{answer}</h1>
          <AnswerButtons
            handleAnswer={handleAnswer}
            setCardState={setCardState}
          />
        </AnswerCard>
      ) : (
        <div
          data-test="flashcard"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h1 data-test="flashcard-text">{question}</h1>
          <img
            src="src/assets/seta_virar.png"
            alt="icon-flip"
            data-test="turn-btn"
            onClick={toggleAnswer}
          />
        </div>
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
  result,
  setResult,
}) {
  const [cardState, setCardState] = useState("unanswered");

  const handleAnswer = (answer) => {
    setAnswerCt((prevAnswerCt) => prevAnswerCt + 1);
    setResult([...result, answer]);
    setActive(0, () => {
      console.log(active);
    });
  };

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <CardDiv
      data-test="flashcard"
      active={active}
      onClick={() => {
        if (activeIndex === null && cardState === "unanswered") {
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
