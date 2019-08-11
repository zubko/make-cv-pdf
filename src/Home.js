// @flow

import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default (props: Object) => {
  return (
    <Container {...props}>
      <Item to="/web">CV for Web</Item>
      <Item to="/mobile">CV for Mobile</Item>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100vh;
`;

const Item = styled(Link)`
  display: block;
  width: 30vw;
  height: 70vh;
  border: 1px solid black;
  box-shadow: 4px 4px 0px 0px #000000;
  text-decoration-style: wavy;
  font-size: 200%;
  font-family: serif;
  text-decoration: none;
  color: #000;
  background-color: white;
  padding: 0.5em 0.7em;
  opacity: 0.8;
  transition: 0.2s;
  :hover {
    opacity: 1;
    transform: translateY(-12px);
  }
`;
