const connection = require("./db")

exports.GetCharacterByUserId = (user_id) =>{
	return new Promise(function(resolve,reject){
		let returnValue = ''
		conn.query("SELECT `name`, `description` FROM rpg.character WHERE user_id = ?",[user_id], (err,result) => {
			if(err) throw err;
			returnValue = result
			resolve(returnValue)
		})
	})
}