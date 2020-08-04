const connection = require("./db")

exports.GetCharacterByUserId = (user_id) =>{
	conn = connection.connect()

	return new Promise(function(resolve,reject){
		let returnValue = ''
		conn.query("SELECT `character_id`, `name`, `description` AS 'desc' FROM rpg.character WHERE user_id = ?",[user_id], (err,result) => {
			if(err) throw err;
			returnValue = result
			connection.connEnd(conn)
			console.log(returnValue)
			resolve(returnValue)
		})
	})
}

SqlQuery = (Query) =>{
	return 
}

exports.GetCharacterByIdAll = (id) => {
	conn = connection.connect()
	return new Promise(async(resolve,reject) => {
		let sqlQueryCharacter ="SELECT `character_id`, `name`, `description` FROM rpg.character WHERE character_id = ?"
		let sqlQuerySkills = "SELECT `skills_id`, `name`, `value` FROM skills WHERE character_id = ?"
		let sqlQueryAspects = "SELECT `aspects_id`, `name` FROM aspects WHERE character_id = ?"
		let sqlQueryStunts = "SELECT `stunt_id`, `name`, `type` FROM stunts WHERE character_id = ?"
		let sqlQueryExtras = "SELECT `extra_id`, `name`, `desc` FROM extras WHERE character_id = ?"
		let sqlQueryRoles = "SELECT `roles_id`, `type` FROM roles WHERE character_id = ?"
		let Data = []

		Data.CharacterData = await new Promise(function(resolve,reject){
			conn.query(sqlQueryCharacter, id, (err,result) => {
				if(err) throw err;
				resolve(result)
			})
		})
		
		Data.Skills = await new Promise((resolve,reject) =>{
			conn.query(sqlQuerySkills, id, (err,result) => {
				if (err) throw err
				resolve(result)
			})
		})
		Data.Aspects = await new Promise((resolve,reject) =>{
			conn.query(sqlQueryAspects, id, (err,result) => {
				if (err) throw err
				resolve(result)
			})
		})
		Data.Stunts = await new Promise((resolve,reject) =>{
			conn.query(sqlQueryStunts, id, (err,result) => {
				if (err) throw err
				resolve(result)
			})
		})
		Data.Extras = await new Promise((resolve,reject) =>{
			conn.query(sqlQueryExtras, id, (err,result) => {
				if (err) throw err
				resolve(result)
			})
		})
		Data.Roles = await new Promise((resolve,reject) =>{
			conn.query(sqlQueryRoles, id, (err,result) => {
				if (err) throw err
				resolve(result)
			})
		})
		let DataToSend = {
			'Character': Data.CharacterData[0],
			'Skills' : Data.Skills,
			'Aspects' : Data.Aspects,
			'Stunts' : Data.Stunts,
			'Extras' : Data.Extras,
			'Roles' : Data.Roles
		} 

		
		connection.connEnd(conn)
		console.log(DataToSend)
		resolve(DataToSend)
	})
}

exports.AddCharacter = (character) => {
	return new Promise((resolve,reject)=>{
		conn = connection.connect()

		console.log(character)
		let Data = []
		Data.name = character.name
		Data.description = character.description
		let EntryExtras = []
		EntryExtras.push(character.extras1)

		let EntryStunts = []
		EntryStunts.push(character.stunts1)
		
		let EntrySkills = []
		EntrySkills.push(character.P4)
		EntrySkills.push(character.P3)
		EntrySkills.push(character.P2)
		EntrySkills.push(character.P1)
		Data.UserID = 1		
		console.log(EntryExtras)

		sqlQuery = " INSERT INTO `character` (`name`, `description`, `refresh`, `user_id`) VALUES ('"+ Data.name +"','"+ Data.description +"', 3,"+ Data.UserID +")"
		

		conn.query(sqlQuery, (err,result) => {
			if (err) throw err
			
			//Data

			characterId = result.insertId
			Data.skills = [] //Umiejętności
			Data.extras = [] //Atuty
			Data.stunts = [] //Sztuczki aka Eq
			Data.aspects = [] //Aspekty
			
			Data.skills = ConcatSkills(EntrySkills, characterId)
			sqlQuerySkills = "INSERT INTO `skills` (`name`, `value`, `character_id`) VALUES ?"
			console.log(Data.skills)
			
			Data.extras = ConcatTable(EntryExtras,characterId)
			console.log(Data.extras)
			sqlQueryExtras = "INSERT INTO `extras` (`name`, `desc`, `character_id`) VALUES ?"
			
			Data.stunts = ConcatTable(EntryStunts,characterId)
			console.log(Data.stunts)
			sqlQueryStunts = "INSERT INTO `stunts` (`name`, `type`, `character_id`) VALUES ?"

			Data.aspects = ConcatTable(character.aspects, characterId)
			sqlQueryAspects = "INSERT INTO `aspects` (`name`, `character_id`) VALUES ?"
			console.log(Data.aspects)

			sqlSueryRoles = "INSERT INTO `roles` (`type`, `character_id`) VALUES (0, ?)"
			//Queries	
			
			conn.query(sqlQuerySkills,[Data.skills],(err,result) => {
				if (err) throw err
			})

			conn.query(sqlQueryExtras, [Data.extras],(err,result) => {
				if (err) throw err
			})	
			
			conn.query(sqlQueryStunts, [Data.stunts],(err,result) => {
				if (err) throw err
			})	
			conn.query(sqlQueryAspects, [Data.aspects],(err,result) => {
				if (err) throw err
			})	
			conn.query(sqlQueryRoles, characterId,(err,result) => {
				if (err) throw err
			})	
			conn
			
			connection.connEnd(conn)
			resolve()
		})
	})
}



const ConcatTable = (Data,characterId) => {
	Table = []
	console.log(Data.length)
	for (let index = 0; index < Data.length; index++) {
		DataToTable = []
		for (let index2 = 0; index2 < Data[index].length; index2++) {
			DataToTable.push(Data[index][index2])
		}
		DataToTable.push(characterId)
		Table.push(DataToTable)
	}
	return Table
}

const ConcatSkills = (Data, characterId) => {
	Table = []

	// Concat Skills
	for (let index = 0; index < Data.length; index++) {
		for (let index2 = 0; index2 < Data[index].length; index2++) {
			DataToTable = []
			DataToTable.push(Data[index][index2])
			DataToTable.push(Data[index].length)
			DataToTable.push(characterId)
			Table.push(DataToTable) 
		}
	}
	return Table
}
