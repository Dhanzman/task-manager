const mongoose = require('mongoose')
const validator =require('validator')


const User = mongoose.model('User', {
    name: {
        type: String, 
        required: true,
        trim: true

    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 10,
        validate(value) {
            if(value < 9) {
                throw new Error('You mus t be more than 9 to register')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain"password"')
            }
        }
    }
    
})

module.exports = User