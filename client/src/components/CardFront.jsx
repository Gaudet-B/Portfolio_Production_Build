
import draftHero from '../assets/draft/draft_hero.png'
import pizzaHero from '../assets/pizza/pizza_hero.png'
import mythHero from '../assets/myth/myth_hero.png'
import portfolioHero from '../assets/portfolio/portfolio_hero.png'

import styles from '../components/carousel.style.module.css'


const CardFront = props => {

    // data to be displayed and function to flip card passed down from parent
    const { project, flipCard, flip } = props

    // returns the proper hero image based on which project is being displayed
    const selectPhoto = project => {
        if (project === "MyDraft Partner") return draftHero
        else if (project === "P!ZZA") return pizzaHero
        else if (project === "Myth Game") return mythHero
        else if (project === "briangaudet.com") return portfolioHero
    }
    // stores the image in local state
    const source = selectPhoto(project.title)
    
    // if project doesn't exist or there is a loading error, display a message
    if (!project) {
        return (
            <h3>UNDER CONSTRUCTION</h3>
        )
    
    } else {
        return (
            <div id="mask" style={{ padding: "5px" }}>
                <img src={source} alt="placeholder" />
                <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "18px 0px 14px 0px" }}>{project.title}</p>
                <p style={{ fontSize: "16pt", fontWeight: "bold", letterSpacing: ".18em", color: "rgba(255,255,255,.75)", marginTop: "0px" }}>{project.myRole}</p>
                <p style={{ fontSize: "16pt", fontWeight: "bold", marginBottom: "30px", color: "rgba(0, 143, 17, .9)" }}><strong style={{ fontSize: "18pt", color: "rgb(0, 214, 25)" }}>&#123;</strong> {project.languages} <strong style={{ fontSize: "18pt", color: "rgb(0, 214, 25)" }}>&#125;</strong></p>
                <p style={{ fontSize: "14pt", margin: "0px 5px 20px 5px" }}>{project.summary}</p>
                <a href={project.github} target="_blank" >Github Repo</a>
                <p className={styles.flipLink} onClick={() => flipCard(flip)}><strong> || </strong> flip card for more project details <strong> || </strong></p>
            </div>
        )
    }
}

export default CardFront
