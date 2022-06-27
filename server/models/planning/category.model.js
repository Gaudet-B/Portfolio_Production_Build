const mongoose = require('mongoose')


const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'category needs a name'],
    },
}, {
    timestamps: true
})

module.exports.Category = mongoose.model('Category', CategorySchema)