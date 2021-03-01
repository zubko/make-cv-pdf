// @flow
import * as React from "react";
import { View, Image } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { colors, fonts } from "../utils/theme";
import getResourcePath from "../utils/getResourcePath";

import Contacts from "./Contacts";
import { H1, H2 } from "./Text";

type Props = {
  title: string,
};

export default ({ title, ...otherProps }: Props) => (
  <Container {...otherProps}>
    <Photo src={getResourcePath("photo.png")} />
    <MainArea>
      <Name>Alexander Zubko</Name>
      <H2>{title}</H2>
    </MainArea>
    <StyledContacts />
  </Container>
);

const Container = styled(View)`
  background-color: ${colors.header};
  color: white;
  flex-direction: row;
`;
const MainArea = styled(View)`
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 0px;
`;
const Name = styled(H1)`
  line-height: ${fonts.lineHeight * 0.8};
`;
const StyledContacts = styled(Contacts)`
  margin: 10px 20px 8px;
`;
const Photo = styled(Image)`
  width: 60px;
  object-fit: contain;
  margin-left: 20px;
`;
