import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header `
  background-color: lightblue;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const ImgStyle = styled.img `
  width: 50%;
  height: auto;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <HeaderStyle>
        <h1>Welcome to the ultimate fan site!</h1>
        <ImgStyle
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </HeaderStyle>
    </section>
  );
}
