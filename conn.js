const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://alvian:1234@cluster0.zjzzz.mongodb.net/test?authSource=admin&replicaSet=atlas-88rdg1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser : true, useUnifiedTopology : true})

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