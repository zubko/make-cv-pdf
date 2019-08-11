// @flow
import * as React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { NormalText, BoldText } from "./Text";
import { metrics, colors } from "../utils/theme";

type Props = {
  children: React.Node
};

export default ({ children, ...otherProps }: Props) => (
  <Container {...otherProps}>
    <NormalText>
      <BoldText>Goal:</BoldText> {children}
    </NormalText>
  </Container>
);

const Container = styled(View)`
  background-color: ${colors.middleBg};
  padding: ${metrics.padding(1)};
`;
