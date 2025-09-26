describe('Registration', ()=>{
    it('Fill the contact information using fixtures', ()=>{
        cy.visit('https://demo.guru99.com/test/newtours/register.php')

        cy.fixture('registration').then((data)=>{
            cy.get('input[name="firstName"]').type(data.firstName)
            cy.get('input[name="lastName"]').type(data.lastName)
            cy.get('input[name="userName"]').type(data.email)
            cy.get('input[name="phone"]').type(data.phone)
            // Mailing Information
            cy.get('input[name="address1"]').type(data.address)
            cy.get('input[name="city"]').type(data.city)
            cy.get('input[name="state"]').type(data.province)
            cy.get('input[name="postalCode"]').type(data.postalCode)
            cy.get('select[name="country"]').select('ANTARTICA')
            // User Information
            cy.get('input[name="email"]').type(data.username)
            cy.get('input[name="password"]').type(data.password)
            cy.get('input[name="confirmPassword"]').type(data.password)
            //cy.get('input[name="submit"]').click()
        })
    })

     it('Fill the mailing information using fixtures', ()=>{
        cy.visit('https://demo.guru99.com/test/newtours/register.php')

        cy.fixture('registration').then((data)=>{
            // Mailing Information
            cy.get('input[name="address1"]').type(data.address)
            cy.get('input[name="city"]').type(data.city)
            cy.get('input[name="state"]').type(data.province)
            cy.get('input[name="postalCode"]').type(data.postalCode)
            cy.get('select[name="country"]').select('ANTARTICA')
        })
    })

     it('Fill the user information using fixtures', ()=>{
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.fixture('registration').then((data)=>{
            cy.get('input[name="email"]').type(data.username)
            cy.get('input[name="password"]').type(data.password)
            cy.get('input[name="confirmPassword"]').type(data.password)
            //cy.get('input[name="submit"]').click()
        })
    })
})