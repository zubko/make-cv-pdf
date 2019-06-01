// @flow
import * as React from "react";
import { View, Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Item = ({ title, dates, company, children }) => (
  <View>
    <Text>{title}</Text>
    <Text>{dates}</Text>
    <Text>{company}</Text>
    {children}
  </View>
);

export default () => (
  <View>
    <Text>Experience</Text>
    <Item
      title="React Native Team Lead"
      dates="March 2018 - April 2019"
      company="Agiliway, Ukraine"
    >
      <Text>
        Making a configurable framework on top of React Native to be used to
        make a number of apps which work with CiviCRM backend.
      </Text>
      <Text>Leading a team of 2-4 mobile developers.</Text>
      <Text>Delivered first release in 2 months.</Text>
      <Text>Maximum code reuse between apps.</Text>
      <Text>Very easy switch process between apps.</Text>
      <Text>
        Modular and configurable architecture, easy start for a new developer on
        the team, easy to understand what is where and how to add new
        features123.
      </Text>
    </Item>
  </View>
);
