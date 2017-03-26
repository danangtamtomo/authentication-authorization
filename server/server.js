const express = require('express')
const mongoConnection = require('./config/mongodb')
const bodyParser = require('body-parser')
const LocalStrategy = require('./strategies/LocalStrategy')
const app = express()

const index = require('./routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(LocalStrategy.initialize())
app.use(LocalStrategy.session())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use('/', index)

app.listen(3000)
