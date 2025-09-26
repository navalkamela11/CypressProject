// locators for login page
const username = '#user-name'
const password = '#password'
const loginButton = '#login-button'
const errorMessage = 'h3[data-test="error"]'
const productsTitle ='.title'


// function to launch the swaglab application
export function launchSwaglabApp() {
    cy.visit('https://www.saucedemo.com/')
}


// function to login to swaglab application
export function loginToSwaglab(username, password) {
    cy.get(username).type(username)
    cy.get(password).type(password)
    cy.get(loginButton).click()
}


// function to validate the presence of Products text
export function validateProductsText() {
    cy.url().should('include', 'inventory.html')
    cy.get(productsTitle).should('have.text', 'Products')
}


//function to validate the login error message
export function validateLoginErrorMessage(expectedMessage) {
    cy.get(errorMessage).should('be.visible')
    cy.get(errorMessage).should('have.text', expectedMessage)
}
