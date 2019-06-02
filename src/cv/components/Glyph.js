import React from "react";
import { Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const FA = styled(Text)`
  font-family: "FontAwesome";
`;
const Solid = styled(Text)`
  font-family: "FontAwesome-Solid";
`;
const Brands = styled(Text)`
  font-family: "FontAwesome-Brands";
`;

const knownNames = {
  envelope: [Solid, "\uf0e0"],
  globe: [Solid, "\uf0ac"],
  "map-marker": [Solid, "\uf3c5"],
  phone: [Solid, "\uf095"],
  skype: [Brands, "\uf17e"]
};

export default ({ code = "", name = "" }) => {
  if (name) {
    const code = knownNames[name];
    if (code) {
      const Component = code[0];
      return <Component>{code[1]}</Component>;
    }
    console.error(
      `Glyph: Unknown name ${name}. Possible names are ${Object.keys(
        knownNames
      ).sort()}`
    );
    return null;
  }
  return <FA>{code}</FA>;
};
