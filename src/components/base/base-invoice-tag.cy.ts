// Components
import BaseInvoiceTag from './base-invoice-tag.vue';
// Helpers
import {
  BASE_TAG,
} from '@cypress/support/constants/base-components';
import {
  convertHexToRGBA,
} from '@cypress/support/utils/colors';

describe('BaseInvoiceTag', () => {
  context('Styles', () => {
    it('BaseInvoiceTag renders and displays with type prop of "error"', () => {
      cy.mount(BaseInvoiceTag, {
        props: {
          type: 'error',
        },
        slots: {
          default: 'Default slot',
        },
      });

      cy
        .get(BASE_TAG.labels.tag)
        .should('exist')
        .should('be.visible')
        .then(($tag) => {
          expect($tag.css('background-color')).to.equal(convertHexToRGBA('#FEF3F2'));
          expect($tag.css('color')).to.equal(convertHexToRGBA('#B42318'));
        });
    });

    it('BaseInvoiceTag renders and displays with type prop of "success"', () => {
      cy.mount(BaseInvoiceTag, {
        props: {
          type: 'success',
        },
        slots: {
          default: 'Default slot',
        },
      });

      cy
        .get(BASE_TAG.labels.tag)
        .should('exist')
        .should('be.visible')
        .then(($tag) => {
          expect($tag.css('background-color')).to.equal(convertHexToRGBA('#E6EEEE'));
          expect($tag.css('color')).to.equal(convertHexToRGBA('#024742'));
        });
    });

    it('BaseInvoiceTag renders and displays with type prop of "warning"', () => {
      cy.mount(BaseInvoiceTag, {
        props: {
          type: 'warning',
        },
        slots: {
          default: 'Default slot',
        },
      });

      cy
        .get(BASE_TAG.labels.tag)
        .should('exist')
        .should('be.visible')
        .then(($tag) => {
          expect($tag.css('background-color')).to.equal(convertHexToRGBA('#FFFAEB'));
          expect($tag.css('color')).to.equal(convertHexToRGBA('#B54708'));
        });
    });
  });
});
