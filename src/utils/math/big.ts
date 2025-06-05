// Packages
import Big from 'big.js';

/*
 * IMPORTANT NOTES:
 * Research into Big.js: https://bobtail.atlassian.net/browse/SM-462
 *
 * The only times we don't deal in Big.js instances:
 *
 * FE Read/Write pair of cases for presentation:
 *
 * 1. Input from user
 * 2. Presenting value to user
 *
 * FE Read/Write pair of cases when communicating with the BE:
 *
 * 1. Reading a response from the BE
 * 2. Sending a request to the BE
 *
 * BE Read/Write pair of cases when communicating with the FE:
 *
 * 1. Reading a request
 * 2. Writing a response
 *
 * BE Read/Write pair of cases when communicating with database:
 *
 * 1. Reading a stored value
 * 2. Writing a stored value
 */

// Round towards nearest neighbor. If equidistant, round away from zero
// Applies to round, toExponential, toFixed, and
// (I.E. 0.5 rounds to 1 instead of 0)
Big.RM = 1;

// For presentation of values to the user
// BE and FE used function
const convertBigToDollars = (big: Big): string => {
    return big
        .div(100)
        .toFixed(2);
};

// For conversion of Big to pennies for submitting values to BE
// BE and FE used function
const convertBigToPennies = (big: Big): string => {
    return big
        .toFixed(0);
};

// For conversion of user input to big instances for calculating on the FE for other values
// BE and FE used function (Watchdog reads from QB)
const convertDollarsToBig = (dollars: string): Big => {
    return Big(dollars)
        .times(100);
};

const convertPenniesToBig = (pennies: string): Big => {
    return Big(pennies);
};

export {
    convertBigToDollars,
    convertBigToPennies,
    convertDollarsToBig,
    convertPenniesToBig,
};
