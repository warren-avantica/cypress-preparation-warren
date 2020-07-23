class RegisterPage {

  static emailInput() { return cy.get('#email_create'); }

  static submitCreateBtn() { return cy.get('#SubmitCreate'); }

  static typeEmail(email) { 
    this.emailInput().type(email)
  }

  static clickCreateAccountBtn() {
    this.submitCreateBtn().click();
  }

  static generateRandomEmail() {
    let result = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return `${result}@testemail.com`
  }
}

export default RegisterPage;