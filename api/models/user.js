const connection = require("./db")

exports.GetUserById = (id, callback) => {
	conn = connection.connect()
	conn.query("SELECT * FROM users where user_id = ?",[id], (err,result) => {
		console.log(result)
	})
	connection.connEnd(conn)
} 

exports.GetUserByLogin = (login) =>{
	return new Promise(function(resolve,reject){
		let returnValue = ''
		conn = connection.connect()
		conn.query("SELECT user_id, login, password FROM users WHERE login LIKE ?",[login], (err,result) => {
			if(err) throw err;
			returnValue = result
			resolve(returnValue)
		})
		connection.connEnd(conn)
	})
}
