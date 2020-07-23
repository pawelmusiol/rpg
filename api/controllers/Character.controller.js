const user = require("./../models/character")
const HTTPStatus = require("http-status")
const { response } = require("express")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()

exports.CharacterList = (req,res) => {
	let userToken = req.body.token
	console.log(userToken)
}