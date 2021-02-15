require('dotenv').config()
const mytools = require('./modules/mytools.js')
const express = require('express')
const app = express()

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME,
      port: process.env.DB_PORT
    }
  })

app.get('/getProducts', (req, res) => {
    knex.select('*').from('products').then((results)=>{
        res.json(results)
    })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})