// Components
import BaseButton from './base-button.vue';
// Helpers
import {
  BASE_BUTTON,
} from '@cypress/support/constants/base-components';
import {
  convertHexToRGBA,
  convertRGBAToHex,
} from '@cypress/support/utils/colors';

describe('<BaseButton />', () => {
  it('renders', () => {
    cy.mount(BaseButton);
  });

  context('Prop functionality', () => {
    context('Disable', () => {
      it('Button is not disabled if disabled prop is false or not passed', () => {
        cy.mount(BaseButton, {
          props: {
            disabled: false,
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.wrappers.button)
          .then(($el) => {
            expect($el).not.to.have.attr('disabled');
            expect($el).not.to.have.attr('aria-disabled', 'true');
          });
      });

      it('Button is disabled if disabled prop is true', () => {
        cy.mount(BaseButton, {
          props: {
            disabled: true,
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.wrappers.button)
          .then(($el) => {
            expect($el).to.have.attr('disabled');
            expect($el).to.have.attr('aria-disabled', 'true');
          });
      });
    });

    context('Icon', () => {
      it('If icon prop is not passed, no icon is rendered', () => {
        cy.mount(BaseButton, {
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.icons.default)
          .should('not.exist');
      });

      it('If icon prop is passed but not a valid option, no icon is rendered', () => {
        cy.mount(BaseButton, {
          props: {
            icon: 'potato',
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.icons.default)
          .should('not.exist');
      });

      it('If icon prop is passed and it equals "ring", icon is rendered and displayed', () => {
        cy.mount(BaseButton, {
          props: {
            icon: 'ring',
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.icons.default)
          .should('be.visible');
      });
    });

    context('Loading', () => {
      it('If loading is not passed, the loading indicator isn\'t rendered', () => {
        cy.mount(BaseButton, {
          props: {
            icon: 'ring',
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.icons.ellipsis)
          .should('not.exist');
      });

      it('If loading is passed as false, the loading indicator isn\'t rendered', () => {
        cy.mount(BaseButton, {
          props: {
            icon: 'ring',
            loading: false,
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.icons.ellipsis)
          .should('not.exist');
      });

      it('If loading is passed as true, loading indicator covers the button slot and icon', () => {
        cy.mount(BaseButton, {
          props: {
            icon: 'ring',
            loading: true,
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.wrappers.button)
          .as('button')
          .should('have.text', 'Default text');

        cy
          .get(BASE_BUTTON.icons.default)
          .should('exist');

        cy
          .get(BASE_BUTTON.icons.ellipsis)
          .then(($ellipsisBg) => {

            expect($ellipsisBg).to.exist;

            cy
              .get('@button')
              .then(($button) => {
                const buttonHeight = $button.outerHeight();
                const buttonWidth = $button.outerWidth();
                const ellipsisBgHeight = $ellipsisBg.outerHeight();
                const ellipsisBgWidth = $ellipsisBg.outerWidth();

                expect(buttonHeight).to.equal(ellipsisBgHeight);
                expect(buttonWidth).to.equal(ellipsisBgWidth);
                expect($ellipsisBg).to.have.css('z-index', '4');
              });
          });
      });
    });

    context('size', () => {
      it('md', () => {
        cy.mount(BaseButton, {
          props: {
            size: 'md',
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.wrappers.button)
          .then(($button) => {
            expect($button.css('font-size')).to.equal('14px');
            expect($button.css('height')).to.equal('38px');
            expect($button.css('line-height')).to.equal('normal');
            expect($button.css('padding-left')).to.equal('16px');
            expect($button.css('padding-right')).to.equal('16px');
          });
      });

      it('lg', () => {
        cy.mount(BaseButton, {
          props: {
            size: 'lg',
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.wrappers.button)
          .then(($button) => {
            expect($button.css('font-size')).to.equal('16px');
            expect($button.css('height')).to.equal('44px');
            expect($button.css('line-height')).to.equal('normal');
            expect($button.css('padding-left')).to.equal('16px');
            expect($button.css('padding-right')).to.equal('16px');
          });
      });

      it('xl', () => {
        cy.mount(BaseButton, {
          props: {
            size: 'xl',
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.wrappers.button)
          .then(($button) => {
            expect($button.css('font-size')).to.equal('16px');
            expect($button.css('height')).to.equal('48px');
            expect($button.css('line-height')).to.equal('normal');
            expect($button.css('padding-left')).to.equal('24px');
            expect($button.css('padding-right')).to.equal('24px');
          });
      });
    });

    context('Slot', () => {
      it('The default slot sets the button\'s inner text', () => {
        const slotText = 'Default text';

        cy.mount(BaseButton, {
          slots: {
            default: slotText,
          },
        });

        cy
          .get(BASE_BUTTON.wrappers.button)
          .should('have.text', slotText);
      });
    });

    context('Type', () => {
      it('Error', () => {
        cy.mount(BaseButton, {
          props: {
            type: 'error',
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.wrappers.button)
          .then(($button) => {
            expect(convertRGBAToHex($button.css('background-color'))).to.equal('#D92D20');
            expect(convertRGBAToHex($button.css('color'))).to.equal('#FFFFFF');
          });
      });

      it('Primary', () => {
        cy.mount(BaseButton, {
          props: {
            type: 'primary',
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.wrappers.button)
          .then(($button) => {
            expect(convertRGBAToHex($button.css('background-color'))).to.equal('#035953');
            expect(convertRGBAToHex($button.css('color'))).to.equal('#FFFFFF');
          });
      });

      it('Secondary', () => {
        cy.mount(BaseButton, {
          props: {
            type: 'secondary',
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.wrappers.button)
          .then(($button) => {
            expect(convertRGBAToHex($button.css('background-color'))).to.equal('#E6EEEE');
            expect(convertRGBAToHex($button.css('color'))).to.equal('#024742');
          });
      });

      it('Tertiary', () => {
        cy.mount(BaseButton, {
          props: {
            type: 'tertiary',
          },
          slots: {
            default: 'Default text',
          },
        });

        cy
          .get(BASE_BUTTON.wrappers.button)
          .then(($button) => {
            expect(convertRGBAToHex($button.css('background-color'))).to.equal('#FFFFFF');
            expect($button.css('border')).to.equal(`1px solid ${convertHexToRGBA('#D0D5DD')}`);
            expect($button.css('box-shadow')).to.equal('rgba(16, 24, 40, 0.05) 0px 1px 2px 0px');
            expect(convertRGBAToHex($button.css('color'))).to.equal('#344054');
          });
      });
    });
  });

  context('Event listener',  ()=> {
    it('@click emits on mouse click', () => {
      cy.mount(BaseButton, {
        slots: {
          default: 'Default text',
        },
      });

      cy
        .get(BASE_BUTTON.wrappers.button)
        .click();

      cy
        .getMounted()
        .then((wrapper) => {
          expect(wrapper.emitted('click')).to.have.length.of.at.least(1);
        });
    });

    it('@click emits on focus + enter', () => {
      cy.mount(BaseButton, {
        slots: {
          default: 'Default text',
        },
      });

      cy
        .get(BASE_BUTTON.wrappers.button)
        .type('{enter}');

      cy
        .getMounted()
        .then((wrapper) => {
          expect(wrapper.emitted('click')).to.have.length.of.at.least(1);
        });
    });

    it('@click is not emitted if disabled prop is true and user removes attribute', () => {
      cy.mount(BaseButton, {
        props: {
          disabled: true,
        },
        slots: {
          default: 'Default text',
        },
      });

      // Simulate someone trying to bypass the disabled attribute
      cy
        .get(BASE_BUTTON.wrappers.button)
        .then(($el) => {
          $el.removeAttr('disabled');
          $el.removeAttr('aria-disabled');
        });

      cy
        .get(BASE_BUTTON.wrappers.button)
        .click();

      cy
        .getMounted()
        .then((wrapper) => {
          expect(wrapper.emitted('click')).to.be.undefined;
        });
    });

    it('@click is not emitted if loading prop is true', () => {
      cy.mount(BaseButton, {
        props: {
          loading: true,
        },
        slots: {
          default: 'Default text',
        },
      });

      cy
        .get(BASE_BUTTON.wrappers.button)
        .click();

      cy
        .getMounted()
        .then((wrapper) => {
          expect(wrapper.emitted('click')).to.be.undefined;
        });
    });
  });
});
