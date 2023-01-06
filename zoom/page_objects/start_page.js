const Page = require('./page');

class StartPage extends Page {

    get buttonSupport() {
        return $('#black-topbar > div > ul > li:nth-child(2) > a');
    }
    get buttonPhone() {
        return $('#black-topbar > div > ul > li:nth-child(3) > a');
    }
    get buttonReqADemo() {
        return $('#black-topbar > div > ul > li:nth-child(4) > a');
    }
    open() {
        return super.open('');
    }

}

module.exports = new StartPage();
