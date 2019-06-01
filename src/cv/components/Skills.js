// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Container = styled(View)`
  background-color: #263547;
  color: white;
  padding: 5px;
`;

export default () => (
  <Container>
    <Text>Skills</Text>
  </Container>
);
