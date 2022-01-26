import { useEffect, useState } from 'react'

import Demo from '../components/Demo'
import DemoGif from '../components/DemoGif'
import DemoImg from '../components/DemoImg'
import Video from '../components/Video'

import draftHero from '../assets/draft/draft_hero.png'
import pizzaHero from '../assets/pizza/pizza_hero.png'
import mythHero from '../assets/myth/myth_hero.png'
import portfolioHero from '../assets/portfolio/portfolio_hero.png'

import draftVideo from '../assets/draft/draft-demo-gif.gif'
import pizzaVideo from '../assets/pizza/pizza-video-main.webm'
// import mythVideo from ''
// import portfolioVideo from ''
import pizzaDemoOne from '../assets/pizza/pizza-demo-one.gif'
import pizzaDemoTwo from '../assets/pizza/pizza-demo-two.gif'
import pizzaDemoThree from '../assets/pizza/pizza-demo-three.gif'

import styles from '../components/carousel.style.module.css'


const ProjectPage = props => {

    const { index, project, images, responsive, spin } = props

    const [ card, setCard ] = useState()
    const [ cardDiv, setCardDiv ] = useState()
    const [ show, setShow ] = useState(false)

    // returns the proper hero video based on which project is being displayed
    const selectVideo = project => {
        if (project === "MyDraft Partner") return draftVideo
        else if (project === "P!ZZA") return pizzaDemoOne
        else if (project === "Myth Game") return false
        else if (project === "briangaudet.com") return false
    }

    const [ video, setVideo ] = useState(selectVideo(project.title))
    const [ pizzaGif, setPizzaGif ] = useState(pizzaDemoOne)

    // returns the proper hero image based on which project is being displayed
    const selectPhoto = project => {
        if (project === "MyDraft Partner") return draftHero
        else if (project === "P!ZZA") return pizzaHero
        else if (project === "Myth Game") return mythHero
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
        if (project === "MyDraft Partner") return "briangaudet.com"
        else if (project === "P!ZZA") return "MyDraft Partner"
        else if (project === "Myth Game") return "P!ZZA"
        else if (project === "briangaudet.com") return "Myth Game"
    }
    const getNextProject = (project) => {
        if (project === "MyDraft Partner") return "P!ZZA"
        else if (project === "P!ZZA") return "Myth Game"
        else if (project === "Myth Game") return "briangaudet.com"
        else if (project === "briangaudet.com") return "MyDraft Partner"
    }

    // 
    const prevProject = getPrevProject(project.title)
    const nextProject = getNextProject(project.title)

    // 
    const swapGifs = () => {
        // while (project.title === "P!ZZA") {
            setTimeout(() => setPizzaGif(pizzaDemoTwo), 6100)
            setTimeout(() => setPizzaGif(pizzaDemoThree), 13100)
        // } return
    }

    // 
    const openDemo = () => {
        let demo = document.getElementById(`demo-${card}`)
        demo.classList.add(styles.expand)
        setTimeout(() => {
            if (project.title === "P!ZZA") {
                swapGifs()
            }
            setShow(true)
        }, 1000)
    }

    const handleFocus = () => {
        // ===> INSERT LOGIC TO EXPAND IMAGE SIZE - WILL NEED TO SOMEHOW ISOLATE DIV (grid maybe?)
        return
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
                        <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "30px", color: "rgba(0, 143, 17, .9)", margin: "2rem 0rem" }}><strong style={{ fontSize: "18pt", color: "rgb(0, 214, 25)" }}>&#123;</strong> {project.languages} <strong style={{ fontSize: "18pt", color: "rgb(0, 214, 25)" }}>&#125;</strong></p>
                        <p style={{ fontSize: "1.25rem", margin: "0px 5px 20px 5px", maxWidth: "40%", margin: "auto" }}>{project.summary}</p>
                    </div>
                    <div style={{ width: "100%", background: "linear-gradient(to left, #262626 0%, #262626 2%, rgb(26, 26, 26) 8%, rgb(26, 26, 26) 92%, #262626 98%, #262626 100%)", padding: "35px 0px", display: "flex", flexDirection: "column" }}>
                    
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "auto" }}>
                        {images.map((img, idx) => {
                            if (idx < 3) {
                            return(
                                <DemoImg key={idx} index={idx} source={img} handleFocus={handleFocus} />
                                // <div key={idx} id={"img" + "-" + (idx + 1)} onClick={handleFocus} className={styles.demo} style={{ backgroundImage: `url(${img})`, backgroundPosition: "center" }}>
                                //     <div className={styles.demoMask}></div>
                                // </div>
                            )}
                        })}
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "auto" }}>
                        {images.map((img, idx) => {
                            if (idx > 2) {
                            return(
                                <DemoImg key={idx} index={idx} source={img} handleFocus={handleFocus} />
                                // <div key={idx} id={"img" + "-" + (idx + 1)} onClick={handleFocus} className={styles.demo} style={{ backgroundImage: `url(${img})`, backgroundPosition: "center" }}>
                                //     <div className={styles.demoMask}></div>
                                // </div>
                            )}
                        })}
                    </div>

                    </div>
                    <a href={project.github} target="_blank" >Github Repo</a>
                    <div style={{ height: "inherit", padding: "5px", display: "flex", flexDirection: "column", justifyContent: "space-between"  }}>
                        
                        <p className={styles.backTitle} >{project.title}</p>
                        <p><strong>My Role(s):</strong> {project.myRole}</p>
                        <p><strong>Technologies Used:</strong> {project.technologies}</p>
                        
                        <div style={{ height: "0px", border: "1px solid rgba(0, 143, 17, .9)", borderRadius: "30%", backgroundColor: "rgba(0, 143, 17, .9)", width: "65%", margin: "auto" }}></div>
                        
                        <div>
                            <p style={{fontSize: "14pt", marginTop: "10px", marginBottom: "5px", textDecoration: "underline" }}><strong>Application Details:</strong></p>
                            
                            {(project.details.length > 1) ?
                            <ul style={ (!responsive) ? { textAlign: "left" } : { textAlign: "left", padding: "0px 6px 0px 20px", fontSize: "11pt" } }>
                        
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
                        
                        <div style={{ height: "0px", border: "1px solid rgba(0, 143, 17, .9)", borderRadius: "30%", backgroundColor: "rgba(0, 143, 17, .9)", width: "65%", margin: "auto" }}></div>

                        <div style={{ width: "100%", background: "linear-gradient(to left, #262626 0%, #262626 2%, rgb(26, 26, 26) 8%, rgb(26, 26, 26) 92%, #262626 98%, #262626 100%)", padding: "35px 0px", height: "fit-content" }}>
                            
                            <div id={"demo" + "-" + card} className={styles.demoContainer}>

                            
                            {(!show) ? <p onClick={openDemo}>click to show</p> :
                                (!video) ? <DemoGif source={source} />
                                : (project.title === "P!ZZA") ?
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
                                    <DemoGif source={pizzaGif} />
                                    {/* <DemoGif source={pizzaDemoOne} /> */}
                                    {/* <DemoGif source={pizzaDemoTwo} /> */}
                                    {/* <img src={pizzaDemoOne} alt="placeholder" style={{ maxHeight: "960px", maxWidth: "1006px" }} /> */}
                                    {/* <img src={pizzaDemoTwo} alt="placeholder" style={{ maxHeight: "960px", maxWidth: "1006px" }} /> */}
                                </div>
                                :
                                // <Video video={video} />
                                <DemoGif source={video} />
                                
                            }

                            </div>
                        </div>
                        
                        {/* <Demo project={project} images={images} responsive={responsive} /> */}
                        {/* <p className={styles.flipLink} onClick={() => flipCard(flip)}><strong> || </strong> flip back to the front of card <strong> || </strong></p> */}
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <div id="left" onClick={spin} style={{ display: "flex", flexDirection: "column", marginLeft: "50px", cursor: "pointer" }}>
                                <p>previous project</p>
                                <p>{prevProject}</p>
                            </div>
                            <div id="right" onClick={spin} style={{ display: "flex", flexDirection: "column", marginRight: "50px", cursor: "pointer"}}>
                                <p>next project</p>
                                <p>{nextProject}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
