const Students = require('../conn')
const mongoose = require('mongoose')

const readData = (req, res) => {

    Students.find({}, (err, result) => {
     if(err) console.log(err)
    res.render('index.pug', { result })
    })



}

const saveData = (req, res) => {
    


    const student = new Students({ name : req.body.name, nim : req.body.nim, major : req.body.major })
    // students = student.validateSync()
    student.save( (err, result) => {

        if(err) console.log(err)
        res.redirect('/')
        
    })
}

const deleteData = (req, res) => {
    Students.deleteOne({_id : mongoose.Types.ObjectId(req.params.id) }, (err, result) => {
        if(err) console.log(err)
        res.redirect('/')
    })
}

const updateData = (req, res) => {

    Students.updateOne({ _id : mongoose.Types.ObjectId(req.params.id) }, { $set : {
        name : req.body.name,
        nim : req.body.nim,
        major : req.body.major
    } }, ( err , result) => {

        if(err) console.log(err)
        res.redirect("/")


    })
}
module.exports = { readData, saveData, deleteData, updateData  }