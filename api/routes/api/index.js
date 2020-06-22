var router = require('express').Router()

router.use('/',require('./test'))
router.use('/gamelist',require('./gameList'))

module.exports = router