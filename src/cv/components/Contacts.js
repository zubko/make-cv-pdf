// @flow
import * as React from "react";
import { View, Text, Link } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Glyph } from ".";

const Container = styled(View)`
  align-items: flex-end;
  line-height: 1.2;
`;

const ItemText = styled(Text)`
  font-size: 16px;
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
      <Glyph name="globe" />
    </Item>
    <Item href="mailto:alex@zubko.io">
      alex@zubko.io{"  "}
      <Glyph name="envelope" />
    </Item>
    <Item href="tel:+380963945469">
      +380(96)3945469{"  "}
      <Glyph name="phone" />
    </Item>
    <Item>
      Remote / Relocation{"  "}
      <Glyph name="map-marker" />
    </Item>
    <Item>
      zubko.alexander{"  "}
      <Glyph name="skype" />
    </Item>
  </Container>
);
