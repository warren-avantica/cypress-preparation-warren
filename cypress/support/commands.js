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
Cypress.Commands.add("loginProg", ({ email, password }) => {
  const back = 'my-account';
  const trollEmail = 'asdasdasd';
  cy.request({
    method: 'POST',
    url: 'http://automationpractice.com/index.php?controller=my-account',
    failOnStatusCode: false,
    form: true,
    followRedirect: true,
    body: {
      email: email,
      passwd: password,
      back: back
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
