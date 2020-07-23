class AccountCreationPage {

  static mrRadioBtn() {return cy.get('#uniform-id_gender1');}
  static mrsRadioBtn() {return cy.get('#uniform-id_gender2');}
  static firstNameInput() {return cy.get('#customer_firstname');}
  static lastNameInput() {return cy.get('#customer_lastname');}
  static passwordInput() {return cy.get('#passwd');}
  static daysSelect() {return cy.get('#days');}
  static monthsSelect() {return cy.get('#months');}
  static yearsSelect() {return cy.get('#years');}
  static signUpForNewsLetterCheckBox() {return cy.get('#newsletter');}
  static receiveSpecialOffersCheckBox() {return cy.get('#optin');}
  static firstNameAddressInput() {return cy.get('#firstname');}
  static lastNameAddressInput() {return cy.get('#lastname');}
  static companyInput() {return cy.get('#company');}
  static address1Input() {return cy.get('#address1');}
  static address2Input() {return cy.get('#address2');}
  static cityInput() {return cy.get('#city');}
  static stateSelect() {return cy.get('#id_state');}
  static postCodeInput() {return cy.get('#postcode');}
  static countrySelect() {return cy.get('#id_country');}
  static additionalInfoInput() {return cy.get('#other');}
  static phoneInput() {return cy.get('#phone');}
  static mobilePhoneInput() {return cy.get('#phone_mobile');}
  static addressAliasInput() {return cy.get('#alias');}
  static submitAccountBtn() {return cy.get('#submitAccount');}

  static selectTitleOption(title) {
    if(title.includes('Mr.')) {
      this.mrRadioBtn().click();
      return;
    }
    this.mrsRadioBtn().click();
  }

  static fillPersonalInfo({ firstName, lastName, password }) {
    this.firstNameInput().type(firstName);
    this.lastNameInput().type(lastName);
    this.passwordInput().type(password);
  }

   static selectBirthDate({ day, month, year }) {
    this.daysSelect().select(day);
    this.monthsSelect().select(month);
    this.yearsSelect().select(year);
  }

  static checkSignUpForNewsLetter(signUp) {
    if(signUp) this.signUpForNewsLetterCheckBox().click();
  }

  static checkSpecialOffers(receive) {
    if(receive) this.receiveSpecialOffersCheckBox().click();
  }

  static fillAddressInfo(addressInfo) {
    this.companyInput().type(addressInfo.company);
    this.address1Input().type(addressInfo.address);
    this.address2Input().type(addressInfo.addressLine2);
    this.cityInput().type(addressInfo.city);
    this.postCodeInput().type(addressInfo.zipCode);
    this.additionalInfoInput().type(addressInfo.addtionalInfo);
    this.phoneInput().type(addressInfo.homePhone);
    this.mobilePhoneInput().type(addressInfo.mobilePhone);
    this.addressAliasInput().type(addressInfo.addressAlias);
  }

  static selectState({ state }) {
    this.stateSelect().select(state);
  }

  static selectCountry({ country }) {
    this.countrySelect().select(country);
  }

  static clickSubmitAccount() {
    this.submitAccountBtn().click();
  }
}

export default AccountCreationPage;