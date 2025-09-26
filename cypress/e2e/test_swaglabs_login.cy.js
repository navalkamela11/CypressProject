import { loginToSwaglab, validateLoginErrorMessage, validateProductsText , launchSwaglabApp} from '../pages/login_page.js'


describe('Test the swaglab login functionality', () => {


    // add beforeEach to visit the URL before each test case
    beforeEach(() => {
        launchSwaglabApp()
    })


    it('Login Success', () => {
        // use the login function from login_page.js
        loginToSwaglab('standard_user', 'secret_sauce')
        // validate the presence of Products text
        validateProductsText()
    })


    it('Login Failure', () => {
        // use the login function from login_page.js
        loginToSwaglab('standard_user', 'wrong_password')
        // validate the error message is displayed
        validateLoginErrorMessage('Epic sadface: Username and password do not match any user in this service')
    })


    //add test case for locked out user
    it('Login Locked Out User', () => {
        // use the login function from login_page.js
        loginToSwaglab('locked_out_user', 'secret_sauce')
        // validate the error message is displayed
        validateLoginErrorMessage('Epic sadface: Sorry, this user has been locked out.')
    })
})
