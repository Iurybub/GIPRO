const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    created_at: {
        type: Date,
    }
})

module.exports.Product = mongoose.model('Recipe', recipeSchema);