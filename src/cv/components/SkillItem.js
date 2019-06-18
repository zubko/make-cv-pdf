// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Glyph } from ".";

const Container = styled(View)`
  align-items: center;
  padding-horizontal: 5px;
  padding-vertical: 2px;
  flex-direction: row;
`;
const StyledText = styled(Text)`
  font-size: 20px;
`;
const Star = styled(Glyph)`
  font-size: 10px;
  margin-bottom: 3px;
  margin-left: 5px;
  margin-right: 2px;
`;
Star.defaultProps = { name: "star-solid" };

type Props = { name: string, score: number };
export default ({ name = "", score = 5 }: Props) => (
  <Container>
    <StyledText>{name}</StyledText>
    <Star />
    <StyledText>{score}</StyledText>
  </Container>
);
