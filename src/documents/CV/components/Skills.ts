import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { colors, metrics, fonts } from "../../../utils/theme";
import { NormalText, BoldText } from "../../../components/Text";

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
  font-size: ${fonts.normal * 1.1};
`;
export const GroupName = styled(BoldText)`
  font-size: ${fonts.normal * 1.1};
`;
