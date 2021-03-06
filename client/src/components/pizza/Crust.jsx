import { useState } from 'react'

import CurrentCrust from './CurrentCrust'

import Container from 'react-bootstrap/Container'

import nyStyle from './assets/ny-style-temp.jpg'
import deepDishThumb from './assets/deepDish-crust-thumb.png'
import nyStyleThumb from './assets/nyStyle-crust-thumb.png'
import sicilianThumb from './assets/sicilian-crust-thumb.png'


const Crust = props => {

    // props set globally at App.js level
    const {order, setOrder} = props

    const [currentCrust, setCurrentCrust] = useState({name: "NY Style", image: nyStyle, price: 10.99})

    // crusts hard-coded here for demo version of the application
    const [allCrusts, setAllCrusts] = useState([
        {
            name: "NY Style",
            image: nyStyleThumb,
            price: 10.99
        },
        {
            name: "Deep Dish",
            image: deepDishThumb,
            price: 11.99
        },
        {
            name: "Sicilian",
            image: sicilianThumb,
            price: 11.99
        }
    ])

    // handles change as user input selects/changes preferred crust, as well as handles the color change to display the change to user
    const changeHandler = e => {

        // allows user to click on the overall container to change input - see line 80 for exception handling
        if (e.target.id === "NY Style" || e.target.id === "Deep Dish" || e.target.id === "Sicilian") {
            // declare variable to store crust name in, then loop over allCrusts to find match
            let newCrust = {}
            for (let i = 0; i < allCrusts.length; i++) {
                if (allCrusts[i].name === e.target.id) {
                    newCrust = allCrusts[i]
                }
            }
            // sets the selected crust
            setCurrentCrust(newCrust)
            // adds selected crust to the current order
            setOrder({
                ...order,
                crust: newCrust,
            })

            // handles UI color changes
            e.target.style.backgroundColor = "rgba(143, 3, 3, 0.774)"
            e.target.lastChild.className = "text-light"
            if(e.target.id === e.target.parentNode.childNodes[0].id){
                e.target.nextSibling.style.backgroundColor = "whitesmoke" 
                e.target.nextSibling.lastChild.className = "" 
                e.target.nextSibling.nextSibling.style.backgroundColor = "whitesmoke" 
                e.target.nextSibling.nextSibling.lastChild.className = "" 
            } else if (e.target.id === e.target.parentNode.childNodes[1].id) {
                e.target.nextSibling.style.backgroundColor = "whitesmoke"
                e.target.nextSibling.lastChild.className = ""
                e.target.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.previousSibling.lastChild.className = ""
            } else if (e.target.id === e.target.parentNode.childNodes[2].id) {
                e.target.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.previousSibling.lastChild.className = ""
                e.target.previousSibling.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.previousSibling.previousSibling.lastChild.className = ""
            }

        // exception handler - allows user to click on the image or the overall container
        } else {
            let newCrust = {}
            for (let i = 0; i < allCrusts.length; i++) {
                if (allCrusts[i].name === e.target.parentNode.id) {
                    newCrust = allCrusts[i]
                }
            }
            setCurrentCrust(newCrust)
            setOrder({
                ...order,
                crust: newCrust
            })

            e.target.parentNode.style.backgroundColor = "rgba(143, 3, 3, 0.774)"
            e.target.parentNode.lastChild.className = "text-light"

            if(e.target.parentNode.id === e.target.parentNode.parentNode.childNodes[0].id){
                e.target.parentNode.nextSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.nextSibling.lastChild.className = ""
                e.target.parentNode.nextSibling.nextSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.nextSibling.nextSibling.lastChild.className = ""

            } else if (e.target.parentNode.id === e.target.parentNode.parentNode.childNodes[1].id) {
                e.target.parentNode.nextSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.nextSibling.lastChild.className = ""
                e.target.parentNode.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.previousSibling.lastChild.className = ""

            } else if (e.target.parentNode.id === e.target.parentNode.parentNode.childNodes[2].id) {
                e.target.parentNode.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.previousSibling.lastChild.className = ""
                e.target.parentNode.previousSibling.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.previousSibling.previousSibling.lastChild.className = ""
            }
        }
    }

    return (

        <Container className="rounded" >

            {/* component to display large image to user based on crust selection */}
            <CurrentCrust crust={currentCrust} />

            <div className="d-flex flex-row rounded" style={{ backgroundColor: "whitesmoke" }}>

                {/* checks for allCrusts object and maps each one to the UI */}
                {(allCrusts) ?
                    allCrusts.map((crust, idx) => {
                        return(
                            <div key={idx} id={crust.name} onClick={changeHandler} className="d-flex flex-column text-center p-2 rounded" style={{ width: "33.33%", cursor: "pointer" }}>
                                <img
                                    id="childImg"
                                    src={crust.image}
                                    alt={`${crust.name} image`}
                                    href="/"
                                    height={(crust.name === "Deep Dish") ? "90px" : "110px"}
                                    width="inherit"
                                    margin="auto"
                                    className={(crust.name === "Deep Dish") ? "rounded mt-3" : "rounded"}
                                />
                                <div id="ignore" className="" >
                                    {crust.name} <br/>
                                    ${crust.price}
                                </div>
                            </div>
                        )
                    })
                    : null
                }
            </div>
        </Container>
    );
}

export default Crust
