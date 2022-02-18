import React from "react";
import { Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

export const Glyph = ({ code = "", name = "", style }) => {
  if (name) {
    const code = knownNames[name];
    if (code) {
      const Component = code[0];
      return <Component style={style}>{code[1]}</Component>;
    }
    console.error(
      `Glyph: Unknown name ${name}. Possible names are ${Object.keys(
        knownNames
      ).sort()}`
    );
    return null;
  }
  return <Regular style={style}>{code}</Regular>;
};

const Regular = styled(Text)`
  font-family: "FontAwesome";
`;
const Solid = styled(Text)`
  font-family: "FontAwesome-Solid";
  font-size: 15px;
`;
const Brands = styled(Text)`
  font-family: "FontAwesome-Brands";
`;

const knownNames = {
  "circle-solid": [Solid, "\uf111"],
  envelope: [Solid, "\uf0e0"],
  globe: [Solid, "\uf0ac"],
  "map-marker": [Solid, "\uf3c5"],
  phone: [Solid, "\uf095"],
  skype: [Brands, "\uf17e"],
  "square-solid": [Solid, "\uf0c8"],
  "star-half-solid": [Solid, "\uf089"],
  "star-solid": [Solid, "\uf005"],
  star: [Regular, "\uf005"],
};
