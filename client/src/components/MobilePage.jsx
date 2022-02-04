import { useState } from 'react';
import Loading from './Loading';

import pizzaDemoOne from '../assets/pizza/pizza-demo-one.gif'
import pizzaDemoTwo from '../assets/pizza/pizza-demo-two.gif'
import pizzaDemoThree from '../assets/pizza/pizza-demo-three.gif'

import styles from './mobile.style.module.css'
import { useEffect } from 'react';

const MobilePage = props => {

    const { loading, project, images, step, handleBack, handleNext } = props

    const [ show, setShow ] = useState(false)
    const [ open, setOpen ] = useState(false)

    const [ pizzaGif, setPizzaGif ] = useState(pizzaDemoOne)


    const openDemo = () => {
        let demo = document.getElementById(`demo-${step}`)
        demo.classList.remove(styles.contract)
        demo.classList.add(styles.expand)
        setTimeout(() => {
            if (project.title === "P!ZZA") {
                swapGifs()
            }
            setShow(true)
            let image = document.getElementById(`image-${step}`)
            image.classList.remove(styles.contract)
            image.classList.add(styles.expand)
        }, 100)
        setOpen(true)
    }

    const closeDemo = () => {
        let demo = document.getElementById(`demo-${step}`)
        let image = document.getElementById(`image-${step}`)
        demo.classList.remove(styles.expand)
        image.classList.remove(styles.expand)
        demo.classList.add(styles.contract)
        image.classList.add(styles.contract)
        setTimeout(() => setShow(false), 900)
        setOpen(false)
    }

    const handleFocus = e => {

        let activeStyle, inactiveStyle
        if (project.title === "P!ZZA") {
            activeStyle = styles.activeImgPortrait
            inactiveStyle = styles.inactiveP
        } else {
            activeStyle = styles.activeImgLandscape
            inactiveStyle = styles.inactiveL
        }
        // console.log(e.target.id)
        // console.log(typeof(e.target.id))

        // console.log(activeStyle)
        // console.log(inactiveStyle)

        let img = e.target.parentNode

        if (e.target.id != "") {
            e.target.classList.add(inactiveStyle)
            e.target.classList.remove(activeStyle)
            // e.target.classList.remove(styles.activeImgPortrait, styles.activeImgLandscape)
            // e.target.firstElementChild.classList.add(styles.demoMask)
            setTimeout(() => e.target.firstElementChild.classList.add(styles.demoMask), 500)
            e.target.firstElementChild.id = ""
            return
        }

        let mask = document.getElementById("activeMask")
        console.log(mask)
        if (mask != null) {
            let image = mask.parentNode
            image.classList.add(inactiveStyle)
            image.classList.remove(activeStyle)
            // image.classList.remove(styles.activeImgPortrait, styles.activeImgLandscape)
            setTimeout(() => mask.classList.add(styles.demoMask), 500);
            mask.id = ""
            setTimeout(() => {
                img.classList.remove(inactiveStyle)
                img.firstElementChild.classList.remove(styles.demoMask)
                img.classList.add(activeStyle)
                // if (project.title === "P!ZZA") {
                //     img.classList.add(styles.activeImgPortrait)
                // } else {
                //     img.classList.add(styles.activeImgLandscape)
                // }
                e.target.setAttribute("id", "activeMask")
            }, 100);
        } else {
            img.classList.remove(inactiveStyle)
            img.firstElementChild.classList.remove(styles.demoMask)
            img.classList.add(activeStyle)
            // if (project.title === "P!ZZA") {
            //     img.classList.add(styles.activeImgPortrait)
            // } else {
            //     img.classList.add(styles.activeImgLandscape)
            // }
            e.target.setAttribute("id", "activeMask")
        }
        return
    }

    const swapGifs = () => {
        // while (project.title === "P!ZZA") {
            setTimeout(() => setPizzaGif(pizzaDemoTwo), 6100)
            setTimeout(() => setPizzaGif(pizzaDemoThree), 13100)
        // } return
    }

    useEffect(() => {
        console.log(images)
    })

    if (loading) {
        return(
            <Loading />
        )
    } else {
        return (
        <div className={styles.projectsContainer}>

            <div className={styles.projectHeader}>
                <p style={{ fontSize: "3.25rem", fontWeight: "bold", margin: "18px 0px 14px 0px", letterSpacing: ".4rem" }}>{project.title}</p>
                <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px", color: "rgba(0, 143, 17, .7)", margin: "2rem 0rem" }}> {project.languages} </p>
                <p style={{ fontSize: "1.25rem", margin: "0px 5px 20px 5px", maxWidth: "40%", margin: "auto" }}>{project.summary}</p>
            </div>

            <div className={styles.projectGallery}>
                <p className={styles.header}>Gallery</p>
                <p className={styles.instruction}>click or tap on images to expand</p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "auto" }}>
                    {images[step].map((img, idx) => {
                        if (idx < 3) {
                        return(
                            <img key={idx} index={idx} source={img} handleFocus={handleFocus} />
                            // <div key={idx} id={"img" + "-" + (idx + 1)} onClick={handleFocus} className={styles.demo} style={{ backgroundImage: `url(${img})`, backgroundPosition: "center" }}>
                            //     <div className={styles.demoMask}></div>
                            // </div>
                        )}
                    })}
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "auto" }}>
                    {images[step].map((img, idx) => {
                        if (idx > 2) {
                        return(
                            <img key={idx} index={idx} source={img} handleFocus={handleFocus} />
                            // <div key={idx} id={"img" + "-" + (idx + 1)} onClick={handleFocus} className={styles.demo} style={{ backgroundImage: `url(${img})`, backgroundPosition: "center" }}>
                            //     <div className={styles.demoMask}></div>
                            // </div>
                        )}
                    })}
                </div>
            </div>

            <div className={styles.projectDetails}>

            </div>

            <div className={styles.projectDemo}>

            </div>

            <div className={styles.projectFooter}>

            </div>

        </div>
        )
    }
}

export default MobilePage;
