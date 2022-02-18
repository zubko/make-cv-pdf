import * as React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { colors, metrics } from "../../../utils/theme";
import { NormalText, BoldText } from "../../../components/Text";
import { Glyph } from "../../../components/Glyph";

export const Languages = (props) => (
  <Container {...props}>
    <NormalText>
      <BoldText>Languages</BoldText>
      <BoldText>: </BoldText>
    </NormalText>
    <List>
      <NormalText>English: 8/10</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>Ukrainian: 10</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>Russian: 10</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>Portuguese: 6/10</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>Spanish: 3/10</NormalText>
    </List>
  </Container>
);

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
