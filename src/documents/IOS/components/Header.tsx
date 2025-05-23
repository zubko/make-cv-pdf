import * as React from "react";
import { View, Image } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Colors, Fonts } from "../../../utils/theme";
import { getResourcePath } from "../../../utils/getResourcePath";
import { H1, H2 } from "../../../components/Text";

import { Contacts } from "../../CV/components/Contacts";

export const Header = ({ ...otherProps }) => (
  <Container {...otherProps}>
    <Photo src={getResourcePath("photo.png")} />
    <MainArea>
      <Name>Oleksandr Zubko</Name>
      <H2>Senior iOS Developer with RN experience</H2>
    </MainArea>
    <StyledContacts />
  </Container>
);

const Container = styled(View)`
  background-color: ${Colors.header};
  color: ${Colors.lightText};
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
  line-height: ${Fonts.lineHeight * 0.8};
`;
const StyledContacts = styled(Contacts)`
  margin: 10px 20px 8px;
`;
const Photo = styled(Image)`
  width: 60px;
  object-fit: contain;
  margin-left: 20px;
`;
