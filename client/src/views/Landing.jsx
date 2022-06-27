import { useEffect, useState } from 'react'
import Button from '../components/landing/Button'
import styles from '../styles/landing.style.module.css'

/* */
import { getSessionStorageOrDefault, getWindowHeight, getWindowWidth } from '../scripts/basic'
import { typeWriter, displayCopyright, displaySocial, displayBackground, displayButtons } from '../scripts/dynamic'


const Landing = () => {

    // height and width of window are stored in local state
    const [windowHeight, setWindowHeight] = useState(getWindowHeight(window))
    const [windowWidth, setWindowWidth] = useState(getWindowWidth(window))
    const [loaded, setLoaded] = useState(getSessionStorageOrDefault('loaded', false))

    // function to be added to the onResize event listener
    const resizeWindow = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
        // console.log(windowHeight)
        // console.log(windowWidth)
    }

    // counts the number of lines the typewriter has typed - prevents the animation from looping
    var counter = 0

    // function to start the typewriter
    const StartTextAnimation = i => {
        if (typeof dataText[i] == 'undefined') {
            return
        }
        // check that we haven't hit the final (FOURTH) word in the array
        if (i < 5 && counter < 5) {
            // the counter keeps the typewriter from repeating once finished with the array of words so the text remains on-screen
            counter++
            // call the Typewriter function
            typeWriter(dataText[i], 0, function () {
                // start the next line
                StartTextAnimation(i + 1)
            })
        }
    }

    // the lines the typewriter will write
    const dataText = ["Brian F. Gaudet", "  ", "Full Stack", "Web Developer"]

    useEffect(() => {

        // allows vertical scrolling on smaller screens
        (windowWidth > 800) ? document.querySelector("html").setAttribute("style", "overflow-x: hidden; overflow-y: hidden;") : document.querySelector("html").setAttribute("style", "overflow-x: hidden; overflow-y: auto;")

        if (!loaded) {
            // start the animation
            StartTextAnimation(0)
            // --> CALL FUNCTION TO DISPLAY BUTTONS: <--
            setTimeout(displayButtons(windowWidth, styles), 6000)
            // delay, then call the function to display background
            setTimeout(displayBackground(windowWidth, styles), 8500)
            // delay, then call the function to display socail links
            setTimeout(displaySocial(windowWidth, styles), 10000)
            // delay, then call the function to display copyright and est. text
            setTimeout(displayCopyright(windowWidth, styles), 10200)

            // store "loaded" state in session, so user will not see typerwriter animation after first visit
            sessionStorage.setItem('loaded', JSON.stringify(true))
            // add the resizeWindow function to the window as an event listener
            window.addEventListener("resize", resizeWindow)

        } else if (loaded) {
            // just display the page loading animations without typewriter and without delays
            displayButtons(windowWidth, styles)
            displayBackground(windowWidth, styles)
            displayCopyright(windowWidth, styles)
            displaySocial(windowWidth, styles)
            // add the resizeWindow function to the window as an event listener
            window.addEventListener("resize", resizeWindow)
        }
        return () => {
            // store "loaded" state in session, so user will not see typerwriter animation after first visit
            sessionStorage.setItem('loaded', JSON.stringify(true))
            // remove event listener when component unmounts
            window.removeEventListener("resize", resizeWindow)
        }
    }, [loaded])

    // styles for the typewriter lines
    const typedLineClassOne = `${styles.typedLine} ${styles.line1}`
    const typedLineClassTwo = `${styles.typedLine} ${styles.line2}`
    const typedLineClassInvis = `${styles.typedLine} ${styles.line1} ${styles.invis}`
    
    return (

        // only display background w/ anmations if screen is large enough - otherwise, use bg image
        <div id="background-image" className={(windowWidth > 800) ? styles.bg : styles.responsiveBg} >
            {(windowWidth <= 800) ? 
            null
            :
            <div style={{ width: "inherit", position: "absolute", height: "0vh" }}>
            {(windowHeight > 750) ? 
            <div id="bg-horizontal" style={{ marginTop: "50vh" }}></div>
            :
            <div id="bg-horizontal" style={{ marginTop: "380px" }}></div>
            }
            <div id="bg-vertical-0">
                <div id="bg-vertical-0-light-block">
                    <div id="bg-vertical-0-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-1">
                <div id="bg-vertical-1-light-block">
                    <div id="bg-vertical-1-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-2">
                <div id="bg-vertical-2-light-block">
                    <div id="bg-vertical-2-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-3">
                <div id="bg-vertical-3-light-block">
                    <div id="bg-vertical-3-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-4">
                <div id="bg-vertical-4-light-block">
                    <div id="bg-vertical-4-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-5">
                <div id="bg-vertical-5-light-block">
                    <div id="bg-vertical-5-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-6">
                <div id="bg-vertical-6-light-block">
                    <div id="bg-vertical-6-lights"></div>
                </div>
            </div>
            </div>
            }

            <div className={(windowWidth > 800) ? styles.body : styles.responsiveBody} style={(windowHeight < 500) ? {backgroundColor: "rgba(25,25,25,.8)"} : null}>
            
            <div className={(windowWidth > 800) ? styles.mainContainer : styles.mainResponsive} style={(windowHeight > 800) ? {margin: "30vh auto 0 auto"} : null }>

            {/* if this is the first visit, display typewriter animation to user */}
                {(!loaded) ?
                        <div className={styles.typewriterDiv}>
                            <h1 id="name" className={typedLineClassOne} style={(windowWidth < 800) ? { fontSize: "2.5rem" } : null }></h1>
                            <h3 id="line-two" className={typedLineClassInvis}></h3>
                            <h3 id="line-three" className={typedLineClassTwo} style={(windowWidth < 800) ? { fontSize: "2rem" } : null }></h3>
                            <h3 id="line-four" className={typedLineClassTwo} style={(windowWidth < 800) ? { fontSize: "2rem" } : null }></h3>
                        </div>
                    :
            // otherwise, text will appear without the animation
                        <div className={styles.typewriterDiv}>
                            <h1 id="name" className={typedLineClassOne} style={(windowWidth < 800) ? { fontSize: "2.5rem" } : null }>{ dataText[0] }</h1>
                            <h3 id="line-two" className={typedLineClassInvis}>{ dataText[1] }</h3>
                            <h3 id="line-three" className={typedLineClassTwo} style={(windowWidth < 800) ? { fontSize: "2rem" } : null }>{ dataText[2] }</h3>
                            <h3 id="line-four" className={typedLineClassTwo} style={(windowWidth < 800) ? { fontSize: "2rem" } : null }>{ dataText[3] }<span aria-hidden="true"></span></h3>
                        </div>
                }

                <div id="display-buttons" className={(windowWidth > 800) ? styles.buttonContainer : styles.responsiveContainer}>

                    {/* Projects Button */}
                    {/* <div id="" className={styles.button}>
                        <a id="projects" href="/projectpages" className="" >
                            {(windowWidth > 800) ? <div className={styles.mask}></div> : null}
                        </a>
                        <div id="projects-label" className=""></div>
                    </div> */}
                    <Button title={"projects"} windowWidth={windowWidth} />

                    {/* when component is in 'landscape' mode, display Contact in middle */}
                    {(windowWidth > 800) ? 
                    // Contact Button
                    <div className={styles.button}>
                        <Button title={"contact"} windowWidth={windowWidth} />
                        {/* <a id="contact" href="/contact" className="" >
                            {(windowWidth > 800) ? <div className={styles.mask}></div> : null}
                            </a>
                        <div id="contact-label" className=""></div> */}

                        {/* Socail Links */}
                        <div id="social" className="">
                            <a id="socialLinkedIn"></a>
                            <a id="socialGitHub"></a>
                        </div>

                        {/* Copyright & Est. Text */}
                        <div id="copyright" className=""></div>
                    </div>
                    :
                    // {/* Resume Button */}
                    <Button title={"resume"} windowWidth={windowWidth} />
                    // <div className={styles.button}>
                    //     <a id="resume" href="/resume" className="" >
                    //         {(windowWidth > 800) ? <div className={styles.mask}></div> : null}
                    //     </a>
                    //     <div id="resumeLabel" className=""></div>
                    // </div>
                }

                    {/* when component is in 'portrait' mode, display Contact at bottom */}
                    {(windowWidth > 800) ? 
                    // Resume Button
                    <Button title={"resume"} windowWidth={windowWidth} />
                    // <div className={styles.button}>
                    //     <a id="resume" href="/resume" className="" >
                    //         {(windowWidth > 800) ? <div className={styles.mask}></div> : null}
                    //     </a>
                    //     <div id="resumeLabel" className=""></div>
                    // </div>
                    :
                    // Contact Button
                    <div className={styles.button}>
                        <a id="contact" href="/contact" className="" >
                            {(windowWidth > 800) ? <div className={styles.mask}></div> : null}
                        </a>
                        <div id="contact-label" className=""></div>

                        {/* Socail Links */}
                        <div id="social" className="">
                            <a id="socialLinkedIn"></a>
                            <a id="socialGitHub"></a>
                        </div>

                        {/* Copyright & Est. Text */}
                        <div id="copyright" className=""></div>
                    </div>
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

export default Landing