const router = require("express").Router()
const auth = require("./../../controllers/Auth.controller")

router.post('/', (req, res, next) => {
    auth.validateToken(req,res)
    
})

module.exports = router