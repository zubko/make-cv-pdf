import React from "react";

import { Container, Group, GroupName } from "./Skills";

export const SkillsGroup = (props: Object) => (
  <Container {...props}>
    <Group>
      <GroupName>iOS: </GroupName>
      Swift, SwiftUI, Objective-C, UIKit, Xcode, Apple and 3rd party frameworks, Instruments,
      Fastlane.
    </Group>
    <Group>
      <GroupName>React / React Native: </GroupName>
      TypeScript, JavaScript, Storybook, Jest, Redux, Redux Saga, (S)CSS,
      Styled Components, Interop with native code.
    </Group>
    <Group>
      <GroupName>Other: </GroupName>
      CI/CD, Amplitude, Grafana, Git, C++, Android Studio, Android app development.
    </Group>
    <Group>
      <GroupName>General: </GroupName>
      Accessibility, Data structures and algorithms, FP, DRY, YAGNI, SOLID.
    </Group>
  </Container>
);
