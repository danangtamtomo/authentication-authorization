const UserManager = require('../helpers/UserManager')

class IndexController {
    constructor() {

    }

    getIndex(req, res) {
        UserManager.getOnlineUser(req, res)
    }    

    failureLogin(req, res) {
        res.send('Login is failed')
    }
}

module.exports = new IndexController