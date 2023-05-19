import React, { useState } from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  line-height: 65px;
  text-align: center;
  width: 80%;
  max-width: 600px;
  background: ${({ active }) => (active ? "#f5f5f5" : "white")};
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
    line-height: 0.8;
  }
  img {
    margin-right: 16px;
    transform: scale(0.8);
  }
`;

export default function Card({ card, index }) {
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setActiveIndex(index === activeIndex ? null : index)
  };

  return (
    <CardDiv active={active} onClick={handleClick}>
      <h1>Pergunta {index}</h1>
      <img src="src/assets/seta_play.png" alt="icon-play" />
    </CardDiv>
  );
}
