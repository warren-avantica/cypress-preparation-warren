describe('User cart', () => {

  before(() => {
    cy.visit('/');
  })

  it('should add a product to the cart programatically', function () {
    cy.addProductToCart();
    cy.visit('/index.php?controller=order');
    cy.get('.ajax_cart_quantity').should('contain.text', 1);
  })
})