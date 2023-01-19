import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterationPage from "../../pageObjects/registeration";
import LoginPage from "../../pageObjects/loginPage";

const signupPage = new RegisterationPage();
const loginPage = new LoginPage();

let dateElement = "#days";
let selectMonth = "#months";
let selectYear = "#years";
let country = "#country";
let nameData;

before(function () {
  cy.log("Storing the test data for registeration");
  cy.fixture("testdata").then(function (data) {
    this.data = data;
  });
});
/*
Given("the user navigates to the shopping website", function () {
  signupPage.launchPage();
  cy.currentUrl().should("contain", Cypress.env("baseUrl"));
}); */

When("the user clicks on Signup button to register", function () {
  cy.clickButton(signupPage.registerButton);
  cy.getText(signupPage.signUpTextValidation).then(function (newSignUp) {
    expect(newSignUp).to.equal(this.data.newSignUpTextValidation)
  });
});


When("the user enters name for sign up", function () {
  cy.clickButton(signupPage.getNameregisterTextBox).type(this.data.name);
  signupPage.getNameregisterTextBox().should("have.value", this.data.name);
});

When("the user enters email for sign up", function () {
  cy.clickButton(signupPage.emailTextBox).type(this.data.email);
  signupPage.emailTextBox().should("have.value", this.data.email);
});

Then("the user clicks on sign up button", function () {
  cy.clickButton(signupPage.successfulRegisteration);
  cy.currentUrl().should("contain", Cypress.env("baseUrl").concat("signup"));
});

When("the user selects the title", function () {
  cy.clickButton(signupPage.titleRegister);
  signupPage.selectedGenderRadioButton().then(function (getTitleText) {
    let genderTitle = getTitleText.text().replace(/\s/g, "");
    expect(genderTitle).to.equal(this.data.titleRadioButton);
  });
});

When("the user able to see autocomplete name", function () {
  signupPage
    .autoCompletenameTextBox()
    .invoke("val")
    .then(function (getName) {
      expect(getName).to.equal(this.data.name);
    });
});

When("the user able to see autocomplete email address", function () {
  signupPage
    .autoCompleteEmailTextBox()
    .invoke("val")
    .then(function (getEmail) {
      expect(getEmail).to.equal(this.data.email);
    });
});

When("the user enters the password to login", function () {
  signupPage.getPassword().type(this.data.getPasswordTextBox);
  signupPage.getMaskedPassword().should("have.length", 0);
});

When("the user selects the date of birth", function () {
  //Needs Optimization
  // Fill date in the form
  cy.randomPickDate(dateElement).then((dateDropDown) =>
    cy.get(dateElement).select(dateDropDown)
  );
  expect(dateElement).not.to.be.empty;
  // Fill Month in the form
  cy.randomPickDate(selectMonth).then((dateDropDown) =>
    cy.get(selectMonth).select(dateDropDown)
  );
  expect(selectMonth).not.to.be.empty;
  // Fill Month in the form
  cy.randomPickDate(selectYear).then((dateDropDown) =>
    cy.get(selectYear).select(dateDropDown)
  );
  expect(selectYear).not.to.be.empty;
});

When("the user check the signup for newsletter", function () {
  signupPage.getNewsLetter().check();
  signupPage.getNewsLetter().should("be.checked");
});

When("the user enters firstname for address information", function () {
  // Assertions needs to handle
  signupPage.getFirstName().type(this.data.name);
  signupPage.getFirstName().should("have.value", this.data.name);
});

When("the user enters lastname for address information", function () {
  // Assertions needs to handle
  signupPage.getLastName().type(this.data.lastName);
  signupPage.getLastName().should("have.value", this.data.lastName);
});

When("the user enters address information", function () {
  signupPage.getAddress().type(this.data.address);
  signupPage.getAddress().should("have.value", this.data.address);
});

When("the user selects country from dropdown list", function () {
  cy.randomPickDate(country).then((dateDropDown) =>
    cy.get(country).select(dateDropDown)
  );
  expect(country).not.to.be.empty;
});

When("the user enters state", function () {
  signupPage.getState().type(this.data.state);
  signupPage.getState().should("have.value", this.data.state);
});

When("the user enters city", function () {
  signupPage.getCity().type(this.data.city);
  signupPage.getCity().should("have.value", this.data.city);
});

// Need some refactoring
When("the user enters zipcode", function () {
  signupPage.getZipCode().type(this.data.zipCode);
  signupPage.getZipCode().should("have.value", this.data.zipCode);
});

When("the user mobile number", function () {
  signupPage.getMobileNumber().type(this.data.mobileNumber);
  signupPage.getMobileNumber().should("have.value", this.data.mobileNumber);
});

Then(
  "the user clicks on create account button and able to see account creation confirmation",
  function () {
    cy.clickButton(signupPage.getCreateAccount);
    cy.currentUrl().should(
      "contain",
      Cypress.env("baseUrl").concat("account_created")
    );
    signupPage
      .getAccountHeading()
      .should("have.text", signupPage.getAccountCreationTitle());
    //signupPage.getConfirmationMessage().should('have.text', signupPage.getconfirmationMessageHeading())
    signupPage
      .getMemberConfirmation()
      .should("have.text", signupPage.getMemberConfirmationHeading());
  }
);

When("the user able to see logout button in home screen", function () {
  signupPage.getAccountDetails().find(signupPage.getContinueButton()).click();
  cy.currentUrl().should("contain", Cypress.env("baseUrl"));
  signupPage
    .getLoginButton()
    .should("have.attr", "href")
    .and("include", "/logout");
  signupPage
    .getDeleteButton()
    .should("have.attr", "href")
    .and("include", "/delete_account");
});


  

