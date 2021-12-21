import { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import styles from '../components/projects.style.module.css'
import getImages from '../scripts/images.js'


const ViewProject = () => {

    // starting project/image from url params
    const { proj, img } = useParams()

    // instantiate useHistory
    const history = useHistory()

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
    // const [projects, setProjects] = useState([])

    // gets all images from assets directory
    const [allImages, setAllImages] = useState(getImages())
    
    // the images that will be displayed in this component
    const [images, setImages] = useState([])

    // cycle through images
    const [step, setStep] = useState(img)

    // handlers that cycle through the images
    const handleNext = () => {
        setStep(parseInt(step) + 1)
    }
    const handleBack = () => {
        setStep(parseInt(step) - 1)
    }

    // handler to return to Projects component
    const handleReturn = () => {
        history.push("/projects")
    }

    const handleImages = () => {

        if (proj == 0) {
                setImages(allImages.draft)
            } else if (proj == 1) {
                setImages(allImages.pizza)
            } else if (proj == 2) {
                setImages(allImages.portfolio)
            } else if (proj == 3) {
                setImages(allImages.myth)
            }
    }

    // function that displays loading spinner 
    const loadData = async () => {
        await new Promise((res) => setTimeout(res, 250))
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
        document.querySelector("html").setAttribute("style", "overflow-x: auto; overflow-y: auto;")
        // add the resizeWindow function to the window as an event listener
        window.addEventListener("resize", resizeWindow)
        // get all projects from database
        // axios.get("http://localhost:8000/api/projects")
        //     .then(res => {
        //         setProjects(res.data)
        //     })
        //     .catch(err => console.log(err))
        // remove event listener when component unmounts

        setTimeout(() => {
            handleImages()
        }, 250);
        // if (proj == 0) {
        //     setImages(allImages.draft)
        // } else if (proj == 1) {
        //     setImages(allImages.pizza)
        // } else if (proj == 2) {
        //     setImages(allImages.portfolio)
        // } else if (proj == 3) {
        //     setImages(allImages.myth)
        // }

        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [])

    // spinner
    if (loading) {
        return (
            <div className={styles.loadingBackground} >
                <div className={styles.loadingMask}>
                    {/* <div className={styles.spinner}></div>
                    <div className={styles.logoSpinner}></div>
                    <div className={styles.logo}></div> */}
                </div>
            </div>
        )

    } else {

    return (
        <div className={styles.loadingBackground} style={{ padding: "30px", maxWidth: "100vw", minWidth: "fit-content", maxHeight: "100vh", minHeight: "fit-content" }}>

            <div className={styles.returnContainer} style={(windowWidth > 800) ? { transformStyle: "preserve-3d", transform: "scale(0.8)" } : {}}>
                <div onClick={handleReturn} className={styles.return} >&lt; return to projects</div>
            </div>

            {/* <div className={(windowWidth < 800) ? styles.mobileBody : styles.modalBody} style={{ backgroundImage: `url(${images[step]})` }}></div> */}
            <div className={styles.mobileBody} style={(windowWidth < 800 && proj != 1) ? { transform: "rotate(90deg) translateX(20em)" } : (windowWidth > 800 && proj != 1) ? { transformStyle: "preserve-3d", transform: "scale(0.7) translateY(-10em)", borderRadius: "6% / 10%" } : (windowWidth > 800 && proj == 1) ? { transformStyle: "preserve-3d", transform: "scale(0.7) translateY(-10em)", margin: "auto" } : {}} >
                <img src={images[step]} alt="project image" />
            </div>

            {(step < 1) ?
            <div className={styles.mobileButtons} style={(windowWidth > 800) ? { justifyContent: "flex-end", transformStyle: "preserve-3d", transform: "scale(0.7) translateY(-20em)" } : { justifyContent: "flex-end" }}>
                <div onClick={handleNext} className={styles.button}>next</div>
            </div>
            : (step > images.length - 2) ?
            <div className={styles.mobileButtons} style={(windowWidth > 800) ? { justifyContent: "flex-start", transformStyle: "preserve-3d", transform: "scale(0.7) translateY(-20em)" } : { justifyContent: "flex-start" }}>
                <div onClick={handleBack} className={styles.button}>back</div>
            </div>
            :
            <div className={styles.mobileButtons} style={(windowWidth > 800) ? { transformStyle: "preserve-3d", transform: "scale(0.7) translateY(-20em)" } : {  }} >
                <div onClick={handleBack} className={styles.button}>back</div>
                <div onClick={handleNext} className={styles.button}>next</div>
            </div>
            }
        </div>
    )
    }
}

export default ViewProject
