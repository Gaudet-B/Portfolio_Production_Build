import React from 'react'

import styles from '../styles/loading.style.module.css'

const Loading = () => {
    return (
        <div className={styles.loadingMask}>
            <div className={styles.spinner}></div>
            <div className={styles.logoSpinner}></div>
            <div className={styles.logo}></div>
        </div>
    )
}

export default Loading
