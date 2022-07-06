///<reference types="cypress" />

describe('Testing User Adding an Item to Cart', () => {
  it('add and remove item from cart', () => {
    cy.visit('localhost:3000')
    cy.contains('button', 'Browse').click();

    cy.url().should('include', '/browse');
    cy.contains('Catch-22').click();

    cy.url().should('include', '/Catch-22/1');
    cy.contains('button', 'Add to Cart').click();

    cy.url().should('include', '/browse');
    cy.get('[data-cy="cart-icon"]').contains("1")
    cy.get('[data-cy="cart-icon"]').click();

    cy.url().should('include', '/cart');
    cy.get('[data-cy="cart-item-listing"]').should('have.length', 1);
    cy.get('input[type="text"]').should('have.value', '1');

    cy.get('[data-cy="add-btn"]').click();
    cy.get('input[type="text"]').should('have.value', '2');

    cy.get('[data-cy="remove-btn"]').click();
    cy.get('input[type="text"]').should('have.value', '1');

    cy.get('[data-cy="remove-btn"]').click();
    cy.get('[data-cy="cart-item-listing"]').should('have.length', 0);

    cy.contains('button', 'Continue Shopping').click();
    cy.url().should('include', '/browse');
  });

  it('can add multiple items to the cart', () => {
    cy.visit('localhost:3000');
    cy.contains('button', 'Browse').click();

    cy.contains('Don Quixote').click();
    cy.contains('button', 'Add to Cart').click();
    cy.get('[data-cy="cart-icon"]').as('cartIcon').contains("1");

    cy.contains('Nineteen Eighty Four').click();
    cy.contains('button', 'Add to Cart').click()
    cy.get('@cartIcon').contains("2");

    cy.contains('East of Eden').click();
    cy.contains('button', 'Add to Cart').click();
    cy.get('@cartIcon').contains("3");

    cy.get('@cartIcon').click();
    cy.get('[data-cy="cart-item-listing"]').should('have.length', 3);


  });
})