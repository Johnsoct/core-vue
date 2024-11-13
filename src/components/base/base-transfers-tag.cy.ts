// Components
import BaseTransfersTag from './base-transfers-tag.vue';
// Helpers
import {
  BASE_TAG,
} from '@cypress/support/constants/base-components';
import {
  convertHexToRGBA,
} from '@cypress/support/utils/colors';

describe('BaseTransfersTag', () => {
  context('Styles', () => {
    it('BaseTransfersTag renders and displays with type prop of "ach"', () => {
      cy.mount(BaseTransfersTag, {
        props: {
          type: 'ach',
        },
      });

      cy
        .get(BASE_TAG.labels.tag)
        .should('be.visible')
        .then(($tag) => {
          expect($tag.text().trim()).to.equal('Regular');
          expect($tag.css('background-color')).to.equal(convertHexToRGBA('#EAECF0'));
          expect($tag.css('color')).to.equal(convertHexToRGBA('#475467'));
        });
    });

    it('BaseTransfersTag renders and displays with type prop of "expedited"', () => {
      cy.mount(BaseTransfersTag, {
        props: {
          type: 'expedited',
        },
      });

      cy
        .get(BASE_TAG.labels.tag)
        .should('be.visible')
        .then(($tag) => {
          expect($tag.text().trim()).to.equal('Expedited');
          expect($tag.css('background-color')).to.equal(convertHexToRGBA('#E6EEEE'));
          expect($tag.css('color')).to.equal(convertHexToRGBA('#024742'));
        });

      cy
        .get(BASE_TAG.icons.icon)
        .should('be.visible');
    });
  });
});
