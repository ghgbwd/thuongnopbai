const mongoose = require('mongoose')
require('dotenv').config();

const connection = async () => { //arrow function
    await mongoose.connect("mongodb://localhost:27017/thuongemployee");
}
module.exports = connection;