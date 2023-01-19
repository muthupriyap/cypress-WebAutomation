const emailAddress = 'input[data-qa="login-email"]';
const passwordTextButton = 'input[data-qa="login-password"]';
const loginButton = 'button[data-qa="login-button"]';
const dashBoardScreen = '.features_items h2[class="title text-center"]';
const dashBoardHeading = "Features Items";
const loginButtonFromDashBoard = 'a[href="/login"]';

class LoginPage {
  enterEmailAddress() {
    return cy.get(emailAddress);
  }

  enterPassword() {
    return cy.get(passwordTextButton);
  }

  submitLoginButton() {
    return cy.get(loginButton);
  }

  dashBoardScreen() {
    return cy.get(dashBoardScreen);
  }

  dashBoardHeading() {
    // Getting the text and with actual result
    return dashBoardHeading;
  }

  loginButtonDashBoard() {
    return cy.get(loginButtonFromDashBoard);
  }
}

export default LoginPage;
