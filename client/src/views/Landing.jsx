import { useEffect, useState } from 'react'
import styles from '../components/landing.style.module.css'


const Landing = () => {

    // functions that track height and width of the window for responsive components
    const getWindowHeight = () => {
        return window.innerHeight
    }
    const getWindowWidth = () => {
        return window.innerWidth
    }

    // function that returns either a value from session or a default that is passed in
    const getSessionStorageOrDefault = (key, defaultValue) => {
        const stored = sessionStorage.getItem(key)
        if (!stored) return defaultValue
        return JSON.parse(stored)
    }

    // height and width of window are stored in local state
    const [windowHeight, setWindowHeight] = useState(getWindowHeight())
    const [windowWidth, setWindowWidth] = useState(getWindowWidth())
    const [loaded, setLoaded] = useState(getSessionStorageOrDefault('loaded', false))

    // function to be added to the onResize event listener
    const resizeWindow = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
        console.log(windowHeight)
        console.log(windowWidth)
    }

    // counts the number of lines the typewriter has typed - prevents the animation from looping
    var counter = 0

    // --> DISPLAY BUTTONS <--
    const displayButtons = () => {

        // display the buttons and their labels
        let project = document.getElementById("projects")
        setTimeout(() => project.setAttribute("class", styles.projects), 200)
        setTimeout(() => {
            if (windowWidth > 800) {
                project.setAttribute("class", `${styles.hoverZoom} ${styles.projects}`)
            } else {
                project.setAttribute("class", `${styles.responsiveButton} ${styles.projects}`)
            }
        }, 2000)
        let projectLabel = document.getElementById("projects-label")
        setTimeout(() => projectLabel.setAttribute("class", styles.label), 2000)
        setTimeout(() => projectLabel.innerHTML = "<p>Personal</p><p style='margin-bottom: 50px'>Projects</p>", 2000)

        let contact = document.getElementById("contact")
        setTimeout(() => contact.setAttribute("class", styles.contact), 200)
        setTimeout(() => {
            if (windowWidth > 800) {
                contact.setAttribute("class", `${styles.hoverZoom} ${styles.contact}`)
            } else {
                contact.setAttribute("class", `${styles.responsiveButton} ${styles.contact}`)
            }
        }, 2000)
        let contactLabel = document.getElementById("contact-label")
        setTimeout(() => contactLabel.setAttribute("class", styles.label), 2000)
        setTimeout(() => contactLabel.innerHTML = "<p style='margin-bottom: 15px'>Contact</p>", 2000)

        let resume = document.getElementById("resume")
        setTimeout(() => resume.setAttribute("class", styles.resume), 200)
        setTimeout(() => {
            if (windowWidth > 800) {
                resume.setAttribute("class", `${styles.hoverZoom} ${styles.resume}`)
            } else {
                resume.setAttribute("class", `${styles.responsiveButton} ${styles.resume}`)
            }
        }, 2000)
        let resumeLabel = document.getElementById("resumeLabel")
        setTimeout(() => resumeLabel.setAttribute("class", styles.label), 2000)
        setTimeout(() => resumeLabel.innerHTML = "<p>Professional</p><p style='margin-bottom: 50px'>Resume</p>", 2000)

    }

    // --> DISPLAY BACKGROUND <--
    const displayBackground = () => {

        // on smaller screens, do not display the animated background
        if (windowWidth <= 800) return

        else {
        
        // displays each div that makes up the background "grid"
        document.getElementById("bg-horizontal").setAttribute("class", styles.bgHorizontal)

        document.getElementById("bg-vertical-0").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical0}`)
        setTimeout(() => document.getElementById("bg-vertical-0-lights").setAttribute("class", styles.bgLights), 3700 + 30)
        setTimeout(() => document.getElementById("bg-vertical-0-light-block").setAttribute("class", styles.bgLightBlock), 3700)

        document.getElementById("bg-vertical-1").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical1}`)
        setTimeout(() => document.getElementById("bg-vertical-1-lights").setAttribute("class", styles.bgLights), 2900 + 30)
        setTimeout(() => document.getElementById("bg-vertical-1-light-block").setAttribute("class", styles.bgLightBlock), 2900)

        document.getElementById("bg-vertical-2").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical2}`)
        setTimeout(() => document.getElementById("bg-vertical-2-lights").setAttribute("class", styles.bgLights), 4900 + 30)
        setTimeout(() => document.getElementById("bg-vertical-2-light-block").setAttribute("class", styles.bgLightBlock), 4900)

        document.getElementById("bg-vertical-3").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical3}`)
        setTimeout(() => document.getElementById("bg-vertical-3-lights").setAttribute("class", styles.bgLights), 4100 + 30)
        setTimeout(() => document.getElementById("bg-vertical-3-light-block").setAttribute("class", styles.bgLightBlock), 4100)

        document.getElementById("bg-vertical-4").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical4}`)
        setTimeout(() => document.getElementById("bg-vertical-4-lights").setAttribute("class", styles.bgLights), 3800 + 30)
        setTimeout(() => document.getElementById("bg-vertical-4-light-block").setAttribute("class", styles.bgLightBlock), 3800)

        document.getElementById("bg-vertical-5").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical5}`)
        setTimeout(() => document.getElementById("bg-vertical-5-lights").setAttribute("class", styles.bgLights), 3500 + 30)
        setTimeout(() => document.getElementById("bg-vertical-5-light-block").setAttribute("class", styles.bgLightBlock), 3500)

        document.getElementById("bg-vertical-6").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical6}`)
        setTimeout(() => document.getElementById("bg-vertical-6-lights").setAttribute("class", styles.bgLights), 3500 + 30)
        setTimeout(() => document.getElementById("bg-vertical-6-light-block").setAttribute("class", styles.bgLightBlock), 3500)

        }
    }

    // --> DISPLAY SOCIAL LINKS <--
    const displaySocial = () => {
        
        // separate class handles styling on smaller screens
        (windowWidth > 800) ? document.getElementById("social").setAttribute("class", styles.social) : document.getElementById("social").setAttribute("class", styles.responsiveSocial)

        document.getElementById("socialLinkedIn").setAttribute("class", styles.socialLinkedIn)
        document.getElementById("socialLinkedIn").setAttribute("href", "http://linkedin.com/in/brian-f-gaudet")
        document.getElementById("socialLinkedIn").setAttribute("target", "_blank")

        document.getElementById("socialGitHub").setAttribute("class", styles.socialGitHub)
        document.getElementById("socialGitHub").setAttribute("href", "http://github.com/Gaudet-B")
        document.getElementById("socialGitHub").setAttribute("target", "_blank")
    }

    // --> DISPLAY COPYRIGHT AND EST. TEXT <--
    const displayCopyright = () => {
        // separate class handles styling on smaller screens
        (windowWidth > 800) ? document.getElementById("copyright").setAttribute("class", styles.copyright) : document.getElementById("copyright").setAttribute("class", styles.responsiveCopyright)
        document.getElementById("copyright").innerHTML = "<p>© BrianGaudet</p><p>Est. 1986</p><p>Boston, MA</p>"
    }

    // TYPEWRITER FUNCTION -> the function calls itself until the array of words is empty
    const typeWriter = (text, i, fnCallback) => {
        // check to make sure there's still text to type
        if (text == undefined) return
        if (i < text.length) {
            // FIRST WORD => length of 15 is the first word - if the array of words changes, update these lengths
            if (text.length == 15) {
                // if this is the last character in the word, stop the blinking cursor
                if (i == text.length - 1) {
                    // add next character to h1 w/o blinking cursor
                    document.getElementById("name").innerHTML = text.substring(0, i + 1)
                } else {
                    // add next character to h1 w/ blinking cursor
                    document.getElementById("name").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                }
            // check for empty SECOND WORD here
            } else if (text.length == 2) {
                if (i == text.length - 1) {
                    // add next character to h1 w/o blinking cursor
                    document.getElementById("line-two").innerHTML = text.substring(0, i + 1)
                } else {
                    // add next character to h1 w/ blinking cursor
                    document.getElementById("line-two").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                }
            // THIRD WORD
            } else if (text.length == 10) {
                if (i == text.length - 1) {
                    // add next character to line-two w/o blinking cursor
                    document.getElementById("line-three").innerHTML = text.substring(0, i + 1)
                } else {
                    // add next character to line-two w/ blinking cursor
                    document.getElementById("line-three").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                }
            // FOURTH WORD
            } else if (text.length == 13) {
                // if this is the last character in the FOURTH WORD, call FUNCTION TO DISPLAY BUTTONS
                if (i == text.length - 1) {
                    // add next character to line-three w/ blinking cursor - **keep cursor blinking since this is the last line**
                    document.getElementById("line-four").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                } else {
                    // add next character to line-three w/ blinking cursor
                    document.getElementById("line-four").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                }
            }

            // short wait between characters
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100)
        }
        // when the word is finished, call for the next word if it exists
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700)
        }
    }

    // function to start the typewriter
    const StartTextAnimation = i => {
        if (typeof dataText[i] == 'undefined') {
            return
        }
        console.log(counter);
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
            console.log(`LOADED 1 -> ${loaded}`)
            // start the animation
            StartTextAnimation(0)
            // --> CALL FUNCTION TO DISPLAY BUTTONS: <--
            setTimeout(displayButtons, 6000)
            // delay, then call the function to display background
            setTimeout(displayBackground, 8500)
            // delay, then call the function to display socail links
            setTimeout(displaySocial, 10000)
            // delay, then call the function to display copyright and est. text
            setTimeout(displayCopyright, 10200)

            // store "loaded" state in session, so user will not see typerwriter animation after first visit
            sessionStorage.setItem('loaded', JSON.stringify(true))
            // add the resizeWindow function to the window as an event listener
            window.addEventListener("resize", resizeWindow)

        } else if (loaded) {
            // just display the page loading animations (without typewriter) without delays
            displayButtons()
            displayBackground()
            displayCopyright()
            displaySocial()
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
    const typedLineClass = `${styles.typedLine} ${styles.line1}`
    const typedLineClassInvis = `${styles.typedLine} ${styles.line1} ${styles.invis}`
    
    return (

        // only display background w/ anmations if screen is large enough - otherwise, use bg image
        <div id="background-image" className={(windowWidth > 800) ? styles.bg : styles.responsiveBg} >
            {(windowWidth <= 800) ? 
            null
            :
            <div>
            <div id="bg-horizontal"></div>
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

            <div className={(windowWidth > 800) ? styles.body : styles.responsiveBody}>

            {/* if this is the first visit, display typewriter animation to user */}
                {(!loaded) ?
                        <div className={styles.typewriterDiv}>
                            <h1 id="name" className={typedLineClass}></h1>
                            <h3 id="line-two" className={typedLineClassInvis}></h3>
                            <h3 id="line-three" className={typedLineClass}></h3>
                            <h3 id="line-four" className={typedLineClass}></h3>
                        </div>
                    :
            // otherwise, text will appear without the animation
                        <div className={styles.typewriterDiv}>
                            <h1 id="name" className={typedLineClass}>{ dataText[0] }</h1>
                            <h3 id="line-two" className={typedLineClassInvis}>{ dataText[1] }</h3>
                            <h3 id="line-three" className={typedLineClass}>{ dataText[2] }</h3>
                            <h3 id="line-four" className={typedLineClass}>{ dataText[3] }<span aria-hidden="true"></span></h3>
                        </div>
                }

                <div id="display-buttons" className={(windowWidth > 800) ? styles.buttonContainer : styles.responsiveContainer}>

                    {/* Projects Button */}
                    <div id="" className={styles.button}>
                        <a id="projects" href="/projects" className="" >
                            {(windowWidth > 800) ? <div className={styles.mask}></div> : null}
                        </a>
                        <div id="projects-label" className=""></div>
                    </div>

                    {/* when component is in 'landscape' mode, display Contact in middle */}
                    {(windowWidth > 800) ? 
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
                    :
                    // Resume Button
                    <div className={styles.button}>
                        <a id="resume" href="/resume" className="" >
                            {(windowWidth > 800) ? <div className={styles.mask}></div> : null}
                        </a>
                        <div id="resumeLabel" className=""></div>
                    </div>
                    }

                    {/* when component is in 'portrait' mode, display Contact at bottom */}
                    {(windowWidth > 800) ? 
                    // Resume Button
                    <div className={styles.button}>
                        <a id="resume" href="/resume" className="" >
                            {(windowWidth > 800) ? <div className={styles.mask}></div> : null}
                        </a>
                        <div id="resumeLabel" className=""></div>
                    </div>
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
    )
}

export default Landing