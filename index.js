const express = require('express')
const cors = require ('cors')
const bodyParser = require('body-parser');
const employeeRoute =require('./route/employeeRoute')
require('dotenv').config()
 
const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST','PUT', 'DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get(bodyParser.json({
    limit : "50mb"
}))

app.use(bodyParser.urlencoded({ extended: true}))

app.use('/employee', employeeRoute )

const PORT = process.env.PORT ||8888

const listener = app.listen(PORT, () =>{
    console.log('Server is running on the port' + listener.address().port);
})