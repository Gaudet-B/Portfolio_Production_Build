import React from 'react'

const Video = props => {
    const {video} = props
    return (
        <div style={{ position: "relative", backgroundColor: "rgb(26, 26, 26)" }}>
            <video width="1100" height="800" controls autoPlay="false" playsInline="true" style={{ position: "relative", objectFit: "contain" }} >
                <source src={video} type="video/webm" autoPlay="false" playsInline="true" />
                sorry, your browser is unable to load video content
            </video>
        </div>
    )
}

export default Video
