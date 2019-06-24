// @flow
import * as React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { NormalText, BoldText } from "./Text";
import { theme, metrics } from "../utils";

const Container = styled(View)`
  background-color: ${theme.darkBg};
  color: ${theme.lightText};
  padding: ${metrics.padding(1)};
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Group = styled(NormalText)`
  font-size: 13px;
`;
const GroupName = styled(BoldText)`
  font-size: 13px;
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
      Objective-C, Swift, Xcode, Frameworks (UIKit, Core Graphics, Core Data,
      etc.), Instruments, CocoaPods.
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
      <GroupName>Algorithms: </GroupName>
      took part in the competitions in Informatics in school years. Winner of
      regional competition.
    </Group>
    <Group>
      <GroupName>General: </GroupName>
      Git, CI, FP, DRY, YAGNI
    </Group>
  </Container>
);
