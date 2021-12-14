const mongoose = require('mongoose')


const ProjectSchema = mongoose.Schema({
    title: {type: String},
    myRole: {type: String},
    languages: {type: String},
    technologies: {type: String},
    summary: {type: String},
    details: {type: Array},
    demo: {type: Array},
    image: {type: String},
    mainImage: {type: Buffer},
    github: {type: String}
}, { timestamps: true })

module.exports.Project = mongoose.model("Project", ProjectSchema)