const Character = require("./../models/character")
const HTTPStatus = require("http-status")
const { response } = require("express")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const Auth = require("./Auth.controller")

dotenv.config()

exports.CharacterList = async (req,res) => {
	let userToken = req.params.Token
	let id = await Auth.decodeToken(userToken)
	let data = await Character.GetCharacterByUserId(id)
	res.send(data)
}

exports.AddCharacter = async (req,res) => {
	let characterParams = req.body
	console.log(characterParams)
	let x = await Character.AddCharacter(characterParams)
	console.log(x)
}