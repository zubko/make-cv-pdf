// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Container = styled(View)`
  background-color: lightgrey;
  padding: 5px;
`;
const BoldText = styled(Text)`
  font-weight: bold;
`;
const StyledText = styled(Text)`
  font-size: 20px;
`;

export default () => (
  <Container style={{ backgroundColor: "lightgrey", padding: "5px" }}>
    <StyledText>
      <BoldText>Goal:</BoldText> To develop great mobile and web apps as a part
      of a great team.
    </StyledText>
  </Container>
);
