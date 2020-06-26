var router = require('express').Router()

router.use('/', require('./home'))
router.use('/gamelist', require('./gameList'))
router.use('/login', require('./login'))
router.use('/register', require('./register'))

module.exports = router