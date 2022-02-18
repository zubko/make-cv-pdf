import { Font } from "@react-pdf/renderer";

import { getResourcePath } from "./getResourcePath";

export const registerFonts = () => {
  Font.register({
    family: "Title",
    fonts: [
      {
        fontWeight: "light",
        src: getResourcePath("fonts/WorkSans-Light.ttf"),
      },
      {
        fontWeight: "normal",
        src: getResourcePath("fonts/WorkSans-Regular.ttf"),
      },
      {
        fontWeight: "medium",
        src: getResourcePath("fonts/WorkSans-Medium.ttf"),
      },
      {
        fontWeight: "semibold",
        src: getResourcePath("fonts/WorkSans-SemiBold.ttf"),
      },
      {
        fontWeight: "bold",
        src: getResourcePath("fonts/WorkSans-Bold.ttf"),
      },
    ],
  });
  Font.register({
    family: "Content",
    fonts: [
      {
        fontWeight: "normal",
        src: getResourcePath("fonts/Raleway-Regular.ttf"),
      },
      {
        fontWeight: "normal",
        fontStyle: "italic",
        src: getResourcePath("fonts/Raleway-RegularItalic.ttf"),
      },
      {
        fontWeight: "bold",
        src: getResourcePath("fonts/Raleway-Bold.ttf"),
      },
    ],
  });
  Font.register({
    family: "FontAwesome",
    src: getResourcePath("fonts/fa-regular-400.ttf"),
  });
  Font.register({
    family: "FontAwesome-Solid",
    src: getResourcePath("fonts/fa-solid-900.ttf"),
  });
  Font.register({
    family: "FontAwesome-Brands",
    src: getResourcePath("fonts/fa-brands-400.ttf"),
  });
};
