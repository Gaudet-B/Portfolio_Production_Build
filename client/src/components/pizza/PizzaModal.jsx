import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import Crust from './Crust'
import Review from './Review'
import Sauce from './Sauce'
import Toppings from './Toppings'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import ProgressBar from 'react-bootstrap/ProgressBar'

import pizzaLogo from './assets/pizza-logo-temp.jpg'


const PizzaModal = props => {

    // all props set globally at App.js level
    const {order, setOrder, addToShoppingCart, setPage } = props

    // state hooks for displaying and navigating through modal
    const [show, setShow] = useState(false)
    const [step, setStep] = useState(1)

    // returns the new price
    const sumCost = () => {
        let sum = 0
        if (order.hasOwnProperty("crust")) {
            sum += order.crust.price
            console.log(sum)
        }
        if (order.hasOwnProperty("sauce")) {
            sum += order.sauce.price
            console.log(sum)
        }
        if (order.hasOwnProperty("toppings")) {
            let totalToppings = sumToppings()
            sum += totalToppings
            console.log(sum)
        }
        return sum
    }

    //
    const sumToppings = () => {
        let sum = 0
        if (order.toppings.hasOwnProperty("meat")) {
            let idx = 0
            while (idx <= order.toppings.meat.length) {
                sum++
                idx++
            }
        }
        if (order.toppings.hasOwnProperty("other")) {
            if (order.toppings.other.length > 3) {
                let idx = 0
                while (idx <= order.toppings.other.length) {
                    sum++
                    idx++
                }
            }
        }
        return sum
    }

    // checks that the current step has been completed before continuing
    const checkReqs = () => {
        if (step === 1 && !order.crust) return false
        else if (step === 2 && !order.sauce) return false
        else if (step === 3) {
            if (!order.toppings || !order.toppings.cheese || order.toppings.cheese.length < 1) return false
        } 
        return true
    }

    const moveOrderToSession = async newTotal => {
        await setOrder({
            ...order,
            price: newTotal
        })
        sessionStorage.setItem("order", JSON.stringify(order))
    }

    // handlers for modal...

    // close
    const handleClose = () => {
        setStep(1)
        setShow(false)
    }
    // show
    const handleShow = () => setShow(true)
    // next
    const handleNext = () => {
        // checks that no required steps have been missed/skipped
        let reqs = checkReqs()
        // display error messages if requirements not met
        if (!reqs) {
            if (step === 3) {
                document.getElementById("error").innerHTML = "please select a cheese (or none)"
            } else {
                document.getElementById("error").innerHTML = "this step is required"
            }
            return
        }
        // updates the total price of order
        let newTotal = sumCost()
        // stores the post-change order to session
        moveOrderToSession(newTotal)
        // removes the error message
        document.getElementById("error").innerHTML = ""
        setStep(step + 1)
    }
    // back
    const handleBack = () => {
        // removes the error message
        document.getElementById("error").innerHTML = ""
        setStep(step - 1)
    }

    // handle submit -> checkout view
    const handleSubmit = async () => {
        const wait = await addToShoppingCart()
        if (wait) return setPage("checkout")
    }

    // handle add to cart and make another pizza -> modal step #1
    const handleOrder = async () => {
        const wait = await addToShoppingCart()
        if (wait) return setStep(1)
    }

    return (
        <div className="d-flex flex-column text-center align-items-center border rounded flex-1" style={{ height: "fit-content", width: "360px", backgroundColor: "#FFFFFF" }}>
            <img className="rounded my-2"
                src={pizzaLogo} 
                alt="p!zza logo" 
                height="295px"
                width="295px"
                className="m-4"
            />
            
            {/* button to open modal */}
            <Button variant="danger" onClick={handleShow} className="m-3 btn-lg">
                Get Started
            </Button>

            {/* modal content */}
            <Modal show={show} onHide={handleClose}>
                {
                    // handle edge cases that close the modal if "steps" don't exist
                    (step <= 0) ?
                    handleClose()
                    :
                    (step > 4) ?
                    handleClose()
                    :

                    // step 1 content - crust
                    (step === 1) ?
                    <Container>
                        <Modal.Header closeButton>

                            {/* step description and progress bar */}
                            <Container >
                                <Modal.Title>Step 1 - Choose Crust</Modal.Title>
                                <ProgressBar variant="danger" animated now={25} className="my-2" />
                                <p className="fs-4 mt-2">Total: <strong className="ms-2">${order.price}</strong></p>
                            </Container>

                        </Modal.Header>

                        <Modal.Body>
                            <Crust order={order} setOrder={setOrder}/>
                        </Modal.Body>

                    </Container>
                    :

                    // step 2 content - sauce
                    (step === 2) ?
                    <Container>
                        <Modal.Header closeButton>

                            {/* step description and progress bar */}
                            <Container >
                                <Modal.Title>Step 2 - Choose Sauce</Modal.Title>
                                <ProgressBar variant="danger" animated now={50} className="my-2" />
                                <p className="fs-4 mt-2">Total: <strong className="ms-2">${order.price}</strong></p>
                            </Container>

                        </Modal.Header>

                        <Modal.Body>
                            <Sauce order={order} setOrder={setOrder}/>
                        </Modal.Body>

                    </Container>
                    :

                    // step 3 content - toppings
                    (step === 3) ?
                    <Container>
                        <Modal.Header closeButton>

                            {/* step description and progress bar */}
                            <Container >
                                <Modal.Title>Step 3 - Choose Toppings</Modal.Title>
                                <ProgressBar variant="danger" animated now={75} className="my-2" />
                                <p className="fs-4 mt-2">Total: <strong className="ms-2">${order.price}</strong></p>
                            </Container>

                        </Modal.Header>

                        <Modal.Body>
                            <Toppings order={order} setOrder={setOrder}/>
                        </Modal.Body>

                    </Container>
                    :

                    // step 4 content - review
                    (step === 4) ?
                    <Container>
                        <Modal.Header closeButton>

                            {/* step description and progress bar */}
                            <Container >
                                <Modal.Title>Step 4 - Review Pizza</Modal.Title>
                                <ProgressBar variant="danger" animated now={100} className="my-2" />
                                <p className="fs-4 mt-3 mb-0">Total: <strong className="ms-2">${order.price}</strong></p>
                            </Container>

                        </Modal.Header>

                        <Modal.Body>
                            <Review order={order} />
                        </Modal.Body>

                    </Container>
                    :
                        // handle edge case of content not rendering due to the "step" state hook
                        <p>Loading...</p>
                    }

                {/* footer always contains 'back' button... */}
                <Modal.Footer className="d-flex flex-row justify-content-between">
                    <Button variant="outline-secondary" onClick={handleBack} style={{ height: "inherit" }}>
                        Back
                    </Button>
                    <p id="error" className="text-danger" ></p>
                    {
                        // if user is on step #4, display BOTH 'add' and 'checkout' buttons
                        (step === 4) ?
                        <div className="d-flex flex-row">
                        <Button variant="outline-danger" onClick={handleOrder} className="mx-2" style={{ maxWidth: "150px", height: "inherit" }}>
                            Add to Cart and Make Another!
                        </Button>
                        <Button variant="danger" onClick={handleSubmit} style={{ maxWidth: "150px", height: "inherit" }}>
                            Checkout
                        </Button>
                        </div>
                        :
                        // otherwise, display ONLY the 'continue' button
                        <Button id="continue" variant="outline-danger" onClick={handleNext}>
                            Continue
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default PizzaModal