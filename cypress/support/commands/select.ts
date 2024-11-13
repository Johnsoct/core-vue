const enterValueForSelectInput = (id: string, text: string) => {
  cy
    .get(id)
    .find('.vs__search')
    .clear()
    .type(text)
    .type('{enter}')
    .trigger('input');
};

Cypress.Commands.add('enterValueForSelectInput', enterValueForSelectInput);

const selectFirstElementInVSelect = (id: string) => {
  cy
    .get(id)
    .click();

  cy
    .get('li.vs__dropdown-option')
    .first()
    .click();
};

Cypress.Commands.add('selectFirstElementInVSelect', selectFirstElementInVSelect);
