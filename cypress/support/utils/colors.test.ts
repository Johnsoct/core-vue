// Packages
import {
    describe,
    expect,
    test,
} from 'vitest';

// Helpers
import {
    hexTransparencies,
} from '../constants/helpers';
import {
    convertHexToRGBA,
    convertRGBAToHex,
    getAlphaFloatFromHexTransparencyPairs,
    getHexFromAlphaFloatTransparencyPairs,
} from './colors';

describe('Unit tests for Cypress helper functions', () => {
    describe('convertHexToRGBA', () => {
        it('Non-alpha Hex value to RGB value', () => {
            const hex = '#101828';
            const rgb = 'rgb(16, 24, 40)';

            expect(convertHexToRGBA(hex)).to.equal(rgb);
        });

        it('Alpha Hex value to RGBA value', () => {
            const hex = '#1018280D';
            const rgba = 'rgba(16, 24, 40, 0.05)';

            expect(convertHexToRGBA(hex)).to.equal(rgba);
        });
    });

    describe('getXFromYTransparencyPairs', () => {
        test.each(hexTransparencies)(
            `Alpha($alpha) to Hex($hex)`, (pair) => {
                expect(getHexFromAlphaFloatTransparencyPairs(pair.alpha)).to.equal(pair.hex);
            }
        );

        test.each(hexTransparencies)(
            'Hex: $hex to Alpha: $alpha', (pair) => {
                expect(getAlphaFloatFromHexTransparencyPairs(pair.hex)).to.equal(pair.alpha);
            }
        );
    });

    describe('convertRGBAToHex', () => {
        test('Non-alpha RGB value to HEX value', () => {
            const hex = '#101828';
            const rgb = 'rgba(16, 24, 40)';

            expect(convertRGBAToHex(rgb)).to.equal(hex);
        });

        test('Alpha RGB value to HEX value', () => {
            const hex = '#1018280D';
            const rgba = 'rgba(16, 24, 40, 0.05)';

            expect(convertRGBAToHex(rgba)).to.equal(hex);
        });
    });
});
