// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import { Glyph } from "../components";

const Item = ({ title, dates, company, children }) => (
  <View>
    <Text style={{ backgroundColor: "lightgray" }}>
      {title} | { dates ? dates + ' | ' : null}{company}
    </Text>
    {children}
  </View>
);

export default () => (
  <View>
    <Text>Experience</Text>
    <Item
      title="React Native Team Lead"
      dates="Mar'18 - Apr'19"
      company="Agiliway, Ukraine"
    >
      <Text>
        Made a configurable framework on top of React Native to be used to make
        apps which work with CiviCRM backend. Used this framework to build 2
        apps for the company. Configured and fixed native libraries. Lead a team
        of 2-4 mobile developers. Delivered first release in 2 months. Provided maximum
        code reuse and easy dev switch between the apps. Created modular and
        configurable architecture, easy to start for a new developer on the
        team, easy to understand what is where and how to add new features.
      </Text>
    </Item>
    <Item
      title="iOS / Android / React Native Developer & Team Lead"
      dates="Aug'11 - Present"
      company="Freelance"
    >
      <Text>
        Helping clients to finalize requirements, estimating costs. Planning and
        implementing apps' architecture and features from the beginning to the
        App Store and continuing working and improving the app. Fixing and
        supporting apps started by other developers. Providing maximum customer
        satisfaction. 5/5 stars rating for all jobs. Working in a team or solo.
        Worked on more than 10 apps in total.
      </Text>
    </Item>
    <Text>Some clients and apps:</Text>
    <Item
      title="iOS React Native & Android Native Developer"
      dates="Jul'17 - Dec'17"
      company="Amila, Toronto, Canada"
    >
      <Text>
        Developed Pregnancy tracker React Native iOS app and worked on the
        Native Android apps of the company.
      </Text>
    </Item>
    <Item
      title="iOS Native Team Lead"
      dates="May'15 - Dec'16"
      company="Brownie Points, San Mateo, CA, USA"
    >
      <Text>
        Worked with a US based startup to make an app to help parents to
        motivate their kids to study math. The app provided very smooth UX.
        Optimistic and background communication with backend was used everywhere
        where possible. All scrolling and screen switching was smooth and
        interesting to the eye. Parents and kids loved the app, we had 4.5 star
        rating in the AppStore. I also created tools and scripts to help with the
        development. For example we had a tool to generate the initial data with
        which the users will get the app. There was a tool to eliminate unused
        images and another one to analyze not critical error reports that were
        sent from the app to our backend.
      </Text>
    </Item>
    <Item
      title="iOS Native Developer"
      dates="Feb'11 - Aug'11"
      company="SoftServe, Lviv, Ukraine"
    >
      <Text>
        Developed 1 app in the team of 4 developers, 2 iOS / 2 Android devs.
        Worked on another iOS native app in a team of 3 developers for a big
        corporate client which was discontinued due to client's internal
        restructure.
      </Text>
    </Item>
    <Item
      title="C++ PC & Mac Game Developer"
      dates="Nov'7 - Dec'10"
      company="2 casual games companies, Kiev, Ukraine"
    >
      <Text>
        Developed 3 games for PC. 1 game was also for Mac. Lead the development
        of 2 of them. 1 game as a solo developer. 1 game with a junior
        developer. Development cycle of 1 game was around 8-10 months. For the
        3rd game I developed a script language which was a DSL suited best to
        code a level of point'n'click type of a casual game. Payed extra
        attention to the tooling to provide the best DX for the fellow game
        designers and artists. Implemented asset pipelines and hot reload of
        resources and scripts which were very new at that time.
      </Text>
    </Item>
    <Item
      title="C++ Windows Mobile App and Game Developer"
      dates="Aug'6 - Nov'07"
      company="SkyHourse, Kiev, Ukraine"
    >
      <Text>
        Developed a number of catalogue and autorun apps for Windows Mobile.
        Developed and ported PC games of the company to Windows Mobile. Also
        used Python to develop an internal GUI tool for the company.
      </Text>
    </Item>
    <Item
      title="Before working professionally"
      dates=""
      company="Ukraine"
    >
      <Text>
        I was introduced in programming from quite an early age. I wrote simple games in Pascal & C++, did some basic utility apps for myself and for my parents. I received a good tutoring in algorithms while preparing and taking part in school competitions in Computer Science. In college time I was making a website for the faculty and I maintained a Delphi app which communicated over COM ports with hardware controllers of the lab machine.
      </Text>
    </Item>
  </View>
);

// Biggest iOS native apps: https://youtu.be/wKwxzpagNo0
//         https://apple.co/2Cs2LBi . Android native app: http://bit.ly/2HripRq .
//         React Native app: https://apple.co/2Ct61wk
