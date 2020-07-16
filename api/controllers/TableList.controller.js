const connection = require("../models/db")

exports.TableList = (req, res) =>{
    conn = connection.connect()
    connection.getTables((result) => {
        res.send(result)
        console.log(result)
    })
	connection.connEnd(conn)
}