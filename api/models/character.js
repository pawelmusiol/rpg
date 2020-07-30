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

exports.AddCharacter = (character) => {
	conn = connection.connect()
	return new Promise((resolve,reject)=>{
		console.log(character)
		let Data = []
		Data.name = character.name
		Data.description = character.description
		Data.aspects = character.aspects
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
			Data.skills = []
			Data.extras = []
			Data.stunts = []

			Data.skills = ConcatSkills(EntrySkills, characterId)
			sqlQuerySkills = "INSERT INTO `skills` (`name`, `value`, `character_id`) VALUES ?"
			console.log(Data.skills)
			
			Data.extras = ConcatTable(EntryExtras,characterId)
			console.log(Data.extras)
			sqlQueryExtras = "INSERT INTO `extras` (`name`, `desc`, `character_id`) VALUES ?"
			
			Data.stunts = ConcatTable(EntryStunts,characterId)
			console.log(Data.stunts)
			sqlQueryStunts = "INSERT INTO `stunts` (`name`, `type`, `character_id`) VALUES ?"

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

const MultipleInsert = (table,data,columns, values) => {
	let AdditionalValues = ''
	if (values) {
		AdditionalValues = ',' + values
	}
	returnValue = '';
	for (let index = 0; index < data.length; index++) {
		returnValue+=`	INSERT INTO `+ table +` (` + columns + `) VALUES ('`+ data[index] +`',@CharID` + AdditionalValues + `);
`	
	}
	return returnValue
}