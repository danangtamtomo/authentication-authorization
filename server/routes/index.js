const express = require('express')
const router = express.Router()
const LocalStrategy = require('../strategies/LocalStrategy')
const AuthController = require('../controllers/AuthController')
const IndexController = require('../controllers/IndexController')
const UserController = require('../controllers/UserController')
const UserAuth = require('../middlewares/UserAuth')

router.get('/', UserAuth.isAuth, IndexController.getIndex)
router.get('/auth/login', IndexController.failureLogin)
router.post('/register', UserController.registerUser)
router.post('/auth/login', LocalStrategy.authenticate('local', {failureRedirect: '/auth/login'}), AuthController.afterLogin)
router.get('/auth/logout', AuthController.logout)

module.exports = router