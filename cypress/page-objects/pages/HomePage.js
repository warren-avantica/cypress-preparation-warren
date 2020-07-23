class HomePage {

  static visitHomePage() {
    cy.visit('/');
  }

  static signInBtn() { return cy.get('a.login'); }

  static contactUsBtn() { return cy.get('#contact-link > a');}

  static clickSignInBtn() { 
   this.signInBtn().click();
  }
}

export default HomePage;