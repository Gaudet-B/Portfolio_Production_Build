import { useState } from 'react'

import logo from '../assets/icons/BG_logo_icon_short_light.png'
import downArrow from '../assets/down-arrow-icon-white.png'
import upArrow from '../assets/up-arrow-icon-white.png'

import styles from './nav.style.module.css'
import { useEffect } from 'react'

const Navigation = props => {

    const { left, right, windowWidth } = props
    
    const [ page, setPage ] = useState("")

    // const [ show, setShow ] = useState(false)

    // const handleShow = () => setShow(!show)

    const setActivePage = page => {
        let link
        if (page === "projectpages") {
            link = document.getElementById("link-projects")
            // document.getElementById("link-projects").style.color = "rgb(0,143,17)"
        } else if (page === "resume") {
            link = document.getElementById("link-resume")
            // document.getElementById("link-resume").style.color = "rgba(0,143,17)"
        } else if (page === "contact") {
            link = document.getElementById("link-contact")
            // document.getElementById("link-contact").style.color = "rgb(0,143,17)"
        }
        // link.style.color = "rgb(0,143,17)"
        // link.style.backgroundColor = "#262626"
        link.classList.add(styles.active)
    }

    useEffect(() => {
        let url = window.location.href
        let splitUrl = url.split("/")
        let currentPage = splitUrl.pop()
        setPage(currentPage)
        // setTimeout(() => setActivePage(currentPage), 500)
        setActivePage(currentPage)
    }, [])

    return (
        <div style={{ height: "fit-content", display: "flex", flexDirection: "column", padding: "20px 55px 0pc 55px", backgroundColor: "rgba(25,25,25,1)" }} >
            {/* <a href={leftLink} id="left" style={{  }}> { left } </a>
            <a href={rightLink} id="right" style={{  }}> { right } </a> */}
            <div >
                {/* <img height="50px" width="50px" src={burger} onClick={handleShow} style={{ cursor: "pointer" }} />
                {(show) ? 
                <div style={{ position: "absolute", width: "150px", height: "200px", transform: "translateX(-100px) translateY(42px)", boxShadow: "2px 5px 6px #0d2149c7" }} >
                    <p onClick={handleLogout} style={{ cursor: "pointer" }} >log out</p>
                </div>
                : null
                } */}
                {/* {(show) ? */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0px 20px" }}>
                    <a href="/" > <img src={logo} style={{ marginBottom: "12px" }} /></a>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <a id={"link-projects"} href="/projectpages" className={styles.navLink} >PROJECTS</a>
                        <a id={"link-resume"} href="/resume" className={styles.navLink} >RESUME</a>
                        <a id={"link-contact"} href="/contact" className={styles.navLink} >CONTACT</a>
                    </div>
                </div>
                {/* : null
                } */}
                {/* <div style={{ width: "80%", height: "1px", borderBottom: "2px solid whitesmoke", margin: "auto" }}></div>
                <img height="20px" width="40px" src={(show)? upArrow : downArrow} onClick={handleShow} style={{ cursor: "pointer", margin: "auto" }} /> */}
            </div>
        </div>
    )
}

export default Navigation
