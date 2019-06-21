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
      <GroupName>React Native: </GroupName>
      JavaScript, Flow, Ramda, Redux, MobX, Redux Saga, Interop with native
      code.
    </Group>
    <Group>
      <GroupName>iOS: </GroupName>
      Objective-C, Swift, Xcode, Frameworks (UIKit, Core Graphics,
      Core Data, etc.), Instruments, CocoaPods.
    </Group>
    <Group>
      <GroupName>Android: </GroupName>
      Java, Kotlin, Android Studio, Gradle, Android Libraries.
    </Group>
    <Group>
      <GroupName>Web: </GroupName>
      HTML/CSS/JS, React, Emotion, Gatsby, Node.js, SQL.
    </Group>
    <Group>
      <GroupName>General: </GroupName>
      Git, CI, FP, DRY, YAGNI
    </Group>
  </Container>
);
