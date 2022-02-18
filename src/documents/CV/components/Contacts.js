import * as React from "react";
import { View, Link } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Glyph } from "../../../components/Glyph";
import { NormalText } from "../../../components/Text";
import { fonts } from "../../../utils/theme";

export const Contacts = ({ style }) => (
  <Container style={style}>
    <Item href="https://zubko.io">
      https://zubko.io{"  "}
      <StyledGlyph name="globe" />
    </Item>
    <Item href="mailto:alex@zubko.io">
      alex@zubko.io{"  "}
      <StyledGlyph name="envelope" />
    </Item>
    <Item href="tel:+491759999340">
      +49 (175) 9999-340{"  "}
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

const Item = ({ children, href = "" }) => {
  const Component = href ? Link : View;
  return (
    <Component src={href}>
      <ItemText>{children}</ItemText>
    </Component>
  );
};

const Container = styled(View)`
  align-items: flex-end;
  line-height: 1.2;
`;
const ItemText = styled(NormalText)`
  font-size: ${fonts.normal * 1.1};
`;
const StyledGlyph = styled(Glyph)`
  font-size: ${fonts.normal * 1.2};
`;
