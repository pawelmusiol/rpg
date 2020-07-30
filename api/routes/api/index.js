var router = require('express').Router()

router.use('/Tables', require('./TableList'))
router.use('/login', require('./login'))
router.use('/register', require('./register'))
router.use('/character',require("./character"))
router.use('/home',require('./home'))

module.exports = router