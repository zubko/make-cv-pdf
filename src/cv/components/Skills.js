// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { SkillItem } from ".";

const Container = styled(View)`
  background-color: #263547;
  color: white;
  padding: 5px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default () => (
  <Container>
    <SkillItem name="React Native" score={4.5} />
    <SkillItem name="JavaScript" score={5} />
    <SkillItem name="Objective-C" score={5} />
    <SkillItem name="Swift" score={3.5} />
    <SkillItem name="iOS Frameworks" score={4.5} />
    <SkillItem name="Java" score={4} />
    <SkillItem name="Kotlin" score={3} />
    <SkillItem name="Android Libraries" score={3} />
    <SkillItem name="React" score={4} />
    <SkillItem name="HTML/CSS/JS" score={3.5} />
    <SkillItem name="Node.js" score={2} />
  </Container>
);
