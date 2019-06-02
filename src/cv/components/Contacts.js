// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Glyph } from ".";

const Container = styled(View)`
  align-items: flex-end;
`;

const ItemText = styled(Text)`
  font-size: 16px;
`;

const Item = ({ children }) => (
  <View>
    <ItemText>{children}</ItemText>
  </View>
);

export default ({ style }) => (
  <Container style={style}>
    <Item>
      https://zubko.io <Glyph name="globe" />
    </Item>
    <Item>
      alex@zubko.io <Glyph name="envelope" />
    </Item>
    <Item>
      +380(96)3945469 <Glyph name="phone" />
    </Item>
    <Item>
      Remote / Relocation <Glyph name="map-marker" />
    </Item>
    <Item>
      zubko.alexander <Glyph name="skype" />
    </Item>
  </Container>
);
