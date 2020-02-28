import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Heading = styled.header `
  display: flex;
  background-color: papayawhip;
  flex-flow: column nowrap;
  align-items: center;
`
const Nav = styled.nav `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

const LinkDiv = styled.div `
  padding: 2%;
  margin: 2% 5%;
`

export default function Header() {
  return (
    <Heading className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
      <LinkDiv>
        <Link to="/">Home</Link>
      </LinkDiv>
      <LinkDiv>
        <Link to="/characters">Characters</Link>
      </LinkDiv>
      <LinkDiv>
        <Link to="/locations">Locations</Link>
      </LinkDiv>
      <LinkDiv>
        <Link to="/episodes">Episodes</Link>
      </LinkDiv>
      </Nav>
    </Heading>
  );
}
