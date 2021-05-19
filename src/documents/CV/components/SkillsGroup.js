// @flow
import React from "react";

import { Container, Group, GroupName } from "./Skills";

export default (props: Object) => (
  <Container {...props}>
    <Group>
      <GroupName>React / React Native: </GroupName>
      TypeScript, JavaScript, Ramda, Redux, MobX, Redux Saga, (S)CSS, Styled
      Components, Browser DOM, Interop with native code.
    </Group>
    <Group>
      <GroupName>iOS: </GroupName>
      Objective-C, Swift, Xcode, Apple and 3rd party frameworks, Instruments,
      CocoaPods, Fastlane.
    </Group>
    <Group>
      <GroupName>Android: </GroupName>
      Java, Kotlin, Android Studio, Gradle, Android libraries.
    </Group>
    <Group>
      <GroupName>General: </GroupName>
      Accessibility, Data structures and algorithms, Git, CI/CD, FP, DRY, YAGNI,
      SOLID.
    </Group>
    <Group>
      <GroupName>Basic level but interested in: </GroupName>
      GraphQL, Backends & DBs, Firebase, UI/UX design.
    </Group>
  </Container>
);
