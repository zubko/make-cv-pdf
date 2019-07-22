// @flow
import * as React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { NormalText, BoldText } from "./Text";
import { metrics, colors } from "../utils/theme";

const Container = styled(View)`
  background-color: ${colors.middleBg};
  padding: ${metrics.padding(1)};
`;

export default props => (
  <Container {...props}>
    <NormalText>
      <BoldText>Goal:</BoldText> Develop great mobile apps and products as a
      part of a great team.
    </NormalText>
  </Container>
);
