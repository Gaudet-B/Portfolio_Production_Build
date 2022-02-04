import { useState } from 'react'

import logo from '../assets/icons/BG_logo_icon_short_light.png'
import burger from '../assets/burger-menu-vector.png'
import downArrow from '../assets/down-arrow-icon-white.png'
import upArrow from '../assets/up-arrow-icon-white.png'

import styles from './nav.style.module.css'
import { useEffect } from 'react'

const Navigation = props => {

    const { left, right, windowWidth } = props
    
    const [ page, setPage ] = useState("")
    const [ coordY, setCoordY ] = useState("-8rem")
    const [ coordX, setCoordX ] = useState("3rem")
    const [ scale, setScale ] = useState("0.1")
    const [ show, setShow ] = useState(false)

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
        if (link === null) return false
        // link.style.color = "rgb(0,143,17)"
        // link.style.backgroundColor = "#262626"
        link.classList.add(styles.active)
    }

    const handleClick = e => {
        e.preventDefault()
        // setShow(!show)
        // setTimeout(() => {
            // if (show) {
                // setShow(!show)
                // return
            // } 

            // let container = document.getElementById("navMenu")
            // console.log(container)
            // container.classList.add(styles.activeMenu)
            // document.getElementById("navMask").classList.add(styles.navMenu)
        // }, 500);

// ==============================================================================
        // let projectLink = document.createElement("a")
        // projectLink.id = "link-projects"
        // projectLink.href = "/projectpages"

        // if (page === "projectpages") {
        //     projectLink.classList.add(styles.active, styles.smallNav)
        // } else {
        //     projectLink.classList.add(styles.smallNav)
        // }
        // projectLink.innerHTML = "PROJECTS"

        // let resumeLink = document.createElement("a")
        // resumeLink.id = "link-resume"
        // resumeLink.href = "/resume"

        // if (page === "resume") {
        //     resumeLink.classList.add(styles.active, styles.smallNav)
        // } else {
        //     resumeLink.classList.add(styles.smallNav)
        // }
        // resumeLink.innerHTML = "RESUME"

        // let contactLink = document.createElement("a")
        // contactLink.id = "link-contact"
        // contactLink.href = "/contact"

        // if (page === "contact") {
        //     contactLink.classList.add(styles.active, styles.smallNav)
        // } else {
        //     contactLink.classList.add(styles.smallNav)
        // }
        // contactLink.innerHTML = "CONTACT"

        // let container = document.createElement("div")
        // container.classList.add(styles.navMenu)
        // container.appendChild(projectLink)
        // container.appendChild(resumeLink)
        // container.appendChild(contactLink)

        // document.getElementById("navMenu").appendChild(container)
// ===============================================================================

        if (!show) {

            document.getElementById("link-projects").innerHTML = "PROJECTS"
            document.getElementById("link-resume").innerHTML = "RESUME"
            document.getElementById("link-contact").innerHTML = "CONTACT"

            setShow(true)
            
            setCoordY("4rem")
            setCoordX("-3rem")
            setScale("1.0")

        } else {
            
            setCoordY("-8rem")
            setCoordX("3rem")
            setScale("0.1")
            
            setTimeout(() => {
                document.getElementById("link-projects").innerHTML = ""
                document.getElementById("link-resume").innerHTML = ""
                document.getElementById("link-contact").innerHTML = ""
                setShow(false)
            }, 500);
            
        }
        
        // document.getElementById("navMenu").style.transform = "translateY(4rem) translateX(-3rem)"

    }

    useEffect(() => {
        let url = window.location.href
        let splitUrl = url.split("/")
        let currentPage = splitUrl.pop()
        setPage(currentPage)
        // setTimeout(() => setActivePage(currentPage), 500)
        // setActivePage(currentPage)
    }, [])

    return (
        <div style={(windowWidth < 800) ? { height: "fit-content", display: "flex", flexDirection: "column", padding: "12px 5px 0pc 5px", backgroundColor: "rgba(25,25,25,1)" } : { height: "fit-content", display: "flex", flexDirection: "column", padding: "20px 55px 0pc 55px", backgroundColor: "rgba(25,25,25,1)" }} >
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
                    <a href="/" style={(windowWidth < 800) ? { height: "fit-content", marginTop: ".75rem" } : { height: "fit-content" }}> <img src={logo} style={{ marginBottom: "12px" }}/> </a>
                    {(windowWidth < 800) ?
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <a onClick={handleClick}> <img src={burger} style={{ transform: "scale(0.8)" }} alt="hamburger menu"/> </a>
                        {/* <div className={styles.navMenu} id="navMenu" > */}
                        <div id="navMenu" className={(show) ? styles.navMenu : ""} style={{ transform: `translateY(${coordY}) translateX(${coordX}) scale(${scale})` }} >
                        {/* <div id="navMenu" className={(show) ? styles.navMenu : ""} > */}
                        {/* {(show) ? */}
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                                <a id={"link-projects"} href="/projectpages" className={(page === "projectpages") ? styles.active + " " + styles.smallNav : styles.smallNav} ></a>
                                <a id={"link-resume"} href="/resume" className={(page === "resume") ? styles.active + " " + styles.smallNav : styles.smallNav} ></a>
                                <a id={"link-contact"} href="/contact" className={(page === "contact") ? styles.active + " " + styles.smallNav : styles.smallNav} ></a>
                                {/* <a id={"link-projects"} href="/projectpages" className={(page === "projectpages") ? styles.active + " " + styles.smallNav : styles.smallNav} >PROJECTS</a>
                                <a id={"link-resume"} href="/resume" className={(page === "resume") ? styles.active + " " + styles.smallNav : styles.smallNav} >RESUME</a>
                                <a id={"link-contact"} href="/contact" className={(page === "contact") ? styles.active + " " + styles.smallNav : styles.smallNav} >CONTACT</a> */}
                                {/* <div id="navMask" ></div> */}
                            </div>
                        {/* : null  */}
                        {/* } */}
                        </div>
                    </div>
                    :
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <a id={"link-projects"} href="/projectpages" className={(page === "projectpages") ? styles.active + " " + styles.navLink : styles.navLink} >PROJECTS</a>
                        <a id={"link-resume"} href="/resume" className={(page === "projectpages") ? styles.active + " " + styles.navLink : styles.navLink} >RESUME</a>
                        <a id={"link-contact"} href="/contact" className={(page === "projectpages") ? styles.active + " " + styles.navLink : styles.navLink} >CONTACT</a>
                    </div>
                    }
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
