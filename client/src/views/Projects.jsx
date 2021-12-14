import { useEffect, useState } from 'react'
import axios from 'axios'

import CustomCarousel from '../components/CustomCarousel'
import Header from '../components/Header'

import styles from '../components/projects.style.module.css'
import getImages from '../scripts/images.js'


const Projects = () => {

    // functions that track height and width of the window for responsive components
    const getWindowHeight = () => {
        return window.innerHeight
    }
    const getWindowWidth = () => {
        return window.innerWidth
    }

    // height and width of window are stored in local state
    const [windowHeight, setWindowHeight] = useState(getWindowHeight())
    const [windowWidth, setWindowWidth] = useState(getWindowWidth())

    // boolean for spinner
    const [loading, setLoading] = useState(true)

    // will be set to all projects from database when component loads (see useEffect)
    const [projects, setProjects] = useState([])

    // gets images from assets directory
    const [images, setImages] = useState(getImages())

    // function that displays loading spinner 
    const loadData = async () => {
        await new Promise((res) => setTimeout(res, 3000))
        setLoading(false)
    }

    // function to be added to the onResize event listener
    const resizeWindow = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
        console.log(windowHeight)
        console.log(windowWidth)
    }

    useEffect(() => {
        loadData()
        // allow scrolling, in case that was disabled from Landing component
        document.querySelector("html").setAttribute("style", "overflow-x: auto; overflow-y: auto;")
        // add the resizeWindow function to the window as an event listener
        window.addEventListener("resize", resizeWindow)
        // get all projects from database
        axios.get("http://localhost:8000/api/projects")
            .then(res => {
                setProjects(res.data)
            })
            .catch(err => console.log(err))
        // remove event listener when component unmounts
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [])

    // spinner
    if (loading) {
        return (
            <div className={styles.loadingBackground} >
                <div className={styles.loadingMask}>
                    <div className={styles.spinner}></div>
                    <div className={styles.logoSpinner}></div>
                    <div className={styles.logo}></div>
                </div>
            </div>
        )

    } else {
        return (
            <div className={styles.bg}>
                <div id="projectsContainer" className={styles.projectsBackground}>
                    <Header left="HOME" right="CONTACT" windowWidth={Math.max(windowWidth, 1200)}/>
                    <h2>P R O J E C T S</h2>
                    <div style={{ width: "fit-content", margin: "auto" }}>
                        {/* arrays of projects and images are passed to the child component */}
                        <CustomCarousel projects={projects} images={images} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
