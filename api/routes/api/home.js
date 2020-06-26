const router = require("express").Router()

router.get('/', (req, res, next) => {
    res.send("Strona Startowa")
    
})

module.exports = router