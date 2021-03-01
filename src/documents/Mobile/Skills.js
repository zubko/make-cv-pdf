// @flow
import React from "react";

import { Container, Group, GroupName } from "../../components/Skills";

export default (props: Object) => (
  <Container {...props}>
    <Group>
      <GroupName>React / React Native: </GroupName>
      TypeScript, JavaScript, Ramda, Redux, MobX, Redux Saga, (S)CSS, Styled
      Components, Interop with native code.
    </Group>
    <Group>
      <GroupName>iOS: </GroupName>
      Objective-C, Swift, Xcode, Apple and 3rd party frameworks, Instruments,
      CocoaPods.
    </Group>
    <Group>
      <GroupName>Android: </GroupName>
      Java, Kotlin, Android Studio, Gradle, Android Libraries.
    </Group>
    <Group>
      <GroupName>General: </GroupName>
      Data structures and algorithms, Git, CI, FP, DRY, YAGNI, SOLID.
    </Group>
  </Container>
);
