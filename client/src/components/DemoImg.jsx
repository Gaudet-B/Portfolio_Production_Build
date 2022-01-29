import React from 'react'
import styles from '../components/carousel.style.module.css'

const DemoImg = props => {

    const { index, source, handleFocus } = props

    const handleFocus2 = e => {
        e.target.parentNode.style.height = "400px"
        e.target.parentNode.style.width = "400px"
    }

    return (
    <div id={"img" + "-" + (index + 1)} onClick={handleFocus} className={styles.demo + " " + styles.demoInactive} style={{ backgroundImage: `url(${source})`, backgroundPosition: "center" }} >
        <div className={styles.demoMask}></div>
    </div>
    )
}

export default DemoImg
