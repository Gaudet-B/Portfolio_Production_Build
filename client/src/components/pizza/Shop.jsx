import { useEffect } from 'react'

import PizzaModal from './PizzaModal'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import styles from './pizza.style.module.css'


const Shop = props => {

    // props passed from parent (App.js) and will be passed to children of this view component
    const {order, setOrder, shoppingCart, addToShoppingCart, setPage, handleCheckout } = props

    return (
        <div className={styles.shop}>
            <Container className="d-flex flex-column justify-content-between my-3" style={{ width: "inherit", padding: "0px" }}>

                <PizzaModal order={order} setOrder={setOrder} addToShoppingCart={addToShoppingCart} setPage={setPage} />

                <div className=" my-4 bg-light rounded p-3 text-center" style={{ width: "100%" }} >

                    {/* handle displaying active orders to user, as well as plurality of the word "pizza" */}
                    {(shoppingCart.length === 1) ?
                    <p className="fs-5 text-center">You have <strong className="text-danger">{shoppingCart.length}</strong> pizza in your cart.</p>
                    :
                    <p className="fs-5 text-center">You have <strong className="text-danger">{shoppingCart.length}</strong> pizzas in your cart.</p>
                    }

                    <Button onClick={handleCheckout} variant="outline-danger">
                        Checkout &gt;
                    </Button>
                </div>

            </Container>
        </div>
    )
}

export default Shop
