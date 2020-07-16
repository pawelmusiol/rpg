const router = require("express").Router()
const TableController = require("./../../controllers/TableList.controller")

router.get('/', TableController.TableList)

module.exports = router