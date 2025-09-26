import { register, validateMessage} from "../pages/registrationAcc"

describe('Registration of Account',()=>{

    it('Fill all the fields',()=>{

        cy.fixture('registrationBank').then((data)=>{

            register()
            cy.get('a[href="register.htm"]').click()
            cy.get('input[name="customer.firstName"]').type(data.firstName)
            cy.get('input[name="customer.lastName"]').type(data.lastName)
            cy.get('input[name="customer.address.street"]').type(data.address)
            cy.get('input[name="customer.address.city"]').type(data.city)
            cy.get('input[name="customer.address.state"]').type(data.state)
            cy.get('input[name="customer.address.zipCode"]').type(data.code)
            cy.get('input[name="customer.phoneNumber"]').type(data.phone)
            cy.get ('input[name="customer.ssn"]').type(data.ssn)
            cy.get('input[name="customer.username"]').type(data.username)
            cy.get('input[name="customer.password"]').type(data.password)
            cy.get('input[name="customer.repeatedPassword"]').type(data.password)
            cy.xpath('//input[@class="button"]').click()

            validateMessage()
        })
    })
    
})