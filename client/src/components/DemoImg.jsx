import React from 'react'
import styles from '../components/carousel.style.module.css'

const DemoImg = props => {

    const { index, source, handleFocus } = props
    return (
    <div id={"img" + "-" + (index + 1)} onClick={handleFocus} className={styles.demo} style={{ backgroundImage: `url(${source})`, backgroundPosition: "center" }} >
        <div className={styles.demoMask}></div>
    </div>
    )
}

export default DemoImg
