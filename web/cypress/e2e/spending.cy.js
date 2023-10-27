/* eslint-disable no-undef */
describe('spendings spec', () => {
  beforeEach(() => {
    //check the site
    cy.visit('http://localhost:3000/');
  });

  it('save a new spendings and check the filtering and ordering', () => {
    //save a spending and check after every input, if the save button is disabled
    cy.findByRole('button', { name: /save/i }).should('be.disabled');
    cy.findByRole('textbox').type('some description');
    cy.wait(1000);
    cy.findByRole('button', { name: /save/i }).should('be.disabled');
    cy.findByRole('spinbutton').type(50.4);
    cy.wait(1000);
    cy.findByRole('button', { name: /save/i }).should('not.be.disabled');
    cy.get('select[name="currency"]').should('have.value', 'USD');
    cy.wait(1000);
    cy.get('select[name="currency"]').select('HUF');
    cy.wait(2000);
    cy.findByRole('button', { name: /save/i }).click();

    //save another spending
    cy.findByRole('button', { name: /save/i }).should('be.disabled');
    cy.wait(1000);
    cy.findByRole('textbox').type('other description');
    cy.wait(1000);
    cy.findByRole('spinbutton').type(1.8);
    cy.wait(1000);
    cy.get('select[name="currency"]').select('USD');
    cy.wait(2000);
    cy.findByRole('button', { name: /save/i }).click();

    //check the filter buttons
    cy.wait(2000);
    cy.findByRole('button', { name: /huf/i }).click();
    cy.wait(2000);
    cy.findByRole('button', { name: /usd/i }).click();
    cy.wait(2000);
    cy.findByRole('button', { name: /all/i }).click();

    //check the orders select
    cy.wait(2000);
    cy.get('select[name="order"]').should('have.value', '-date');
    cy.wait(1000);
    cy.get('select[name="order"]').select('date');
    cy.wait(1000);
    cy.get('select[name="order"]').select('-amount_in_huf');
    cy.wait(1000);
    cy.get('select[name="order"]').select('amount_in_huf');
    cy.wait(1000);
    cy.get('select[name="order"]').select('-date');
  });
});
