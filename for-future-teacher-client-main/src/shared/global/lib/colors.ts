const COLOR_BLACK = "#000000";
const COLOR_BLACK_80 = "#333333";
const COLOR_BLACK_30 = "#B2B2B2";
const COLOR_BLACK_6 = "#F0F0F0";

const COLOR_WHITE = "#FFFFFF";

const COLOR_PRIMARY_DARK = "#E90074";
const COLOR_PRIMARY_LIGHT = "#FF4191";
const COLOR_PRIMARY_LIGHT_60 = "#FF419199";
const COLOR_PRIMARY_LIGHT_30 = "#FF41914C";

function colorWithOpacity(color: string, opacity: number) {
  return color + Math.round(opacity * 255).toString(16);
}

export {
  COLOR_BLACK,
  COLOR_BLACK_80,
  COLOR_BLACK_30,
  COLOR_BLACK_6,
  COLOR_WHITE,
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_LIGHT,
  COLOR_PRIMARY_LIGHT_60,
  COLOR_PRIMARY_LIGHT_30,
  colorWithOpacity,
};
