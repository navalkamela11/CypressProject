describe('Valudate the dropdoWn value',() =>{

    beforeEach(()=>{
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
    })

    it('Select the country dropdown value', ()=>{
        cy.get('select[name="country"]').select('ANTARCTICA')
        cy.get('select[name="country"]').should('have.value', 'ANTARCTICA')
    })

     it('Validate the default dropdown value', ()=>{
        cy.xpath('//select[@name="country"]').should('have.value', 'ALBANIA')
    })

    it('Validate the total number of dropdown values', ()=>{
        cy.get('select[name="country"]>option').should('have.length', 264)
    })
})