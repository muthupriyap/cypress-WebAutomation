    Scenario: Purchase dress and add to the cart

    Background:
        Given the user navigates to the shopping website

    Scenario:
        And the user clicks on login megamenu in dashboard page
        And the user enters the email address to login screen
        And the user enters the password to login screen
        Then the user clicks on Login and able to see purchase screen successfully
