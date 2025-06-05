// Packages
import { type VueWrapper } from '@vue/test-utils';
import { mount } from 'cypress/vue';
// Plugins
import { ToastrPlugin } from '@src/utils/plugins/toastr';

Cypress.Commands.add('getMounted', () => {
    return cy
        .get<VueWrapper<unknown>>('@vue')
        .then(($wrapper) => {
            cy.wrap($wrapper);
        });
});

Cypress.Commands.add('mount', (component, options = {}) => {
    const defaultOptions = {
        global: {
            plugins: [
                ToastrPlugin,
            ],
            stubs: {
                transition: false,
                'transition-group': false,
            },
        },
    };

    const mountOptions = { ...defaultOptions, ...options };

    return mount(component, mountOptions).then(({ wrapper }) => {
        cy
            .wrap(wrapper)
            .as('vue');
    });
});
