const jwt = require("jsonwebtoken")
const user = require("./../models/user")

const authenticate = (login, password) => {
	user.GetUserByLogin(login)
}

exports.login = async (req, res) => {
	const {login, password} = req.body
	authenticate(login,password)
}