const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/dbStudents', { useNewUrlParser : true, useUnifiedTopology : true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error : '))
db.once('open', () => {
    console.log('mongodb connection succesfully')
})

const studentsSchema = new mongoose.Schema({

    name : String,
    nim : Number,
    major : String

}) 

const Students = mongoose.model('Student', studentsSchema)

module.exports = Students