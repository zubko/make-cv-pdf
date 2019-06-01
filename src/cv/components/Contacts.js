// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Container = styled(View)`
  align-items: flex-end;
`;

const ItemText = styled(Text)`
  font-size: 16px;
`;

const Item = ({ children, image }) => (
  <View>
    <ItemText>{children}</ItemText>
    {/* <Image source="/static/images/react-native.svg" /> */}
  </View>
);

export default ({ style }) => (
  <Container style={style}>
    <Item image="">https://zubko.io</Item>
    <Item image="">alex@zubko.io</Item>
    <Item image="">+380(96)3945469</Item>
    <Item image="">Ukraine</Item>
    <Item image="">zubko.alexander</Item>
  </Container>
);
