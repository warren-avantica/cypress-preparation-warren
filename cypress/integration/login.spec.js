import AuthenticationPage from '../page-objects/pages/AuthenticationPage';
import NavBar from '../page-objects/components/navBar';

describe('authentication page', () => {

  before(function () {
    AuthenticationPage.visitAuthPage();
    cy.fixture('loginInfo').as('loginData');
  })

  it('should login normally', function() {
    AuthenticationPage.login(this.loginData);
    cy.url().should('include', 'my-account');
    NavBar.loggedUserMyAccount().invoke('text').should('contain', 'warren');
  });
  
  //WIP
  it.skip('should login programmatically', function() {
    cy.loginProg(this.loginData);
    cy.visit('/index.php?controller=my-account')
  });
})