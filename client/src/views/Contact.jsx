import { useEffect, useState } from 'react'

// import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Form from '../components/Form'
import MobileForm from '../components/MobileForm'

import styles from '../styles/contact.style.module.css'


const Contact = () => {

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
    // 
    // const [height, setHeight] = useState("100px")

    // function to be added to the onResize event listener
    const resizeWindow = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
        // console.log(windowHeight)
        // console.log(windowWidth)
    }

    const openContainer = () => {
        document.getElementById("container").classList.add(styles.open)
    }

    // function that displays loading spinner 
    const loadData = async () => {
        await new Promise((res) => setTimeout(res, 1500))
        setLoading(false)
        // 
        // openContainer()
        setTimeout(() => openContainer(), 1500);
        // setTimeout(() => openContainer(), 2500);
        // setTimeout(() => setHeight("100vh"), 2000);
    }

    useEffect(() => {
        loadData()
        // allow scrolling, in case that was disabled from Landing component
        document.querySelector("html").setAttribute("style", "overflow-y: scroll;")
        // add the resizeWindow function to the window as an event listener
        window.addEventListener("resize", resizeWindow)
        // remove event listener when component unmounts
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [])

    // display spinner while component mounts
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
            <div className={styles.bg} >
                <div className={styles.contactBackground}>
                    {/* <Header left="PROJECTS" right="RESUME" windowWidth={windowWidth}/> */}
                    <Navigation left="PROJECTS" right="RESUME" windowWidth={windowWidth}/>
                    {(windowWidth < 800) ? <MobileForm /> : 
                    <div id="container" className={styles.contactContainer} >
                        <p className={styles.title} >Contact Brian</p>
                        <Form windowWidth={windowWidth} />
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Contact
