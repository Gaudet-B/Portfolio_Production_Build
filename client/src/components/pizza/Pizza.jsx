import {useEffect, useState} from 'react'

import Load from './Load'
import Background from './Background'
import Navi from './Navi'
import Land from './Land'
import Shop from './Shop'
import Checkout from './Checkout'
// import ViewOrder from './ViewOrder'
import Confirm from './Confirm'

import pieImg from './assets/pizza-pie-vector.png'
import sliceImg from './assets/pizza-slice-vector.png'


const Pizza = () => {

    // functions to check session and local storage for order info or shopping cart info
    const getSessionOrDefault = (key, defaultValue) => {
        const stored = sessionStorage.getItem(key)
        if (!stored) return defaultValue
        return JSON.parse(stored)
    }
    const getLocalOrDefault = (key, defaultValue) => {
        const stored = localStorage.getItem(key)
        if (!stored) return defaultValue
        return JSON.parse(stored)
    }
    
    // global state props
    const [order, setOrder] = useState({ price: 0.00 })
    const [shoppingCart, setShoppingCart] = useState(getLocalOrDefault("shoppingCart", []))
    const [isEmpty, setIsEmpty] = useState(true)
    const [page, setPage] = useState()
    const [loading, setLoading] = useState(true)
    const [detailShow, setDetailShow] = useState(false)
    const [stepDetail, setStepDetail] = useState()

    // function that will add an order to the urser's shopping cart
    const addToShoppingCart = () => {
        let beforeCart

        if (isEmpty) {
            beforeCart = shoppingCart
        } else {
            beforeCart = JSON.parse(localStorage.getItem("shoppingCart"))
        }

        let beforeLength = beforeCart.length
        
        let orderArr = [...shoppingCart]
        orderArr.push(JSON.parse(sessionStorage.getItem("order")))
        setShoppingCart(orderArr)
        
        localStorage.setItem("shoppingCart", JSON.stringify(orderArr))
        
        let afterCart = JSON.parse(localStorage.getItem("shoppingCart"))
        let afterLength = afterCart.length
        
        if (afterLength > beforeLength) {
            sessionStorage.removeItem("order")
            setIsEmpty(false)
            return true
        } else {
            return false
        }
    }

    // empty array that will be filled with images to be remdered as the background
    const images = []

    // fuction that will reset the background colors back to default - in case the user navigates directly away from this demo w/o closing the window
    const resetBackgrounds = () => {
        document.getElementById("App").setAttribute("style", "background-color: rgba(26,26,26,1);")
        document.getElementById("root").setAttribute("style", "background-color: rgb(25,25,25);")
    }

    // navigates to the Shop page
    const showShop = () => setPage("shop")

    // navigates to the Checkout page if there are items in the cart
    const handleCheckout = () => {
        if (!shoppingCart || shoppingCart.length < 1) return
        else {
            setDetailShow(false)
            setPage("checkout")
        }
    }

    useEffect(() => {
        if (shoppingCart.length > 0) {
            setPage("shop")
        } else {
            setPage("landing")
        }

        // applies P!ZZA background settings
        setTimeout(() => {
            document.getElementById("App").setAttribute("style", "max-width: 100vw; min-width: fit-content; height: 100vh")
            document.getElementById("root").setAttribute("style", "background-color: rgba(143, 3, 3, 0.774); height: 100vh")
        }, 200);

        // add Bootstrap to document, remove when component unmounts
        const link = document.createElement("link")
        link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        link.rel = "stylesheet"
        link.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        link.crossOrigin = "anonymous"
        document.body.appendChild(link)
        
        // render the background image grid, then check for order info in local storage
        for (let i = 0; i < 6; i++) {
            images.push(sliceImg)
            images.push(pieImg)
        }
        let cart = localStorage.getItem("shoppingCart")
        if (cart) {
            if (cart.length > 0) {
                setIsEmpty(false)
            }
        }

        setTimeout(() => setLoading(false), 2500)
        
        // removes P!ZZA background settings and applies default
        return (() => {
            document.body.removeChild(link)
            setTimeout(() => {
                resetBackgrounds()
            }, 500);
        })

    }, [])

    // this basically serves as the "App.js" of the P!ZZA app
    return (
        (loading) ?
            <Load />
        :
        <div style={{ margin: "0", padding: "0" }}>
            <Background images={images} />
            <div style={{ maxWidth: "360px", margin: "auto", padding: "2rem 0" }}>
                <Navi isEmpty={isEmpty} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} page={page} setPage={setPage} getLocalOrDefault={getLocalOrDefault} detailShow={detailShow} setDetailShow={setDetailShow} stepDetail={stepDetail} setStepDetail={setStepDetail} handleCheckout={handleCheckout} />
                { (page === "landing") ? <Land showShop={showShop}/>
                : (page === "shop") ? <Shop order={order} setOrder={setOrder} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} addToShoppingCart={addToShoppingCart} setPage={setPage} getSessionOrDefault={getSessionOrDefault} getLocalOrDefault={getLocalOrDefault} handleCheckout={handleCheckout} />
                : (page === "checkout") ? <Checkout setPage={setPage} order={order} setOrder={setOrder} shoppingCart={shoppingCart} getSessionOrDefault={getSessionOrDefault} getLocalOrDefault={getLocalOrDefault} detailShow={detailShow} setDetailShow={setDetailShow} stepDetail={stepDetail} setStepDetail={setStepDetail} />
                : (page === "confirm") ? <Confirm />
                : null
                }

            </div>
        </div>
    )
}

export default Pizza