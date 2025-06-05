// Packages
import {
  mount,
} from 'cypress/vue';
import {
  type VueWrapper,
} from '@vue/test-utils';
import type { ComponentPublicInstance } from 'vue';

declare global {
  namespace Cypress {
    interface Chainable {
      enterValueForSelectInput(selector: string, text: string): Chainable<Element>,

      getMounted(): Cypress.Chainable<VueWrapper<ComponentPublicInstance>>,

      mount(component, options = {}): typeof mount,

      selectFirstElementInVSelect(selector: string): Chainable<Element>,
    }
  }
}
