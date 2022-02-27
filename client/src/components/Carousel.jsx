import { useState } from 'react'
import styles from '../styles/carousel.style.module.css'
import projectStyles from '../styles/new.projects.style.module.css'

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
    const { projects, images, windowHeight, windowWidth, setFillerStyle } = props

    // function to rotate the carousel
    const spin = e => {
        let container = document.getElementById("pjContainer")
        container.scrollTo({top: 0, behavior: "smooth"})
        let id
        // console.log(e.target.tagName)
        if (e.target.tagName === "P") {
            id = e.target.parentNode.parentNode.id
        } else if (e.target.tagName === "DIV") {
            id = e.target.parentNode.id
        }
        // console.log(id)
        // document.getElementById("")
        setFillerStyle(projectStyles.filler + " " + projectStyles.flicker)
        zoom()
        setTimeout(() => {
            
            let spinner = document.getElementById("spinner");
            // let id = e.target.id
            if (id == "left") {
                setLeftAngle(leftAngle + 90)
                setRightAngle(rightAngle + 90)
                spinner.setAttribute("style", `-webkit-transform: rotateY(${leftAngle}deg); -moz-transform: rotateY(${leftAngle}deg); transform: rotateY(${leftAngle}deg);`)
            } else {
                setRightAngle(rightAngle - 90)
                setLeftAngle(leftAngle - 90)
                spinner.setAttribute("style", `-webkit-transform: rotateY(${rightAngle}deg); -moz-transform: rotateY(${rightAngle}deg); transform: rotateY(${rightAngle}deg);`)
            }
            
        }, 500)

        setTimeout(() => setFillerStyle(projectStyles.filler), 4000)
    }

    // function to zoom before rotating carousel
    const zoom = () => {
        let carousel = document.getElementById("carousel")
        carousel.style.transform = "scale(0.6)"
        setTimeout(() => {
            carousel.style.transform = "scale(1.0)"
        }, 1500);
    }

    // var leftArrow = classNames([styles.span, styles.spanLeft])
    // var rightArrow = classNames([styles.span, styles.spanRight])

    return (
        <div className="" >

            <div id="carousel" className={styles.carousel} style={{ height: `${windowHeight}px` }} >

                <div id="spinner" className={styles.spinner} >

                    {/* {projects.map((project, idx) => {
                        if (idx < 4) return(
                            <ProjectPage index={idx} project={project} images={images[idx]} responsive={false} spin={spin} />
                        )
                    })} */}

                    <ProjectPage index={0} project={projects[0]} images={images[0]} reponsive={false} spin={spin} />
                    <ProjectPage index={1} project={projects[3]} images={images[3]} reponsive={false} spin={spin} />
                    <ProjectPage index={2} project={projects[2]} images={images[2]} reponsive={false} spin={spin} />
                    <ProjectPage index={3} project={projects[1]} images={images[1]} reponsive={false} spin={spin} />

                </div>
            </div>

            {/* <div id="spanLeft" className={leftArrow}  onClick={spin}>&lt;</div>
            <div id="spanRight" className={rightArrow}  onClick={spin} style={(windowWidth < 1201 && windowWidth > 800) ? { marginRight: "18px" } : {}} >&gt;</div> */}
        </div>
    )
}

export default Carousel