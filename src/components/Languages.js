import * as React from "react";
import { View, Link } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { colors, metrics } from "../utils/theme";

import { NormalText, BoldText, ItalicText } from "./Text";
import Glyph from "./Glyph";

const Container = styled(View)`
  background-color: ${colors.lightBg};
  padding: ${metrics.padding(1)};
  flex-direction: row;
  justify-content: flex-start;
`;

const List = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  align-items: center;
  align-content: center;
`;

const StyledGlyph = styled(Glyph)`
  font-size: 5;
  opacity: 0.7;
`;

const MaxValue = styled(ItalicText)`
  opacity: 0.7;
`;

export default (props) => (
  <Container {...props}>
    <NormalText>
      <BoldText>Languages</BoldText>
      <MaxValue> (Max. 10)</MaxValue>
      <BoldText>: </BoldText>
    </NormalText>
    <List>
      <NormalText>English: 9</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>Ukrainian: 10</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>Russian: 10</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>Portuguese: 6</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>Spanish: 3</NormalText>
    </List>
  </Container>
);
