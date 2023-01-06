const LoginPage = require('../pageobjects/login_page')
const SecurePage = require('../pageobjects/profil_page')
/*
Test assumptions::
- carried out on the google chrome browser
- verification of displaying buttons and inputs for logging in and checking only correct logging in
- performing on the full-screen version of the browser
*/
describe('Zoom website', () => {
    it('log-in to zoom account', async () => {
        await LoginPage.open();
        await LoginPage.buttonClose.click();
        await expect(LoginPage.inputPassword).toBeDisplayed();
        await expect(LoginPage.inputUsername).toBeDisplayed();
        await expect(LoginPage.buttonSubmit).toBeDisplayed();
        await LoginPage.login('cokox86673@prolug.com', 'Pol@nie2');
        await expect(browser).toHaveUrl('https://zoom.us/profile');
        await expect(SecurePage.iconProfil).toBeDisplayed();
    })
})


