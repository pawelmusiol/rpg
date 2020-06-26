var express = require("express")
var router = express.Router()

router.get("/", (req, res, next) => {
    res.send("API dziala");
    next()
})

module.exports = router;