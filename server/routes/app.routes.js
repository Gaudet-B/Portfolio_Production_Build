const AppController = require('../controllers/app.controller')
const AdminController = require('../controllers/admin.controller')
const ProjectController = require('../controllers/project.controller')

// when using 'authenticate' always send requests from client side with { withCredentials: true }
const { authenticate } = require('../config/jwt.config')

// multer
const { upload } = require ('../config/multer.config')


module.exports = app => {

    app.post("/api/contact", AppController.contact)
    
    app.post("/api/loginadmin", AdminController.login)
    app.get("/api/logoutadmin", AdminController.logout)
    app.get("/api/projects", ProjectController.all)
    app.post("/api/projects/new", authenticate, upload.single('mainImage'), ProjectController.create)
    app.get("/api/projects/all", authenticate, ProjectController.all)
    app.get("/api/projects/:id", authenticate, ProjectController.one)
    app.put("/api/projects/update/:id", authenticate, upload.single('mainImage'), ProjectController.edit)
    app.delete("/api/projects/delete/:id", authenticate, ProjectController.delete)

}