const mysql = require("mysql")
const dbConfig = require("../config/db.config")


function connect (){
        connection = mysql.createConnection({
            port: 3310,
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            database: dbConfig.DB,
            insecureAuth: true
        })
        console.log(connection.state)
        connection.connect((err) => {
            console.log('xd')
            if (err) throw err
        })
    return connection
}

function connEnd(connection){
    connection.end()
}

function getTables(callback){
    connection.query("SELECT `game_id`, `name`, `system`, DATE_FORMAT(`expire_date`, '%d-%m-%Y') as 'expire_date' FROM rpg.games", function(err, res){
        if (err) throw err;
        return callback(res)
        
    })
}

module.exports = {
    connect: connect,
    connEnd: connEnd,
    getTables: getTables
}