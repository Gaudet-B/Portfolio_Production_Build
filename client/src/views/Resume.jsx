import { useState, useEffect } from 'react'

import Header from '../components/Header'

import styles from '../components/projects.style.module.css'

import git from '../assets/GitHub.jpg'
import linked from '../assets/LinkedIn.jpg'
import email from '../assets/email-icon.png'


const Resume = () => {

    // functions that track height and width of the window for responsive components
    const getWindowHeight = () => {
        return window.innerHeight
    }
    const getWindowWidth = () => {
        return window.innerWidth
    }

    // height and width of window are stored in local state
    const [windowHeight, setWindowHeight] = useState(getWindowHeight())
    const [windowWidth, setWindowWidth] = useState(getWindowWidth())
    const [loading, setLoading] = useState(true)

    // import classnames utility --> https://github.com/JedWatson/classnames //
    const classNames = require("classnames")

    // function that displays loading spinner 
    const loadData = () => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    // function to be added to the onResize event listener
    const resizeWindow = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
        console.log(windowHeight)
        console.log(windowWidth)
    }

    useEffect(() => {
        loadData()

        // add Bootstrap to document, remove when component unmounts (return statement - line 61)
        const link = document.createElement("link")
        link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        link.rel = "stylesheet"
        link.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        link.crossOrigin = "anonymous"
        document.body.appendChild(link)

        // allow scrolling, in case that was disabled from Landing component
        document.querySelector("html").setAttribute("style", "overflow: auto;")
        // add the resizeWindow function to the window as an event listener
        window.addEventListener("resize", resizeWindow)
        // remove event listener and link when component unmounts
        return () => {
            window.removeEventListener("resize", resizeWindow)
            document.body.removeChild(link)
        }
    }, [])

    // combines classes for large and small screens
    const classArr = ["bg-dark", "p-5", styles.mainContent]
    const responsiveArr = ["bg-dark", "py-5", styles.mainContent]
    const mainClass = classNames(classArr)
    const responsiveClass = classNames(responsiveArr)

    // spinner
    if (loading) {
        return (
            <div className={styles.loadingBackground} >
                <div className={styles.loadingMask}>
                    <div className={styles.spinner}></div>
                    <div className={styles.logoSpinner}></div>
                    <div className={styles.logo}></div>
                </div>
            </div>
        )

    } else {
        return (
            <div className="bg-dark">

            <div className={(windowWidth > 800) ? mainClass : responsiveClass}>

                <Header left="CONTACT" right="HOME" windowWidth={windowWidth} />

                <div className={(windowWidth > 800) ? "bg-dark text-light p-5 d-flex flex-column justify-content-center" : "bg-dark text-light mt-3 d-flex flex-column justify-content-center"}>

                    <div className={(windowWidth > 800) ? "border border-light rounded container mt-4 p-4" : "border border-light rounded container mt-4 p-2"}>
                    
                    <div className="d-flex flex-row justify-content-between">
                        
                        <div className="d-flex flex-column me-4" style={(windowWidth > 800) ? { width: "65%" } : { width: "100%" }}>
                            <h1 className="display-2 text-secondary">BRIAN  GAUDET</h1>
                            <p className={(windowWidth > 800) ? "" : "ms-3"}>
                                Highly motivated, self-sufficient and learning-obsessed developer who is seeking to collaborate with teams and individuals. Successful deployments on numerous projects have taught me both the struggle and reward of developing software applications from end to end. Experience in management, training, leadership and business operations will help guide me as I continue to grow.
                            </p>
                        </div>
                        
                        {(windowWidth > 800) ?
                        <div className="d-flex flex-column text-end pt-4" style={{ alignItems: "flex-end", width: "fit-content" }}>
                            
                            <a className="my-1 d-flex flex-row link link-light text-decoration-none" href="http://linkedin.com/in/brian-f-gaudet" target="_blank" style={{ width: "fit-content" }} >
                                <p className="mt-1">linkedin.com/in/brian-f-gaudet</p>
                                <img className="mx-2 border rounded" src={linked} alt="?" style={{ height: "40px", width: "40px" }} />
                            </a>
                            
                            <a className="my-1 d-flex flex-row link link-light text-decoration-none" href="mailto: brian.f.gaudet@gmail.com">
                                <p className="mt-1">brian.f.gaudet@gmail.com</p>
                                <img className="mx-2 border rounded bg-light" src={email} alt="?" style={{ height: "40px", width: "40px" }} />
                            </a>
                            
                            <a className="my-1 d-flex flex-row link link-light text-decoration-none" href="http://github.com/Gaudet-B" target="_blank">
                                <p className="mt-1">github.com/Gaudet-B</p>
                                <img className="mx-2 border rounded" src={git} alt="?" style={{ height: "40px", width: "40px" }} />
                            </a>

                        </div>
                        : null
                        }
                    </div>

                {/* displays social links below summary on smaller screens */}
                    {(windowWidth > 800) ?
                    null
                    :
                    <div className="d-flex flex-column text-end pt-4" style={{ alignItems: "flex-end", width: "100%", padding: "0px" }}>
                        <a className="my-1 d-flex flex-row link link-light text-decoration-none" href="http://linkedin.com/in/brian-f-gaudet" target="_blank" style={{ width: "fit-content" }} >
                            <p className="mt-1">linkedin.com/in/brian-f-gaudet</p>
                            <img className="mx-2 border rounded" src={linked} alt="?" style={{ height: "40px", width: "40px" }} />
                        </a>
                        <a className="my-1 d-flex flex-row link link-light text-decoration-none" href="mailto: brian.f.gaudet@gmail.com">
                            <p className="mt-1">brian.f.gaudet@gmail.com</p>
                            <img className="mx-2 border rounded bg-light" src={email} alt="?" style={{ height: "40px", width: "40px" }} />
                        </a>
                        <a className="my-1 d-flex flex-row link link-light text-decoration-none" href="http://github.com/Gaudet-B" target="_blank">
                            <p className="mt-1">github.com/Gaudet-B</p>
                            <img className="mx-2 border rounded" src={git} alt="?" style={{ height: "40px", width: "40px" }} />
                        </a>
                    </div>
                    }

                    <div className="mx-5 border-top border-secondary my-4"></div>
                    <h3 className="mt-5 mb-2 text-secondary">TECHNOLOGIES & FRAMEWORKS</h3>
                    
                    <div className="mx-5 my-4">
                        <p className="mb-5">
                            JavaScript, Python, Java, React, Node.js, Express.js, jQuery, MySQL, MongoDB, Mongoose, Flask, Spring Boot, Socket.IO, Postman, Jinja2, AJAX, Bootstrap, React-Bootstrap, GitHub, Visual Studio Code, Sublime Text, Beautiful Soup, Selenium, bcrypt
                        </p>
                    </div>
                    
                    <h3 className="my-3 text-secondary">TECHNICAL  PROJECTS</h3>
                    <div className={(windowWidth > 800) ? "mx-5 my-4 d-flex flex-row justify-content-between" : "my-4 d-flex flex-row justify-content-between"}>
                        
                        <div className="d-flex flex-column" style={{ minWidth: "18%" }}>
                            <h5>MyDraft Partner</h5>
                            <h6>Full Stack Developer</h6>
                        </div>
                        
                        <div>
                            <ul>
                                <li>Deployed <strong>Selenium</strong> and <strong>Beautiful Soup</strong> to scrape for and parse through data, creating a <strong>MySQL</strong> database of over 500 NFL players.</li>
                                <li>Compared expert rankings and player draft positions with <strong>custom-built Python algorithms</strong>.</li>
                                <li>Used <strong>Jinja2</strong> and the <strong>Flask</strong> framework to take in user-defined settings and display custom recommendations.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={(windowWidth > 800) ? "mx-5 my-4 d-flex flex-row justify-content-between" : "my-4 d-flex flex-row justify-content-between"}>
                        
                        <div className="d-flex flex-column" style={{ minWidth: "18%" }}>
                            <h5>P!ZZA</h5>
                            <h6>Full Stack Developer</h6>
                        </div>
                        
                        <div>
                            <ul>
                                <li>Utilized Square’s <strong>API</strong> for secure and frictionless payments.</li>
                                <li>Leveraged <strong>MongoDB’s</strong> ease of setup and maintenance so users could maintain profiles, customize settings, and view their transaction history.</li>
                                <li>Designed front-end with a focus on user experience, using <strong>React-Bootstrap</strong> for styling and functionality.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className={(windowWidth > 800) ? "mx-5 my-4 d-flex flex-row justify-content-between" : "my-4 d-flex flex-row justify-content-between"}>
                        
                        <div className="d-flex flex-column" style={{ minWidth: "18%" }}>
                            <h5 className="text-break">briangaudet.com</h5>
                            <h6>Full Stack Developer</h6>
                        </div>
                        
                        <div>
                            <ul>
                                <li>Wrote various custom CSS animations, including 3D transformations, to give the site a unique style that represents both my skills and personality.</li>
                                <li>Built the site as a React app, not only to showcase my strengths, but in order to implement a content management system, allowing the site’s content to be updated regularly without altering the source code.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mx-5 border-top border-secondary my-4"></div>
                    <h3 className="mt-5 mb-3 text-secondary">EDUCATION</h3>
                    
                    <div className="mx-4">
                        <ul>
                            <li><strong>Coding Dojo </strong> - San Jose, CA (online) - <strong> Full-Stack Developer Certificate - </strong> Python, MERN, Java - 2021</li>
                            <li><strong>Court of Master Sommeliers </strong> - Americas - <strong> Introductor Course Certification - </strong> 2017</li>
                            <li><strong>Coding Dojo </strong> - San Jose, CA (online) - <strong> Full-Stack Developer Certificate - </strong> Python, MERN, Java - 2021</li>
                        </ul>
                    </div>
                    
                    <h3 className="mt-5 mb-3 text-secondary">PROFESSIONAL  EXPERIENCE</h3>
                    <div className={(windowWidth > 800) ? "mx-5 my-4 d-flex flex-row justify-content-between" : "my-4 d-flex flex-row justify-content-between"}>
                        
                        <div className="d-flex flex-column" style={(windowWidth > 800) ? { width: "14%" } : { width: "24%" }} >
                            <h5>BottleBoon Colsulting, LLC</h5>
                            <h6>San Diego, CA</h6>
                            <h6>2020 - 2021</h6>
                        </div>
                        
                        <div className="" style={(windowWidth > 800) ? { width: "85%" } : { width: "75%" }} >
                            <h5 className={(windowWidth > 800) ? "fw-normal fst-italic ms-4" : "fw-normal fst-italic ms-5"}>Owner</h5>
                            <ul>
                                <li>Partnered with two former co-workers to form an LLC that focused hospitality consulting during the early days of the coronavirus pandemic.</li>
                                <li>Obtained a multi-year contract from a Fortune 500 Real Estate company to operate food and beverage venues on its campuses.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className={(windowWidth > 800) ? "mx-5 my-4 d-flex flex-row justify-content-between" : "my-4 d-flex flex-row justify-content-between"}>
                        
                        <div className="d-flex flex-column" style={(windowWidth > 800) ? { width: "14%" } : { width: "24%" }} >
                            <h5>Waterbar</h5>
                            <h6>San Diego, CA</h6>
                            <h6>2017 - 2019</h6>
                        </div>
                        
                        <div className="" style={(windowWidth > 800) ? { width: "85%" } : { width: "75%" }} >
                            <h5 className={(windowWidth > 800) ? "fw-normal fst-italic ms-4" : "fw-normal fst-italic ms-5"}>Beverage Manager</h5>
                            <ul>
                                <li>Created and maintained a beverage program that averaged between $500,000 and $700,000 in monthly sales.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className={(windowWidth > 800) ? "mx-5 my-4 d-flex flex-row justify-content-between" : "my-4 d-flex flex-row justify-content-between"}>
                        
                        <div className="d-flex flex-column" style={(windowWidth > 800) ? { width: "14%" } : { width: "24%" }} >
                            <h5>Searsucker</h5>
                            <h6>San Diego, CA</h6>
                            <h6>2014 - 2016</h6>
                        </div>
                        
                        <div className="" style={(windowWidth > 800) ? { width: "85%" } : { width: "75%" }} >
                            <h5 className={(windowWidth > 800) ? "fw-normal fst-italic ms-4" : "fw-normal fst-italic ms-5"}>General Manager</h5>
                            <ul>
                                <li>Focused on employee and leadership development in order to reduce turnover and build loyalty during a multi-year transition as a small corporation was acquired by a much larger one.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mx-5 border-top border-secondary my-4"></div>
                    <div className="text-center">
                        <a href="#" className="link link-light text-decoration-underline" style={{ margin: "auto" }} >download a printable copy of this resume</a>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Resume
