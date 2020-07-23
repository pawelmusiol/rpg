const jwt = require("jsonwebtoken")
const user = require("./../models/user")
const HTTPStatus = require("http-status")
const dotenv = require("dotenv")
const { response } = require("express")

dotenv.config()

const authenticate = async (login, password) => {
	var queryResult = await user.GetUserByLogin(login)
	queryResult = queryResult[0]
	if (!queryResult) {
		return null
	}
	else{
		if (login === queryResult.login && password === queryResult.password) {
			return queryResult
		}
		else return null
	}
}

exports.login = async (req, res) => {
	try {
		const {login, password} = req.body

		let user = await authenticate(login,password)
		console.log(user)
		if (user) {
			let secret = process.env.JWT_SECRET
			let token = jwt.sign({id: user.id}, secret, {expiresIn: 10})
			console.log(token)
			return res.status(HTTPStatus.OK).json({...user, token})
		} 
		else{
			return res.status(HTTPStatus.FORBIDDEN).json({x:'x'})
		}
	} catch (error) {
		return res.status(HTTPStatus.BAD_REQUEST).json(error)
	}
	
}

exports.validateToken = async(req,res) => {
	try {
		const secret = process.env.JWT_SECRET;
		try {
			const token = req.body.token;
			const decoded = jwt.verify(token, secret)
			const respone = {
				id: decoded.id
			}
			return res.status(HTTPStatus.OK).json(response)
		} catch (error) {
			return res.status(HTTPStatus.FORBIDDEN).json(error)
		}
	} catch (error) {
		return res.status(HTTPStatus.BAD_REQUEST).json(error)
	}
}