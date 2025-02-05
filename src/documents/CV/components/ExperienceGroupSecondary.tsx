import React from "react";
import { View } from "@react-pdf/renderer";

import { SectionTitle, Item, ItemText } from "./Experience";

export const ExperienceGroupSecondary = (props: Object) => (
  <View {...props}>
    <SectionTitle>Other work experience:</SectionTitle>
    <Item
      title="C++ Windows Mobile, PC & Mac Game & App Developer"
      dates="Aug'06 - Dec'10"
      company="Kiev, Ukraine"
      isLastItem
    >
      <ItemText>
        Developed small scale Windows Mobile games and apps, 3 middle scale
        games for PC. 1 game was also for Mac. (Development cycle of 1 game was
        around 8-10 months). For the last game I developed a script language
        which was a DSL tailored to code a level and animations of point'n'click
        type of a casual game.
      </ItemText>
    </Item>
  </View>
);
