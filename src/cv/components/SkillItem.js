// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Glyph } from ".";

const Container = styled(View)`
  align-items: center;
  padding: 5px;
  flex-direction: row;
`;
const StyledText = styled(Text)`
  font-size: 20px;
`;
const StarSolid = ({ half = false }) => (
  <Glyph name={half ? "star-half-solid" : "star-solid"} />
);
const StyledStarSolid = styled(StarSolid)`
  font-size: 20px;
  margin-bottom: 5px;
`;

type Props = { name: string, score: number };
export default ({ name = "", score = 5 }: Props) => (
  <Container>
    <StyledText>{name} </StyledText>
    <StyledStarSolid />
    <StyledText>{score}</StyledText>
  </Container>
);
