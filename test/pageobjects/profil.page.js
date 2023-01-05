const Page = require('./page');

class ProfilPage extends Page {
    
    get iconProfil () {
        return $('#headerPic');
    }
}

module.exports = new ProfilPage();
