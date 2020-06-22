const mysql = require("mysql")
const dbConfig = require("../config/db.config")

function test(){
const connection = mysql.createConnection({
    port: 3310,
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    insecureAuth: true
})

connection.connect((err) => {
    if (err) console.log(err)
    else console.log("XD")
})

connection.end
}
module.exports = test