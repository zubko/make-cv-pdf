import { Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

export const NormalText = styled(Text)`
  font-family: "Content";
  font-size: 12;
  /* line-height: 1.45; */
`;

export const BoldText = styled(NormalText)`
  font-weight: bold;
`;
