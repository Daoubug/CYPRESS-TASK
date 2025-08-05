describe('Swag Labs', () => {
  it('Login to Saucedemo Site', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('locked_out_user');  
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.wait(3000);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.');
  });
});