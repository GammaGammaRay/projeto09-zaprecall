import React from "react";
import styled from "styled-components";
import cardArray from "../cardArray";
import Card from "./Card";

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333333;
`;

export default function Cards() {
  return (
    <CardContainer>
      {cardArray.map((card, index) => (
        <Card key={card.question} card={card} index={index+1} />
      ))}
    </CardContainer>
  );
}
