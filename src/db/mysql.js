const mysql=require('promise-mysql')
require('dotenv').config()

const dbconfig={
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
}

const connection=mysql.createConnection(dbconfig)
.catch(err=>{
    console.log("ERROR al conectarme a la DB: "+err.message)
})

function getConnection(){
    return connection
}

module.exports=getConnection