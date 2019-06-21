// @flow
import * as React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { NormalText, BoldText } from ".";

const Container = styled(View)`
  background-color: lightgrey;
  padding: 2.7px 5.4px 2px;
  /* flex-direction: row; */
  /* justify-content: flex-start; */
  /* align-items: center; */
`;

export default () => (
  <Container>
    <NormalText>
      <BoldText>Goal:</BoldText> Develop great apps and products as a part of a
      great team.
    </NormalText>
  </Container>
);
