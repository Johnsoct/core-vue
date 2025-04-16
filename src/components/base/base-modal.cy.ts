// Components
import BaseModal from './base-modal.vue';
import AlertTriangle from '@src/components/svg/alert-triangle.vue';
// Helpers
import {
    BASE_MODAL,
} from '@cypress/support/constants/base-components';

describe('<BaseModal />', () => {
    it('renders', () => {
        cy.mount(BaseModal);
    });

    context('Prop functionality', () => {
        context('isClosable', () => {
            it('Base Modal displays a close icon when isClosable is passed true', () => {
                cy.mount(BaseModal, {
                    props: {
                        isClosable: true,
                    },
                });

                cy
                    .get(BASE_MODAL.icons.close)
                    .should("exist");
            });

            it('Base Modal displays a close icon when isClosable is not passed as prop', () => {
                cy.mount(BaseModal);

                cy
                    .get(BASE_MODAL.icons.close)
                    .should("exist");
            });

            it('Base Modal does not display a close icon when isClosable is passed false as prop', () => {
                cy.mount(BaseModal, {
                    props: {
                        isClosable: false,
                    },
                });

                cy
                    .get(BASE_MODAL.icons.close)
                    .should("not.exist");
            });
        });

        context('Header', () => {
            it('Base Modal does not display header when header is passed empty', () => {
                cy.mount(BaseModal, {
                    props: {
                        header: "",
                    },
                });

                cy
                    .get(BASE_MODAL.labels.header)
                    .should('not.exist');
            });

            it('Base Modal does not display header when header is not passed', () => {
                cy.mount(BaseModal);

                cy
                    .get(BASE_MODAL.labels.header)
                    .should('not.exist');
            });


            it('Base Modal displays "Heading 1" when header is passed as prop', () => {
                cy.mount(BaseModal, {
                    props: {
                        header: "Heading 1",
                    },
                });

                cy
                    .get(BASE_MODAL.labels.header)
                    .should("have.text", 'Heading 1');
            });
        });

        context('Subheader', () => {
            it('Base Modal does not display subheader when subheader is passed empty', () => {
                cy.mount(BaseModal, {
                    props: {
                        subheader: "",
                    },
                });

                cy
                    .get(BASE_MODAL.labels.subheader)
                    .should('not.exist');
            });

            it('Base Modal does not display subheader when subheader is not passed', () => {
                cy.mount(BaseModal);

                cy
                    .get(BASE_MODAL.labels.subheader)
                    .should('not.exist');
            });


            it('Base Modal displays "Heading 1" when subheader is passed as prop', () => {
                cy.mount(BaseModal, {
                    props: {
                        subheader: "Heading 1",
                    },
                });

                cy
                    .get(BASE_MODAL.labels.subheader)
                    .should("have.text", 'Heading 1');
            });
        });
    });

    context('Slots', () => {
        context('Icon', () => {
            it('If icon slot is not passed, icon or icon container do not display', () => {
                cy.mount(BaseModal, {
                    props: {
                        header: 'Header',
                        subheader: 'Subheader',
                    },
                });

                cy
                    .get(BASE_MODAL.icons.slot)
                    .should('not.exist');
            });

            it('If icon slot is passed, icon and icon container display', () => {
                cy.mount(BaseModal, {
                    props: {
                        header: 'Header',
                        subheader: 'Subheader',
                    },
                    slots: {
                        icon: AlertTriangle,
                    },
                });

                cy
                    .get(BASE_MODAL.icons.slot)
                    .should('be.visible');

                cy
                    .get(BASE_MODAL.icons.slot)
                    .find('svg')
                    .eq(0)
                    .should('be.visible');
            });
        });

        context('Content', () => {
            it('If content slot is not passed, content is not display', () => {
                cy.mount(BaseModal, {
                    props: {
                        header: 'Header',
                        subheader: 'Subheader',
                    },
                });

                cy
                    .get(BASE_MODAL.wrappers.content)
                    .should('not.exist');
            });

            it('If icon slot is passed, icon and icon container display', () => {
                cy.mount(BaseModal, {
                    props: {
                        header: 'Header',
                        subheader: 'Subheader',
                    },
                    slots: {
                        content: `<template #content><button>Okay</button></template>`,
                    },
                });

                cy
                    .get(BASE_MODAL.wrappers.content)
                    .should('be.visible');

                cy
                    .get(BASE_MODAL.wrappers.content)
                    .find('button')
                    .eq(0)
                    .should('have.text', 'Okay');
            });
        });
    });

    context('Event listeners', () => {
        it('emits "close-modal" event when close icon is clicked', () => {
            cy.mount(BaseModal, {
                props: {
                    header: "Heading 1",
                },
            });

            cy
                .get(BASE_MODAL.icons.close)
                .click();

            cy
                .getMounted()
                .should((wrapper) => {
                    expect(wrapper.emitted('close-modal')).to.have.length.of.at.least(1);
                });
        });
    });
});
