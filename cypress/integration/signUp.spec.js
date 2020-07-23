import HomePage from '../page-objects/pages/HomePage';
import RegisterPage from '../page-objects/pages/RegisterPage';
import AccountCreationPage from '../page-objects/pages/AccountCreationPage';

describe('Register tests', () => {

  before(function () {
    HomePage.visitHomePage();
    HomePage.clickSignInBtn();
    cy.fixture('registerData').as('registerInfo');
  });

  it('should register a new user', function () {
    RegisterPage.typeEmail(RegisterPage.generateRandomEmail());
    RegisterPage.clickCreateAccountBtn();
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