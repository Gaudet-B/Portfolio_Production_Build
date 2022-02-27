import React from 'react'
import styles from '../styles/carousel.style.module.css'

const DemoImg = props => {

    const { index, source, handleFocus, project } = props

    const handleFocus2 = e => {
        e.target.parentNode.style.height = "400px"
        e.target.parentNode.style.width = "400px"
    }
    if (project === "P!ZZA") {
        return (
        <div id={"img" + "-" + (index + 1)} onClick={handleFocus} className={styles.demo + " " + styles.inactiveP} style={{ backgroundImage: `url(${source})`, backgroundPosition: "center" }} >
            <div className={styles.demoMask}></div>
        </div>
    )} else {
        return (
            <div id={"img" + "-" + (index + 1)} onClick={handleFocus} className={styles.demo + " " + styles.inactiveL} style={{ backgroundImage: `url(${source})`, backgroundPosition: "center" }} >
            <div className={styles.demoMask}></div>
        </div>
        )
    }
}

export default DemoImg
