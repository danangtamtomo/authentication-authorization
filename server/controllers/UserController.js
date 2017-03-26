const User = require('../models/User')
const jwt = require('jsonwebtoken')

class UserController {
    constructor() {

    }

    logout(req, res) {
        
    }

    registerUser(req, res) {
        var user = new User(req.body) 
        user.save() 
            .then((user) => {
                res.send({
                    status: '200',
                    user: {
                        name: user.name,
                        email: user.email
                    }
                })
            })
            .catch((err) => {console.log(err)})
        }
}

module.exports = new UserController