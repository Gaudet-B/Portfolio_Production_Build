import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

import styles from './demo.style.module.css'


const DemoModal = props => {

    // data to be displayed passed down from parent
    const { project, images } = props

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

    // boolean for modal
    const [show, setShow] = useState(false)
    // cycle through images in modal
    const [step, setStep] = useState(1)
    
    // handler that closes the modal
    const handleClose = () => {
        setShow(false)
        setStep(1)
    }
    
    // handler that shows the modal
    const handleShow = e => {
        e.preventDefault()
        setShow(true)
        setStep(e.target.parentNode.id)
    }
    
    // handlers that cycle through the images in the modal
    const handleNext = () => {
        setStep(parseInt(step) + 1)
    }
    const handleBack = () => {
        setStep(parseInt(step) - 1)
    }
    
    // function that displays a loading spinner
    const loadData = () => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
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
        // add the resizeWindow function to the window as an event listener
        window.addEventListener("resize", resizeWindow)
        // remove event listener when component unmounts
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [])

    // spinner
    if (loading) {
        return (
            <div>
                <div className={styles.spinner}></div>
                <div className={styles.logoSpinner}></div>
                <div className={styles.logo}></div>
            </div>
        )

    } else {

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>
            {/* displays images in a row - 5 max */}
            {(images) ? images.map((image, idx) => {
                if (idx < 5) return(

                    <div key={idx} id={idx + 1} onClick={handleShow} className={styles.demo} style={{ backgroundImage: `url(${image})`, backgroundPosition: "center" }}>
                        <div className={styles.demoMask}></div>
                    </div>
                )
                else return(
                    null
                )
            }) : null
            }

            <Modal show={show} onHide={handleClose} className={(project.title === "P!ZZA") ? styles.mobileBody : styles.modalBody} style={(project.title === "P!ZZA") ? { backgroundImage: `url(${images[step - 1]})`, transform: `translateY(-${Math.max(800, windowHeight)}px) translateX(${windowWidth / 3}px)` } : { backgroundImage: `url(${images[step - 1]})`, transform: `translateY(-${Math.max(800, windowHeight)}px) translateX(${windowWidth / 8}px)` }} >
                {(step < 1 || step > images.length) ? handleClose()
                :
                <Container className={styles.modalContainer} >
                    <Modal.Header style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", fontSize: "20pt", fontFamily: "Roboto" }}>
                        <div className={(project.title === "P!ZZA") ? styles.mobileButton : styles.modalButton} onClick={handleClose}>
                            X
                        </div>
                    </Modal.Header>

                    <Modal.Body >
                    </Modal.Body>

                    <Modal.Footer style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className={(project.title === "P!ZZA") ? styles.mobileButton : styles.modalButton} onClick={handleBack} >back</div>
                        <div className={(project.title === "P!ZZA") ? styles.mobileButton : styles.modalButton} onClick={handleNext} >next</div>
                    </Modal.Footer>
                </Container>
            }
        </Modal>
        </div>

        {/* if there are more than 5 images, display a link to access images 6+ */}
        {(images.length > 5) ?
        <Link 
            to="#" 
            onClick={() => {
                setStep(6)
                setShow(true)
            }}
            className={styles.link} 
        > 
            +{images.length - 5} more image(s)
        </Link>
        : null
        }
        </div>
    )
}
}

export default DemoModal
