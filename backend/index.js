const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://ayomideoluwafemi:hPXmz7f0sCO9RbQE@cluster0.ke3ppbu.mongodb.net/test')

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

const port = 8000


app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(port, ()=> {
    console.log('Server is running on ', port)
})

