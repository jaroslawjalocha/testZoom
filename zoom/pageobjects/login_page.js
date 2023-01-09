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
    get buttonClose() {
<<<<<<< HEAD:zoom/page_objects/login_page.js
        return $('#onetrust-close-btn-container > button');
=======
        return $('//div[@id="onetrust-close-btn-container"]/button');
>>>>>>> a6aa3ac122b5a0f3ba5777d0a2eccb8b87e50d4b:zoom/pageobjects/login_page.js
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
