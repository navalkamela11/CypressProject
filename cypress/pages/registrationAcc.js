// locators for registration
export function register(){
    cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=B0FBF53DF99AAE047E40BE5F52C4215B')
}

export function validateMessage (){
    cy.xpath('//h1[@class="title"]').should('be.visible')
    cy.xpath('//h1[@class="title"]').should('have.text', 'Your account was created successfully. You are now logged in.')
}