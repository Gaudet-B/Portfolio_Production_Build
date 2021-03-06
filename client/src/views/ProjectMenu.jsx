import { useState, useEffect } from 'react'

import Navigation from '../components/Navigation'
import ProjectCard from '../components/ProjectCard'

import axios from 'axios'

import styles from '../styles/project.menu.style.module.css'


const ProjectMenu = props => {

    const { handleClick, openContainer } = props

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
    // const [loading, setLoading] = useState(true)
    // 
    const [projects, setProjects] = useState([])

    // function to be added to the onResize event listener
    const resizeWindow = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
        // console.log(windowHeight)
        // console.log(windowWidth)
    }

    // function that displays loading spinner 
    // const loadData = async () => {
        // await new Promise((res) => setTimeout(res, 1000))
        // setLoading(false)
        // openContainer()
        // 
        // openContainer()
        // setTimeout(() => openContainer(), 250);
        // setTimeout(() => openContainer(), 2500);
        // setTimeout(() => setHeight("100vh"), 2000);
    // }

    useEffect(() => {
        // loadData()
        // allow scrolling, in case that was disabled from Landing component
        document.querySelector("html").setAttribute("style", "overflow-y: scroll;")
        // add the resizeWindow function to the window as an event listener
        window.addEventListener("resize", resizeWindow)
        // get all projects from database
        axios.get("http://localhost:8000/api/projects")
            .then(res => {
                setProjects(res.data)
                setTimeout(() => openContainer(), 500);
            })
            .catch(err => console.log(err))
        // remove event listener when component unmounts
        // return () => {
        //     window.removeEventListener("resize", resizeWindow)
        // }
    }, [])

    // display spinner while component mounts
    // if (loading) {
    //     return (
    //         <div className={styles.loadingBackground} >
    //             <div className={styles.loadingMask}>
    //                 <div className={styles.spinner}></div>
    //                 <div className={styles.logoSpinner}></div>
    //                 <div className={styles.logo}></div>
    //             </div>
    //         </div>
    //     )

    // } else {
        return (
            // <div className={styles.menuBg} >
            // <div className={styles.menuBackground}>
                // {/* <Header left="PROJECTS" right="RESUME" windowWidth={windowWidth}/> */}
                // <Navigation left="PROJECTS" right="RESUME" windowWidth={windowWidth}/>
                // {/* {(windowWidth < 800) ? <MobileForm /> :  */}
                <div id="container" className={styles.menuContainer} >
                    <p className={styles.title} >Projects</p>
                    <div className={styles.mainMenu} style={{ paddingTop: "3rem" }} >
                        
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "fit-content", margin: "auto" }}>
                        {projects.map((project, idx) => {
                            if (idx % 2 === 0) return (
                                <ProjectCard handleClick={handleClick} key={idx} index={idx} project={project}/>
                            )
                        })}
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "fit-content", margin: "0 auto 2rem auto" }}>
                        {projects.map((project, idx) => {
                            if (idx % 2 != 0) return (
                                <ProjectCard handleClick={handleClick} key={idx} index={idx} project={project}/>
                            )
                        })}
                        </div>

                        
                    </div>
                </div>
                // {/* } */}
            // </div>
        // </div>
    )}
// }

export default ProjectMenu