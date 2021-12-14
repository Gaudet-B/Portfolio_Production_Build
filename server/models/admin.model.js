const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const AdminSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "xXx"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "xXx"]
    }
}, { timestamps: true })

AdminSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value)

AdminSchema.pre("validate", function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "xXx")
    }
    next()
})

AdminSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash
            next()
        })
})

module.exports.Admin = mongoose.model("Admin", AdminSchema)