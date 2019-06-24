import { Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { fonts } from "../utils/theme";

export const NormalText = styled(Text)`
  font-family: "Content";
  font-size: ${fonts.normal};
  line-height: ${fonts.lineHeight};
`;

export const BoldText = styled(NormalText)`
  font-weight: bold;
`;

export const H1 = styled(Text)`
  font-family: "Title";
  font-size: ${fonts.h1};
  line-height: ${fonts.lineHeight};
  font-weight: medium;
`;

export const H2 = styled(Text)`
  font-family: "Title";
  font-size: ${fonts.h2};
  line-height: ${fonts.lineHeight};
  font-weight: normal;
`;
