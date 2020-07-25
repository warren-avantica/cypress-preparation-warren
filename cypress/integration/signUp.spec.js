import HomePage from '../page-objects/pages/HomePage';
import AuthenticationPage from '../page-objects/pages/AuthenticationPage';
import AccountCreationPage from '../page-objects/pages/AccountCreationPage';

describe('Authentication page', () => {

  before(function () {
    HomePage.visitHomePage();
    HomePage.clickSignInBtn();
    cy.fixture('registerData').as('registerInfo');
  });

  it('should register a new user', function () {
    AuthenticationPage.typeEmail(AuthenticationPage.generateRandomEmail());
    AuthenticationPage.clickCreateAccountBtn();
    cy.get('h3').should('contain', 'Your personal information');
    console.log(this.registerInfo.personalInformation);
    AccountCreationPage.selectTitleOption(this.registerInfo.personalInformation.title);
    AccountCreationPage.fillPersonalInfo(this.registerInfo.personalInformation);
    AccountCreationPage.selectBirthDate(this.registerInfo.personalInformation.dateOfBirth);
    AccountCreationPage.fillAddressInfo(this.registerInfo.addressInformation);
    AccountCreationPage.selectState(this.registerInfo.addressInformation);
    AccountCreationPage.clickSubmitAccount();
    cy.url().should('include', 'my-account');
  });
})