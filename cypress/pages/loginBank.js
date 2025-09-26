//locators

const user = "input[name='username']"
const pass = "input[name='password']"
const loginButton = "input[class='button']"
const success = "h1[class='title']"
const error = ".title"

export function launchParaBank() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
}

export function login(username, password) {
    cy.get(user).type(username)
    cy.get(pass).type(password)
    cy.get(loginButton).click()
}

export function validateText() {
    cy.get(success).should('have.text', 'Accounts Overview')
}

export function errorLogin(err){
    cy.get(error).should('be.visible')
    cy.get(error).should('have.text', err)
}


