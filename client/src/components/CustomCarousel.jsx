import { useState } from 'react'
import styles from '../components/carousel.style.module.css'
import CardBack from './CardBack'
import CardFront from './CardFront'


const CustomCarousel = props => {

    // import classnames utility --> https://github.com/JedWatson/classnames //
    const classNames = require("classnames")

    // starting agles for carousel rotation
    const [leftAngle, setLeftAngle] = useState(90)
    const [rightAngle, setRightAngle] = useState(-90)

    // starting booleans for card flipping
    const [isFlippedOne, setIsFlippedOne] = useState(false)
    const [isFlippedTwo, setIsFlippedTwo] = useState(false)
    const [isFlippedThree, setIsFlippedThree] = useState(false)
    const [isFlippedFour, setIsFlippedFour] = useState(false)

    const [cardOneAngle, setCardOneAngle] = useState(180)
    const [cardTwoAngle, setCardTwoAngle] = useState(180)
    const [cardThreeAngle, setCardThreeAngle] = useState(180)
    const [cardFourAngle, setCardFourAngle] = useState(180)

    // pull projects array and images array from props
    const { projects, images } = props

    // function to rotate the carousel
    const spin = e => {
        let spinner = document.getElementById("spinner");
        let id = e.target.id
        if (id == "spanLeft") {
            setLeftAngle(leftAngle + 90)
            setRightAngle(rightAngle + 90)
            spinner.setAttribute("style", `-webkit-transform: rotateY(${leftAngle}deg); -moz-transform: rotateY(${leftAngle}deg); transform: rotateY(${leftAngle}deg);`)
        } else {
            setRightAngle(rightAngle - 90)
            setLeftAngle(leftAngle - 90)
            spinner.setAttribute("style", `-webkit-transform: rotateY(${rightAngle}deg); -moz-transform: rotateY(${rightAngle}deg); transform: rotateY(${rightAngle}deg);`)
        }
    }

    // function that flips the cards - it is passed down to both Front and Back components where the triggering links live
    const flipCard = num => {

        let card = document.getElementById(`card-${num}`)

        if (num === "one") {
            setCardOneAngle(cardOneAngle + 180)
            let angle = cardOneAngle
            card.setAttribute("style", `-webkit-transform: rotateY(${angle}deg); -moz-transform: angleY(${angle}deg); transform: rotateY(${angle}deg);`)
        }
        if (num === "two") {
            setCardTwoAngle(cardTwoAngle + 180)
            let angle = cardTwoAngle
            card.setAttribute("style", `-webkit-transform: rotateY(${angle}deg); -moz-transform: angleY(${angle}deg); transform: rotateY(${angle}deg);`)
        }
        if (num === "three") {
            setCardThreeAngle(cardThreeAngle + 180)
            let angle = cardThreeAngle
            card.setAttribute("style", `-webkit-transform: rotateY(${angle}deg); -moz-transform: angleY(${angle}deg); transform: rotateY(${angle}deg);`)
        }
        if (num === "four") {
            setCardFourAngle(cardFourAngle + 180)
            let angle = cardFourAngle
            card.setAttribute("style", `-webkit-transform: rotateY(${angle}deg); -moz-transform: angleY(${angle}deg); transform: rotateY(${angle}deg);`)
        }

    }


    // combining class names:

    var cardOne = [styles.card, styles.cardOne]
    var cardTwo = [styles.card, styles.cardTwo]
    var cardThree = [styles.card, styles.cardThree]
    var cardFour = [styles.card, styles.cardFour]

    var cardOneClass = classNames(cardOne)
    var cardTwoClass = classNames(cardTwo)
    var cardThreeClass = classNames(cardThree)
    var cardFourClass = classNames(cardFour)

    var cardDivOne = `${styles.cardDiv} ${styles.cardOneDiv}`
    var cardDivTwo = `${styles.cardDiv} ${styles.cardTwoDiv}`
    var cardDivThree = `${styles.cardDiv} ${styles.cardThreeDiv}`
    var cardDivFour = `${styles.cardDiv} ${styles.cardFourDiv}`

    var leftArrow = classNames([styles.span, styles.spanLeft])
    var rightArrow = classNames([styles.span, styles.spanRight])

    return (
        <div className={styles.container}>
            <div id="carousel" className={styles.carousel}>

                <figure id="spinner" className={styles.spinner}>
                    <div className={cardDivOne} >

                        <figure id="card-one" className={styles.flipper} >

                            <figure className={cardOneClass} >
                                <div id="left" className={styles.left}></div>
                                <div id="right" className={styles.right}></div>
                                <div id="card-one-back" className={styles.cardBack}>
                                    <CardBack flipCard={flipCard} flip={"one"} project={projects[0]} images={images.draft} />
                                </div>
                                <div id="card-one-front" className={styles.cardFront}>
                                    <CardFront flipCard={flipCard} flip={"one"} project = {projects[0]} />
                                </div>
                            </figure>

                        </figure>

                    </div>

                    <div className={cardDivTwo}>

                        <figure id="card-two" className={styles.flipper} >

                            <figure className={cardTwoClass} >
                                <div id="left" className={styles.left}></div>
                                <div id="right" className={styles.right}></div>
                                <div id="card-two-back" className={styles.cardBack}>
                                    <CardBack flipCard={flipCard} flip={"two"} project={projects[3]} images={images.myth} />
                                </div>
                                <div id="card-two-front" className={styles.cardFront}>
                                    <CardFront flipCard={flipCard} flip={"two"} project = {projects[3]} />
                                </div>
                            </figure>

                        </figure>

                    </div>

                    <div className={cardDivThree}>

                        <figure id="card-three" className={styles.flipper} >

                            <figure className={cardThreeClass} >
                                <div id="left" className={styles.left}></div>
                                <div id="right" className={styles.right}></div>
                                <div id="card-three-back" className={styles.cardBack}>
                                    <CardBack flipCard={flipCard} flip={"three"} project={projects[2]} images={images.portfolio} />
                                </div>
                                <div id="card-three-front" className={styles.cardFront}>
                                    <CardFront flipCard={flipCard} flip={"three"} project = {projects[2]} />
                                </div>
                            </figure>

                        </figure>

                    </div>

                    <div className={cardDivFour}>

                        <figure id="card-four" className={styles.flipper} >

                            <figure className={cardFourClass} >
                                <div id="left" className={styles.left}></div>
                                <div id="right" className={styles.right}></div>
                                <div id="card-four-back" className={styles.cardBack}>
                                    <CardBack flipCard={flipCard} flip={"four"} project={projects[1]} images={images.pizza} />
                                </div>
                                <div id="card-four-front" className={styles.cardFront}>
                                    <CardFront flipCard={flipCard} flip={"four"} project = {projects[1]} />
                                </div>

                            </figure>

                        </figure>

                    </div>

                </figure>
            </div>

            <div id="spanLeft" className={leftArrow}  onClick={spin}>&lt;</div>
            <div id="spanRight" className={rightArrow}  onClick={spin}>&gt;</div>
        </div>
    )
}

export default CustomCarousel
