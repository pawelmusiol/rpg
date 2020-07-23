const router = require("express").Router()
const AuthController = require("./../../controllers/Auth.controller")

router.post('/', AuthController.login)

module.exports = router