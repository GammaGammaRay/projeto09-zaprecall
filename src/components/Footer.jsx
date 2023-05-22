import { useState } from "react";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  max-width: 1280px;
  width: 100%;
  max-width: 600px;
  height: 75px;
  line-height: 20px;
  bottom: 0px;
  background-color: white;
  color: #333333;
  text-align: center;
  p {
    display: inline-block;
    font-family: "Recursive", sans-serif;
    vertical-align: middle;
    line-height: 0.5;
  }
`;

const IconListDiv = styled.div`
  width: 180px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: row;
  img {
    width: 18px;
  }
`;

const FooterResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Recursive", sans-serif;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  max-width: 600px;
  width: 100%;
  height: fit-content;
  position: fixed;
  bottom: 75px;
  background-color: white;
  color: black;
  p {
    width: 80%;
    font-weight: 400;
  }
  h1 {
    font-size: 18px;
    font-weight: 700;
  }
`;

const FooterResultDivTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    height: 18px;
    margin-right: 10px;
  }
`;
function IconList({ result }) {
  return (
    <IconListDiv>
      {result.map((resultItem, index) => {
        if (resultItem === 0) {
          return (
            <img
              key={index}
              data-test="no-icon"
              src="src/assets/icone_erro.png"
              alt="icon-error"
            />
          );
        }
        if (resultItem === 1) {
          return (
            <img
              data-test="zap-icon"
              key={index}
              src="src/assets/icone_quase.png"
              alt="icon-almost"
            />
          );
        }
        if (resultItem === 2) {
          return (
            <img
              data-test="partial-icon"
              key={index}
              src="src/assets/icone_certo.png"
              alt="icon-correct"
            />
          );
        }
        return null;
      })}
    </IconListDiv>
  );
}

function FinalResult({ result }) {
  if (result.includes(2)) {
    return (
      <FooterResultDiv data-test="finish-text">
        <FooterResultDivTitle>
          <img src="src/assets/party.png" alt="party" />
          <h1>Parabéns!</h1>
        </FooterResultDivTitle>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </FooterResultDiv>
    );
  } else {
    return (
      <FooterResultDiv data-test="finish-text">
        <FooterResultDivTitle>
          <img src="src/assets/sad.png" alt="party" />
          <h1>Putz...</h1>
        </FooterResultDivTitle>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </FooterResultDiv>
    );
  }
}
export default function Footer({ answerCt, cardArray, result }) {
  // console.log("answerCt: ", answerCt, "arrayLen: ", cardArray.length, "result: ", result);
  if (answerCt === cardArray.length) {
    return (
      <React.Fragment>
        <FinalResult result={result} />
        <FooterContainer>
          <p>
            {answerCt}/{cardArray.length} CONCLUÍDOS
          </p>
          <IconList result={result} />
        </FooterContainer>
      </React.Fragment>
    );
  }
  return (
    <FooterContainer data-test="footer">
      <p>
        {answerCt}/{cardArray.length} CONCLUÍDOS
      </p>
      <IconList result={result} />
    </FooterContainer>
  );
}
