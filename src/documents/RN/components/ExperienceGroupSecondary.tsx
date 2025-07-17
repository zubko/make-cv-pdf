import React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { SectionTitle, Item, ItemText } from "./Experience";

export const ExperienceGroupSecondary = (props: Object) => (
  <Container {...props}>
    <Item
      title="iOS Native Team Lead"
      dates="Dec'11 - Aug'12 / Apr'13 - Oct'15 / Aug'16 - Feb'17"
      company="Brownie Points, USA"
    >
      <ItemText>
        Worked with a US based startup to make an app to help parents to
        motivate their kids to study math. The app had a very smooth UX,
        optimistic and background communication with the backend where possible.
        All scrolling and screen switching was smooth and interesting to the
        eye. Parents and kids loved our app, we had 4.5 star rating in the
        AppStore. I also created tools and scripts to help with the development
        (for generating the initial Core Data DB to use after install,
        eliminating unused images, helping analyzing reported errors etc).
      </ItemText>
    </Item>
    <Item
      title="iOS Native Developer"
      dates="Feb'11 - Aug'11"
      company="SoftServe, Ukraine"
      isLastItem
    >
      <ItemText>
        Developed 1 app in a team of 2 iOS and 2 Android developers. Worked on
        another iOS native app in a team of 3 iOS developers for a big corporate
        client which was discontinued due to the client's internal
        restructuring.
      </ItemText>
    </Item>
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
        around 8-10 months). For the 3rd game I developed a script language
        which was a DSL suited best to code a level of point'n'click type of a
        casual game.
      </ItemText>
    </Item>
  </Container>
);

const Container = styled(View)`
  padding-top: 20px;
`;
