import { useEffect, useState } from 'react'

import Demo from '../components/Demo'

import draftHero from '../assets/draft/draft_hero.png'
import pizzaHero from '../assets/pizza/pizza_hero.png'
import mythHero from '../assets/myth/myth_hero.png'
import portfolioHero from '../assets/portfolio/portfolio_hero.png'

import styles from '../components/carousel.style.module.css'


const ProjectPage = props => {

    const { index, project, images, responsive } = props

    const [ card, setCard ] = useState()
    const [ cardDiv, setCardDiv ] = useState()

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

    useEffect(() => {
        getCard(index)
    }, [])

    return (
        <div className={styles.cardDiv + " " + cardDiv}>
            <div id={"card-" + card} className={styles.card} >
                <div style={{ padding: "5px", height: "inherit", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                    <img src={source} alt="placeholder" />
                    <div>
                        <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "18px 0px 14px 0px" }}>{project.title}</p>
                        <p style={{ fontSize: "16pt", fontWeight: "bold", letterSpacing: ".18em", color: "rgba(255,255,255,.75)", marginTop: "0px" }}>{project.myRole}</p>
                        <p style={{ fontSize: "16pt", fontWeight: "bold", marginBottom: "30px", color: "rgba(0, 143, 17, .9)" }}><strong style={{ fontSize: "18pt", color: "rgb(0, 214, 25)" }}>&#123;</strong> {project.languages} <strong style={{ fontSize: "18pt", color: "rgb(0, 214, 25)" }}>&#125;</strong></p>
                        <p style={{ fontSize: "14pt", margin: "0px 5px 20px 5px" }}>{project.summary}</p>
                    </div>
                    <a href={project.github} target="_blank" >Github Repo</a>
                    {/* <p className={(!responsive) ? styles.flipLink : styles.responsiveLink} onClick={() => flipCard(flip)}><strong> || </strong> flip card for more project details <strong> || </strong></p> */}
                </div>
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
                    <Demo project={project} images={images} responsive={responsive} />
                    {/* <p className={styles.flipLink} onClick={() => flipCard(flip)}><strong> || </strong> flip back to the front of card <strong> || </strong></p> */}

                </div>
            </div>
        </div>
    )
}

export default ProjectPage
