import * as React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Colors, Metrics } from "../../../utils/theme";
import { NormalText, BoldText } from "../../../components/Text";
import { Glyph } from "../../../components/Glyph";

export const Languages = (props) => (
  <Container {...props}>
    <NormalText>
      <BoldText>Human languages</BoldText>
      <BoldText>: </BoldText>
    </NormalText>
    <List>
      <NormalText>ENG: 9/10</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>UKR: 10</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>RUS: 10</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>ESP: 7/10</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>POR: 5/10</NormalText>
      <StyledGlyph name="square-solid" />
      <NormalText>GER: 3/10</NormalText>
    </List>
  </Container>
);

const Container = styled(View)`
  background-color: ${Colors.lightBg};
  padding: ${Metrics.padding(1)};
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
