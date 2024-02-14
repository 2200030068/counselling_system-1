const express = require('express')
const cors = require('cors')
const {MongoClient}= require('mongodb')

const app=express()
app.use(cors())
app.use(express.json())

const client= new MongoClient('mongodb+srv://Admin:Admin@mohan.mtjj61n.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('counselling')
const col= db.collection('register')
col.insertOne({'student':"345"})

app.post('/register',(req, res)=>{
    col.instertOne(req.body)
    console.log(req.body)
    res.send("data insterted successfully")
})


app.get('/',(req, res)=>{
    res.send('<h1>Hello Kluniversity</h1>')
})

app.get('/about', (req,res)=>{
    res.send('<h1>This is About page</h1')
})

app.get('/contact', (req,res)=>{
    res.send('<h1>This is Contact page</h1')
})

app.get('/home', (req,res)=>{
    res.send('<h1>This is Home page</h1')
})

app.listen(8080, ()=>{console.log('Express Server Is Running')})