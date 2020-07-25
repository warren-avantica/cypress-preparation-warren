class NavBar {

  static contactUsLink() { return cy.get('#contact-link > a');}
  static loggedUserMyAccount () { return cy.get('.header_user_info > a > span');}
}

export default NavBar;