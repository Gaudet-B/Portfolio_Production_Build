import { useState, useEffect } from 'react';

import Loading from './Loading';
import DemoGif from '../components/DemoGif'
// import DemoImg from '../components/DemoImg'

import draftHero from '../assets/draft/draft_hero.png'
import pizzaHero from '../assets/pizza/pizza_hero.png'
import mythHero from '../assets/myth/myth_hero.png'
import portfolioHero from '../assets/portfolio/portfolio_hero.png'

import pizzaDemoOne from '../assets/pizza/pizza-demo-one.gif'
import pizzaDemoTwo from '../assets/pizza/pizza-demo-two.gif'
import pizzaDemoThree from '../assets/pizza/pizza-demo-three.gif'

import draftVideo from '../assets/draft/draft-demo-gif.gif'

import chatVideo from '../assets/chata/chata-demo-0.gif'

import arrow from '../assets/down-arrow-icon-white.png'

import styles from './mobile.style.module.css'
// import { useEffect } from 'react';


const MobilePage = props => {

    const { loading, project, images, step, handleBack, handleNext } = props

    const [ show, setShow ] = useState(false)
    const [ open, setOpen ] = useState(false)

    const [ pizzaGif, setPizzaGif ] = useState(pizzaDemoOne)

    // returns the proper hero video based on which project is being displayed
    const selectVideo = project => {
        if (project === "MyDraft Partner") return draftVideo
        else if (project === "P!ZZA") return pizzaDemoOne
        else if (project === "chata") return chatVideo
        else if (project === "briangaudet.com") return false
    }
    
    // returns the proper hero image based on which project is being displayed
    const selectPhoto = project => {
        if (project === "MyDraft Partner") return draftHero
        else if (project === "P!ZZA") return pizzaHero
        else if (project === "chata") return mythHero
        else if (project === "briangaudet.com") return portfolioHero
    }
    // const [ source, setSource ] = useState(selectPhoto(project.title))
    // const [ video, setVideo ] = useState(selectVideo(project.title))

    const getPrevProject = (project) => {
        if (project === "MyDraft Partner") return "chata"
        else if (project === "P!ZZA") return "MyDraft Partner"
        else if (project === "chata") return "briangaudet.com"
        else if (project === "briangaudet.com") return "P!ZZA"
    }
    const getNextProject = (project) => {
        if (project === "MyDraft Partner") return "P!ZZA"
        else if (project === "P!ZZA") return "briangaudet.com"
        else if (project === "chata") return "MyDraft Partner"
        else if (project === "briangaudet.com") return "chata"
    }

    // 
    const prevProject = getPrevProject(project.title)
    const nextProject = getNextProject(project.title)

    const source = selectPhoto(project.title)
    const video = selectVideo(project.title)


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

    return (
        <div className={styles.projectsContainer}>

            <div className={styles.projectHeader}>
                <p style={{ fontSize: "3rem", fontWeight: "bold", margin: "18px 0px 14px 0px", letterSpacing: ".4rem" }}>{project.title}</p>
                <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px", color: "rgba(0, 143, 17, .7)", margin: "2rem 2rem" }}> {project.languages} </p>
                <p style={{ fontSize: "1.25rem", margin: "0px 5px 20px 5px", maxWidth: "70%", margin: "auto" }}>{project.summary}</p>
            </div>

            <div className={styles.projectGallery}>
                <p className={styles.header}>Gallery</p>
                <p className={styles.instruction}>click or tap on images to expand</p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "auto" }}>
                    {images[step].map((img, idx) => {
                        if (idx < 3) {
                        return(
                            // <img key={idx} index={idx} source={img} handleFocus={handleFocus} />
                            <div key={idx} id={"img" + "-" + (idx + 1)} onClick={handleFocus} className={styles.demo} style={{ backgroundImage: `url(${img})`, backgroundPosition: "center" }}>
                                <div className={styles.demoMask}></div>
                            </div>
                        )}
                    })}
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "auto" }}>
                    {images[step].map((img, idx) => {
                        if (idx > 2) {
                        return(
                            // <img key={idx} index={idx} source={img} handleFocus={handleFocus} />
                            <div key={idx} id={"img" + "-" + (idx + 1)} onClick={handleFocus} className={styles.demo} style={{ backgroundImage: `url(${img})`, backgroundPosition: "center" }}>
                                <div className={styles.demoMask}></div>
                            </div>
                        )}
                    })}
                </div>
            </div>

            <div className={styles.projectDetails}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", minWidth: "300px", maxWidth: "600px", margin: "1em auto" }}>
                    <p style={{ fontSize: "14pt", textDecoration: "underline", marginRight: "2rem" }}>My Role(s):</p>
                    <p style={{ fontSize: "14pt" }}>{project.myRole}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", minWidth: "300px", maxWidth: "600px", margin: "1em auto" }} >
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "end", marginLeft: "1rem" }}>
                        <p style={{ fontSize: "14pt", textDecoration: "underline" }} >Technologies</p>
                        <p style={{ fontSize: "14pt", textDecoration: "underline" }} >Used:</p>
                    </div>
                    <div style={{ maxWidth: "55%", fontSize: "14pt", textAlign: "start" }}>
                        <p>{project.technologies}</p>
                    </div>
                </div>
                
                <div style={{ height: "0px", border: "1px solid rgba(0, 143, 17, .9)", borderRadius: "30%", backgroundColor: "rgba(0, 143, 17, .9)", width: "80%", margin: "3em auto" }}></div>
                
                <div>
                    <p style={{fontSize: "14pt", marginTop: "10px", marginBottom: "5px", textDecoration: "underline" }}><strong>Application Details:</strong></p>
                    
                    {(project.details.length > 1) ?
                    <ul style={{ textAlign: "left", padding: "0", fontSize: "12pt", maxWidth: "75%", margin: "2rem auto", paddingLeft: "1rem" }}>
                
                    {/* display list of project details */}
                    {project.details.map((detail, idx) => {
                        if (project.title === "briangaudet.com" && idx === 0) {
                            let short = detail.slice(0, 112)
                            return(
                                <li key={idx} style={{ margin: "10px 0px" }}>{short}</li>
                            )
                        } else {
                        return (
                            <li key={idx} style={{ margin: "10px 0px" }}>{detail}</li>
                            )}
                        })}
                    </ul>

                    :
                    // if only one detail, display as text instead of bulleted list
                    <div>
                    <br/><p style={{ width: "fit-content", margin: "auto" }}>{project.details}</p><br/>
                    </div>
                    }
                </div>
                
                <div style={{ height: "0px", border: "1px solid rgba(0, 143, 17, .9)", borderRadius: "30%", backgroundColor: "rgba(0, 143, 17, .9)", width: "80%", margin: "2em auto" }}></div>
                
                <a href={project.github} target="_blank" className={styles.githubLink}>Github Repo</a>
                
            </div>

            <div id={"demo" + "-" + step} className={styles.projectDemo}>
                    <p className={styles.header}>Demo</p>
                    {/* <p className={styles.instruction}>demo unavailable on mobile</p> */}

                    {/* {(project.title === "briangaudet.com" || project.title === "Myth Game") ?  */}
                    {(project.title === "briangaudet.com") ? 
                    <div>
                        <p className={styles.instruction}>demo currently not available</p>
                        {/* <DemoImg index={0} source={source} handleFocus={() => null} /> */}
                    </div>
                    : (!show) ? <p onClick={openDemo} className={styles.instruction} style={{ cursor: "pointer" }}>click to view demo</p> :
                        (!video) ? <DemoGif card={step} width={80} source={source} closeDemo={closeDemo} />
                        : (project.title === "P!ZZA") ?
                        <DemoGif card={step} width={30} source={pizzaGif} closeDemo={closeDemo} />
                        :
                        // <Video video={video} />
                        <DemoGif card={step} width={80} source={video} closeDemo={closeDemo} />
                        
                    }
            </div>

            <div className={styles.projectFooter}>
                <div id="left" onClick={handleBack} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft: "0", cursor: "pointer" }}>
                    <div className={styles.left}>
                        <img src={arrow} alt="right chevron" height={"30"} width={"50"} />
                    </div>
                    <div className={styles.projectLink} style={{ borderRadius: "0px 10px 10px 0px" }}>
                        <p style={{ marginTop: "5px" }}>previous</p>
                        <p style={{ marginBottom: "10px" }}>project</p>
                        {/* <p style={{ fontWeight: "bold" }}>&#123; {prevProject} &#125;</p> */}
                    </div>
                </div>
                <div id="right" onClick={handleNext} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginRight: "0", cursor: "pointer"}}>
                    <div className={styles.projectLink} style={{ borderRadius: "10px 0px 0px 10px" }}>
                        <p style={{ marginTop: "5px" }}>next</p>
                        <p style={{ marginBottom: "10px" }}>project</p>
                        {/* <p style={{ fontWeight: "bold" }}>&#123; {nextProject} &#125;</p> */}
                    </div>
                    <div className={styles.right}>
                        <img src={arrow} alt="right chevron" height={"30"} width={"50"} /></div> 
                </div>
            </div>

        </div>
    )
}

export default MobilePage;
