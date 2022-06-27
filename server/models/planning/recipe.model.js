const mongoose = require('mongoose')
const { Category } = require('./category.model')


const RecipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'recipe needs a name'],
    },
    ingredients: {
        type: [{}],
        required: [true, 'how you gonna have a recipe with no ingredients?']
    },
    categories: [Category],
    link: String,
    description: String,
    instructions: [String]
}, {
    timestamps: true
})

module.exports.Recipe = mongoose.model('Recipe', RecipeSchema)