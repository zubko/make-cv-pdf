import * as React from "react";
import { View, Link } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { colors, metrics } from "../utils/theme";

import { NormalText, BoldText } from "./Text";
import Glyph from "./Glyph";

const Container = styled(View)`
  background-color: ${colors.middleBg};
  padding: ${metrics.padding(1)};
  padding-top: ${metrics.paddingTop(0.8)};
  padding-bottom: ${metrics.paddingBottom(0.6)};
  flex-direction: row;
  justify-content: flex-start;
`;

const Links = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  align-items: center;
  align-content: center;
`;

const LinkItem = ({ children, ...otherProps }) => (
  <Link src={children} {...otherProps}>
    <NormalText>{children}</NormalText>
  </Link>
);

const StyledGlyph = styled(Glyph)`
  font-size: 5;
  opacity: 0.7;
`;

export default (props) => (
  <Container {...props}>
    <BoldText>Code: </BoldText>
    <Links>
      <LinkItem>https://github.com/zubko</LinkItem>
      <StyledGlyph name="circle-solid" />
      <LinkItem>https://codesandbox.io/u/zubko</LinkItem>
      <StyledGlyph name="circle-solid" />
      <LinkItem>https://codepen.io/zubko</LinkItem>
    </Links>
  </Container>
);
