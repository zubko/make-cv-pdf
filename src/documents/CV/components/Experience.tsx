import * as React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { colors, metrics } from "../../../utils/theme";
import { NormalText, BoldText, ItalicText } from "../../../components/Text";

type ItemProps = {
  title: string;
  dates?: string;
  company?: string;
  children: React.ReactNode;
  isSubsection?: boolean;
  isLastItem?: boolean;
};

export const SectionTitle = styled(NormalText)`
  padding: ${metrics.padding(0.8, 1, 0.5)};
  background-color: ${colors.middleBg};
`;

export const Item = ({
  title,
  dates,
  company,
  children,
  isSubsection,
  isLastItem,
}: ItemProps) => (
  <Container
    style={
      !isLastItem
        ? {
            paddingBottom: 0,
          }
        : null
    }
  >
    <ItemTitle style={isSubsection ? subSectionPadding : null}>
      {dates ? (
        <>
          <Dates>{dates}</Dates>
          {" / "}
        </>
      ) : null}
      <BoldText>{title}</BoldText>
      {company ? (
        <>
          {" / "}
          {company}
        </>
      ) : null}
    </ItemTitle>
    <View style={isSubsection ? subSectionPadding : null}>{children}</View>
  </Container>
);

export const ItemText = styled(NormalText)`
  text-align: justify;
`;

export const ItemSubTitle = styled(ItalicText)`
  position: absolute;
  text-align: justify;
  padding-left: 15;
  padding-top: ${metrics.padding(1)};
  transform: rotate(100deg);
`;

const Container = styled(View)`
  padding: ${metrics.padding(0.5, 1, 1)};
`;

const ItemTitle = styled(NormalText)`
  /* background-color: ${colors.darkBg}; */
  color: ${colors.darkBg};
`;

const subSectionPadding = {
  paddingLeft: 30,
};

const Dates = styled(ItalicText)`
  opacity: 0.8;
`;
