// @flow
import React from "react";
import { View } from "@react-pdf/renderer";
import { SectionTitle, Item, ItemText } from "../../components/Experience";

export default (props: Object) => (
  <View {...props}>
    <SectionTitle>Related work experience:</SectionTitle>
    <Item
      title="React Native Team Lead"
      dates="Mar'18 - Apr'19"
      company="Agiliway, Ukraine"
    >
      <ItemText>
        Made a configurable framework on top of React Native to be used to make
        apps which work with CiviCRM backend. Used this framework to build 2
        apps for the company. Configured and fixed native libraries. Lead a team
        of 2-4 mobile developers. Delivered first release in 2 months. Provided
        maximum code reuse and easy dev switch between the apps. Created modular
        and configurable architecture, easy to start for a new developer on the
        team, easy to understand what is where and how to add new features.
      </ItemText>
    </Item>
    <Item
      title="iOS / Android / React Native Developer & Team Lead"
      dates="Aug'11 - Present"
      company="Freelance"
    >
      <ItemText>
        Helped clients to finalize requirements, estimated costs. Planned and
        Implemented apps' architecture and features from the beginning to the
        App Store and continued working and improving the apps. Fixed and
        supported apps started by other developers. Provided maximum customer
        satisfaction. 5/5 stars Upwork rating for all jobs. Worked in a team or
        solo. Worked on more than 10 apps in total. Some clients:
      </ItemText>
    </Item>
    <Item
      title="- iOS React Native & Android Native Developer"
      dates="Jul'17 - Dec'17"
      company="Amila, Toronto, Canada"
      isSubsection
    >
      <ItemText>
        Developed a Pregnancy tracker React Native iOS app and worked on the
        Native Android apps of the company. Advocated for starting to use Kotlin
        for the new code, which the company appreciated latter on.
      </ItemText>
    </Item>
    <Item
      title="- iOS Native Team Lead"
      dates="May'15 - Dec'16"
      company="Brownie Points, San Mateo, CA, USA"
      isSubsection
    >
      <ItemText>
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
      </ItemText>
    </Item>
    <Item
      title="iOS Native Developer"
      dates="Feb'11 - Aug'11"
      company="SoftServe, Lviv, Ukraine"
      isLastItem
    >
      <ItemText>
        Developed 1 app in the team of 4 developers, 2 iOS / 2 Android devs.
        Worked on another iOS native app in a team of 3 developers for a big
        corporate client which was discontinued due to client's internal
        restructure.
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
  </View>
);
