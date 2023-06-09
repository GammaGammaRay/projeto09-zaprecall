import React, {useState} from "react";
import styled from "styled-components";
import cardArray from "../cardArray";
import Card from "./Card";

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333333;
  margin-bottom: 100px;
  
`;

export default function Cards({ setAnswerCt, answerCt, result, setResult, cardArray }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    if(activeIndex === null) {
      setActiveIndex(index);
    } else{setActiveIndex(null)}
  };

  return (
    <CardsContainer>
      {cardArray.map((card, index) => (
      <Card
        key={card.question}
        card={card}
        index={index + 1}
        active={index + 1 === activeIndex}
        setActive={() => handleClick(index + 1)}
        activeIndex={activeIndex}
        setAnswerCt={setAnswerCt}
        answerCt={answerCt}
        result={result}
        setResult={setResult}
      />
    ))}
    </CardsContainer>
  );
}
