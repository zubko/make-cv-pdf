import * as React from "react";
import { View, Link } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import Glyph from "./Glyph";
import { NormalText } from "./Text";

const Container = styled(View)`
  align-items: flex-end;
  line-height: 1.2;
`;
const ItemText = styled(NormalText)`
  font-size: 12.5px;
`;
const StyledGlyph = styled(Glyph)`
  font-size: 13px;
`;

const Item = ({ children, href = "" }) => {
  const Component = href ? Link : View;
  return (
    <Component src={href}>
      <ItemText>{children}</ItemText>
    </Component>
  );
};

export default ({ style }) => (
  <Container style={style}>
    <Item href="https://zubko.io">
      https://zubko.io{"  "}
      <StyledGlyph name="globe" />
    </Item>
    <Item href="mailto:alex@zubko.io">
      alex@zubko.io{"  "}
      <StyledGlyph name="envelope" />
    </Item>
    <Item href="tel:+380963945469">
      +380 (96) 394-54-69{"  "}
      <StyledGlyph name="phone" />
    </Item>
    <Item>
      Remote / Relocation{"  "}
      <StyledGlyph name="map-marker" />
    </Item>
    <Item>
      zubko.alexander{"  "}
      <StyledGlyph name="skype" />
    </Item>
  </Container>
);
