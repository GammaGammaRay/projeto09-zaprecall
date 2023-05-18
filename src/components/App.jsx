import { useState } from "react";
import Cards from "./CardsContainer";
import Footer from "./Footer";
import styled from "styled-components";


export default function App() {
  return (
    <>
      <Header>
        <img src="src/assets/logo.png" alt="zap logo" />
        <h1>ZapRecall</h1>
      </Header>
      <Cards />
      <Footer />
    </>
  );
}

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
