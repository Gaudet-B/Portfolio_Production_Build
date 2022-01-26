import React from 'react'

const DemoGif = props => {

    const { source } = props

    return (
    <div>
        <img src={source} alt="placeholder" style={{ maxHeight: "800px" }} />
    </div>
    )
}

export default DemoGif
