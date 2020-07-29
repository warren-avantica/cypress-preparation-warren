// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("loginProg", (email, password) => {
  const back = 'my-account';
  cy.request({
    method: 'POST',
    url: 'http://automationpractice.com/index.php?controller=authentication',
    failOnStatusCode: false,
    form: true,
    followRedirect: true,
    body: {
      email: email,
      passwd: password,
      back: back,
      SubmitLogin: ''
    }
  })
});

Cypress.Commands.add("addProductToCart", () => {
  cy.request({
    method: 'POST',
    url: 'http://automationpractice.com/index.php?rand=1596062980330',
    failOnStatusCode: true,
    form: true,
    followRedirect: false,
    body: {
      controller: 'cart',
      add: 1,
      ajax: true,
      qty: 1,
      id_product: 1,
      token: '7469c85ffaabd853c735abd9471dcc29'
    }
  })
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
