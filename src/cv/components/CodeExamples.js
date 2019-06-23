import * as React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { NormalText, BoldText } from ".";
import { theme, metrics } from "../utils";

const Container = styled(View)`
  background-color: ${theme.middleBg};
  padding: ${metrics.padding(1)};
`;

export default () => (
  <Container>
    <NormalText>
      <BoldText>Code Examples:</BoldText> https://codesandbox.io/u/zubko ☼
      https://codepen.io/zubko/ ☼ https://github.com/zubko
    </NormalText>
  </Container>
);
