// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Container = styled(View)`
  background-color: #263547;
  color: white;
  padding: 5px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Group = styled(Text)`
  font-family: "Content";
  font-size: 20px;
`;
const GroupName = styled(Text)`
  font-weight: bold;
`;

export default () => (
  <Container>
    <Group>
      <GroupName>Want to learn / improve: </GroupName>
      Fullstack Mobile/Web development with Node.js/GraphQL/SQL, TypeScript,
      expert Android native development
    </Group>
    <Group>
      <GroupName>Want to try: </GroupName>
      Flutter/Dart
    </Group>
  </Container>
);
