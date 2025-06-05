describe('my feature', () => {
    it('my test case', async () => {
        await cy.get('.myClass');
    // other operations
    });
});

describe('my feature', () => {
    it('my test case', async () => {
        cy
            .get('.myClass')
            .click();

        await someAsyncFunction();
    });
});
