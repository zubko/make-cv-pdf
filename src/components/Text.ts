import { Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Fonts } from "../utils/theme";

export const NormalText = styled(Text)`
  font-family: "Content";
  font-size: ${Fonts.normal};
  line-height: ${Fonts.lineHeight};
`;

export const BoldText = styled(NormalText)`
  font-weight: bold;
`;

export const ItalicText = styled(NormalText)`
  font-style: italic;
`;

export const H1 = styled(Text)`
  font-family: "Title";
  font-size: ${Fonts.h1};
  line-height: ${Fonts.lineHeight};
  font-weight: medium;
`;

export const H2 = styled(Text)`
  font-family: "Title";
  font-size: ${Fonts.h2};
  line-height: ${Fonts.lineHeight};
  font-weight: normal;
`;
