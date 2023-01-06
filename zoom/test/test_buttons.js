const StartPage = require('../pageobjects/start_page')
const LoginPage = require('../pageobjects/login_page')
/*
Test assumptions::
- carried out on the google chrome browser
- check only the buttons: support, Request a Demo, 1.888.799.9666 in the navbar without the footer
- performing on the full-screen version of the browser
*/
describe('Zoom website', () => {

    it('check demo button', async () => {
        await StartPage.open();
        await browser.maximizeWindow();
        await LoginPage.buttonClose.click();
        await StartPage.buttonReqADemo.click();
        await expect(browser).toHaveUrl('https://explore.zoom.us/pl/livedemo/');
        await browser.back();
    })
    it('check support button', async () => {
        await StartPage.open();
        await StartPage.buttonSupport.click();
        await browser.switchWindow('Zoom Support')
        await expect(browser).toHaveUrl('https://support.zoom.us/hc/en-us');
        await browser.switchWindow('zoom.us')
    })
    it('check phone button', async () => {
        await StartPage.buttonPhone.click();
        await expect(browser).toHaveUrl('https://zoom.us/');
        await expect(StartPage.buttonPhone).toHaveAttribute('href', 'tel:1.888.799.9666');
    })
})


