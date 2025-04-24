const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,//unique giống với id , không được trùng lặp (nghĩa là ko đc có 2 cái giống nhau)
    },
    password: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        require: true,
    },
    updateAt: {
        type: Date,
        require: true,
    },
})

const Users = mongoose.model('Users', userSchema);
module.exports = { Users };