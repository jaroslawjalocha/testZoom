const Page = require('./page');

class StartPage extends Page {
    
    get buttonSupport () {
        return $('//ul[@class="list-inline pull-right"]/li[2]/a');
    }
    get buttonIp () {
        return $('//ul[@class="list-inline pull-right"]/li[3]/a');
    }
    get buttonReqADemo () {
        return $('//ul[@class="list-inline pull-right"]/li[3]/a');
    }
    open () {
        return super.open('');
    }
    
}

module.exports = new StartPage();
