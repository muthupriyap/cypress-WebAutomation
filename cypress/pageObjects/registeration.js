const registerTextBox = 'i[class="fa fa-lock"]'
const getNameregisterTextBox = 'input[data-qa="signup-name"]'
const getEmailTextBox = 'input[data-qa="signup-email"]'
const submitRegisterButton = 'button[data-qa="signup-button"]'
const signUpTextValidation = 'div[class="signup-form"] h2'
const getTitleRadioButton = '#id_gender2'
const selectedGender = ':nth-child(4) > .top'
const getNameTextBox = '#name'
const autoCompleteEmailTextBox = '#email'
const getpassword ='#password'
const maskedPassword = 'aria-autocomplete'
const selectDay = '#days'
const selectMonth = '#months'
const selectYear = '#years'
const newsLetter = '#newsletter'
const firstName = '#first_name'
const lastName = 'input[name="last_name"]'
const address = '#address1'
const country = '#country'
const state = '#state'
const city = '#city'
const zipCode  = '#zipcode'
const mobileNumber = '#mobile_number'
const createAccountButtton = 'button[data-qa="create-account"]'
const accountCreationHeading = 'h2[data-qa="account-created"]'
const confirmationMessage = '.col-sm-9 > :nth-child(2)'
const memberMessage = '.col-sm-9 > :nth-child(3)'
const confirmationMessageHeading = 'Congratulations! Your new account has been successfully created!'
const memberConfirmationHeading = 'You can now take advantage of member privileges to enhance your online shopping experience with us.'
const AccountCreationTitle = 'Account Created!'
const continueButton = 'a[data-qa="continue-button"]'
const accountDetails = '.col-sm-9'
const loginButton = '.shop-menu > .nav > :nth-child(4) > a'
const deleteButton = '.shop-menu > .nav > :nth-child(5) > a'

class RegisterationPage {

    launchPage(){
        cy.visit(Cypress.env('baseUrl'))
    }

    registerButton() {
        return cy.get(registerTextBox)
    }

    signUpTextValidation(){
        return cy.get(signUpTextValidation)
    }

    getNameregisterTextBox(){
        return cy.get(getNameregisterTextBox)
    }
 
    emailTextBox(){
        return cy.get(getEmailTextBox)
    }

    successfulRegisteration(){
        return cy.get(submitRegisterButton)

    }

    titleRegister(){
        return cy.get(getTitleRadioButton)
    }

    selectedGenderRadioButton(){
        return cy.get(selectedGender)
    }

    autoCompletenameTextBox(){
        return cy.get(getNameTextBox)
    }

    autoCompleteEmailTextBox(){
        return cy.get(autoCompleteEmailTextBox)
    }

    getPassword(){
        return cy.get(getpassword)
    }

    getMaskedPassword(){
        return cy.get(maskedPassword)
    }

    getSelectDay(){
        return cy.get(selectDay)
    }
    
    getSelectMonth(){
        return cy.get(selectMonth)
    }

    getSelectYear(){
        return cy.get(selectYear)
    }

    getNewsLetter(){
        return cy.get(newsLetter)
    }
    
    getFirstName(){
        return cy.get(firstName)
    }
    
    getLastName(){
        return cy.get(lastName)
    }

    getAddress(){
        return cy.get(address)
    }

    getCountry(){
        return cy.get(country)
    }

    getState(){
        return cy.get(state)
    }
    
    getCity(){
        return cy.get(city)
    }

    getZipCode(){
        return cy.get(zipCode)
    }

    getMobileNumber(){
        return cy.get(mobileNumber)
    }

    getCreateAccount(){
        return cy.get(createAccountButtton)
    }

    getAccountHeading(){
        return cy.get(accountCreationHeading)
    }

    getConfirmationMessage(){
        return cy.get(confirmationMessage)
    }

    getMemberConfirmation(){
        return cy.get(memberMessage)
    }

    getconfirmationMessageHeading(){
        return confirmationMessageHeading
    }

    getMemberConfirmationHeading(){
        return memberConfirmationHeading
    }

    getAccountCreationTitle(){
        return AccountCreationTitle
    }

    getContinueButton(){
        return continueButton
    }

    getAccountDetails(){
        return cy.get(accountDetails)
    }

    getLoginButton(){
        return cy.get(loginButton)
    }

    getDeleteButton(){
        return cy.get(deleteButton)
    }
}
export default RegisterationPage