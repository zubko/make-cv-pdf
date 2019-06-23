// big horz padding because printers usually print with margins
function paddingHorz(times) {
  return `${14 * times}px`;
}

function paddingTop(times) {
  return `${6 * times}px`;
}

// lineHeight makes extra space below the text
// instead of centering the text in the line
// so bottom padding should be smaller to compensate that
function paddingBottom(times) {
  return `${3 * times}px`;
}

export default {
  padding(times) {
    return `${paddingTop(times)} ${paddingHorz(times)} ${paddingBottom(times)}`;
  },

  paddingTop,
  paddingBottom,
  paddingHorz
};
