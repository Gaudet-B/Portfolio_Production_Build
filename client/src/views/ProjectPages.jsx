import { useState, useEffect } from 'react';
import axios from 'axios'

import Carousel from '../components/Carousel'
import ProjectCards from '../components/ProjectCards'
import Navigation from '../components/Navigation'

import styles from '../components/new.projects.style.module.css'
import getImages from '../scripts/images.js'

const ProjectPages = () => {

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

    //
    const [ fillerStyle, setFillerStyle ] = useState(styles.filler)

    // function that displays loading spinner 
    const loadData = async () => {
        await new Promise((res) => setTimeout(res, 3000))
        setLoading(false)
    }

    // function to be added to the onResize event listener
    const resizeWindow = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
        // console.log(windowHeight)
        // console.log(windowWidth)
    }

    useEffect(() => {
        loadData()
        // allow scrolling, in case that was disabled from Landing component
        // document.querySelector("html").setAttribute("style", "overflow: auto; -ms-overflow-style: none; scrollbar-width: none;")
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
                    <Navigation left="HOME" right="CONTACT" windowWidth={windowWidth} />
                    {/* windowWidth={Math.max(windowWidth, 1200)}/> */}
                    {/* <div style={{ width: "fit-content", margin: "auto" }}> */}
                        {/* arrays of projects and images are passed to the child components */}
                    {(windowWidth > 800) ?
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className={styles.border} >
                            <div className={fillerStyle} ></div>
                        </div>
                            <div className={styles.newContainer}>
                                <Carousel projects={projects} images={images} windowWidth={windowWidth} setFillerStyle={setFillerStyle} />
                            </div>
                        <div className={styles.border} >
                            <div className={fillerStyle} ></div>
                        </div>
                    </div>
                    :
                    <ProjectCards projects={projects} images={images} />
                    }
                </div>
            </div> 
        ) 
    }
}

export default ProjectPages