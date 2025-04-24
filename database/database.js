const mongoose = require("mongoose")
require('dotenv').config();

const connection = async () => { //arrow function
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
}
module.exports = connection;