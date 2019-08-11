// @flow
import React from "react";

import { Container, Group, GroupName } from "../../components/Skills";

export default (props: Object) => (
  <Container {...props}>
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
      regional one.
    </Group>
    <Group>
      <GroupName>General: </GroupName>
      Git, CI, FP, DRY, YAGNI, SOLID.
    </Group>
  </Container>
);
