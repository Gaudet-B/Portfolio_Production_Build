const cors = require('cors')
const express = require('express')
const cookieParser = require('cookie-parser')
const nodemailer = require("nodemailer")
// const bodyParser = require('body-parser')

const fs = require('fs')
const path = require('path')

const app = express()

require('./config/mongoose.config')
require('dotenv').config()


app.use(express.json())
app.use(cookieParser())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.urlencoded({ extended: true }))

const appRoutes = require('./routes/app.routes')
appRoutes(app)

const port = process.env.PORT_ADDRESS
const userName = process.env.USER_SECRET_KEY
const passWord = process.env.PASS_SECRET_KEY

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: userName,
        pass: passWord,
    },
})

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
})

app.listen(port, () => console.log(`Ready to rock on port ${port}`))