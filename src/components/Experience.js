import * as React from "react";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import {colors, metrics} from "../utils/theme";
import { NormalText, BoldText } from "./Text";

const ItemTitle = styled(NormalText)`
  /* background-color: ${colors.darkBg}; */
  color: ${colors.darkBg};
`;

const Container = styled(View)`
  padding: ${metrics.padding(1)};
`;

const SectionTitle = styled(NormalText)`
  padding: ${metrics.padding(1)};
  background-color: ${colors.middleBg};
`;

const Item = ({
  title,
  dates,
  company,
  children,
  isSubsection,
  isLastItem
}) => (
  <Container
    style={
      !isLastItem
        ? {
            paddingBottom: 0
          }
        : null
    }
  >
    <ItemTitle style={isSubsection ? subSectionPadding : null}>
      <BoldText>{title}</BoldText> | {dates ? dates + " | " : null}
      {company}
    </ItemTitle>
    <View style={isSubsection ? subSectionPadding : null}>{children}</View>
  </Container>
);
const subSectionPadding = {
  paddingLeft: 40
};

export default () => (
  <View>
    <SectionTitle>Related work experience:</SectionTitle>
    <Item
      title="React Native Team Lead"
      dates="Mar'18 - Apr'19"
      company="Agiliway, Ukraine"
    >
      <NormalText>
        Made a configurable framework on top of React Native to be used to make
        apps which work with CiviCRM backend. Used this framework to build 2
        apps for the company. Configured and fixed native libraries. Lead a team
        of 2-4 mobile developers. Delivered first release in 2 months. Provided
        maximum code reuse and easy dev switch between the apps. Created modular
        and configurable architecture, easy to start for a new developer on the
        team, easy to understand what is where and how to add new features.
      </NormalText>
    </Item>
    <Item
      title="iOS / Android / React Native Developer & Team Lead"
      dates="Aug'11 - Present"
      company="Freelance"
    >
      <NormalText>
        Helped clients to finalize requirements, estimated costs. Planned and
        Implemented apps' architecture and features from the beginning to the
        App Store and continued working and improving the apps. Fixed and
        supported apps started by other developers. Provided maximum customer
        satisfaction. 5/5 stars Upwork rating for all jobs. Worked in a team or
        solo. Worked on more than 10 apps in total. Some clients:
      </NormalText>
    </Item>
    <Item
      title="- iOS React Native & Android Native Developer"
      dates="Jul'17 - Dec'17"
      company="Amila, Toronto, Canada"
      isSubsection
    >
      <NormalText>
        Developed a Pregnancy tracker React Native iOS app and worked on the
        Native Android apps of the company. Advocated for starting to use Kotlin
        for the new code, which the company appreciated latter on.
      </NormalText>
    </Item>
    <Item
      title="- iOS Native Team Lead"
      dates="May'15 - Dec'16"
      company="Brownie Points, San Mateo, CA, USA"
      isSubsection
    >
      <NormalText>
        Worked with a US based startup to make an app to help parents to
        motivate their kids to study math. The app had very smooth UX,
        optimistic and background communication with its backend everywhere
        where possible. All scrolling and screen switching was smooth and
        interesting to the eye. Parents and kids loved the app, we had 4.5 star
        rating in the AppStore. I also created varies tools and scripts to help
        with the development. For example we had a tool to generate the initial
        data with which the users will get the app. There was a tool to
        eliminate unused images and another one to analyze not critical error
        reports that were sent from the app to our backend.
      </NormalText>
    </Item>
    <Item
      title="iOS Native Developer"
      dates="Feb'11 - Aug'11"
      company="SoftServe, Lviv, Ukraine"
      isLastItem
    >
      <NormalText>
        Developed 1 app in the team of 4 developers, 2 iOS / 2 Android devs.
        Worked on another iOS native app in a team of 3 developers for a big
        corporate client which was discontinued due to client's internal
        restructure.
      </NormalText>
    </Item>
    <SectionTitle>Other programming experience:</SectionTitle>
    <Item
      title="C++ Windows Mobile, PC & Mac Game & App Developer"
      dates="Aug'06 - Dec'10"
      company="3 companies, Kiev, Ukraine"
      isLastItem
    >
      <NormalText>
        Developed small scale Windows Mobile games and apps, 3 middle scale
        games for PC. 1 game was also for Mac. (Development cycle of 1 game was
        around 8-10 months). For the 3rd game I developed a script language
        which was a DSL suited best to code a level of point'n'click type of a
        casual game.
      </NormalText>
    </Item>
  </View>
);

// Biggest iOS native apps: https://youtu.be/wKwxzpagNo0
//         https://apple.co/2Cs2LBi . Android native app: http://bit.ly/2HripRq .
//         React Native app: https://apple.co/2Ct61wk
