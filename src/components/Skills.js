// @flow
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import { colors, metrics } from "../utils/theme";
import { NormalText, BoldText } from "./Text";

export const Container = styled(View)`
  background-color: ${colors.darkBg};
  color: ${colors.lightText};
  padding: ${metrics.padding(1)};
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Group = styled(NormalText)`
  font-size: 13px;
`;
export const GroupName = styled(BoldText)`
  font-size: 13px;
`;
