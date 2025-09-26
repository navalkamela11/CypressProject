import { login, validateText, errorLogin, launchParaBank } from "../pages/loginBank.js"


describe('Login to ParaBank',()=>{

    beforeEach(()=>{
        launchParaBank()
    })

    it('Successful login',()=>{
        // login the user
        login('userTest','userpass')
        validateText();
    })

    it('Login Failed',()=>{
        // incorrect credentials
        login('userTest','pass')
        errorLogin('Error!');
    })

})