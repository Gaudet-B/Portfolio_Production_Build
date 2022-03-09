import { useState, useEffect } from 'react'

import styles from '../styles/project.menu.style.module.css'

import draft from '../assets/draft/sample_hero_1.png'
import pizza from '../assets/pizza/sample_hero_1.png'
import chata from '../assets/chata/sample_hero_1.png'
import portfolio from '../assets/portfolio/portfolio_hero.png'


const ProjectCard = props => {

    const { project, index, handleClick } = props
    
    const getSource = project => {
        if (project === "P!ZZA") return pizza
        else if (project === "MyDraft Partner") return draft
        else if (project === "chata") return chata
        else return portfolio
    }

    const [source, setSource] = useState(getSource(project.title))
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    const [loading, setLoading] = useState(true)
    const [isActive, setIsActive] = useState(false)

    const handleOver = e => {
        // e.target.firstElementChild.classList.add(styles.cardMaskActive)
        document.getElementById(`mask-${index}`).classList.add(styles.cardMaskActive)
        setTimeout(() => {
            setIsActive(true)
        }, 300);
    }
    const handleOut = e => {
        document.getElementById(`mask-${index}`).classList.remove(styles.cardMaskActive)
        setTimeout(() => {
            setIsActive(false)
        }, 300);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, [])

    return (
    (loading)?
        <div className={styles.projectCard} style={{ height: "300px", width: "400px" }}>
        {/* <div> */}
            <div className={styles.smallSpinner}></div>
            <div className={styles.smallLogoSpinner}></div>
        </div>
        :
        <div onMouseOver={handleOver} onMouseOut={handleOut} onClick={handleClick} className={styles.projectCard} style={{ height: "300px", width: "400px", backgroundImage: `url(${source})`, backgroundSize: "cover" }}>
            <div id={"mask-" + index} className={styles.cardMask}>
                {(project.title === "chata") ? 
                <div style={{ maxWidth: "80%", margin: "0 auto" }}>
                    <p style={(isActive) ? { color: "whitesmoke", fontSize: "1.2rem" } : { color: "transparent" }}>Front End:  React.js</p>
                    <p style={(isActive) ? { color: "whitesmoke", fontSize: "1.2rem", marginTop: "5px" } : { color: "transparent" }}>{project.languages}</p>
                </div>
                :
                <p className={styles.projectLanguages}  style={(isActive) ? { color: "whitesmoke" } : { color: "transparent" }}>{project.languages}</p>
                }
                <p className={styles.projectTitle} style={(isActive) ? { color: "rgba(0,143,17)" } : { color: "transparent" }}>{project.title}</p>
                <p className={styles.projectLink} style={(isActive) ? { color: "whitesmoke" } : { color: "transparent" }}>click for details</p>
            </div>
        </div>
    )
}

export default ProjectCard