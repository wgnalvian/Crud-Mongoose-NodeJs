const express = require('express')
const app = express()
const { readData, saveData, deleteData, updateData } = require('./controllers/DataController')
const student = require("./conn")
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended : true }))


app.get('/', (req, res) => {
    readData(req, res)
    
})


app.post('/api/data', (req, res) => {
    saveData(req, res)
})


app.get('/api/data/delete/:id', (req, res) => {
    deleteData(req, res)
})


app.post('/api/data/:id', (req, res) => {
    updateData(req, res)
})

app.get('/update/data/:id', (req, res) => {

    student.find({_id : mongoose.Types.ObjectId(req.params.id)}, (err, result) => {
       res.render('update.pug', { result : result[0] })
    })


})
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running')
})

