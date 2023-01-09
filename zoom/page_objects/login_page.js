const Page = require('./page');

class LoginPage extends Page {

    get inputUsername() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get buttonSubmit() {
        return $('#js_btn_login');
    }
    get buttonAgree() {
        return $('#onetrust-accept-btn-handler');
    }


    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }


    open() {
        return super.open('signin#/login');
    }
}

module.exports = new LoginPage();
