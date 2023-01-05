const Page = require('./page');

class LoginPage extends Page {
    
    get inputUsername () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get buttonSubmit () {
        return $('#js_btn_login');
    }
    get buttonClose (){
        return $('//div[@id="onetrust-close-btn-container"]/button')
    }

   
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

   
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
