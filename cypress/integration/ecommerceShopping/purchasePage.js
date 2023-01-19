// login Functionality
/*
When("the user clicks on login megamenu in dashboard page", function () {
    cy.clickButton(loginPage.loginButtonDashBoard);
  });
  
  When("the user enters the email address to login screen", function () {
    loginPage.enterEmailAddress().type(this.data.email);
    loginPage.enterEmailAddress().should("have.value", this.data.email);
  });
  
  When("the user enters the password to login screen", function () {
    loginPage.enterPassword().type(this.data.getPasswordTextBox);
    loginPage.enterPassword().should("have.value", this.data.getPasswordTextBox);
  });
  
  Then(
    "the user clicks on Login and able to see purchase screen successfully",
    function () {
      cy.clickButton(loginPage.submitLoginButton);
      cy.getText(loginPage.dashBoardScreen).then(function(getHeadingText){
          expect(getHeadingText).to.be.equal(loginPage.dashBoardHeading());
      })
  
      }); */