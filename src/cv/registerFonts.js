import { Font } from "@react-pdf/renderer";

export default () => {
  Font.register({
    family: "Title",
    fonts: [
      {
        fontWeight: "light",
        src: "http://localhost:8000/fonts/WorkSans-Light.ttf"
      },
      {
        fontWeight: "normal",
        src: "http://localhost:8000/fonts/WorkSans-Regular.ttf"
      },
      {
        fontWeight: "medium",
        src: "http://localhost:8000/fonts/WorkSans-Medium.ttf"
      },
      {
        fontWeight: "semibold",
        src: "http://localhost:8000/fonts/WorkSans-SemiBold.ttf"
      },
      {
        fontWeight: "bold",
        src: "http://localhost:8000/fonts/WorkSans-Bold.ttf"
      }
    ]
  });
  Font.register({
    family: "Content",
    fonts: [
      {
        fontWeight: "normal",
        src: "http://localhost:8000/fonts/QuattrocentoSans-Regular.ttf"
      },
      {
        fontWeight: "bold",
        src: "http://localhost:8000/fonts/QuattrocentoSans-Bold.ttf"
      }
    ]
  });
  Font.register({
    family: "FontAwesome",
    src: "http://localhost:8000/fonts/fa-regular-400.ttf"
  });
  Font.register({
    family: "FontAwesome-Solid",
    src: "http://localhost:8000/fonts/fa-solid-900.ttf"
  });
  Font.register({
    family: "FontAwesome-Brands",
    src: "http://localhost:8000/fonts/fa-brands-400.ttf"
  });
};
