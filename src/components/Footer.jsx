import { useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  max-width: 1280px;
  width: 100%;
  max-width: 600px;
  height: 75px;
  line-height: 75px;
  bottom: 0px;
  background-color: white;
  color: #333333;
  text-align: center;
  p {
    display: inline-block;
    font-family: "Recursive", sans-serif;
    vertical-align: middle;
    line-height: 1;
  }
`;

export default function Footer({answerCt}) {
  return (
    <FooterContainer>
      <p>{answerCt}/4 CONCLUÍDOS</p>
    </FooterContainer>
  );
}
