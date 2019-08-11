// @flow
import * as React from "react";
import { View, Image } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { colors } from "../utils/theme";

import Contacts from "./Contacts";
import { H1, H2 } from "./Text";
import getResourcePath from "../utils/getResourcePath";

type Props = {
  title: string
};

export default ({ title, ...otherProps }: Props) => (
  <Container {...otherProps}>
    <Photo src={getResourcePath("photo.png")} />
    <MainArea>
      <H1>Alexander Zubko</H1>
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
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const StyledContacts = styled(Contacts)`
  margin: 15px 20px 10px;
`;
const Photo = styled(Image)`
  width: 60px;
  object-fit: contain;
  margin-left: 20px;
`;
