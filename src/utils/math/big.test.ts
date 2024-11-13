// Packages
import Big from 'big.js';
import {
  describe,
  expect,
  test,
} from 'vitest';
// Helpers
import {
  convertBigToDollars,
  convertBigToPennies,
  convertDollarsToBig,
} from './big';

describe('Calculations', () => {
  describe('Standard math with Big.js', () => {
    /*
      * Here are real scenarios across our application:
      * ===============================================
      *
      * Invoice details sidebar approve
      * -------------------------------
      * Client's reserve: (client's reserve + deduction)
      * Factor fee amount: (client's factor rate % * invoice's total amount)
      * Final approved amount: (invoice's approved amount - deduction)
      *
      * Adjustment modal + reserve history
      * ----------------------------------
      * Positive reserve changes to a positive reserve: (client's reserve + adjustment)
      * Positive reserve changes to a negative reserve: (client's reserve + adjustment)
      * Negative reserve changes to a positive reserve: (client's reserve - adjustment)
      * Negative reserve changes to a negative reserve: (client's reserve - adjustment)
      *
      * Invoice create/edit
      * -------------------
      * Total: (primary + detention + lumper - advance)
      * Any value could be 0 except primary
      *
      * TO SUMMARIZE:
      * -------------
      * We only have a few situations:
      * 1. Adding a number to a positive number
      * 2. Adding a number to a negative number
      * 3. Subtracting a number from a positive number
      * 4. Subtracting a number from a negative number
      * 5. Multiplying a number to a positive number
      * 6. Multiplying a number to a negative number
      * 7. Dividing a number by a positive number
      * 8. Dividing a number by a negative number
      * 9. Converting a number to pennies
      * 10. Converting a number to dollars
      * 11. Getting a percent of a number
      */

    test('Basic math calculations with Big.js (pennies output as string)', () => {
      // #1 Adding a number to a positive number
      // 557.59
      expect(
        new Big('125.01')
          .plus('432.58')
          .times(100)
          .toFixed(0)
      ).to.be.equal('55759');

      // #2 Adding a number to a negative number
      // -872.41
      expect(
        new Big('-1304.99')
          .plus('432.58')
          .times(100)
          .toFixed(0)
      ).to.be.equal('-87241');

      // #3 Subtracting a number from a positive number
      // 161.85
      expect(
        new Big('799.03')
          .minus('637.18')
          .times(100)
          .toFixed(0)
      ).to.be.equal('16185');

      // #4 Subtracting a number from a negative number
      // -2088.99
      expect(
        new Big('-500.01')
          .minus('1588.98')
          .times(100)
          .toFixed(0)
      ).to.be.equal('-208899');

      // #5 Multiplying a number to a positive number
      // 578.641
      expect(
        new Big('24.01')
          .times('24.10')
          .times(100)
          .toFixed(0)
      ).to.be.equal('57864');

      // #6 Multiplying a number to a negative number
      // -144.2889
      expect(
        new Big('-43.33')
          .times('3.33')
          .times(100)
          .toFixed(0)
      ).to.be.equal('-14429');

      // #7 Dividing a number by a positive number
      expect(
        new Big('56.41')
          .div('1.12')
          .times(100)
          .toFixed(0)
      ).to.be.equal('5037');

      // #8 Dividing a number by a negative number
      // -7.3944805195
      expect(
        new Big('-45.55')
          .div('6.16')
          .times(100)
          .toFixed(0)
      ).to.be.equal('-739');

      // #9 Converting a number to pennies
      // With a 0 addition
      expect(
        new Big(112.41)
          .plus(0)
          .times(100)
          .toFixed(0)
      ).to.be.equal('11241');
      // With a 0 subtract
      expect(
        new Big(112.41)
          .minus(0)
          .times(100)
          .toFixed(0)
      ).to.be.equal('11241');
      // Expecting 0 pennies
      expect(
        new Big(-100)
          .minus(-100)
          .times(100)
          .toFixed(0)
      ).to.be.equal('0');

      expect(
        new Big(100)
          .times(100)
          .toFixed(0)
      ).to.be.equal('10000');

      expect(
        new Big(125.50)
          .times(100)
          .toFixed(0)
      ).to.be.equal('12550');

      expect(
        new Big(125.519)
          .times(100)
          .toFixed(0)
      ).to.be.equal('12552');

      // #10 (is in next test since it's not a pennies output)

      // #11 Getting a percent of a number
      expect(
        new Big('1075')
          .times(0.0299)
          .toFixed(2)
      ).to.be.equal('32.14');

      expect(
        new Big('100')
          .times(0.05)
          .toFixed()
      ).to.be.equal('5');
    });

    test('Basic math calculations with Big.js (dollars output)', () => {
      // #1 Adding a number to a positive number
      // 557.59
      expect(
        new Big('125.01')
          .plus('432.58')
          .toFixed(2)
      ).to.be.equal('557.59');

      // #2 Adding a number to a negative number
      // -872.41
      expect(
        new Big('-1304.99')
          .plus('432.58')
          .toFixed(2)
      ).to.be.equal('-872.41');

      // #3 Subtracting a number from a positive number
      // 161.85
      expect(
        new Big('799.03')
          .minus('637.18')
          .toFixed(2)
      ).to.be.equal('161.85');

      // #4 Subtracting a number from a negative number
      // -2088.99
      expect(
        new Big('-500.01')
          .minus('1588.98')
          .toFixed(2)
      ).to.be.equal('-2088.99');

      // #5 Multiplying a number to a positive number
      // 578.641
      expect(
        new Big('24.01')
          .times('24.10')
          .toFixed(2)
      ).to.be.equal('578.64');

      // #6 Multiplying a number to a negative number
      // -144.2889
      expect(
        new Big('-43.33')
          .times('3.33')
          .toFixed(2)
      ).to.be.equal('-144.29');

      // #7 Dividing a number by a positive number
      expect(
        new Big('56.41')
          .div('1.12')
          .toFixed(2)
      ).to.be.equal('50.37');

      // #8 Dividing a number by a negative number
      // -7.3944805195
      expect(
        new Big('-45.55')
          .div('6.16')
          .toFixed(2)
      ).to.be.equal('-7.39');

      // #9 is in previous test (pennies output)

      // #10 Converting a number to dollars
      expect(
        new Big('100')
          .toFixed(2)
      ).to.be.equal('100.00');

      expect(
        new Big('191.9105')
          .toFixed(2)
      ).to.be.equal('191.91');

      expect(
        new Big('5.675')
          .toFixed(2)
      ).to.be.equal('5.68');

      // #11 is in previous test (number ouput)
    });
  });

  describe('Shared conversion functions', () => {
    test('Convert Big instance to dollars', () => {
      expect(
        convertBigToDollars(new Big('1000'))
      ).to.be.equal('10.00');

      expect(
        convertBigToDollars(new Big('4563'))
      ).to.be.equal('45.63');
    });

    test('Convert Big instance to pennies', () => {
      expect(
        convertBigToPennies(new Big('1000'))
      ).to.be.equal('1000');

      expect(
        convertBigToPennies(new Big('17123'))
      ).to.be.equal('17123');
    });

    test('Convert dollars to Big instance', () => {
      expect(
        convertBigToPennies(
          convertDollarsToBig('10.00')
        )
      ).to.be.equal(convertBigToPennies(new Big('1000')));

      expect(
        convertBigToPennies(
          convertDollarsToBig('456.79')
        )
      ).to.be.equal(convertBigToPennies(new Big('45679')));
    });
  });
});
