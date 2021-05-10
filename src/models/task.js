const mongoose = require('mongoose')
const Validator = require('validator')


const taskSchema = new mongoose.Schema( {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
