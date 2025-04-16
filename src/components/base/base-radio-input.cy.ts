// Components
import BaseRadioInput from './base-radio-input.vue';
// Helpers
import {
    BASE_RADIO_INPUT,
} from '@cypress/support/constants/base-components';

describe('<BaseRadioInput />', () => {
    it('renders', () => {
        cy.mount(BaseRadioInput);
    });

    context('Prop functionality', () => {
        context('Disabled', () => {
            it('Radio Input input would not be disabled when disabled is false', () => {
                cy.mount(BaseRadioInput, {
                    props: {
                        disabled: false,
                    },
                });

                cy
                    .get(BASE_RADIO_INPUT.inputs.input)
                    .should('not.be.disabled');
            });

            it('Radio Input input would not be disabled when disabled is not passed as prop', () => {
                cy.mount(BaseRadioInput);

                cy
                    .get(BASE_RADIO_INPUT.inputs.input)
                    .should('not.be.disabled');
            });

            it('Radio Input input would be disabled when disabled is passed true as prop', () => {
                cy.mount(BaseRadioInput, {
                    props: {
                        disabled: true,
                    },
                });

                cy
                    .get(BASE_RADIO_INPUT.inputs.input)
                    .should('be.disabled');

                cy
                    .get(BASE_RADIO_INPUT.wrappers.radioInput)
                    .should('have.class', 'BaseRadioInput--disabled');
            });
        });

        context('Label', () => {
            it('Radio Input Label should not render the label when label is false', () => {
                cy.mount(BaseRadioInput, {
                    props: {
                        label: false,
                    },
                });

                cy
                    .get(BASE_RADIO_INPUT.labels.label)
                    .should('not.exist');
            });

            it('Radio Input Label should not render the label when label is not passed as prop', () => {
                cy.mount(BaseRadioInput);

                cy
                    .get(BASE_RADIO_INPUT.labels.label)
                    .should('not.exist');
            });

            it('Radio Input Label should render the label when label is true and the default slot is passed', () => {
                const labelText = 'Label';

                cy.mount(BaseRadioInput, {
                    props: {
                        label: true,
                    },
                    slots: {
                        default: labelText,
                    },
                });

                cy
                    .get(BASE_RADIO_INPUT.labels.label)
                    .should('be.visible')
                    .should('contain', labelText);
            });

            it('Label\'s for matches the input\'s ID if label prop is true and label-for is given a value', () => {
                cy.mount(BaseRadioInput, {
                    props: {
                        label: true,
                        labelFor: 'testID',
                    },
                    slots: {
                        default: 'Text',
                    },
                });

                cy
                    .get(BASE_RADIO_INPUT.labels.label)
                    .then(($label) => {
                        const labelID = $label.attr('for');

                        cy
                            .get(BASE_RADIO_INPUT.inputs.input)
                            .then(($input) => {
                                const inputID = $input.attr('id');

                                expect(labelID).to.equal(inputID);
                            });
                    });
            });
        });

        context('Supporting label', () => {
            it('Radio Input supporting label should not render the supporting label when supportingLabel is false', () => {
                cy.mount(BaseRadioInput, {
                    props: {
                        supportingLabel: false,
                    },
                });

                cy
                    .get(BASE_RADIO_INPUT.labels.supportingLabel)
                    .should('not.exist');
            });

            it('Radio Input supporting label should not render the supporting label when supportingLabel is not passed as prop', () => {
                cy.mount(BaseRadioInput);

                cy
                    .get(BASE_RADIO_INPUT.labels.supportingLabel)
                    .should('not.exist');
            });

            it('Radio Input supporting label should render the supporting label when supportingLabel is true and the supportingLabel slot is passed', () => {
                const labelText = 'Label';

                cy.mount(BaseRadioInput, {
                    props: {
                        supportingLabel: true,
                    },
                    slots: {
                        supporting: labelText,
                    },
                });

                cy
                    .get(BASE_RADIO_INPUT.labels.supportingLabel)
                    .should('be.visible')
                    .should('contain', labelText);
            });

            it('Label\'s for matches the input\'s ID if label prop is true and label-for is given a value', () => {
                cy.mount(BaseRadioInput, {
                    props: {
                        supportingLabel: true,
                        supportingLabelFor: 'testID',
                    },
                    slots: {
                        supporting: 'Text',
                    },
                });

                cy
                    .get(BASE_RADIO_INPUT.labels.supportingLabel)
                    .then(($label) => {
                        const labelID = $label.attr('for');

                        cy
                            .get(BASE_RADIO_INPUT.inputs.input)
                            .then(($input) => {
                                const inputID = $input.attr('id');

                                expect(labelID).to.contain(inputID);
                            });
                    });
            });
        });

        context('Value', () => {
            it('Base Radio Input should set the default value of radio input when value prop is passed as true', () => {
                cy.mount(BaseRadioInput, {
                    props: {
                        value: true,
                    },
                });

                cy
                    .get(BASE_RADIO_INPUT.inputs.input)
                    .should('have.class', 'BaseRadioInput__input--checked')
                    .should('have.attr', 'value', 'true');
            });


            it('Base Radio Input should set the default value of radio input value props is passed as false', () => {
                cy.mount(BaseRadioInput, {
                    props: {
                        value: false,
                    },
                });

                cy
                    .get(BASE_RADIO_INPUT.inputs.input)
                    .should('not.have.class', 'BaseRadioInput__input--checked')
                    .should('have.attr', 'value', 'false');
            });
        });
    });

    context('Event listeners', () => {
        it('Clicking the label emits the opposite of the default value', () => {
            const defaultValue = true;

            cy.mount(BaseRadioInput, {
                props: {
                    label: true,
                    value: defaultValue,
                },
                slots: {
                    default: 'Label',
                },
            });

            cy
                .get(BASE_RADIO_INPUT.labels.label)
                .click();

            cy
                .getMounted()
                .should((wrapper) => {
                    console.log(wrapper.emitted());
                    expect(wrapper.emitted('update:modelValue')).to.have.lengthOf(1);
                    expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).to.equal(!defaultValue);
                });
        });

        it('Clicking the radio emits the opposite of the default value', () => {
            const defaultValue = true;

            cy.mount(BaseRadioInput, {
                props: {
                    value: defaultValue,
                },
            });

            cy
                .get(BASE_RADIO_INPUT.inputs.input)
                .click();

            cy
                .getMounted()
                .should((wrapper) => {
                    console.log(wrapper.emitted());
                    expect(wrapper.emitted('update:modelValue')).to.have.lengthOf(1);
                    expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).to.equal(!defaultValue);
                });
        });

        it('Clicking the radio twice emits the default value', () => {
            const defaultValue = true;

            cy.mount(BaseRadioInput, {
                props: {
                    value: defaultValue,
                },
            });

            cy
                .get(BASE_RADIO_INPUT.wrappers.radioInput)
                .click()
                .click();

            cy
                .getMounted()
                .should((wrapper) => {
                    console.log(wrapper.emitted());
                    expect(wrapper.emitted('update:modelValue')).to.have.lengthOf(2);
                    expect(wrapper.emitted('update:modelValue')?.[1]?.[0]).to.equal(defaultValue);
                });
        });
        });
});
