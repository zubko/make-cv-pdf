import { Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import {typography}from '../utils';

export const NormalText = styled(Text)`
  font-family: "Content";
  font-size: ${typography.normal};
  line-height: ${typography.lineHeight};
`;

export const BoldText = styled(NormalText)`
  font-weight: bold;
`;

export const H1 = styled(Text)`
  font-family: "Title";
  font-size: ${typography.h1};
  line-height: ${typography.lineHeight};
  font-weight: medium;
`;

export const H2 = styled(Text)`
  font-family: "Title";
  font-size: ${typography.h2};
  line-height: ${typography.lineHeight};
  font-weight: normal;
`;
