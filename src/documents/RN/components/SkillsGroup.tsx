import React from "react";

import { Container, Group, GroupName } from "./Skills";

export const SkillsGroup = (props: Object) => (
  <Container {...props}>
    <Group>
      <GroupName>React / React Native: </GroupName>
      TypeScript, JavaScript, Storybook, Jest, Detox, Redux, MobX, Redux Saga,
      (S)CSS, Styled Components, Browser APIs, Ramda, Interop with native code.
    </Group>
    <Group>
      <GroupName>iOS: </GroupName>
      Objective-C, Swift, Xcode, Apple and 3rd party frameworks, Instruments,
      CocoaPods.
    </Group>
    <Group>
      <GroupName>Android: </GroupName>
      Java, Kotlin, Android Studio, Gradle, Android libraries.
    </Group>
    <Group>
      <GroupName>Other: </GroupName>
      CI/CD, Fastlane, Amplitude, Grafana, GraphQL, Firebase, Git, Modern C++,
      UI/UX design.
    </Group>
    <Group>
      <GroupName>General: </GroupName>
      Accessibility, Data structures and algorithms, FP, DRY, YAGNI, SOLID.
    </Group>
  </Container>
);
