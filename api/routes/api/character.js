const router = require("express").Router()
const CharacterController = require("./../../controllers/character.controller")

router.get('/', CharacterController.CharacterList)

module.exports = router