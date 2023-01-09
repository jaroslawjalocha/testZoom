const LoginPage = require('../page_objects/login_page')
const SecurePage = require('../page_objects/profil_page')
const login_data = require('../test_data/login_data')
/*
Test assumptions::
- carried out on the google chrome browser
- verification of displaying buttons and inputs for logging in and checking only correct logging in
- performing on the full-screen version of the browser
*/
describe('Zoom website', () => {
    it('log-in to zoom account', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await LoginPage.buttonAgree.click();
        await expect(LoginPage.inputPassword).toBeDisplayed();
        await expect(LoginPage.inputUsername).toBeDisplayed();
        await expect(LoginPage.buttonSubmit).toBeDisplayed();
        await LoginPage.login(login_data.login, login_data.password);
        await expect(browser).toHaveUrl('https://zoom.us/profile');
        await expect(SecurePage.iconProfil).toBeDisplayed();
    })
})
