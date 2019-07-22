// @flow

export const colors = {
  header: "#2C8127",
  lightBg: "white",
  middleBg: "lightgray",
  darkBg: "#263547",

  lightText: "#f5f5f5",
  darkText: "#111"
};

export const fonts = {
  normal: 12,
  h1: 29,
  h2: 19,
  lineHeight: 1.25
};

// big horz padding because printers usually print with margins
function paddingHorz(times: number) {
  return `${14 * times}px`;
}
function paddingTop(times: number) {
  return `${6 * times}px`;
}
// lineHeight makes extra space below the text
// instead of centering the text in the line
// so bottom padding should be smaller to compensate that
function paddingBottom(times: number) {
  return `${4 * times}px`;
}
export const metrics = {
  padding(times: number) {
    return `${paddingTop(times)} ${paddingHorz(times)} ${paddingBottom(times)}`;
  },
  paddingTop,
  paddingBottom,
  paddingHorz
};
