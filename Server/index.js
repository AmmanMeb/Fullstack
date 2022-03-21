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
  port: "127.0.0.1:3306",
  database: "fullstack"
})

app.post('/link', function (req, res){
  const queryString = "INSERT INTO links (links, title) VALUES (?, ?)"  
  con.query(queryString, [req.body.links], function (err, result){
    if (err) {
      throw err
    }
     res.send ('Link Created')
    })
})

app.post('/title', function (req, res){
  const queryString = "INSERT INTO links (title) VALUES (?)"  
  con.query(queryString, [req.body.links], function (err, result){
    if (err) {
      throw err
    }
     res.send ('Link Created')
    })
})


app.listen(PORT, () => {
  console.log(`Example app listening at port ${PORT}`)
})
App