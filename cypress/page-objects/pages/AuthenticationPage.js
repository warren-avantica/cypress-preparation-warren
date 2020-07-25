class AuthenticationPage {

  static emailCreateInput() { return cy.get('#email_create'); }
  static emailLoginInput() { return cy.get('#email'); }
  static passwordInput() { return cy.get('#passwd'); }
  static submitCreateBtn() { return cy.get('#SubmitCreate'); }
  static submitLoginBtn() { return cy.get('#SubmitLogin'); }

  static visitAuthPage() {
    cy.visit('/index.php?controller=authentication&back=my-account');
  }

  static typeEmail(email) { 
    this.emailCreateInput().type(email)
  }

  static login({ email, password }) {
    this.emailLoginInput().type(email);
    this.passwordInput().type(password);
    this.submitLoginBtn().click();
  }

  static clickCreateAccountBtn() {
    this.submitCreateBtn().click();
  }

  static generateRandomEmail() {
    let result = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return `${result}@testemail.com`
  }
}

export default AuthenticationPage;