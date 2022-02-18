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
  normal: 10.5,
  h1: 22,
  h2: 15,
  lineHeight: 1.45,
};

// big horz padding because printers usually print with margins
function paddingHorz(times: number) {
  return `${16 * times}px`;
}
function paddingTop(times: number) {
  return `${12 * times}px`;
}
// lineHeight makes extra space below the text
// instead of centering the text in the line
// so bottom padding should be smaller to compensate that
function paddingBottom(times: number) {
  return `${12 * times}px`;
}
export const metrics = {
  padding(timesTop: number, timesHorz?: number, timesBottom?: number) {
    const top = timesTop;
    const horz = typeof timesHorz !== "undefined" ? timesHorz : timesTop;
    const bottom = typeof timesBottom !== "undefined" ? timesBottom : timesTop;
    return `${paddingTop(top)} ${paddingHorz(horz)} ${paddingBottom(bottom)}`;
  },
  paddingTop,
  paddingBottom,
  paddingHorz,
};
