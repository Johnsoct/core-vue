// Packages
import Big from 'big.js';
// Components
import BaseInput from './base-input.vue';
// Helpers
import {
    BASE_INPUT,
} from '@cypress/support/constants/base-components';
import {
    convertHexToRGBA,
} from '@cypress/support/utils/colors';
// Types
import type {
    BaseInputCurrencyOutput,
} from '@ts/inputs';

describe('<BaseInput />', () => {
    it('renders', () => {
        cy.mount(BaseInput);
    });

    context('Prop functionality', () => {
        context('Disabled', () => {
            it('Input is not disabled if disabled prop is false or not passed', () => {
                cy.mount(BaseInput, {
                    props: {
                        disabled: false,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .should('not.have.attr', 'disabled');
            });

            it('Input is disabled if disabled prop is true', () => {
                cy.mount(BaseInput, {
                    props: {
                        disabled: true,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .should('have.attr', 'disabled');
            });
        });

        context('hint', () => {
            it('Hint label does not render if hint prop is not passed', () => {
                cy.mount(BaseInput);

                cy
                    .get(BASE_INPUT.labels.hint)
                    .should('not.exist');
            });

            it('Hint label renders, is visible, and matches the prop value if hint prop is passed', () => {
                const hintText = 'This is a hint';

                cy.mount(BaseInput, {
                    props: {
                        hint: hintText,
                    },
                });

                cy
                    .get(BASE_INPUT.labels.hint)
                    .should('be.visible')
                    .should('have.text', hintText);
            });
        });

        context('Instructions', () => {
            it('Input instruction is not rendered if valid prop is true', () => {
                cy.mount(BaseInput, {
                    props: {
                        instructions: 'Test',
                        valid: true,
                    },
                });

                cy
                    .get(BASE_INPUT.labels.instructions)
                    .should('not.exist');
            });

            it('Input instruction is visible and matches the instructions prop value if valid prop is false', () => {
                const instructions = 'Test';

                cy.mount(BaseInput, {
                    props: {
                        instructions,
                        valid: false,
                    },
                });

                cy
                    .get(BASE_INPUT.labels.instructions)
                    .should('be.visible')
                    .should('have.text', instructions);
            });
        });

        context('Label', () => {
            it('Label does not render if label prop is false', () => {
                cy.mount(BaseInput, {
                    props: {
                        label: false,
                    },
                });

                cy
                    .get(BASE_INPUT.labels.inputLabel)
                    .should('not.exist');
            });

            it('Label renders but does not display if label prop is true and a slot is not passed', () => {
                cy.mount(BaseInput, {
                    props: {
                        label: true,
                    },
                });

                cy
                    .get(BASE_INPUT.labels.inputLabel)
                    .should('not.be.visible');
            });

            it('Label renders and displays if label prop is true and a slot is passed', () => {
                cy.mount(BaseInput, {
                    props: {
                        label: true,
                    },
                    slots: {
                        default: 'Test',
                    },
                });

                cy
                    .get(BASE_INPUT.labels.inputLabel)
                    .should('be.visible');
            });

            it('Label text is identical to the slot value if label prop is true', () => {
                const labelText = 'Test';
                cy.mount(BaseInput, {
                    props: {
                        label: true,
                    },
                    slots: {
                        default: labelText,
                    },
                });

                cy
                    .get(BASE_INPUT.labels.inputLabel)
                    .invoke('text')
                    .then((text) => {
                        expect(text.trim()).to.equal(labelText);
                    });
            });

            it('Label\'s for matches the input\'s ID if label prop is true and label-for is given a value', () => {
                cy.mount(BaseInput, {
                    props: {
                        label: true,
                        labelFor: 'testID',
                    },
                    slots: {
                        default: 'Text',
                    },
                });

                cy
                    .get(BASE_INPUT.labels.inputLabel)
                    .then(($label) => {
                        const labelID = $label.attr('for');

                        cy
                            .get(BASE_INPUT.inputs.input)
                            .then(($input) => {
                                const inputID = $input.attr('id');

                                expect(labelID).to.equal(inputID);
                            });
                    });
            });
        });

        context('Max length', () => {
            it('Input\'s max character length is 255 if a max-length prop isn\'t passed', () => {
                cy.mount(BaseInput);

                cy
                    .get(BASE_INPUT.inputs.input)
                    .then(($input) => {
                        expect($input).to.have.attr('maxLength', '255');
                    });
            });

            it('Input\'s max character length is 12 if a max-length prop\'s value is 12', () => {
                cy.mount(BaseInput, {
                    props: {
                        maxLength: 12,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .then(($input): void => {
                        expect($input).to.have.attr('maxLength', '12');
                    });
            });
        });

        context('Min length', () => {
            it('Input\'s min character length is 0 if a min-length prop isn\'t passed', () => {
                cy.mount(BaseInput);

                cy
                    .get(BASE_INPUT.inputs.input)
                    .should('not.have.attr', 'minLength');
            });

            it('Input\'s max character length is 3 if a min-length prop\'s value is 3', () => {
                cy.mount(BaseInput, {
                    props: {
                        minLength: 3,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .then(($input) => {
                        expect($input).to.have.attr('minLength', '3');
                    });
            });
        });

        context('Placeholder', () => {
            it('Input placeholder is empty if placeholder prop is not passed', () => {
                cy.mount(BaseInput);

                cy
                    .get(BASE_INPUT.inputs.input)
                    .should('not.have.attr', 'placeholder');
            });

            it('Input placeholder is identical to placeholder prop if passed', () => {
                const placeholderText = 'Placeholder';

                cy.mount(BaseInput, {
                    props: {
                        placeholder: placeholderText,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .then(($input) => {
                        expect($input).to.have.attr('placeholder', placeholderText);
                    });
            });
        });

        context('Type', () => {
            it('Input text is encoded as "*" if "password" is passed for type prop', () => {
                const type = 'password';
                const valueText = 'Test';

                cy.mount(BaseInput, {
                    props: {
                        modelValue: valueText,
                        type: type,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .then(($input) => {
                        expect($input).to.have.attr('type', type);
                        expect($input.val()).to.equal(valueText);
                    });
            });

            it('Input text is plain if type prop is not passed', () => {
                const valueText = 'Test';

                cy.mount(BaseInput, {
                    props: {
                        modelValue: valueText,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .then(($input) => {
                        expect($input).to.have.attr('type', 'text');
                        expect($input.val()).to.equal(valueText);
                    });
            });

            it('Input text is plain if type prop is "text"', () => {
                const type = 'text';
                const valueText = 'Test';

                cy.mount(BaseInput, {
                    props: {
                        modelValue: valueText,
                        type,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .then(($input) => {
                        expect($input).to.have.attr('type', type);
                        expect($input.val()).to.equal(valueText);
                    });
            });

            it('Hide/show icon is visible in input if type is "password"', () => {
                cy.mount(BaseInput, {
                    props: {
                        label: true,
                        labelFor: 'input-password',
                        type: 'password',
                    },
                    slots: {
                        default: 'Default label',
                    },
                });

                cy
                    .get(BASE_INPUT.icons.password)
                    .should('be.visible');
            });

            it('Hide/show icon is not rendered if type is "text"', () => {
                cy.mount(BaseInput, {
                    props: {
                        type: 'text',
                    },
                });

                cy
                    .get(BASE_INPUT.icons.password)
                    .should('not.exist');
            });

            it('Hide/show icon is not visible if type is not passed', () => {
                cy.mount(BaseInput);

                cy
                    .get(BASE_INPUT.icons.password)
                    .should('not.exist');
            });

            it('Clicking hide/show icon while type prop is "password" toggles the input type between "text" and "password"', () => {
                cy.mount(BaseInput, {
                    props: {
                        type: 'password',
                    },
                });

                cy
                    .getMounted()
                    .should((wrapper) => {
                        expect(wrapper.find('input').attributes('type')).to.equal('password');
                    });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .then(($input) => {
                        expect($input.attr('type')).to.equal('password');
                    });

                cy
                    .get(BASE_INPUT.icons.password)
                    .click();

                cy
                    .getMounted()
                    .should((wrapper) => {
                        expect(wrapper.emitted('click')).to.have.lengthOf(1);
                        expect(wrapper.find('input').attributes('type')).to.equal('text');
                    });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .then(($input) => {
                        expect($input.attr('type')).to.equal('text');
                    });

                cy
                    .get(BASE_INPUT.icons.password)
                    .click();

                cy
                    .getMounted()
                    .should((wrapper) => {
                        expect(wrapper.emitted('click')).to.have.lengthOf(2);
                        expect(wrapper.find('input').attributes('type')).to.equal('password');
                    });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .then(($input) => {
                        expect($input.attr('type')).to.equal('password');
                    });
            });
        });

        context('Value', () => {
            it('Input value is "" if value prop is not passed', () => {
                cy.mount(BaseInput);

                cy
                    .get(BASE_INPUT.inputs.input)
                    .should('have.value', '');
            });

            it('Input value is identical to value prop if passed', () => {
                const valueText = 'Test';

                cy.mount(BaseInput, {
                    props: {
                        modelValue: valueText,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .should('have.value', valueText);
            });
        });

        context('Valid', () => {
            it('Input class has error class if valid prop is false', () => {
                cy.mount(BaseInput, {
                    props: {
                        valid: false,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .should('have.class', 'BaseInput__input--error');
            });

            it('Input class does not have error class if valid prop is true', () => {
                cy.mount(BaseInput, {
                    props: {
                        valid: true,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .should('not.have.class', 'BaseInput__input--error');
            });

            it('Input class has error class if valid prop is initially false but then changed to true', () => {
                cy.mount(BaseInput, {
                    props: {
                        valid: true,
                    },
                });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .should('not.have.class', 'BaseInput__input--error');

                cy
                    .getMounted()
                    .then((wrapper) => {
                        wrapper.setProps({
                            valid: false,
                        });
                    });

                cy
                    .get(BASE_INPUT.inputs.input)
                    .should('have.class', 'BaseInput__input--error');
            });
        });
    });

    context('Event listeners', () => {
        it('@focusout does not toggle the validity state if a user abandons inputing value in a non-required input', () => {
            cy.mount(BaseInput);

            cy
                .get(BASE_INPUT.inputs.input)
                .click()
                .type('asdfadf')
                .clear()
                .blur();

            cy
                .getMounted()
                .then((wrapper) => {
                    expect(wrapper.find('input').classes()).not.contain('BaseInput__input--error');
                });
        });

        it('@focusout toggles the validity state to false if a user abandons inputing value in a required input', () => {
            cy.mount(BaseInput, {
                props: {
                    required: true,
                },
            });

            cy
                .get(BASE_INPUT.inputs.input)
                .click()
                .type('asdfadf')
                .clear()
                .blur();

            cy.wait(250);

            cy
                .getMounted()
                .then((wrapper) => {
                    expect(wrapper.find('input').classes()).contain('BaseInput__input--error');
                });
        });

        it('@input emits user input value when currency prop is false', () => {
            const inputText = 'Test';

            cy.mount(BaseInput, {
                props: {
                    currency: false,
                },
            });

            cy
                .get(BASE_INPUT.inputs.input)
                .type(inputText);

            cy
                .getMounted()
                .should((wrapper) => {
                    expect(wrapper.emitted('update:modelValue')).to.have.lengthOf(4);
                });

            cy
                .get(BASE_INPUT.inputs.input)
                .should('have.value', inputText);
        });

        it('@input emits { big, cleaned } from user input when currency prop is true', () => {
            const inputText = '100';

            cy.mount(BaseInput, {
                props: {
                    currency: true,
                },
            });

            cy
                .get(BASE_INPUT.inputs.input)
                .type(inputText);

            cy
                .getMounted()
                .should((wrapper) => {
                    expect(wrapper.emitted('update:modelValue')).to.have.lengthOf(3);
                    wrapper
                        .emitted('update:modelValue')
                        ?.forEach((arrayOfSingleEmit, index) => {
                            const inputEvent = arrayOfSingleEmit[0] as BaseInputCurrencyOutput;
                            expect(inputEvent).to.have.nested.property('big');
                            expect(inputEvent).to.have.nested.property('cleaned');
                            expect(inputEvent.big).to.be.instanceOf(Big);
                            expect(inputEvent.big.div(100).toFixed()).to.equal(inputText.slice(0, index + 1));
                            expect(inputEvent.cleaned).to.equal(inputText.slice(0, index + 1));
                        });
                });

            cy
                .get(BASE_INPUT.inputs.input)
                .should('have.value', inputText);
        });

        it('@input emits "" from user input when currency prop is true and user input includes ".."', () => {
            const expectedOutput = '';
            const failIndex = 4;
            const inputText = '100..10';

            cy.mount(BaseInput, {
                props: {
                    currency: true,
                },
            });

            cy
                .get(BASE_INPUT.inputs.input)
                .type(inputText);

            cy
                .getMounted()
                .should((wrapper) => {
                    wrapper
                        .emitted('update:modelValue')
                        ?.forEach((arrayOfSingleEmit, index) => {
                            const inputEvent = arrayOfSingleEmit[0];

                            if (index < failIndex) {
                                expect(inputEvent).to.have.nested.property('big');
                                expect(inputEvent).to.have.nested.property('cleaned');
                            }
                            else {
                                expect(inputEvent).to.equal(expectedOutput);
                            }
                        });
                });

            cy
                .get(BASE_INPUT.inputs.input)
                .should('have.value', inputText);
        });

        it('@input emits "" from user input when currency prop is true and user input is "invalid"', () => {
            const expectedOutput = '';
            const inputText = 'ff';

            cy.mount(BaseInput, {
                props: {
                    currency: true,
                },
            });

            cy
                .get(BASE_INPUT.inputs.input)
                .type(inputText);

            cy
                .getMounted()
                .should((wrapper) => {
                    console.log(wrapper);
                    wrapper
                        .emitted('update:modelValue')
                        ?.forEach((arrayOfSingleEmit) => {
                            const inputEvent = arrayOfSingleEmit[0];
                            expect(inputEvent).to.equal(expectedOutput);
                        });
                });

            cy
                .get(BASE_INPUT.inputs.input)
                .should('have.value', inputText);
        });
    });

    context('Styles', () => {
        it('Disabled', () => {
            cy.mount(BaseInput, {
                props: {
                    disabled: true,
                },
            });

            cy
                .get(BASE_INPUT.inputs.input)
                .then(($input) => {
                    expect($input.css('color')).to.equal(convertHexToRGBA('#667085'));
                    expect($input.css('pointer-events')).to.equal('none');
                });
        });

        it('Error', () => {
            cy.mount(BaseInput, {
                props: {
                    instructions: 'instructions',
                    valid: false,
                },
            });

            cy
                .get(BASE_INPUT.inputs.input)
                .then(($input) => {
                    expect($input.css('border-color')).to.equal(convertHexToRGBA('#FDA29B'));
                });

            cy
                .get(BASE_INPUT.labels.instructions)
                .then(($label) => {
                    expect($label.css('color')).to.equal(convertHexToRGBA('#F04438'));
                });
        });

        it('Focused', () => {
            cy.mount(BaseInput);

            cy
                .get(BASE_INPUT.inputs.input)
                .focus();

            cy
                .get(BASE_INPUT.inputs.input)
                .then(($input) => {
                    expect($input.css('box-shadow')).to.equal('rgb(227, 236, 235) 0px 0px 0px 4px, rgba(16, 24, 40, 0.05) 0px 1px 2px 0px');
                });
        });

        it('Filled', () => {
            cy.mount(BaseInput, {
                props: {
                    modelValue: 'test',
                },
            });

            cy
                .get(BASE_INPUT.inputs.input)
                .then(($input) => {
                    expect($input.css('color')).to.equal(convertHexToRGBA('#101828'));
                });
        });

        it('Hint', () => {
            cy.mount(BaseInput, {
                props: {
                    hint: 'hint',
                },
            });

            cy
                .get(BASE_INPUT.labels.hint)
                .then(($input) => {
                    expect($input.css('color')).to.equal(convertHexToRGBA('#475467'));
                });
        });

        it('Rest', () => {
            cy.mount(BaseInput);

            cy
                .get(BASE_INPUT.inputs.input)
                .then(($input) => {
                    expect($input.css('border')).to.equal(`1px solid ${convertHexToRGBA('#D0D5DD')}`);
                    expect($input.css('border-radius')).to.equal('8px');
                    expect($input.css('box-shadow')).to.equal('rgba(16, 24, 40, 0.05) 0px 1px 2px 0px');
                    expect($input.css('color')).to.equal(convertHexToRGBA('#101828'));
                    expect($input.css('outline-style')).to.equal('none');
                });
        });
    });
});
