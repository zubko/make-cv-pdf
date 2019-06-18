// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

// import { rhythm } from '../../Typography';

import { Contacts } from ".";

const Container = styled(View)`
  background-color: #912e9c;
  color: white;
  flex-direction: row;
`;
const MainArea = styled(View)`
  flex: 1;
  flex-direction: column;
  padding: 20px;
  font-family: "Title";
`;
const Name = styled(Text)`
  font-size: 30px;
  line-height: 1.2;
  font-weight: medium;
`;
const Title = styled(Text)`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 400;
`;
const StyledContacts = styled(Contacts)`
  margin: 20px;
`;

export default () => (
  <Container>
    <MainArea>
      <Name>ALEXANDER ZUBKO</Name>
      <Title>Mobile Apps Developer with Web and Node.js skills</Title>
    </MainArea>
    <StyledContacts />
  </Container>
);
