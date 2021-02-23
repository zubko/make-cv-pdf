// @flow

import React from "react";
import { StyleSheet, Text } from "@react-pdf/renderer";
import { fonts } from "../../utils/theme";

/**
 * styled-components fails to translate the `transform:rotate()` style
 * in a way recognizable by @react-pdf. So making this style
 * in a more traditional way
 */

export default () => <Text style={styles.rotatedText}>Some clients</Text>;

const styles = StyleSheet.create({
  rotatedText: {
    fontFamily: "Content",
    fontSize: fonts.normal + 2,
    textTransform: "uppercase",
    opacity: 0.3,
    transform: "rotate(-90deg)",
    position: "absolute",
    top: 110,
    left: -42,
  },
});
