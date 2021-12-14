import DemoModal from './DemoModal'
import styles from './demo.style.module.css'

const Demo = props => {

    const { project, images } = props

    return (
        <div className={styles.main} >
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-evenly" }}>
                <DemoModal project={project} images={images}/>
            </div>
            <p>Click on images to expand and see more details. Please refer to Github link on front of card to browse code base or download a demo.</p>
        </div>
    )
}

export default Demo
