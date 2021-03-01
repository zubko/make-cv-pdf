// @flow

export const colors = {
  header: "#263547",
  lightBg: "white",
  middleBg: "lightgray",
  darkBg: "#263547",

  lightText: "#f5f5f5",
  darkText: "#111",
};

export const fonts = {
  normal: 10,
  h1: 25,
  h2: 15,
  lineHeight: 1.45,
};

// big horz padding because printers usually print with margins
function paddingHorz(times: number) {
  return `${16 * times}px`;
}
function paddingTop(times: number) {
  return `${8 * times}px`;
}
// lineHeight makes extra space below the text
// instead of centering the text in the line
// so bottom padding should be smaller to compensate that
function paddingBottom(times: number) {
  return `${8 * times}px`;
}
export const metrics = {
  padding(times: number) {
    return `${paddingTop(times)} ${paddingHorz(times)} ${paddingBottom(times)}`;
  },
  paddingTop,
  paddingBottom,
  paddingHorz,
};
