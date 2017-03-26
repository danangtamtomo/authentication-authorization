var User = require('../models/User')
var jwt = require('jsonwebtoken')
var UserAuth = {}

UserAuth.isAuth = function (req, res, next) {
  jwt.verify(req.headers.authentication, 'authauth', function (err, decoded) {
    if (err) {
      res.send({message: 'Welcome, unauthorized user'})
    } else {
      User.update({
        _id: decoded.user.id
      }, {
        $set: {
          login_status: 'online'
        }
      })  
        .then((user) => {

        })
      next()
    }
  })
}

module.exports = UserAuth