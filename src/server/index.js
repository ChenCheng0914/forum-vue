
const express = require('express')
const app = express()
app.listen(8888, function() {
  console.log('success start node')
});
function start (app) {
  const apiRouter = require('./Router/index')
  const mongoose = require('mongoose')
  const bodyParser = require('body-parser')
// import bodyParser from 'body-parser'
  const db = 'mongodb://localhost/27017/vue-qq'
  mongoose.connect(db)

  mongoose.connection.on('open', () => console.log('MongoDB Connection Successed'))
  mongoose.connection.on('error', () => console.log('MongoDB Connection Error'))
  app.use(bodyParser.json())

  app.use(bodyParser.urlencoded({ extended: false}))

  app.use('/api', apiRouter)
}
start(app)