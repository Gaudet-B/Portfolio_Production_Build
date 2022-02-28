import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

import emptyCart from './assets/shopping-cart-empty.png'
import fullCart from './assets/shopping-cart-full.png'
import burger from './assets/burger-menu.png'
import pizzaCart from './assets/pizza-cart-icon.png'
import pizzaIcon from './assets/pizza-icon.png'

import styles from './pizza.style.module.css'

const Navi = props => {

    // shopping cart props passed down from global level
    const { isEmpty, shoppingCart, page, setPage, setDetailShow, setStepDetail, handleCheckout } = props

    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, [])

    const closeWindow = () => {
        window.close()
    }

    const handleView = i => {
        if (page === "checkout") {
            setStepDetail(i)
            setDetailShow(true)
        } else {
            console.log("check")
            setStepDetail(i)
            setDetailShow(true)
            setPage("checkout")
        }
    }

    return (

        <Navbar className="d-flex flex-row justify-content-between p-0 border rounded" bg="light" style={{ width: "inherit", maxHeight: "62px" }} >
            
            {/* small brand logo */}
            <Navbar.Brand onClick={() => setPage("shop")} className="p-0" style={{ cursor: "pointer" }} >
                <img 
                    src={pizzaIcon} 
                    alt="pizza icon"
                    width="50px"
                    height="50px"
                    style={{ margin: "6px" }}
                    />
            </Navbar.Brand>

            {/* title logo */}
            <div className={styles.title}>
                <p style={{ margin: "0px", fontSize: "36px" }} >P!ZZA</p>
            </div>

            <div className="p-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="align-self-end" >

                    {/* shopping cart dropdown */}
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="dark" className="bg-light border-light ms-3" style={{ padding: "0px" }}>
                            
                            {/* handle image change when cart has order(s) */}
                            {(!isEmpty) ?
                            <img 
                                src={fullCart} 
                                alt="shopping cart icon" 
                                height="30px"
                                width="30px"
                                className="me-2"
                            />
                            :
                            <img 
                                src={emptyCart} 
                                alt="shopping cart icon" 
                                height="30px"
                                width="30px"
                                className="me-2"
                            />
                            }
                            </Dropdown.Toggle>

                            {(isLoading) ? 
                            <Dropdown.Menu variant="light" >
                                <h3 className="ms-2" style={{ color: "rgb(185, 3, 3)" }}>Your Cart</h3>
                                <div className="d-flex flex-row">
                                    <p className="ms-2 mt-1" style={{ color: "rgb(185, 3, 3)" }}>is loading...</p>
                                    <img 
                                    src={pizzaCart} 
                                    alt="small pizza icon" 
                                    height="40px"
                                    width="40px"
                                    className={styles.pizzaSpin + " ms-2"}
                                    />
                                </div>
                            </Dropdown.Menu>
                            : (isEmpty) ? 
                            <Dropdown.Menu variant="light" >
                                <h3 className="ms-2" style={{ color: "rgb(185, 3, 3)" }}>Your Cart</h3>
                                <p className="ms-2" style={{ color: "rgb(185, 3, 3)" }}>is Empty</p>
                            </Dropdown.Menu>
                            :
                            <Dropdown.Menu variant="light" >
                                <h3 className="ms-2" style={{ color: "rgb(185, 3, 3)" }}>Your Cart</h3>
                                {shoppingCart.map((item, idx) => {
                                    return(
                                    <Container key={idx}>
                                        <Dropdown.Divider />
                                        <div className="d-flex flex-row" style={{ cursor: "pointer" }}>
                                            <div className="mb-1 fw-bold" onClick={() => handleView(idx)}><p className={styles.cartHeader}>Pizza #{idx + 1}</p></div>
                                            <img
                                                src={pizzaCart}
                                                alt="small pizza icon"
                                                height="35px"
                                                width="35px"
                                                className="ms-2"
                                                onClick={() => handleView(idx)}
                                            />
                                        </div>
                                        <p className="fw-bold">${item.price}</p>
                                            <p className="mb-1">{item.crust.name}</p>
                                            <p className="mb-1">{item.sauce.name}</p>
                                            <p className="mb-1">toppings... (<strong>{item.toppings.cheese.length + item.toppings.meat.length + item.toppings.other.length}</strong>)</p>
                                    </Container>
                                    )
                                })}
                                <Dropdown.Divider />
                                <a className="ms-2 fw-bold link-danger text-decoration-none" onClick={handleCheckout} style={(!shoppingCart || shoppingCart.length < 1) ? null : { cursor: "pointer"}}>Checkout &gt;</a>
                            </Dropdown.Menu>
                                }
                        </Dropdown>

                        {/* menu dropdown */}
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="light" className="me-2" style={{ padding: "0px" }}>
                                <img 
                                src={burger}
                                width="35px" 
                                height="30px" 
                                alt="hambuger icon" 
                                />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="text-secondary ps-3" bg="light">
                                {/* old links */}
                                {/* <Dropdown.Item href="/">Your Orders</Dropdown.Item> */}
                                {/* <Dropdown.Item href="/">Popular Orders</Dropdown.Item> */}
                                {/* <Dropdown.Item href="/">Preferences</Dropdown.Item> */}
                                
                                {/* new text in place of links for demo version */}
                                <p>Your Orders</p>
                                <p>Popular Orders</p>
                                <p>Preferences</p>
                                <Dropdown.Divider />
                                <Dropdown.Item className="text-danger" onClick={closeWindow} >Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Nav>
                    
                </Navbar.Collapse>
            </div>
        </Navbar>
    )

}

export default Navi