// @flow
import React from "react";
import { View } from "@react-pdf/renderer";

import { SectionTitle, Item, ItemText } from "./Experience";
import SomeClientsNotice from "./SomeClientsNotice";

export default (props: Object) => (
  <View {...props}>
    <SectionTitle>Related work experience:</SectionTitle>
    <Item
      title="React TypeScript Developer"
      dates="Mar'20 - Dec'20"
      company="Coursera, USA & Bulgaria"
    >
      <ItemText>
        Worked on a new functionality of the Coursera Labs Web app as a part of
        Coursera Bulgaria. My main area was implementing accessibility
        requirements of WCAG standard. I was also working on adding new
        features, redesigning / modernizing the UI and improving the developer
        experience.
      </ItemText>
    </Item>
    <Item
      title="React Native Team Lead"
      dates="Mar'18 - Apr'19, Mar'21 - Present"
      company="Agiliway, Ukraine"
    >
      <ItemText>
        Made a modular and configurable architecture with a sharable common code
        between apps which work with CiviCRM backend. Used this framework to
        build 2 apps for the company. Led a team of 2-4 mobile developers.
      </ItemText>
      <ItemText>
        Then later I've re-joined the company to help with more challenging
        tasks for the apps that I've made and for other mobile apps of the
        company. (Upgrading RN version, setting up CI/CD, code review,
        integrating audio streaming etc)
      </ItemText>
    </Item>
    <Item
      title="React Native / iOS / Android Developer & Team Lead"
      dates="Aug'11 - Present"
      company="Freelance"
    >
      <SomeClientsNotice />
      <ItemText>
        Worked with a number of clients from different countries on mobile apps
        using either native frameworks or React Naive.
      </ItemText>
    </Item>
    <Item
      title="- React Native Developer"
      dates="Aug'19 - Feb'20"
      company="CouldBeUs, USA"
      isSubsection
    >
      <ItemText>
        Fixed and improved MVP of a dating app. Transitioned from Expo Managed
        to Bare app to support features that required native code. Added new
        features. Worked on the simple backend that was running on Firebase
        storage with cloud functions.
      </ItemText>
    </Item>
    <Item
      title="- iOS React Native & Android Native Developer"
      dates="Jul'17 - Dec'17"
      company="Amila, Canada"
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
      dates="Dec'11 - Aug'12 / Apr'13 - Oct'15 / Aug'16 - Feb'17"
      company="Brownie Points, USA"
      isSubsection
    >
      <ItemText>
        Worked with a US based startup to make an app to help parents to
        motivate their kids to study math. The app had very smooth UX,
        optimistic and background communication with its backend everywhere
        where possible. All scrolling and screen switching was smooth and
        interesting to the eye. Parents and kids loved the app, we had 4.5 star
        rating in the AppStore. I also created tools and scripts to help with
        the development (generating the initial Core Data DB to use after
        install, eliminating unused images, helping analyzing reported errors
        etc).
      </ItemText>
    </Item>
    <Item
      title="iOS Native Developer"
      dates="Feb'11 - Aug'11"
      company="SoftServe, Ukraine"
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
