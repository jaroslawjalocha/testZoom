const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/profil.page')

describe('Zoom website', () => {
    it('log-in to zoom account', async () => {
        await LoginPage.open();
        await LoginPage.buttonClose.click();
        await LoginPage.login('cokox86673@prolug.com', 'Pol@nie2');
        await expect(browser).toHaveUrl('https://zoom.us/profile');
        await expect(SecurePage.iconProfil).toBeDisplayed()
    })
})


