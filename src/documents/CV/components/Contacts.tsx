import * as React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Glyph } from "../../../components/Glyph";
import { NormalText } from "../../../components/Text";
import { colors, fonts } from "../../../utils/theme";
import { Link } from "../../../components/Link";

export const Contacts = ({ style }) => (
  <Container style={style}>
    <ItemLink href="https://zubko.io">
      https://zubko.io{"  "}
      <StyledGlyph name="globe" />
    </ItemLink>
    <ItemLink href="mailto:alex@zubko.io">
      alex@zubko.io{"  "}
      <StyledGlyph name="envelope" />
    </ItemLink>
    <ItemLink href="tel:+491759999340">
      +49 (175) 9999-340{"  "}
      <StyledGlyph name="phone" />
    </ItemLink>
    <ItemText>
      Remote / Relocation{"  "}
      <StyledGlyph name="map-marker" />
    </ItemText>
    <ItemText>
      zubko.alexander{"  "}
      <StyledGlyph name="skype" />
    </ItemText>
  </Container>
);

const ItemLink = ({ href = "", children }) => (
  <StyledLink href={href}>
    <ItemText>{children}</ItemText>
  </StyledLink>
);

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
const StyledLink = styled(Link)`
  color: ${colors.lightText};
`;
