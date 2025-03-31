import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Glyph } from "../../../components/Glyph";
import { Link } from "../../../components/Link";
import { NormalText } from "../../../components/Text";
import { Colors, Fonts } from "../../../utils/theme";

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
    <ItemText>
      Germany{"  "}
      <StyledGlyph name="map-marker" />
    </ItemText>
    <ItemLink href="tel:+491759999340">
      +49(175)9999340{"  "}
      <StyledGlyph name="phone" />
    </ItemLink>
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
  font-size: ${Fonts.normal * 1.1};
`;
const StyledGlyph = styled(Glyph)`
  font-size: ${Fonts.normal * 1.2};
`;
const StyledLink = styled(Link)`
  color: ${Colors.lightText};
`;
