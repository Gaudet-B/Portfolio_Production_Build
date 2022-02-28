import styles from '../styles/carousel.style.module.css'

const DemoGif = props => {

    const { card, width, source, closeDemo, restartDemo } = props

    return (
    <div>
        {(card != "one") ? <p onClick={restartDemo} className={styles.instruction} style={{ cursor: "pointer", marginBottom: "12px" }}>click to restart demo</p> : null}
        <img id={"image-" + card} src={source} alt="placeholder" style={{ maxHeight: "900px", maxWidth: "900px" }} />
        <p onClick={closeDemo} className={styles.instruction} style={{ cursor: "pointer", marginTop: "12px" }}>click to close demo</p>
    </div>
    )
}

export default DemoGif
