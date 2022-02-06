// this is the original functionality used to create many of the site's animations
// everything has been moved to proper components
// this script is left here for
// reference purposes only


document.addEventListener('DOMContentLoaded', function (event) {
    // the lines the typewriter will write
    const dataText = ["Brian F. Gaudet", "Full Stack", "Web Developer"]

    // the function calls itself until the array of words is empty
    const typeWriter = (text, i, fnCallback) => {
        // check to make sure there's still text to type
        if (i < text.length) {
            // FIRST WORD => length of 15 is the first word - if the array of words changes, update these lengths
            if (text.length == 15) {
                // if this is the last character in the word, stop the blinking cursor
                if (i == text.length - 1) {
                    // add next character to h1 w/o blinking cursor
                    document.querySelector("h1").innerHTML = text.substring(0, i + 1)
                } else {
                    // add next character to h1 w/ blinking cursor
                    document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                }
            // SECOND WORD
            } else if (text.length == 10) {
                if (i == text.length - 1) {
                    // add next character to line-two w/o blinking cursor
                    document.getElementById("line-two").innerHTML = text.substring(0, i + 1)
                } else {
                    // add next character to line-two w/ blinking cursor
                    document.getElementById("line-two").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                }
            // THIRD WORD
            } else if (text.length == 13) {
                // if this is the last character in the THIRD WORD, call FUNCTION TO DISPLAY BUTTONS
                if (i == text.length - 1) {
                    // add next character to line-three w/ blinking cursor - **keep cursor blinking since this is the last line**
                    document.getElementById("line-three").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                    // --> CALL FUNCTION TO DISPLAY BUTTONS: <--
                    setTimeout(displayButtons, 1000)
                } else {
                    // add next character to line-three w/ blinking cursor
                    document.getElementById("line-three").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
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
    const StartTextAnimation = (i) => {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0)
            }, 20000)
        }
        console.log(counter);
        // check that we haven't hit the final (THIRD) word in the array
        if (i < 4 && counter < 4) {
            // the counter keeps the typewriter from repeating once finished with the array of words so the text remains on-screen
            counter++
            // call the Typewriter function
            typeWriter(dataText[i], 0, function () {
                // start the next line
                StartTextAnimation(i + 1)
            })
        }
    }
    // start the animation
    StartTextAnimation(0)
})

var counter = 0

const displayButtons = () => {

    // display the buttons
    document.getElementById("projects").setAttribute("class", "hover-zoom projects")
    document.getElementById("contact").setAttribute("class", "hover-zoom contact")
    document.getElementById("resume").setAttribute("class", "hover-zoom resume")

    // display button labels
    document.getElementById("projects-label").innerHTML = "<p>Personal</p><p>Projects</p>"
    document.getElementById("contact-label").innerHTML = "<p>Contact</p>"
    document.getElementById("resume-label").innerHTML = "<p>Professional</p><p>Resume</p>"

    // delay, then call the function to display background
    setTimeout(displayBackground, 500)

    // delay, then call the function to display socail links
    setTimeout(displaySocial, 2500)
    
    // delay, then call the function to display copyright and est. text
    setTimeout(displayCopyright, 3000)

}

// --> DISPLAY BACKGROUND <--
const displayBackground = () => {
    
    // displays each div that makes up the background "grid"
    document.getElementById("bg-horizontal").setAttribute("class", "bg-horizontal")
    document.getElementById("bg-vertical-1").setAttribute("class", "bg-vertical-1")
    document.getElementById("bg-vertical-2").setAttribute("class", "bg-vertical-2")
    document.getElementById("bg-vertical-3").setAttribute("class", "bg-vertical-3")
    document.getElementById("bg-vertical-4").setAttribute("class", "bg-vertical-4")
    document.getElementById("bg-vertical-5").setAttribute("class", "bg-vertical-5")
}

// --> DISPLAY SOCIAL LINKS <--
const displaySocial = () => {
    document.getElementById("social").setAttribute("class", "social")

    document.getElementById("social-linkedIn").setAttribute("class", "social-linkedIn")
    document.getElementById("social-linkedIn").setAttribute("href", "linkedin.com/in/brian-f-gaudet")

    document.getElementById("social-gitHub").setAttribute("class", "social-gitHub")
    document.getElementById("social-gitHub").setAttribute("href", "github.com/Gaudet-B")
}

// --> DISPLAY COPYRIGHT AND EST. TEXT <--
const displayCopyright = () => {
    document.getElementById("copyright").setAttribute("class", "copyright")
    document.getElementById("copyright").innerHTML = "<p>© BrianGaudet</p><p>Est. 1986</p><p>Boston, MA</p>"
}

// --> BUTTON onMouseOver <--
const buttonHover = (e) => {
    e.setAttribute("class", "unmask")
}
// --> BUTTON onMouseOut <--
const buttonOut = (e) => {
    e.setAttribute("class", "mask")
}