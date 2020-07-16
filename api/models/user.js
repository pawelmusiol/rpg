const mysql = require("mysql")
const dbConfig = require("../config/db.config")
const connection = require("./db")
const db = require("./db")

exports.GetUserById = (id, callback) => {
	conn = connection.connect()
	conn.query("SELECT * FROM users where user_id = ?",[id], (err,result) => {
		console.log(result)
	})
	connection.connEnd(conn)
} 

exports.GetUserByLogin = (login,callback) => {
	console.log(login)
	conn = connection.connect()
	conn.query("SELECT * FROM users WHERE name LIKE ?",[login], (err,result) => {
		if(err) throw err
		return result
	}
	
	)
	
	connection.connEnd(conn)
}