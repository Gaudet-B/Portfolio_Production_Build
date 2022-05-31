import { useState, useEffect } from 'react';
import axios from 'axios'

import Carousel from '../components/Carousel'
import MobilePages from '../components/MobilePages'
import Navigation from '../components/Navigation'

import styles from '../styles/new.projects.style.module.css'
import menuStyles from '../styles/project.menu.style.module.css'

import getImages from '../scripts/images.js'
import Loading from '../components/Loading';
import ProjectMenu from './ProjectMenu';

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

    // 
    const [menu, setMenu] = useState(false)

    // 
    const [startingLeft, setStartingLeft] = useState(0)
    const [startingRight, setStartingRight] = useState(0)

    // boolean for spinner
    const [loading, setLoading] = useState(true)

    /** @NOTE -> why is <Navigation/> using this??? */
    // const [innerLoading, setInnerLoading] = useState(true)

    // will be set to all projects from database when component loads (see useEffect)
    const [projects, setProjects] = useState([])

    // gets images from assets directory
    const [images, setImages] = useState(getImages())

    //
    const [ fillerStyle, setFillerStyle ] = useState(styles.filler)

    // function that displays loading spinner 
    const loadData = async () => {
        await new Promise((res) => setTimeout(res, 500))
        setLoading(false)
        openContainer()
    }

    // function to be added to the onResize event listener
    const resizeWindow = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
        // console.log(windowHeight)
        // console.log(windowWidth)
    }

    const getID = element => {
        // console.log(element.id[5])
        return element.id[5]
    }

    const getTarget = e => {
        if (e.target.tagName === "p") return getID(e.target.parentNode)
        else return getID(e.target)
    }

    const openContainer = () => {
        document.getElementById("container").classList.remove(menuStyles.close)
        document.getElementById("container").classList.add(menuStyles.open)
    }
    
    const closeContainer = () => {
        document.getElementById("container").classList.remove(menuStyles.open)
        document.getElementById("container").classList.add(menuStyles.close)
    }

    const openCarousel = () => {
        document.getElementById("pjContainer").classList.remove(styles.close)
        document.getElementById("pjContainer").classList.add(styles.open)
    }
    
    const closeCarousel = () => {
        document.getElementById("pjContainer").classList.add(styles.close)
        document.getElementById("pjContainer").classList.remove(styles.open)
    }

    const handleClick = e => {
        // console.log(e.target)
        // closeCarousel()
        closeContainer()
        let target = parseInt(getTarget(e))
        // console.log(target)
        let left, right
        if (target === 1) {
            left = 0
            right = -180
        } else if (target === 2) {
            left = 270
            right = 90
        } else if (target === 3) {
            left = 180
            right = 0
        } else {
            left = 90
            right = -90
        }
        setStartingLeft(left)
        setStartingRight(right)
        // setTimeout(() => openCarousel(), 500)
        // setMenu(false)
        setTimeout(() => setMenu(false), 300)
        setTimeout(() => {
            openContainer()
            openCarousel()
            // setMenu(false)
        }, 600)

        // setTimeout(() => setInnerLoading(false), 1000)
        // setTimeout(() => document.getElementById("pjContainer").classList.add(styles.open), 200);
        // return (
        //     setTimeout(() => {
        //         setStartingLeft(left)
        //     }, 500)
        // )
    }

    const handleRefresh = () => {
        closeCarousel()
        closeContainer()
        setTimeout(() => setMenu(true), 400)
        setTimeout(() => openContainer(), 800)
    }

    // const renderFullScreen = () => { 
    //     return (
    //         // <div id="carouselContainer" className={styles.carouselContainer} >
    //             /* {(menu) ?
    //             <ProjectMenu handleClick={handleClick} openContainer={openContainer} />
    //             : */
                
    //             /* } */
    //         // </div>
    //     )
    // }

    // const renderMobile = () => {
    //     return (
    //         <div id={"TEST-TEST-TEST"} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    //             {/* <ProjectCards projects={projects} images={images} /> */}
    //             <MobilePages projects={projects} images={images} />
    //         </div>
    //     )
    // }

    const renderMenu = () => {
        return (
            <ProjectMenu handleClick={handleClick} openContainer={openContainer} projects={projects} />
        )
    }

    const renderCarousel = () => {
        return (
            <div id="pjContainer" className={styles.newContainer}>
                {/* {(innerLoading) ? 
                <Loading />
                : */}
                <Carousel projects={projects} images={images} windowHeight={windowHeight} windowWidth={windowWidth} setFillerStyle={setFillerStyle} startingLeft={startingLeft} startingRight={startingRight} />
                {/* } */}
            </div>
        )
    }

    const renderLoading = () => {
        return (
            <div className={styles.loadingBackground} >
                <Loading />
            </div>
        )
    }

    useEffect(() => {
        // loadData()
        // allow scrolling, in case that was disabled from Landing component
        // document.querySelector("html").setAttribute("style", "overflow: auto; -ms-overflow-style: none; scrollbar-width: none;")
        // add the resizeWindow function to the window as an event listener
        window.addEventListener("resize", resizeWindow)
        // get all projects from database
        axios.get("http://localhost:8000/api/projects")
            .then(res => {
                setProjects(res.data)
                setMenu(true)
                loadData()
                // setTimeout(() => openContainer(), 500)
            })
            .catch(err => console.log(err))
        
        // setTimeout(() => document.getElementById("pjContainer").classList.add(styles.open), 1700);
        // document.getElementById("pjContainer").classList.add(styles.open)
        // remove event listener when component unmounts
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [])

    // spinner
    if (windowWidth < 800) {
        return (
            <MobilePages projects={projects} images={images} windowWidth={windowWidth}/>
        )
    // } else if (loading) {

    //     return (
    //         <div className={styles.loadingBackground} >
    //             <Loading />
    //         </div>
    //     )

    // } else if (windowWidth < 800) {
    //     return (
    //         <MobilePages projects={projects} images={images} windowWidth={windowWidth}/>
    //     )
    } else {

        return (
            <div className={styles.bg}>
                <div id="projectsContainer" className={styles.projectsBackground}>
                    <Navigation left="HOME" right="CONTACT" windowWidth={windowWidth} menu={menu} setMenu={setMenu} closeCarousel={closeCarousel} handleRefresh={handleRefresh} />
                    {/* windowWidth={Math.max(windowWidth, 1200)}/> */}
                    {/* <div style={{ width: "fit-content", margin: "auto" }}> */}
                        {/* arrays of projects and images are passed to the child components */}
                    {/* {(windowWidth > 800) ? */}
                    <div id="carouselContainer" className={styles.carouselContainer} >
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <div className={styles.border} style={{ marginRight: "2px" }} >
                                <div className={fillerStyle} ></div>
                            </div>
                            <div id="container" className={menuStyles.menuContainer} >
                            {(loading) ? renderLoading() : null}
                            {(!loading && menu) ? renderMenu() : null}
                            {(!loading && !menu) ? renderCarousel() : null}
                            </div>
                            {/* <ProjectMenu handleClick={handleClick} openContainer={openContainer} projects={projects} /> */}
                            {/* : */}
                            
                            {/* } */}
                            <div className={styles.border} style={{ marginRight: "2px" }} >
                                <div className={fillerStyle} ></div>
                            </div>
                        </div>
                        {/* {renderFullScreen()} */}
                    </div>
                    {/* {(loading) ? <Loading /> : null} */}
                    {/* : */}
                    {/* renderMobile() */}
                    {/* } */}
                </div>
            </div> 
        ) 
    }
}

export default ProjectPages