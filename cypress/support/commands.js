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
// Cypress.Commands.add('login', (email, password) => { ... })
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Getting currentUrl
Cypress.Commands.add("currentUrl", () => {
  cy.url().then(function () {});
});

// Picking up the random value from the dropdown list
Cypress.Commands.add("randomPickDate", function (getDatePickerElement) {
  cy.get(getDatePickerElement)
    .find("option")
    .then(function (options) {
      let dropDownList = Math.floor(Math.random() * options.length);
      return cy.wrap(dropDownList);
    });
});

// Click Method
Cypress.Commands.add("clickButton", (getClickElement) => {
  getClickElement().click();
});

//getText Method

Cypress.Commands.add("getText", (getTextElement) => {
  getTextElement().then(function (textName) {
    const textValue = textName.text();
    return cy.wrap(textValue);
  });
});

