var router = require('express').Router()

router.use('/Tables', require('./TableList'))
router.use('/login', require('./login'))
router.use('/register', require('./register'))

module.exports = router