const router = require("express").Router()
const CharacterController = require("./../../controllers/character.controller")

router.get('/:Token/characters', CharacterController.CharacterList)
router.post('/AddChar',CharacterController.AddCharacter)

module.exports = router