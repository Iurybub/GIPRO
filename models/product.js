const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    nutrition: {
        type: String,
        required: true,
    },
    type_of_product: {
        type: String,
        required: true,
    }
})

module.exports.Product = mongoose.model('Product', productSchema);