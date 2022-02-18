// @flow
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  getAllDocumentsPaths,
  getNameFromPath,
  getRouteFromPath,
} from "./utils/documentsComponents";

export const Home = (props: Object) => {
  const paths = getAllDocumentsPaths();
  return (
    <Container {...props}>
      {paths.length
        ? paths.map((path) => (
            <Item key={path} to={getRouteFromPath(path)}>
              {getNameFromPath(path)}
            </Item>
          ))
        : "No documents found. Make sure there are some in the documents folder."}
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 1em;
`;

const Item = styled(Link)`
  display: block;
  width: 8em;
  height: 10em;
  border: 1px solid black;
  margin: 1em 0 0;
  box-shadow: 4px 4px 0px 0px #000000;
  text-decoration-style: wavy;
  font-size: 200%;
  font-family: serif;
  text-decoration: none;
  color: #000;
  background-color: white;
  padding: 0.5em 0.7em;
  opacity: 0.8;
  transition: opacity 0.2s, transform 0.2s;
  :hover {
    opacity: 1;
    transform: translateY(-12px);
  }
`;
