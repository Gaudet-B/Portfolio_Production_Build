import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import styles from '../components/contact.style.module.css'


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

    // function to be added to the onResize event listener
    const resizeWindow = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
        console.log(windowHeight)
        console.log(windowWidth)
    }

    // function that displays loading spinner 
    const loadData = async () => {
        await new Promise((res) => setTimeout(res, 2000))
        setLoading(false)
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
                    <Header left="PROJECTS" right="RESUME" windowWidth={windowWidth}/>
                    <h2>Contact Brian</h2>
                    <Form windowWidth={windowWidth} />
                </div>
            </div>
        )
    }
}

export default Contact
