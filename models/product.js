const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
})

module.exports.Product = mongoose.model('Product', productSchema);