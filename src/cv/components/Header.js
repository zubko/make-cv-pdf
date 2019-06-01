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
`;
const Name = styled(Text)`
  font-size: 30px;
`;
const Title = styled(Text)`
  font-size: 20px;
  font-weight: 200;
`;
const TitleItem = styled(Title)`
  padding-left: 30px;
`;
const StyledContacts = styled(Contacts)`
  margin: 20px;
`;

export default () => (
  <Container>
    <MainArea>
      <Name>ALEXANDER ZUBKO</Name>
      <Title>Mobile Apps Developer</Title>
      <TitleItem>- iOS / Android</TitleItem>
      <TitleItem>- Native / React Native</TitleItem>
    </MainArea>
    <StyledContacts />
  </Container>
);
