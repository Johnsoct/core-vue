// Components
import BaseBanner from './base-banner.vue';
import Styleguide from '../../Styleguide.vue';
// helpers
import {
    BASE_BANNER,
} from '@cypress/support/constants/base-components';
import {
    convertHexToRGBA,
} from '@cypress/support/utils/colors';

describe('<BaseBanner />', () => {
    it('renders', () => {
        cy.mount(BaseBanner);
    });

    context('Action', () => {
        it('Action button is not rendered if actionText prop is not passed', () => {
            cy.mount(BaseBanner, {
                props: {
                    actionCallback: () => {},
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.buttons.action)
                .should('not.exist');
        });

        it('Action button is not rendered if actionCallback prop is not passed', () => {
            cy.mount(BaseBanner, {
                props: {
                    actionText: 'Action',
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.buttons.action)
                .should('not.exist');
        });

        it('Action button is displayed if actionCallback and actionText props are passed', () => {
            cy.mount(BaseBanner, {
                props: {
                    actionCallback: () => {},
                    actionText: 'Action',
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.buttons.action)
                .should('be.visible');
        });

        it('Action button emits click event when clicked', () => {
            cy.mount(BaseBanner, {
                props: {
                    actionCallback: () => { },
                    actionText: 'Action',
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.buttons.action)
                .click();

            cy
                .getMounted()
                .then((wrapper) => {
                    expect(wrapper.emitted('click')).to.have.length.of.at.least(1);
                });
        });

        it('Action button\'s click event calls the actionCallback prop function', () => {
            const actionSpy = cy.spy();

            cy.mount(BaseBanner, {
                props: {
                    actionCallback: actionSpy,
                    actionText: 'Action',
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.buttons.action)
                .click()
                .then(() => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    expect(actionSpy).to.be.called;
                });
        });

        it('actionText matches the button text', () => {
            const actionText = 'Action';

            cy.mount(BaseBanner, {
                props: {
                    actionCallback: () => {},
                    actionText: actionText,
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.buttons.action)
                .should('have.text', actionText);
        });
    });

    context('Close', () => {
        it('Close button is not rendered if close prop is not passed', () => {
            cy.mount(BaseBanner, {
                props: {
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.buttons.close)
                .should('not.exist');
        });

        it('Close button is not rendred if close prop is false', () => {
            cy.mount(BaseBanner, {
                props: {
                    close: false,
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.buttons.close)
                .should('not.exist');
        });

        it('Close button is displayed if close prop is true', () => {
            cy.mount(BaseBanner, {
                props: {
                    close: true,
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.buttons.close)
                .should('be.visible');
        });

        it('Close button emits client event when clicked', () => {
            cy.mount(BaseBanner, {
                props: {
                    close: true,
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.buttons.close)
                .click();

            cy
                .getMounted()
                .then((wrapper) => {
                    expect(wrapper.emitted('click')).to.have.length.of.at.least(1);
                });
        });

        it('Close button\'s innerText is the x-close component SVG', () => {
            cy.mount(BaseBanner, {
                props: {
                    close: true,
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.buttons.close)
                .find(BASE_BANNER.icons.xClose)
                .should('be.visible');
        });
    });

    context('Plugin', () => {
        it('Error', () => {
            cy.mount(Styleguide);

            cy
                .get('[data-cy="styleguide-error-toastr-btn"]')
                .click();

            cy
                .get(BASE_BANNER.wrappers.error)
                .should('be.visible');
        });

        it('Info', () => {
            cy.mount(Styleguide);

            cy
                .get('[data-cy="styleguide-info-toastr-btn"]')
                .click();

            cy
                .get(BASE_BANNER.wrappers.info)
                .should('be.visible');
        });

        it('success', () => {
            cy.mount(Styleguide);

            cy
                .get('[data-cy="styleguide-success-toastr-btn"]')
                .click();

            cy
                .get(BASE_BANNER.wrappers.success)
                .should('be.visible');
        });
    });

    context('Text content', () => {
        it('header prop matches displayed header', () => {
            const headerText = 'Header';

            cy.mount(BaseBanner, {
                props: {
                    header: headerText,
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.labels.header)
                .first()
                .should('be.visible')
                .should('have.text', headerText);
        });

        it('if subheader prop is not displayed subheader is not rendered', () => {
            const headerText = 'Header';

            cy.mount(BaseBanner, {
                props: {
                    header: headerText,
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.labels.subheader)
                .should('not.exist');
        });

        it('subheader prop matches displayed subheader', () => {
            const subheaderText = 'Subheader';

            cy.mount(BaseBanner, {
                props: {
                    header: 'Header',
                    subheader: subheaderText,
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.labels.subheader)
                .should('be.visible')
                .should('have.text', subheaderText);
        });
    });

    context('Type', () => {
        it('Persistent displays a message icon', () => {
            cy.mount(BaseBanner, {
                props: {
                    header: 'Header',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.icons.message)
                .should('be.visible');
        });

        it('banner unique styles', () => {
            cy.mount(BaseBanner, {
                props: {
                    close: true,
                    header: 'Header',
                    subheader: 'Subheader',
                    type: 'persistent',
                },
            });

            cy
                .get(BASE_BANNER.wrappers.persistent)
                .then(($el) => {
                    expect($el.css('background-color')).to.equal(convertHexToRGBA('#E6EEEE'));
                    expect($el.css('border-bottom-color')).to.equal(convertHexToRGBA('#B3CDCB'));
                });

            cy
                .get(BASE_BANNER.icons.xClose)
                .then(($el) => {
                    expect($el.css('stroke')).to.equal(convertHexToRGBA('#689B98'));
                });

            cy
                .get(BASE_BANNER.icons.message)
                .then(($el) => {
                    expect($el.css('stroke')).to.equal(convertHexToRGBA('#024742'));
                });

            cy
                .get('div.BaseBanner__icon-container')
                .then(($el) => {
                    expect($el.css('background-color')).to.equal(convertHexToRGBA('#B3CDCB'));
                });

            cy
                .get(BASE_BANNER.labels.header)
                .then(($el) => {
                    expect($el.css('color')).to.equal(convertHexToRGBA('#024742'));
                });

            cy
                .get(BASE_BANNER.labels.subheader)
                .then(($el) => {
                    expect($el.css('color')).to.equal(convertHexToRGBA('#024742'));
                });
        });

        it('error displays an alert-triangle icon', () => {
            cy.mount(BaseBanner, {
                props: {
                    header: 'Header',
                    type: 'error',
                },
            });

            cy
                .get(BASE_BANNER.icons.alertTriangle)
                .should('be.visible');
        });

        it('error unique styles', () => {
            cy.mount(BaseBanner, {
                props: {
                    close: true,
                    header: 'Header',
                    subheader: 'Subheader',
                    type: 'error',
                },
            });

            cy
                .get(BASE_BANNER.wrappers.error)
                .then(($el) => {
                    expect($el.css('background-color')).to.equal(convertHexToRGBA('#FEE4E2'));
                    expect($el.css('border-bottom-color')).to.equal(convertHexToRGBA('#FECDCA'));
                });

            cy
                .get(BASE_BANNER.icons.xClose)
                .then(($el) => {
                    expect($el.css('stroke')).to.equal(convertHexToRGBA('#7A271A'));
                });

            cy
                .get(BASE_BANNER.icons.alertTriangle)
                .then(($el) => {
                    expect($el.css('stroke')).to.equal(convertHexToRGBA('#F04438'));
                });

            cy
                .get('div.BaseBanner__icon-container')
                .then(($el) => {
                    expect($el.css('background-color')).to.equal(convertHexToRGBA('#FFFFFF'));
                });

            cy
                .get(BASE_BANNER.labels.header)
                .then(($el) => {
                    expect($el.css('color')).to.equal(convertHexToRGBA('#7A271A'));
                });

            cy
                .get(BASE_BANNER.labels.subheader)
                .then(($el) => {
                    expect($el.css('color')).to.equal(convertHexToRGBA('#7A271A'));
                });
        });

        it('info displays a check-circle icon', () => {
            cy.mount(BaseBanner, {
                props: {
                    header: 'Header',
                    type: 'info',
                },
            });

            cy
                .get(BASE_BANNER.icons.checkCircle)
                .should('be.visible');
        });

        it('info unique styles', () => {
            cy.mount(BaseBanner, {
                props: {
                    close: true,
                    header: 'Header',
                    subheader: 'Subheader',
                    type: 'info',
                },
            });

            cy
                .get(BASE_BANNER.wrappers.info)
                .then(($el) => {
                    expect($el.css('background-color')).to.equal(convertHexToRGBA('#FFFFFF'));
                    expect($el.css('border-bottom-color')).to.equal(convertHexToRGBA('#D0D5DD'));
                });

            cy
                .get(BASE_BANNER.icons.xClose)
                .then(($el) => {
                    expect($el.css('stroke')).to.equal(convertHexToRGBA('#344054'));
                });

            cy
                .get(BASE_BANNER.icons.checkCircle)
                .then(($el) => {
                    expect($el.css('stroke')).to.equal(convertHexToRGBA('#667085'));
                });

            cy
                .get('div.BaseBanner__icon-container')
                .then(($el) => {
                    expect($el.css('background-color')).to.equal(convertHexToRGBA('#FFFFFF'));
                });

            cy
                .get(BASE_BANNER.labels.header)
                .then(($el) => {
                    expect($el.css('color')).to.equal(convertHexToRGBA('#344054'));
                });

            cy
                .get(BASE_BANNER.labels.subheader)
                .then(($el) => {
                    expect($el.css('color')).to.equal(convertHexToRGBA('#344054'));
                });
        });

        it('success displays a stars icon', () => {
            cy.mount(BaseBanner, {
                props: {
                    header: 'Header',
                    type: 'success',
                },
            });

            cy
                .get(BASE_BANNER.icons.stars)
                .should('be.visible');
        });

        it('success unique styles', () => {
            cy.mount(BaseBanner, {
                props: {
                    close: true,
                    header: 'Header',
                    subheader: 'Subheader',
                    type: 'success',
                },
            });

            cy
                .get(BASE_BANNER.wrappers.success)
                .then(($el) => {
                    expect($el.css('background-color')).to.equal(convertHexToRGBA('#E6EEEE'));
                    expect($el.css('border-bottom-color')).to.equal(convertHexToRGBA('#B3CDCB'));
                });

            cy
                .get(BASE_BANNER.icons.xClose)
                .then(($el) => {
                    expect($el.css('stroke')).to.equal(convertHexToRGBA('#689B98'));
                });

            cy
                .get(BASE_BANNER.icons.stars)
                .then(($el) => {
                    expect($el.css('stroke')).to.equal(convertHexToRGBA('#024742'));
                });

            cy
                .get('div.BaseBanner__icon-container')
                .then(($el) => {
                    expect($el.css('background-color')).to.equal(convertHexToRGBA('#FFFFFF'));
                });

            cy
                .get(BASE_BANNER.labels.header)
                .then(($el) => {
                    expect($el.css('color')).to.equal(convertHexToRGBA('#024742'));
                });

            cy
                .get(BASE_BANNER.labels.subheader)
                .then(($el) => {
                    expect($el.css('color')).to.equal(convertHexToRGBA('#024742'));
                });
        });
    });
});
