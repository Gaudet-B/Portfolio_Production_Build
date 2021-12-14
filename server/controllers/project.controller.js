const { Project } = require('../models/project.model')
const { upload } = require ('../config/multer.config')


module.exports.create = (req, res, next) => {

    upload.single(req.body.mainImage)

    Project.create(req.body)
        .then(project => res.json({ msg: "success", project: project }))
        .catch(err => {res.status(400).json(err)})
}

module.exports.all = (req, res) => {
    Project.find()
        .then(allProjects => res.json(allProjects))
        .catch(err => res.json(err))
}

module.exports.one = (req, res) => {
    const {id} = req.params
    Project.findOne({ _id: id })
        .then(project => res.json(project))
        .catch(err => res.json(err))
}

module.exports.edit = (req, res, next) => {
    const {id} = req.params

    Project.findOneAndUpdate({ _id: id }, req.body)
        .then(updatedProject => {
            res.json(updatedProject)
            next()
        })
        .catch(err => res.json(err))
}

module.exports.delete = (req, res) => {
    const {id} = req.params
    Project.deleteOne({ _id: id })
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}