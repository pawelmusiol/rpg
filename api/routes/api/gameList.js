const router = require("express").Router()
const connection = require("../../models/db")

router.get('/', (req, res) => {
    res.send(connection())
    next()
})

module.exports = router