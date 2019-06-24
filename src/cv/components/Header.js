// @flow
import * as React from "react";
import { View, Image } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { theme } from "../utils";

import Contacts from "./Contacts";
import { H1, H2 } from "./Text";
import getResourcePath from "../utils/getResourcePath";

const Container = styled(View)`
  background-color: ${theme.header};
  color: white;
  flex-direction: row;
`;
const MainArea = styled(View)`
  flex: 1;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
`;
const StyledContacts = styled(Contacts)`
  margin: 15px 20px 10px;
`;
const Photo = styled(Image)`
  width: 60px;
  object-fit: contain;
  margin-left: 20px;
`;

export default () => (
  <Container>
    <Photo src={getResourcePath("photo.png")} />
    <MainArea>
      <H1>Alexander Zubko</H1>
      <H2>Mobile Apps Developer with Web and Node.js skills</H2>
    </MainArea>
    <StyledContacts />
  </Container>
);
