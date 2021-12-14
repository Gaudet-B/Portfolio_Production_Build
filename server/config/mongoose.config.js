require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established connection to portfolio_app_db"))
    .catch(err => console.log("Could not connect to portfolio_app_db", err))