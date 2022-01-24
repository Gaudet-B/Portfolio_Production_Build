import { useState } from 'react'

import logo from '../assets/icons/BG_logo_icon_short_light.png'
import downArrow from '../assets/down-arrow-icon-white.png'
import upArrow from '../assets/up-arrow-icon-white.png'

const Navigation = props => {

    const { left, right, windowWidth } = props

    // const [ show, setShow ] = useState(false)

    // const handleShow = () => setShow(!show)

    // const handleLogout = () => {
    //     sessionStorage.removeItem("id")
    //     setLoggedIn(false)
    //     setShow(!show)
    // }

    // link variables
    var leftLink, rightLink
    // exception handling for "home" path
    if (left == "HOME") {
        leftLink = "/"
    } else {
        leftLink = left.toLowerCase()
    }
    // exception handling for "home" path
    if (right == "HOME") {
        rightLink = "/"
    } else {
        rightLink = right.toLowerCase()
    }

    return (
        <div style={{ height: "fit-content", display: "flex", flexDirection: "column", padding: "20px 55px 0pc 55px" }} >
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
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "10px" }}>
                        <a href="/projectpages" style={{ margin: "0px 12px", textDecoration: "none" }} >PROJECTS</a>
                        <a href="/resume" style={{ margin: "0px 12px", textDecoration: "none" }} >RESUME</a>
                        <a href="/contact" style={{ margin: "0px 12px", textDecoration: "none" }} >CONTACT</a>
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
