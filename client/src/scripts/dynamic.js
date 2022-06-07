/** 
 * ???
 * 
 */

// TYPEWRITER FUNCTION -> the function calls itself until the array of words is empty
/**
 * 
 * @param {*} text 
 * @param {*} i 
 * @param {*} callback 
 */
const typeWriter = (text, i, callback) => {
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
            typeWriter(text, i + 1, callback)
        }, 100)
    }
    // when the word is finished, call for the next word if it exists
    else if (typeof callback == 'function') {
        // call callback after timeout
        setTimeout(callback, 700)
    }
}

// --> DISPLAY COPYRIGHT AND EST. TEXT <--
/**
 * 
 */
const displayCopyright = (width, styles) => {
    // separate class handles styling on smaller screens
    (width > 800) ? document.getElementById("copyright").setAttribute("class", styles.copyright) : document.getElementById("copyright").setAttribute("class", styles.responsiveCopyright)
    document.getElementById("copyright").innerHTML = "<p>© BrianGaudet</p><p>Est. 1986</p><p>Boston, MA</p>"
}

// --> DISPLAY SOCIAL LINKS <--
/**
 * 
 * @param {*} width 
 * @param {*} styles 
 */
const displaySocial = (width, styles) => {
    
    // separate class handles styling on smaller screens
    (width > 800) ? document.getElementById("social").setAttribute("class", styles.social) : document.getElementById("social").setAttribute("class", styles.responsiveSocial)

    document.getElementById("socialLinkedIn").setAttribute("class", styles.socialLinkedIn)
    document.getElementById("socialLinkedIn").setAttribute("href", "http://linkedin.com/in/brian-f-gaudet")
    document.getElementById("socialLinkedIn").setAttribute("target", "_blank")

    document.getElementById("socialGitHub").setAttribute("class", styles.socialGitHub)
    document.getElementById("socialGitHub").setAttribute("href", "http://github.com/Gaudet-B")
    document.getElementById("socialGitHub").setAttribute("target", "_blank")
}

// --> DISPLAY BACKGROUND <--
const displayBackground = (width, styles) => {

    // on smaller screens, do not display the animated background
    if (width <= 800) return

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

    // --> DISPLAY BUTTONS <--
    const displayButtons = (width, styles) => {

        // display the buttons and their labels
        let project = document.getElementById("projects")
        setTimeout(() => project.setAttribute("class", styles.projects), 200)
        setTimeout(() => {
            if (width > 800) {
                project.setAttribute("class", `${styles.hoverZoom} ${styles.projects}`)
            } else {
                project.setAttribute("class", `${styles.responsiveButton} ${styles.projects}`)
            }
        }, 2000)
        let projectLabel = document.getElementById("projects-label")
        setTimeout(() => projectLabel.setAttribute("class", styles.label), 2000)
        setTimeout(() => projectLabel.innerHTML = "<p style='margin-bottom: 50px'>Projects</p>", 2000)

        let contact = document.getElementById("contact")
        setTimeout(() => contact.setAttribute("class", styles.contact), 200)
        setTimeout(() => {
            if (width > 800) {
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
            if (width > 800) {
                resume.setAttribute("class", `${styles.hoverZoom} ${styles.resume}`)
            } else {
                resume.setAttribute("class", `${styles.responsiveButton} ${styles.resume}`)
            }
        }, 2000)
        let resumeLabel = document.getElementById("resume-label")
        setTimeout(() => resumeLabel.setAttribute("class", styles.label), 2000)
        setTimeout(() => resumeLabel.innerHTML = "<p style='margin-bottom: 50px'>Resume</p>", 2000)

    }

export { typeWriter, displayCopyright, displaySocial, displayBackground, displayButtons }