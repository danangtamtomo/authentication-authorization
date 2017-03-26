const mongoose = require('mongoose')
const crypto = require('crypto')

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  salt: String,
  login_status: String
}, {
  timestamps: true
})

userSchema.pre('save', function (next) {
    var salt = crypto.randomBytes(10).toString('hex')
    const password = this.password
    const hash = crypto.createHmac('sha256', password)
        .update(salt)
    this.password = hash.digest('hex')
    this.salt = salt
    next()
})

userSchema.methods.validPassword = function (password) {
    const hash = crypto.createHmac('sha256', password)
    .update(this.salt)
    if (this.password !== hash.digest('hex')) {
         return false
    }

    return true
}

var User = mongoose.model('User', userSchema)

module.exports = User