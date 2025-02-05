import * as React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Colors, Metrics } from "../../../utils/theme";
import { NormalText, BoldText } from "../../../components/Text";
import { Glyph } from "../../../components/Glyph";
import { Link } from "../../../components/Link";

export const CodeExamples = (props) => (
  <Container {...props}>
    <BoldText>Code: </BoldText>
    <LinkItem>https://github.com/zubko</LinkItem>
  </Container>
);

const Container = styled(View)`
  background-color: ${Colors.middleBg};
  padding: ${Metrics.padding(1)};
  padding-top: ${Metrics.paddingTop(0.8)};
  padding-bottom: ${Metrics.paddingBottom(0.6)};
  flex-direction: row;
  justify-content: flex-start;
`;

const LinkItem = ({ children, ...otherProps }) => (
  <StyledLink src={children} {...otherProps}>
    <NormalText>{children}</NormalText>
  </StyledLink>
);

const StyledLink = styled(Link)`
  margin-left: 8px;
  color: ${Colors.darkText};
`;
