const { Admin } = require('../models/admin.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports.login = async(req, res) => {

    const admin = await Admin.findOne({ username: req.body.username })
    
    if (admin === null) {
        return res.sendStatus(400)
    }

    const correctPassword = await bcrypt.compare(req.body.password, admin.password)

    if (!correctPassword) {
        return res.sendStatus(400)
    }

    const adminToken = jwt.sign({
        id: admin._id
    }, process.env.JWT_KEY)

    console.log(`token: ${adminToken}`)

    res.cookie("admintoken", adminToken, { httpOnly: true }).json({ msg: "success" })
}

module.exports.logout = (req, res) => {
    res.clearCookie("admintoken")
    res.sendStatus(200)
}