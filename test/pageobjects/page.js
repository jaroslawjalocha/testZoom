
module.exports = class Page {
   
    open (path) {
        return browser.url(`https://zoom.us/${path}`)
    }
}
