import User from '../Models/users'
import express from 'express'
const router = express.Router()

router.get('/admin', function (req, res) {
  res.send({ status: '0', errorMsg: '登陆成功' })
})

module.exports = router
