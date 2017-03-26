const LocalStrategy = require('../strategies/LocalStrategy')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

class AuthController {

    constructor() {
    }

    logout(req, res) {
        if (req.headers.authentication) {
            let decoded = jwt.decode(req.headers.authentication)
            User.update({
                _id: decoded.user.id
            } ,
            {
                $set: {
                    login_status: 'offline'
                }
            })
                then((user) => {
                    console.log(user)    
                })
        } else {
            res.send({
                message: 'Please insert token'
            })
        }
    }

    afterLogin(req, res) {
        const token = jwt.sign({
            user: {
                id: req.user._id,
                name: req.user.name
            }
        }, 'authauth')

        res.send({
            status: '200',
            token: token
        })
    }

}

module.exports = new AuthController