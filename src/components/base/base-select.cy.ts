// Components
import BaseSelect from './base-select.vue';
// Helpers
import {
    BASE_SELECT,
} from '@cypress/support/constants/base-components';
import {
    convertHexToRGBA,
} from '@cypress/support/utils/colors';

describe('<BaseSelect />', () => {
    it('renders', () => {
        cy.mount(BaseSelect, {
            props: {
                options: [ 'A', 'B' ],
            },
        });
    });

    context('Prop functionality', () => {
        context('Clearable', () => {
            it('Dropdown Select should have the X Close icon if clearable prop not passed', () => {
                cy.mount(BaseSelect, {
                    props: {
                        options: [ 'A', 'B' ],
                    },
                });

                cy
                    .get(BASE_SELECT.wrappers.select)
                    .click();

                cy.selectFirstElementInVSelect(BASE_SELECT.wrappers.select);

                cy
                    .get('.vs__clear')
                    .should('be.visible');
            });

            it('Dropdown Select should have the X Close icon if clearable prop is true', () => {
                cy.mount(BaseSelect, {
                    props: {
                        clearable: true,
                        options: [ 'A', 'B' ],
                    },
                });

                cy
                    .get(BASE_SELECT.wrappers.select)
                    .click();

                cy.selectFirstElementInVSelect(BASE_SELECT.wrappers.select);

                cy
                    .get(BASE_SELECT.buttons.clear)
                    .should('be.visible');
            });

            it('Dropdown Select does not have clearable cross icon when option is selected if clearable prop is passed true as prop', () => {
                cy.mount(BaseSelect, {
                    props: {
                        clearable: false,
                        options: [ 'A', 'B' ],
                    },
                });

                cy
                    .get(BASE_SELECT.wrappers.select)
                    .click();

                cy.selectFirstElementInVSelect(BASE_SELECT.wrappers.select);

                cy
                    .get(BASE_SELECT.buttons.clear)
                    .should('not.be.visible');
            });
        });

        context('Disabled', () => {
            it('Input should be actionable if disabled prop is not passed', () => {
                cy.mount(BaseSelect, {
                    props: {
                        options: [ 'A', 'B' ],
                    },
                });

                cy
                    .get(BASE_SELECT.inputs.search)
                    .should('not.be.disabled');
            });

            it('Input should be actionable if disabled prop is false', () => {
                cy.mount(BaseSelect, {
                    props: {
                        disabled: false,
                        options: [ 'A', 'B' ],
                    },
                });

                cy
                    .get(BASE_SELECT.inputs.search)
                    .should('not.be.disabled');
            });

            it('Input should not be actionable if disabled prop is true', () => {
                cy.mount(BaseSelect, {
                    props: {
                        disabled: true,
                        options: [ 'A', 'B' ],
                    },
                });

                cy
                    .get(BASE_SELECT.inputs.search)
                    .should('be.disabled');
            });

            it('Input styles while disabled', () => {
                cy.mount(BaseSelect, {
                    props: {
                        disabled: true,
                        options: [ 'A', 'B' ],
                    },
                });

                cy
                    .get(BASE_SELECT.inputs.search)
                    .then(($el) => {
                        expect($el.css('color')).to.equal(convertHexToRGBA('#667085'));
                    });

                cy
                    .get(BASE_SELECT.wrappers.select)
                    .should('have.css', 'pointer-events', 'none');
            });
        });

        context('Label', () => {
            it('Label does not render if label prop is false', () => {
                cy.mount(BaseSelect, {
                    props: {
                        label: false,
                        options: [ 'A', 'B' ],
                    },
                });

                cy
                    .get(BASE_SELECT.labels.inputLabel)
                    .should('not.exist');
            });

            it('Label renders but does not display if label prop is true and a slot is not passed', () => {
                cy.mount(BaseSelect, {
                    props: {
                        label: true,
                        options: [ 'A', 'B' ],
                    },
                });

                cy
                    .get(BASE_SELECT.labels.inputLabel)
                    .should('not.be.visible');
            });

            it('Label renders and displays if label prop is true and a slot is passed', () => {
                cy.mount(BaseSelect, {
                    props: {
                        label: true,
                        options: [ 'A', 'B' ],
                    },
                    slots: {
                        default: 'Test',
                    },
                });

                cy
                    .get(BASE_SELECT.labels.inputLabel)
                    .should('be.visible');
            });

            it('Label text is identical to the slot value if label prop is true', () => {
                const labelText = 'Test';
                cy.mount(BaseSelect, {
                    props: {
                        label: true,
                        options: [ 'A', 'B' ],
                    },
                    slots: {
                        default: labelText,
                    },
                });

                cy
                    .get(BASE_SELECT.labels.inputLabel)
                    .invoke('text')
                    .then((text) => {
                        expect(text.trim()).to.equal(labelText);
                    });
            });

            it('Label\'s for matches the input\'s ID if label prop is true and label-for is given a value', () => {
                cy.mount(BaseSelect, {
                    props: {
                        label: true,
                        labelFor: 'testID',
                        options: [ 'A', 'B' ],
                    },
                    slots: {
                        default: 'Text',
                    },
                });

                cy
                    .get(BASE_SELECT.labels.inputLabel)
                    .then(($label) => {
                        const labelID = $label.attr('for');

                        cy
                            .get(BASE_SELECT.wrappers.select)
                            .then(($input) => {
                                const inputID = $input.attr('id');

                                expect(labelID).to.equal(inputID);
                            });
                    });
            });
        });

        context('Options', () => {
            it(' is displayed if options is not passed', () => {
                cy.mount(BaseSelect);

                cy
                    .get(BASE_SELECT.inputs.search)
                    .click();

                cy
                    .get(BASE_SELECT.wrappers.dropdownMenu)
                    .should('be.visible');

                cy
                    .get(BASE_SELECT.labels.noOptions)
                    .should('be.visible')
                    .should('contain', 'Sorry, no matching options');
            });

            it(' is displayed if options is an empty array', () => {
                cy.mount(BaseSelect, {
                    props: {
                        options: [],
                    },
                });

                cy
                    .get(BASE_SELECT.inputs.search)
                    .click();

                cy
                    .get(BASE_SELECT.wrappers.dropdownMenu)
                    .should('be.visible');

                cy
                    .get(BASE_SELECT.labels.noOptions)
                    .should('be.visible')
                    .should('contain', 'Sorry, no matching options');
            });

            it('Option A and Option B is displayed if options is an array of strings', () => {
                const options = [ 'Option A', 'Option B' ];

                cy.mount(BaseSelect, {
                    props: {
                        options,
                    },
                });

                cy
                    .get(BASE_SELECT.inputs.search)
                    .click();

                cy
                    .get(BASE_SELECT.wrappers.dropdownMenu)
                    .should('be.visible');

                cy
                    .get(BASE_SELECT.labels.dropdownOption)
                    .each((option, index) => {
                        expect(option).to.have.text(options[index] as string);
                    });
            });

            it('An array of objects is allowed as options if #option and #selected-option slots are passed', () => {
                const options = [
                    {
                        firstName: 'Dick',
                        lastName: 'Head',
                    },
                    {
                        firstName: 'Butter',
                        lastName: 'Finger',
                    },
                ];

                cy.mount(BaseSelect, {
                    props: {
                        options,
                    },
                    slots: {
                        option: `
<template #option="{ firstName, lastName }">
{{ firstName }} {{ lastName }}
</template>
`,
                        'selected-option': `
<template #selected-option="{ firstName, lastName }">
{{ firstName }} {{ lastName }}
</template>
`,
                    },
                });

                cy
                    .get(BASE_SELECT.inputs.search)
                    .click();

                cy
                    .get(BASE_SELECT.wrappers.dropdownMenu)
                    .should('be.visible');

                cy
                    .get(BASE_SELECT.labels.dropdownOption)
                    .each((option, index) => {
                        expect(option).to.have.text(`${options?.[index]?.firstName} ${options?.[index]?.lastName}`);
                    });

                cy.selectFirstElementInVSelect(BASE_SELECT.wrappers.select);

                cy
                    .get(BASE_SELECT.labels.selected)
                    .should('contain', `${options?.[0]?.firstName} ${options?.[0]?.lastName}`);
            });
        });

        context('Placeholder', () => {
            it('Dropdown Select has default placeholder "Select an option" when placeholder is not passed as prop', () => {
                cy.mount(BaseSelect, {
                    props: {
                        options: [ 'A', 'B' ],
                    },
                });

                cy
                    .get(BASE_SELECT.inputs.search)
                    .invoke('attr', 'placeholder')
                    .then((placeholder) => {
                        expect(placeholder).to.eq('Select an option');
                    });
            });

            it('Dropdown Select displays "Select" as placeholder when placeholder is passed with ""Select"" as prop"', () => {
                cy.mount(BaseSelect, {
                    props: {
                        options: [ 'A', 'B' ],
                        placeholder: "Select",
                    },
                });

                cy
                    .get(BASE_SELECT.inputs.search)
                    .invoke('attr', 'placeholder')
                    .then((placeholder) => {
                        expect(placeholder).to.eq('Select');
                    });
            });
        });

        context('Searchable', () => {
            it('Dropdown Select is not searchable if searchable prop is false or not passed', () => {
                cy.mount(BaseSelect, {
                    props: {
                        options: [ 'A', 'B' ],
                        searchable: false,
                    },
                });

                cy
                    .get(BASE_SELECT.wrappers.select)
                    .then(($el) => {
                        expect($el).to.have.class('vs--unsearchable');
                    });
            });

            it('Dropdown Select is searchable if searchable prop is passed as true', () => {
                cy.mount(BaseSelect, {
                    props: {
                        options: [ 'A', 'B' ],
                        searchable: true,
                    },
                });

                cy
                    .get(BASE_SELECT.wrappers.select)
                    .then(($el) => {
                        expect($el).to.not.have.class('vs--unsearchable');
                    });
            });
        });

        context('Value', () => {
            it('Dropdown Select have a default "Option 1" selected when value prop is passed', () => {
                cy.mount(BaseSelect, {
                    props: {
                        options: [
                            {
                                label: "Option 1",
                                value: "option1",
                            },
                            {
                                label: "Option 2",
                                value: "option2",
                            },
                            {
                                label: "Option 3",
                                value: "option3",
                            },
                        ],
                        value: {
                            label: "Option 1",
                            value: "option1",
                        },
                    },
                });

                cy
                    .get(BASE_SELECT.labels.selected)
                    .should('exist')
                    .should('contain', 'Option 1');
            });

            it('Dropdown Select does not have a default selected option when value prop is passed as null', () => {
                cy.mount(BaseSelect, {
                    props: {
                        options: [ 'A', 'B' ],
                        value: null,
                    },
                });

                cy
                    .get(BASE_SELECT.labels.selected)
                    .should('not.exist');
            });

            it('Dropdown Select does not have a default selected option when value prop is not passed', () => {
                cy.mount(BaseSelect, {
                    props: {
                        options: [ 'A', 'B' ],
                    },
                });

                cy
                    .get(BASE_SELECT.labels.selected)
                    .should('not.exist');
            });
        });
    });
});
