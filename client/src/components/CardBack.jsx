
import Demo from './Demo'

import styles from '../components/carousel.style.module.css'


const CardBack = props => {

    // data to be displayed is passed down from parent
    const { project, images, flipCard, flip } = props

    // if project doesn't exist or there is a loading error, display a message
    if (!project) {
        return (
            <h3>UNDER CONSTRUCTION</h3>
        )

    } else {
        return (
            
            <div id="mask" style={{ height: "inherit", padding: "5px" }}>
                
                <p style={{ color: "rgba(0, 143, 17, .9)", fontSize: "2.25rem", marginTop: "10px", marginBottom: "20px"}}>{project.title}</p>
                <p><strong>My Role(s):</strong> {project.myRole}</p>
                <p><strong>Technologies Used:</strong> {project.technologies}</p>
                
                <div style={{ height: "0px", border: "1px solid rgba(0, 143, 17, .9)", width: "65%", margin: "auto" }}></div>
                
                <div>
                    <p style={{fontSize: "14pt", marginTop: "10px", marginBottom: "5px", textDecoration: "underline" }}><strong>Application Details:</strong></p>
                    
                    {(project.details.length > 1) ?
                    <ul style={{ textAlign: "left" }}>
                
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
                
                <div style={{ height: "0px", border: "1px solid rgba(0, 143, 17, .9)", width: "65%", margin: "auto" }}></div>
                <Demo project={project} images={images} />
                <p className={styles.flipLink} onClick={() => flipCard(flip)}><strong> || </strong> flip back to the front of card <strong> || </strong></p>

            </div>
        )
    }
}

export default CardBack
