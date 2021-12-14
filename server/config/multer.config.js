const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../src/public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.data.name + '-' + Date.now() + '.png')
    }
})

module.exports.upload = multer({ storage: storage})