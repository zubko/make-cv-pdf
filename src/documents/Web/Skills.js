// @flow
import React from "react";

import { Container, Group, GroupName } from "../../components/Skills";

export default (props: Object) => (
  <Container {...props}>
    <Group>
      <GroupName>Web: </GroupName>
      JavaScript, Flow, React, Emotion, Ramda, Redux, MobX, Redux Saga, Gatsby,
      HTML/CSS/JS, Jest, GraphQL, Node.js.
    </Group>
    <Group>
      <GroupName>iOS: </GroupName>
      Objective-C, Swift, Xcode, Frameworks (UIKit, Core Graphics, Core Data,
      etc.), Instruments, CocoaPods, React Native.
    </Group>
    <Group>
      <GroupName>Android: </GroupName>
      Java, Kotlin, Android Studio, Gradle, Android Libraries, React Native.
    </Group>
    <Group>
      <GroupName>Algorithms: </GroupName>
      took part in the competitions in Informatics in school years. Winner of
      regional one.
    </Group>
    <Group>
      <GroupName>General: </GroupName>
      Git, CI, FP, DRY, YAGNI, SOLID.
    </Group>
  </Container>
);
