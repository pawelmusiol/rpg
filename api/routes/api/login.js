const router = require("express").Router()
const TableController = require("./../../controllers/Auth.controller")

router.post('/', TableController.login )

module.exports = router