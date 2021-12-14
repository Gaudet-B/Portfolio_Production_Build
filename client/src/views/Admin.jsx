import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const Admin = () => {

    // boolean for admin logged in
    const [loggedIn, setLoggedIn] = useState(false)

    // admin credentials
    const [formState, setFormState] = useState({})

    // project creation
    const [pJformState, setPJformState] = useState({})
    const [detail, setDetail] = useState("")
    const [details, setDetails] = useState([])
    const [image, setImage] = useState()
    // input validation
    const [validState, setValidState] = useState({})

    // projects from database
    const [projects, setProjects] = useState([])

    // detail input fields array
    const [detailInputs, setDetailInputs] = useState(["details", "details"])

    // instantiate useHistory
    const history = useHistory()

    // create instance of axios to contain authentication credentials and a base url
    const instance = axios.create({
        withCredentials: true,
        baseURL: "http://localhost:8000/api"
    })
    
    useEffect(() => {

        // retrieve all projects from database
        instance.get("/projects/all")
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))

        // add Bootstrap to document, remove when component unmounts (return statement - line 55)
        const link = document.createElement("link")
        link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        link.rel = "stylesheet"
        link.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        link.crossOrigin = "anonymous"
        document.body.appendChild(link)

        // allow scrolling, in case that was disabled from Landing component
        document.querySelector("html").setAttribute("style", "overflow: auto;")

        return () => {
            document.body.removeChild(link)
        }
    }, [])

    // form change handler for admin login
    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    // handler for project creation form
    const handlePjChange = e => {
        setPJformState({
            ...pJformState,
            [e.target.name]: e.target.value
        })
    }

    // handler for list of project details 
    const handleDetailChange = e => {
        setDetail(e.target.value)
    }
    
    // handler that creates a new form input as user fills current input (once focus comes off that input)
    const handleDetailInputs = e => {
        if (e.target.value === "") return
        setDetailInputs(detailInputs => [...detailInputs, e.target.name])
        setDetails(details => [...details, e.target.value])
        setPJformState({...pJformState, details: details})
    }

    // handler for admin login
    const handleSubmit = e => {
        e.preventDefault()

        instance.post("/loginadmin", formState)
            .then(res => {
                setFormState({})
                setLoggedIn(!loggedIn)
                history.push("/administrators")
            })
            .catch(err => {
                // const {errors} = err.response.data
                // let errObj = {}
                // for (const [key, value] of Object.entries(errors)) {
                //     errObj[key] = value.message
                // }
                // setValidState(errObj)
            })
    }

    // image input handler
    const handleImageChange = e => {
        let object = e.target.files[0]
        setImage(object)
        setPJformState({...pJformState, mainImage: image})
    }

    // submit handler for project creation
    const handleCreate = e => {
        e.preventDefault()
        let data = new FormData()
        for (const key in pJformState) {
            data.append(`${key}`, `${pJformState[key]}`)
        }
        const config = { headers: {'content-type': 'multipart/form-data'}}
        instance.post("/projects/new", data, config)
            .then(res => {
                // setPJformState({})
            })
            .catch(err => {
                console.log(`ERROR: ${err.response.data}`)
                const {errors} = err.response.data
                let errObj = {}
                for (const [key, value] of Object.entries(errors)) {
                    errObj[key] = value.message
                }
                setValidState(errObj)
            })
    }

    // admin logout handler
    const handleLogout = e => {
        e.preventDefault()
        instance.get("/logoutadmin")
            .then(res => {
                console.log("goodbye")
                setLoggedIn(false)
                history.push("/administrators")
        })
            .catch(err => console.log("error"))
    }

    // navigate to Edit component
    const handleClick = (id) => {
        history.push(`/projects/${id}`)
    }

    // handler to delete project
    const handleDelete = (id) => {
        instance.delete(`/projects/delete/${id}`)
            .then(res => console.log("deleted"))
            .catch(err => console.log("error"))
    }

    // if admin is not logged in, present form to input admin credentials
    if (!loggedIn) {
        return (
            <div className="bg-dark p-5 text-light" style={{ height: "100vh", width: "100vw" }}>
                <form onSubmit={handleSubmit} className="d-flex flex-column m-5 p-5 border border-light rounded">
                    <div className="form-group d-flex flex-row p-2">
                        <label className="form-label" htmlFor="username">U &gt;</label>
                        <input onChange={handleChange} className="form-control" name="username" type="text" />
                    </div>
                    { (validState.username) ? <p className="text-danger"> { validState.username } </p> : null }
                    <div className="form-group d-flex flex-row p-2">
                        <label className="form-label" htmlFor="password">P &gt;</label>
                        <input onChange={handleChange} className="form-control" name="password" type="password" />
                    </div>
                    { (validState.username) ? <p className="text-danger"> { validState.username } </p> : null }
                    <button className="btn btn-outline-light" type="submit"> X </button>
                </form>
            </div>
        )
    
    // if admin logged in, present content management system
    } else {
        return (
            <div className="bg-dark p-4 text-center">
                <h1 className="display-2 my-3">CONTENT MANAGEMENT</h1>
                <div className="text-center my-4">
                    <h1 className="display-5">Current Project Content</h1>
                </div>

                {/* table displays all projects from database */}
                <table className="table">
                    <thead className="bg-light">
                        <tr>
                            <th>Title</th>
                            <th>Role(s)</th>
                            <th>Languages</th>
                            <th>Summary</th>
                            <th>Details</th>
                            <th>Github</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="bg-light">

                        {(projects.length > 0) ?
                        projects.map((project, idx) => {
                            return (
                            <tr key={idx}>
                                <th>{project.title}</th>
                                <td>{project.myRole}</td>
                                <td>{project.languages}...</td>
                                <td>{project.summary}...</td>
                                <td>{project.details.length}</td>
                                <td>{project.github}</td>
                                <td>
                                    <div className="d-flex flex-row justify-content-evenly">
                                        {/* edit and delete buttons */}
                                        <button onClick={() => handleClick(project._id)} className="btn btn-secondary mx-2" style={{ width: "75px" }}>edit</button>
                                        <button onClick={() => handleDelete(project._id)} className="btn btn-danger mx-2" style={{ width: "75px" }}>delete</button>
                                    </div>
                                </td>
                            </tr>
                            )
                        })
                        :
                        null
                        }
                    </tbody>
                </table>

                {/* form to add a new project */}
                <div className="border border-secondary rounded my-5" style={{ width: "75%", height: "2px", margin: "auto" }}></div>
                <div style={{ width: "80%", margin: "auto" }}>
                    <div className="my-5 py-3 px-5 border border-light rounded" style={{ width: "80%", margin: "auto" }}>
                        <h1 className="text-light text-decoration-underline mb-4">New Project</h1>
                        <form onSubmit={handleCreate} className="form text-light" style={{ width: "100%", margin: "auto" }}>
                        {/* TITLE */}
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="title">Title</label>
                                <input onChange={handlePjChange} className="form-control" name="title" style={{ width: "60%" }}/>
                            </div>
                        {/* ROLE */}
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="myRole">Role(s)</label>
                                <input onChange={handlePjChange} className="form-control" name="myRole" style={{ width: "60%" }}/>
                            </div>
                        {/* LANGUAGES */}
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4 text-wrap" htmlFor="languages">Languages/ Frameworks</label>
                                <input onChange={handlePjChange} className="form-control" name="languages" style={{ width: "60%" }}/>
                            </div>
                        {/* TECHNOLOGIES */}
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="technologies">Technologies</label>
                                <input onChange={handlePjChange} className="form-control" name="technologies" style={{ width: "60%" }}/>
                            </div>
                        {/* SUMMARY */}
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="summary">Summary</label>
                                <input onChange={handlePjChange} className="form-control" name="summary" style={{ width: "60%" }}/>
                            </div>
                        {/* DETAILS */}
                            <div className="d-flex flex-column my-5" style={{ width: "100%" }}>
                            {/* renders as many 'detail' inputs as there are in the 'detailInputs' array */}
                            {(detailInputs.length > 1) ?
                            detailInputs.map((input, idx) => {
                                return(
                                    <div className="form-group d-flex flex-row justify-content-between my-2" key={idx}>
                                        <label className="form-label fs-4 ms-4" htmlFor={`${input}[${idx}]`}>Detail</label>
                                    {/* onBlur event listener will add a new input to the 'detailInputs' array when user moves away from this input */}
                                        <input onChange={handleDetailChange} onBlur={handleDetailInputs} className="form-control" name={`${input}[${idx}]`} style={{ width: "60%" }}/>
                                    </div>
                            )})
                            :
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="details[0]">Detail</label>
                            {/* onBlur event listener will add a new input to the 'detailInputs' array when user moves away from this input */}
                                <input onChange={handleDetailChange} onBlur={handleDetailInputs} className="form-control" name="details[0]" style={{ width: "60%" }}/>
                            </div>
                            }
                            </div>
                        {/* DEMO */}
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="demo">Demo</label>
                                <input onChange={handlePjChange} className="form-control" name="demo" style={{ width: "60%" }}/>
                            </div>
                        {/* IMAGE */}
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="image">Image</label>
                                <input onChange={handlePjChange} className="form-control" name="image" style={{ width: "60%" }}/>
                            </div>
                        {/* HERO IMAGE */}
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="mainImage">Main Image</label>
                                <input type="file" onChange={handleImageChange} className="form-control-file" name="mainImage" style={{ width: "60%" }}/>
                            </div>
                        {/* GITHUB LINK */}
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="github">Github</label>
                                <input onChange={handlePjChange} className="form-control" name="github" style={{ width: "60%" }}/>
                            </div>

                            <button className="btn btn-outline-light mt-4 mb-3 fs-5" style={{ width: "30%", minWidth: "fit-content", margin: "auto" }} >create</button>
                        
                        </form>
                    </div>
                </div>
                {/* logout */}
                <button onClick={handleLogout} className="btn btn-secondary fs-4 p-2" style={{ width: "20%", margin: "auto" }}>logout</button>
            </div>
        )
    }
}

export default Admin
