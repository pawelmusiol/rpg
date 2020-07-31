const router = require("express").Router()
const CharacterController = require("./../../controllers/character.controller")

router.get('/:Token/characters', CharacterController.CharacterList)
router.post('/AddChar',CharacterController.AddCharacter)
router.get('/:id',CharacterController.GetCharacter)

module.exports = router