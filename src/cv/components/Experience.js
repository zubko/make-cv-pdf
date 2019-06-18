// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Item = ({ title, dates, company, children }) => (
  <View>
    <Text style={{backgroundColor:'lightgray'}}>
      {title} | <Text>{dates}</Text> | <Text>{company}</Text>
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
        apps for the company. Lead a team of 2-4 mobile developers. Delivered
        first release in 2 months. Maximum code reuse and easy dev switch
        between the apps. Modular and configurable architecture, easy start for
        a new developer on the team, easy to understand what is where and how to
        add new features.
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
        motivate their kids to study math.
      </Text>
    </Item>
    <Item
      title="iOS Native Developer"
      dates="Feb'11 - Aug'11"
      company="SoftServe, Lviv, Ukraine"
    >
      <Text>
        Developer 1 app in the team of 4 developers. 2 iOS / 2 Android. Worked on another app in a team of 3 developers for a big corporate client which was discontinued due to client's restructure.
      </Text>
    </Item>
    <Item
      title="C++ PC & Mac Game Developer"
      dates="Dec'10 - Nov'07"
      company="2 casual games companies, Kiev, Ukraine"
    >
      <Text>
        Developed 3 games for PC. 1 was ported to Mac. Lead the development of 2 of them. 1 as a solo developer. 1 as a lead of 2 people. Development cycle of 1 game was around 8-10 months. Payed extra attention to the tooling to provide the best DX for the fellow game designers and artists. Asset pipelines and hot reload were very new at that time. Developed a script language which was a DSL suited best to code a level of point'n'click type of a casual game.
      </Text>
    </Item>
  </View>
);

// Biggest iOS native apps: https://youtu.be/wKwxzpagNo0
//         https://apple.co/2Cs2LBi . Android native app: http://bit.ly/2HripRq .
//         React Native app: https://apple.co/2Ct61wk
