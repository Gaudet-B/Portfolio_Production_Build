import { useEffect, useState } from 'react'

// import Demo from '../components/Demo'
import DemoGif from '../components/DemoGif'
import DemoImg from '../components/DemoImg'
import Video from '../components/Video'

import draftHero from '../assets/draft/draft_hero.png'
import pizzaHero from '../assets/pizza/pizza_hero.png'
import mythHero from '../assets/myth/myth_hero.png'
import portfolioHero from '../assets/portfolio/portfolio_hero.png'

import draftVideo from '../assets/draft/draft-demo-gif.gif'
import chataVideo from '../assets/chata/chata-demo-0.gif'
// import pizzaVideo from '../assets/pizza/pizza-video-main.webm'
// import mythVideo from ''
// import portfolioVideo from ''

import chataDemoOne from '../assets/chata/chata-demo-one.gif'
import chataDemoTwo from '../assets/chata/chata-demo-two.gif'

import pizzaDemoOne from '../assets/pizza/pizza-demo-one.gif'
import pizzaDemoTwo from '../assets/pizza/pizza-demo-two.gif'
import pizzaDemoThree from '../assets/pizza/pizza-demo-three.gif'

import arrow from '../assets/icons/chevron-icon-light.png'

import styles from '../styles/carousel.style.module.css'


const ProjectPage = props => {

    const { index, project, images, responsive, spin } = props

    const [ card, setCard ] = useState()
    const [ cardDiv, setCardDiv ] = useState()
    const [ show, setShow ] = useState(false)
    const [ open, setOpen ] = useState(false)

    // returns the proper hero video based on which project is being displayed
    const selectVideo = project => {
        if (project === "MyDraft Partner") return draftVideo
        else if (project === "P!ZZA") return pizzaDemoOne
        else if (project === "chata") return chataDemoOne
        else if (project === "briangaudet.com") return false
    }
    // stores the gif in local state
    const [ video, setVideo ] = useState(selectVideo(project.title))

    // state variables for demo .gif
    const [ pizzaGif, setPizzaGif ] = useState(pizzaDemoOne)
    const [ chataGif, setChataGif ] = useState(chataDemoOne)

    // returns the proper hero image based on which project is being displayed
    const selectPhoto = project => {
        if (project === "MyDraft Partner") return draftHero
        else if (project === "P!ZZA") return pizzaHero
        else if (project === "chata") return mythHero
        else if (project === "briangaudet.com") return portfolioHero
    }
    // stores the image in local state
    const source = selectPhoto(project.title)

    
    const getCard = (num) => {
        if (num === 0) {
            setCard("one")
            setCardDiv(styles.card0Div)
        }
        else if (num === 1) {
            setCard("two")
            setCardDiv(styles.card1Div)
        }
        else if (num === 2)  {
            setCard("three")
            setCardDiv(styles.card2Div)
        }
        else {
            setCard("four")
            setCardDiv(styles.card3Div)
        }
    }

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

    // 
    const swapPizza = () => {
        // while (project.title === "P!ZZA") {
            setTimeout(() => setPizzaGif(pizzaDemoTwo), 6100)
            setTimeout(() => setPizzaGif(pizzaDemoThree), 13100)
        // } return
    }

    const swapChata = () => {
        setTimeout(() => setChataGif(chataDemoTwo), 6100)
    }

    // 
    const openDemo = () => {
        closeGallery()
        let demo = document.getElementById(`demo-${card}`)
        demo.classList.remove(styles.contract)
        demo.classList.add(styles.expand)
        setTimeout(() => {
            if (project.title === "P!ZZA") {
                swapPizza()
            } else if (project.title === "chata") {
                swapChata()
            }
            setShow(true)
            let image = document.getElementById(`image-${card}`)
            image.classList.remove(styles.contract)
            image.classList.add(styles.expand)
        }, 100)
        setOpen(true)
    }

    const closeDemo = () => {
        let demo = document.getElementById(`demo-${card}`)
        let image = document.getElementById(`image-${card}`)
        if (image === null) return
        demo.classList.remove(styles.expand)
        image.classList.remove(styles.expand)
        demo.classList.add(styles.contract)
        image.classList.add(styles.contract)
        setTimeout(() => setShow(false), 900)
        setOpen(false)
    }
    
    const restartDemo = () => {
        // let image = document.getElementById(`image-${card}`)
        if (project.title === "chata") {
            setChataGif(chataDemoOne)
            swapChata()
        } else if (project.title === "P!ZZA") {
            setPizzaGif(pizzaDemoOne)
            swapPizza()
        }
    }

    const handleFocus = e => {

        closeDemo()

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
        // console.log(mask)
        if (mask != null) {
            let image = mask.parentNode
            image.classList.add(inactiveStyle)
            image.classList.remove(activeStyle)
            // image.classList.remove(styles.activeImgPortrait, styles.activeImgLandscape)
            setTimeout(() => mask.classList.add(styles.demoMask), 500)
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

    const closeGallery = () => {

        let activeStyle, inactiveStyle
        if (project.title === "P!ZZA") {
            activeStyle = styles.activeImgPortrait
            inactiveStyle = styles.inactiveP
        } else {
            activeStyle = styles.activeImgLandscape
            inactiveStyle = styles.inactiveL
        }
        
        let gallery1 = document.getElementById(`${project.title}-gallery-row-1`).childNodes
        let gallery2 = document.getElementById(`${project.title}-gallery-row-2`).childNodes

        let mask = document.getElementById("activeMask")
        if (mask != null) {
            mask.id = ""
            setTimeout(() => mask.classList.add(styles.demoMask), 500)
        }

        for (let i = 0; i < gallery1.length; i++) {
            gallery1[i].classList.add(inactiveStyle)
            gallery1[i].classList.remove(activeStyle)
        }

        for (let i = 0; i < gallery2.length; i++) {
            gallery2[i].classList.add(inactiveStyle)
            gallery2[i].classList.remove(activeStyle)
        }
    }

    const handleSpin = e => {
        closeGallery()
        if (open) {
            // if (project.title === "MyDraft Partner" || project.title === "P!ZZA") {
                closeDemo()
            // }
        }
        setTimeout(() => spin(e), 500)
    }

    useEffect(() => {
        getCard(index)
    }, [])

    return (
        <div className={styles.cardDiv + " " + cardDiv}>
            <div id={"card-" + card} className={styles.card} >
                <div className={styles.cardBack}>

                </div>
                <div className={styles.cardFront} style={{  }}>
                    
                    <div style={{ margin: "4rem 0rem" }}>
                        <p style={{ fontSize: "3.25rem", fontWeight: "bold", margin: "18px 0px 14px 0px", letterSpacing: ".4rem" }}>{project.title}</p>
                        {/* <p style={{ fontSize: "16pt", fontWeight: "bold", letterSpacing: ".18em", color: "rgba(255,255,255,.75)", marginTop: "0px" }}>{project.myRole}</p> */}
                        {(project.title === "chata") ? 
                        <div>
                            <p style={{ fontSize: "1.75rem", fontWeight: "bold", color: "rgba(0, 143, 17, .7)", margin: "1rem 0" }}> {project.languages} </p>
                            <p style={{ fontSize: "1.75rem", fontWeight: "bold", color: "rgba(0, 143, 17, .7)", margin: "1rem 0 2rem 0" }}>Front End:  React.js</p>
                        </div>
                        :
                        <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px", color: "rgba(0, 143, 17, .7)", margin: "2rem 0rem" }}> {project.languages} </p>
                        }
                        <p style={{ fontSize: "1.25rem", margin: "0px 5px 20px 5px", maxWidth: "40%", margin: "auto" }}>{project.summary}</p>
                    </div>
                    <div style={{ width: "100%", background: "linear-gradient(to left, #262626 0%, #262626 2%, rgb(26, 26, 26) 8%, rgb(26, 26, 26) 92%, #262626 98%, #262626 100%)", padding: "35px 0px", display: "flex", flexDirection: "column" }}>
                    <p className={styles.header}>Gallery</p>
                    <p className={styles.instruction}>click or tap on images to expand</p>
                    <div id={`${project.title}-gallery-row-1`} style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "auto" }}>
                        {images.map((img, idx) => {
                            if (idx < 3) {
                            return(
                                <DemoImg key={idx} index={idx} source={img} handleFocus={handleFocus} project={project.title} />
                                // <div key={idx} id={"img" + "-" + (idx + 1)} onClick={handleFocus} className={styles.demo} style={{ backgroundImage: `url(${img})`, backgroundPosition: "center" }}>
                                //     <div className={styles.demoMask}></div>
                                // </div>
                            )}
                        })}
                    </div>
                    <div id={`${project.title}-gallery-row-2`} style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "auto" }}>
                        {images.map((img, idx) => {
                            if (idx > 2) {
                            return(
                                <DemoImg key={idx} index={idx} source={img} handleFocus={handleFocus} project={project.title} />
                                // <div key={idx} id={"img" + "-" + (idx + 1)} onClick={handleFocus} className={styles.demo} style={{ backgroundImage: `url(${img})`, backgroundPosition: "center" }}>
                                //     <div className={styles.demoMask}></div>
                                // </div>
                            )}
                        })}
                    </div>

                    </div>
                    
                    <div style={{ height: "inherit", minHeight: "fit-content", padding: "2em 0", display: "flex", flexDirection: "column", backgroundColor: "#262626"  }}>
                        
                        {/* <p className={styles.backTitle} >{project.title}</p> */}
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", minWidth: "300px", maxWidth: "600px", margin: "1em auto" }}>
                            <p style={{ fontSize: "14pt", textDecoration: "underline", marginRight: "2rem" }}>My Role(s):</p>
                            <p style={{ fontSize: "14pt" }}>{project.myRole}</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", minWidth: "300px", maxWidth: "600px", margin: "1em auto" }} >
                            <p style={{ fontSize: "14pt", textDecoration: "underline" }} >Technologies Used:</p>
                            <div style={{ maxWidth: "60%", fontSize: "14pt", textAlign: "start" }}>
                                <p>{project.technologies}</p>
                            </div>
                        </div>
                        
                        <div style={{ height: "0px", border: "1px solid rgba(0, 143, 17, .9)", borderRadius: "30%", backgroundColor: "rgba(0, 143, 17, .9)", width: "80%", margin: "3em auto" }}></div>
                        
                        <div>
                            <p style={{fontSize: "14pt", marginTop: "10px", marginBottom: "5px", textDecoration: "underline" }}><strong>Application Details:</strong></p>
                            
                            {(project.details.length > 1) ?
                            <ul style={ (!responsive) ? { textAlign: "left", maxWidth: "75%", margin: "2rem auto" } : { textAlign: "left", padding: "0px 6px 0px 20px", fontSize: "11pt", maxWidth: "75%", margin: "2rem auto" } }>
                        
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
                        
                        <div style={{ height: "0px", border: "1px solid rgba(0, 143, 17, .9)", borderRadius: "30%", backgroundColor: "rgba(0, 143, 17, .9)", width: "80%", margin: "3em auto" }}></div>
                        
                        <a href={project.github} target="_blank" className={styles.githubLink}>Github Repo</a>
                        
                        <div style={{ width: "100%", background: "linear-gradient(to left, #262626 0%, #262626 2%, rgb(26, 26, 26) 8%, rgb(26, 26, 26) 92%, #262626 98%, #262626 100%)", padding: "35px 0px", height: "fit-content", margin: "1rem auto" }}>
                            
                            <div id={"demo" + "-" + card} className={styles.demoContainer}>

                            <p className={styles.header}>Demo</p>

                            {/* {(project.title === "briangaudet.com" || project.title === "chata") ?  */}
                            {(project.title === "briangaudet.com") ? 
                            <div>
                                <p className={styles.instruction}>demo currently not available</p>
                                {/* <DemoImg index={0} source={source} handleFocus={() => null} /> */}
                            </div>
                            : (!show) ? <p onClick={openDemo} className={styles.instruction} style={{ cursor: "pointer" }}>click to view demo</p> :
                                (!video) ? <DemoGif card={card} width={80} source={source} closeDemo={closeDemo} />
                                : (project.title === "P!ZZA") ?
                                <DemoGif card={card} width={30} source={pizzaGif} closeDemo={closeDemo} restartDemo={restartDemo} />
                                // <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
                                //     <DemoGif source={pizzaGif} closeDemo={closeDemo} />
                                //     <DemoGif source={pizzaDemoOne} />
                                //     <DemoGif source={pizzaDemoTwo} />
                                //     <img src={pizzaDemoOne} alt="placeholder" style={{ maxHeight: "960px", maxWidth: "1006px" }} />
                                //     <img src={pizzaDemoTwo} alt="placeholder" style={{ maxHeight: "960px", maxWidth: "1006px" }} />
                                // </div>
                                : (project.title === "chata") ?
                                <DemoGif card={card} width={80} source={chataGif} closeDemo={closeDemo} restartDemo={restartDemo} />
                                :
                                // <Video video={video} />
                                <DemoGif card={card} width={80} source={video} closeDemo={closeDemo} restartDemo={restartDemo} />
                                
                            }

                            </div>
                        </div>
                        
                        {/* <Demo project={project} images={images} responsive={responsive} /> */}
                        {/* <p className={styles.flipLink} onClick={() => flipCard(flip)}><strong> || </strong> flip back to the front of card <strong> || </strong></p> */}
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", margin: " 2em auto" }}>
                            <div id="left" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginLeft: "50px" }}>
                                <div className={styles.left}>
                                    <img src={arrow} alt={"left chevron"} height={"62"} width={"45"} />
                                </div>
                                <div onClick={handleSpin} className={styles.projectLink} style={{ borderRadius: "0px 10px 10px 0px", cursor: "pointer" }}>
                                    <p style={{ marginTop: "5px" }}>previous</p>
                                    <p style={{ marginBottom: "10px" }}>project</p>
                                    <p style={{ fontWeight: "bold" }}>&#123; {prevProject} &#125;</p>
                                </div>
                            </div>
                            <div id="right" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginRight: "50px" }}>
                                <div onClick={handleSpin} className={styles.projectLink} style={{ borderRadius: "10px 0px 0px 10px", cursor: "pointer" }}>
                                    <p style={{ marginTop: "5px" }}>next</p>
                                    <p style={{ marginBottom: "10px" }}>project</p>
                                    <p style={{ fontWeight: "bold" }}>&#123; {nextProject} &#125;</p>
                                </div>
                                <div className={styles.right}>
                                    <img src={arrow} alt="right chevron" height={"62"} width={"45"} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
