import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Colors, Metrics, Fonts } from "../../../utils/theme";
import { NormalText, BoldText } from "../../../components/Text";

export const Container = styled(View)`
  background-color: ${Colors.darkBg};
  color: ${Colors.lightText};
  padding: ${Metrics.padding(1)};
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Group = styled(NormalText)`
  font-size: ${Fonts.normal * 1.1};
`;
export const GroupName = styled(BoldText)`
  font-size: ${Fonts.normal * 1.1};
`;
