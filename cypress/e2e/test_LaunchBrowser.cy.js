describe('Test that browser is launching', () => {
  it('Launch Browser', () => {
    cy.visit('https://example.cypress.io')
  })
})

it('Launch Another Broswer', () => {
  cy.visit('https://google.com')
})