// Strips out commas from text / Use anytime reading input from an amount input, such as primary rate
// includeSign only works if there is a "$" in the text being cleaned
export const cleanUserInput = (input: null | number | string, includeSign = false): string => {
  if (input === null) {
    return '';
  }
  if (typeof input === 'number') {
    return input.toString();
  }

  // Removes everything but periods and numbers
  const inputWithoutWhitespace = input.replaceAll(' ', '');
  const regex = includeSign
    ? /[^0-9.](?!\$)/g
    : /[^0-9.]/g;
  let cleanedInput = inputWithoutWhitespace.replace(regex, '');

  // Inputs that start with '.' are really '0.'
  if (cleanedInput[0] === '.') {
    cleanedInput = `0${cleanedInput}`;
  }

  return cleanedInput;
};
