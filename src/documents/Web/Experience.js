// @flow
import React from "react";
import { View } from "@react-pdf/renderer";
import { SectionTitle, Item, ItemText } from "../../components/Experience";

export default (props: Object) => (
  <View {...props}>
    <SectionTitle>Related React experience:</SectionTitle>
    <Item
      title="React Native App Developer"
      dates="2017 - 2019"
      company="Full-time & Freelance"
    >
      <ItemText>
        Used JavaScript, Flow, React, Redux etc to make 3 React Native projects
        of various complexity. 5 apps in total. The last project lasted 1 year,
        and I made a flexible architecture on top of React Native&nbsp;/
        Redux&nbsp;/ Redux Saga to support parallel development of 2 distinct
        apps with similar features. The differences between apps were configured
        by the help of JS based configs. So the behavior was also configurable
        where it was needed. I also helped junior developers to get on track
        with the project or to resolve some issues and I did code reviews. Some
        tasks were outside of the scope of a regular JS&nbsp;/ React
        development, like setting up and fixing the native libraries or parsing
        the localization code with the help of Babel to make a report for the
        translators.
      </ItemText>
    </Item>
    <Item
      title="zubko.io and other personal React projects"
      dates="2017 - Present"
      isLastItem
    >
      <ItemText>
        Used Gatsby & Emotion to make a personal website which required also
        knowledge of GraphQL and some basic understanding of SSR. Used React PDF
        to generate this CV. Used React Native for Web for a freeCodeCamp
        challenge to make a calculator app. Using React for a front end part of
        the exercises for the Full Stack Open course.
      </ItemText>
    </Item>
    <SectionTitle>Other Web experience:</SectionTitle>
    <Item
      title="Using Web technologies for mobile development"
      dates="2011 - 2017"
    >
      <ItemText>
        Some features of iOS apps on which I worked were made by using Web
        technologies inside of WebView component. For example, Brownie Points
        app had Web based rendering of questions with math and Vovici Mobile app
        had Web based charts.
      </ItemText>
    </Item>
    <Item
      title="Did challenges on freeCodeCamp using different Web technologies"
      dates="2017"
      isLastItem
    >
      <ItemText>
        Used different flavours of Web dev while completing challenges on
        freeCodeCamp. Used Pug / jQuery / Vanilla JS / LESS / SCSS /
        CoffeeScript in different combinations.
      </ItemText>
    </Item>
    <SectionTitle>Other work experience:</SectionTitle>
    <Item
      title="iOS & Android App Developer"
      dates="2011 - 2017"
      company="Full-time & Freelance"
    >
      <ItemText>
        Developed a number of native iOS apps for different companies. Worked
        full-time and freelance, solo or in focused teams up to 10 people. The
        employers and coworkers appreciated my skills and performance and a
        number of apps had very positive user reviews in the store. Also worked
        on a series of native Android apps with the similar architecture.
      </ItemText>
    </Item>
    <Item
      title="C++ Windows Mobile, PC & Mac Game & App Developer"
      dates="2006 - 2010"
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
