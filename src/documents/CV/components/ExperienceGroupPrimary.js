// @flow
import React from "react";
import { View } from "@react-pdf/renderer";

import { SectionTitle, Item, ItemText } from "./Experience";

export const ExperienceGroupPrimary = (props: Object) => (
  <View {...props}>
    <SectionTitle>Chosen related work experience:</SectionTitle>
    <Item
      title="Senior Frontend Developer"
      dates="Aug'21 - Present"
      company="Omio, Berlin"
    >
      <ItemText>
        Using React and React Native as a member of Personalization team to add
        new features, improve or fix existing ones related to user
        authentication and user profile. Preparing A/B tests, collecting
        tracking metrics. Refactoring existing legacy code, improving
        architecture of our components, migrating native UI to React Native.
        Participating actively in discussions about improvements of the
        company's frontend infrastructure which is shared between the teams.
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
  </View>
);
