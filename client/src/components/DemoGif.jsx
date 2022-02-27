import styles from '../styles/carousel.style.module.css'

const DemoGif = props => {

    const { card, width, source, closeDemo, restartDemo } = props

    return (
    // <div style={{ height: "800px", width: `${width}%`, backgroundImage: `url(${source})`, backgroundPosition: "center", backgroundSize: "cover" }}>
    <div>
        {(card != "one") ? <p onClick={restartDemo} className={styles.instruction} style={{ cursor: "pointer", marginBottom: "12px" }}>click to restart demo</p> : null}
        {/* <div style={{ height: "inherit", width: "inherit" }}></div> */}
        {/* <p onClick={closeDemo} style={{ cursor: "pointer", fontSize: "13pt", marginTop: "12px" }}>click to close demo</p> */}
        <img id={"image-" + card} src={source} alt="placeholder" style={{ maxHeight: "900px", maxWidth: "900px" }} />
        <p onClick={closeDemo} className={styles.instruction} style={{ cursor: "pointer", marginTop: "12px" }}>click to close demo</p>
    </div>
    )
}

export default DemoGif
