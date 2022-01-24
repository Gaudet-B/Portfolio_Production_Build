import { useState } from 'react'
import styles from '../components/carousel.style.module.css'

import ProjectPage from '../components/ProjectPage'


const Carousel = props => {

    // import classnames utility --> https://github.com/JedWatson/classnames //
    const classNames = require("classnames")

    // starting angles for carousel rotation
    const [leftAngle, setLeftAngle] = useState(90)
    const [rightAngle, setRightAngle] = useState(-90)

    // starting angles for card flipping
    const [cardOneAngle, setCardOneAngle] = useState(180)
    const [cardTwoAngle, setCardTwoAngle] = useState(180)
    const [cardThreeAngle, setCardThreeAngle] = useState(180)
    const [cardFourAngle, setCardFourAngle] = useState(180)

    // pull projects array and images array from props
    const { projects, images, windowWidth } = props

    // function to rotate the carousel
    const spin = e => {
        zoom()
        setTimeout(() => {
            
            let spinner = document.getElementById("spinner");
            let id = e.target.id
            if (id == "spanLeft") {
                setLeftAngle(leftAngle + 90)
                setRightAngle(rightAngle + 90)
                spinner.setAttribute("style", `-webkit-transform: rotateY(${leftAngle}deg); -moz-transform: rotateY(${leftAngle}deg); transform: rotateY(${leftAngle}deg);`)
            } else {
                setRightAngle(rightAngle - 90)
                setLeftAngle(leftAngle - 90)
                spinner.setAttribute("style", `-webkit-transform: rotateY(${rightAngle}deg); -moz-transform: rotateY(${rightAngle}deg); transform: rotateY(${rightAngle}deg);`)
            }

        }, 1500);
    }

    // function to zoom before rotating carousel
    const zoom = () => {
        let carousel = document.getElementById("carousel")
        carousel.style.transform = "scale(0.5)"
        setTimeout(() => {
            carousel.style.transform = "scale(1.0)"
        }, 2800);
    }

    var leftArrow = classNames([styles.span, styles.spanLeft])
    var rightArrow = classNames([styles.span, styles.spanRight])

    return (
        <div className={styles.container} >
            <div id="carousel" className={styles.carousel} >

                <div id="spinner" className={styles.spinner} >

                    {projects.map((project, idx) => {
                        if (idx < 4) return(
                            <ProjectPage index={idx} project={project} images={images[idx]} responsive={false} />
                        )
                    })}

                </div>
            </div>

            <div id="spanLeft" className={leftArrow}  onClick={spin}>&lt;</div>
            <div id="spanRight" className={rightArrow}  onClick={spin} style={(windowWidth < 1201 && windowWidth > 800) ? { marginRight: "18px" } : {}} >&gt;</div>
        </div>
    )
}

export default Carousel