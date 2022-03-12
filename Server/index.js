const express = require('express')
var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const mysql = require('mysql')
var cors = require('cors')
const { json } = require('body-parser')
app.use(cors())

const PORT = process.env.PORT || 8080

var con = mysql.createConnection({
  host: "0.0.0.0",
  user: "root",
  password: "Steven1spielberg",
  port: "3306",
  database: "forum"
})

app.post('/link', function (req, res){
  const queryString = "INSERT INTO accounts (Username, Password) VALUES (?, ?)"  
}


app.listen(PORT, () => {
  console.log(`Example app listening at port ${PORT}`)
})
App