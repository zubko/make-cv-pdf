import React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Glyph, KnownNames } from "./Glyph";
import { NormalText } from "./Text";

export default {
  title: "Components/Glyph",
  component: Glyph,
};

const StyledGlyph = styled(Glyph)`
  margin-right: 8px;
  font-size: 25pt;
  color: seagreen;
`;
const Row = styled(View)`
  flex-direction: row;
  margin: 8px 16px 0;
  align-items: center;
`;

const GlyphStory = () =>
  KnownNames.map((name) => (
    <Row key={name}>
      <StyledGlyph name={name} />
      <NormalText>{name}</NormalText>
    </Row>
  ));

export { GlyphStory as Glyph };
