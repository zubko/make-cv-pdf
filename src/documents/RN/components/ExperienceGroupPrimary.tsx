import React from "react";
import { View } from "@react-pdf/renderer";

import { SectionTitle, Item, ItemText } from "./Experience";

export const ExperienceGroupPrimary = (props: Object) => (
  <View {...props}>
    <SectionTitle>Chosen related work experience:</SectionTitle>
    <Item
      title="Senior Software Engineer"
      dates="Jun'23 - Present"
      company="Pet Media Group, Berlin"
    >
      <ItemText>
        Using React Native, React and Node.js to work on team Monetization
        Mobile and Web features. React Native guild lead. Using my iOS and
        Android native skills when it's needed. Leading observability, E2E tests
        and CI/CD configuration. Enabled over-the-air updates to make Mobile
        deploys effortless and safe.
      </ItemText>
    </Item>
    <Item
      title="Senior React Native Engineer"
      dates="July'22 - May'23"
      company="Pet Media Group, Berlin"
    >
      <ItemText>
        React Native "code owner". Supported the transition of React Native app
        from the agency to in-house. Fixed and improved the E2E tests suite.
        Improved CI/CD pipeline. Lead team of 2-3 React Native developers to
        build new features and decrease the code complexity. Helped to plan the
        transition of other native apps to React Native using the monorepo to
        share the code between the apps.
      </ItemText>
    </Item>
    <Item
      title="Senior Frontend Developer"
      dates="Aug'21 - Jun'22"
      company="Omio, Berlin"
    >
      <ItemText>
        Used React and React Native as a member of Personalization team to work
        on the features related to user authentication and user profile. Used my
        iOS native skills to contribute the parts which were not yet migrated to
        React Native. Participated actively in discussions about improvements of
        the company's frontend infrastructure which was shared between all
        teams.
      </ItemText>
    </Item>
    <Item
      title="React Native Team Lead"
      dates="Mar'21 - Aug'21"
      company="Agiliway, Ukraine"
    >
      <ItemText>
        I've re-joined the company to help with more challenging tasks for the
        apps that I've made and for other mobile or web apps of the company.
        (Some tasks: Upgrading RN version, setting up CI/CD, making code review,
        integrating audio streaming library, making an architecture for Web &
        React Native app with maximum shared code between the platforms)
      </ItemText>
    </Item>
    <Item
      title="React TypeScript Developer"
      dates="Mar'20 - Dec'20"
      company="Coursera, USA & Bulgaria"
    >
      <ItemText>
        Worked on a new functionality of the Coursera Labs Web app as a part of
        Coursera Bulgaria. My main area was implementing accessibility
        requirements of WCAG standard. I was also working on adding new
        features, redesigning & modernizing the UI and improving the developer
        experience.
      </ItemText>
    </Item>
    <Item
      title="React Native Developer"
      dates="Aug'19 - Feb'20"
      company="CouldBeUs, USA"
    >
      <ItemText>
        Fixed and improved MVP of a dating app. Transitioned from Expo Managed
        to Bare app to support features that required native code. Added new
        features. Worked on a simple backend that was running on Firebase
        storage with cloud functions.
      </ItemText>
    </Item>
    <Item
      title="React Native Team Lead"
      dates="Mar'18 - Apr'19"
      company="Agiliway, Ukraine"
    >
      <ItemText>
        Made a modular and configurable architecture with a sharable common code
        between apps which work with CiviCRM backend. Used this framework to
        build 2 apps for the company. Led a team of 2-4 mobile developers.
      </ItemText>
    </Item>
    <Item
      title="iOS React Native & Android Native Developer"
      dates="Jul'17 - Dec'17"
      company="Amila, Canada"
    >
      <ItemText>
        Developed a Pregnancy tracker React Native iOS app and worked on the
        Native Android apps of the company. Advocated for starting to use Kotlin
        for the new code, which the company appreciated latter on.
      </ItemText>
    </Item>
  </View>
);
