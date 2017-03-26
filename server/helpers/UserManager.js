const User = require('../models/User')

class UserManager {
    constructor() {
        
    }

    getOnlineUser(req, res) {
       User.find({
           login_status: 'online'
       }) 
        .then((users) => {
            res.send(users)
        })
    }
}

module.exports = new UserManager