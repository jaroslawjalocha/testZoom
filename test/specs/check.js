const StartPage = require('../pageobjects/start.page')
const LoginPage = require('../pageobjects/login.page')

describe('Zoom website', () => {
    it('log-in to zoom account', async () => {
        await StartPage.open();
        await browser.maximizeWindow()
        await LoginPage.buttonClose.click();
        await StartPage.buttonReqADemo.click();
        await expect(browser).toHaveUrl('https://explore.zoom.us/en/livedemo/');
        await browser.back();
    })
})


