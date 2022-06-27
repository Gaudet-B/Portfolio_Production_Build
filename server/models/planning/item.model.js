const mongoose = require('mongoose')


const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'item needs a name'],
    },
}, {
    timestamps: true
})

module.exports.Item = mongoose.model('Item', ItemSchema)