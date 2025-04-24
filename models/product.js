const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    //productName(require), categoryName(require), price(require), description(require), createdAt(require), updatedAt(require)
    productName: {
        type: String,
        require: true,
    },
    categoryName: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
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
const Products = mongoose.model('Products', productSchema);
module.exports = { Products };