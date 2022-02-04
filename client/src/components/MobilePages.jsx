import { useState, useEffect } from 'react'
import Loading from './Loading'

import MobilePage from './MobilePage'
import Navigation from './Navigation'

import styles from './mobile.style.module.css'

const MobilePages = props => {
    
    // pull projects array and images array from props
    const { projects, images, windowWidth } = props
    const [ loading, setLoading ] = useState(true)

    const [ step, setStep ] = useState(0)

    const handleNext = e => {
        setLoading(true)
        if (step >= 3) {
            setStep(0)
        } else {
            setStep(step + 1)
        }
    }

    const handleBack = e => {
        setLoading(true)
        if (step <= 0) {
            setStep(3)
        } else {
            setStep(step - 1)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            console.log(step)
            setLoading(false)
        }, 2000);
    }, [])
    
    return (
        <div className={styles.bg}>
            <Navigation windowWidth={windowWidth} />
            {/* {(projects.map((project, idx) => {
                return(
                    <MobilePage key={idx} index={idx} project={project} images={images} responsive={true} spin={() => null} />
                    )
            }))} */}
            <MobilePage loading={loading} project={projects[step]} images={images} step={step} handleBack={handleBack} handleNext={handleNext} images={images} responsive={true} spin={() => null} />
        </div>

)}

export default MobilePages;
