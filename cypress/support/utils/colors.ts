import {
  hexTransparencies,
} from "../constants/helpers";

export const convertHexToRGBA = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const a = hex.length > 7
    ? getAlphaFloatFromHexTransparencyPairs(hex.slice(7, 9))
    : null;

  if (a) {
    return `rgba(${r}, ${g}, ${b}, 0${a})`;
  }
  else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export const getAlphaFloatFromHexTransparencyPairs = (hex: string): null | string => {
  const pair = hexTransparencies.filter((pair) => {
    return pair.hex === hex;
  })[0];

  if (pair) {
    return pair.alpha;
  }
  else {
    return null;
  }
};

export const getHexFromAlphaFloatTransparencyPairs = (alpha: string): null | string => {
  const alphaStrippedOfPrecedingZero = alpha.slice(alpha.indexOf('.'));
  const pair = hexTransparencies.filter((pair) => {
    return pair.alpha === alphaStrippedOfPrecedingZero;
  })[0];

  if (pair) {
    return pair.hex;
  }
  else {
    return null;
  }
};

export const convertRGBAToHex = (rgbaCSS: string): string => {
  // Choose correct separator (',' or space - both are allowed)
  const separator = rgbaCSS.indexOf(",") > -1
    ? ","
    : " ";

  // Turn "rgb(r,g,b)" into [r,g,b]; Turn "rgb(r,g,b,a)" into [r,g,b,a]
  const rgba = rgbaCSS
    .slice(rgbaCSS.indexOf('(') + 1, rgbaCSS.indexOf(')'))
    .split(separator);

  const a = rgba[3]
    ? getHexFromAlphaFloatTransparencyPairs(rgba[3])
    : '';
  let r = Number(rgba[0]).toString(16).trim(),
      g = Number(rgba[1]).toString(16).trim(),
      b = Number(rgba[2]).toString(16).trim();

  // If the result is a single digit, it needs to be prefaced with "0"
  if (r.length == 1) {
    r = "0" + r;
  }
  if (g.length == 1) {
    g = "0" + g;
  }
  if (b.length == 1) {
    b = "0" + b;
  }

  return ("#" + r + g + b + a).toUpperCase();
};
