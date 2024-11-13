// Components
import BaseReservesTag from './base-reserves-tag.vue';
// Helpers
import {
  BASE_TAG,
} from '@cypress/support/constants/base-components';
import {
  convertHexToRGBA,
} from '@cypress/support/utils/colors';

describe('BaseReservesTag', () => {
  context('Styles', () => {
    it('BaseReservesTag renders and displays "settled" with pennies prop of "0"', () => {
      cy.mount(BaseReservesTag, {
        props: {
          pennies: '0',
        },
      });

      cy
        .get(BASE_TAG.labels.tag)
        .should('be.visible')
        .then(($tag) => {
          expect($tag.text().trim()).to.equal('Settled');
          expect($tag.css('background-color')).to.equal(convertHexToRGBA('#ECFDF3'));
          expect($tag.css('color')).to.equal(convertHexToRGBA('#027A48'));
          expect($tag.css('font-size')).to.equal('16px');
          expect($tag.css('line-height')).to.equal('20px');
        });
    });

    it('BaseReservesTag renders and displays negative with pennies prop of "-200000"', () => {
      cy.mount(BaseReservesTag, {
        props: {
          pennies: '-200000',
        },
      });

      cy
        .get(BASE_TAG.labels.tag)
        .should('be.visible')
        .then(($tag) => {
          expect($tag.text().trim()).to.equal('-$2,000.00');
          expect($tag.css('background-color')).to.equal(convertHexToRGBA('#FEF3F2'));
          expect($tag.css('color')).to.equal(convertHexToRGBA('#B42318'));
          expect($tag.css('font-size')).to.equal('24px');
          expect($tag.css('line-height')).to.equal('30px');
        });
    });

    it('BaseReservesTag renders and displays positive with pennies prop of "200000"', () => {
      cy.mount(BaseReservesTag, {
        props: {
          pennies: '200000',
        },
      });

      cy
        .get(BASE_TAG.labels.tag)
        .should('be.visible')
        .then(($tag) => {
          expect($tag.text().trim()).to.equal('$2,000.00');
          expect($tag.css('background-color')).to.equal(convertHexToRGBA('#ECFDF3'));
          expect($tag.css('color')).to.equal(convertHexToRGBA('#027A48'));
          expect($tag.css('font-size')).to.equal('24px');
          expect($tag.css('line-height')).to.equal('30px');
        });
    });
  });
});
