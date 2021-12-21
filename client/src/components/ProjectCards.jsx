import { useState } from 'react'
import styles from '../components/column.style.module.css'
import CardBack from './CardBack'
import CardFront from './CardFront'


const ProjectCards = props => {

    // import classnames utility --> https://github.com/JedWatson/classnames //
    const classNames = require("classnames")

    // starting angles for card flipping
    const [cardOneAngle, setCardOneAngle] = useState(180)
    const [cardTwoAngle, setCardTwoAngle] = useState(180)
    const [cardThreeAngle, setCardThreeAngle] = useState(180)
    const [cardFourAngle, setCardFourAngle] = useState(180)

    // pull projects array and images array from props
    const { projects, images } = props

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

    // var cardDivOne = `${styles.cardDiv} ${styles.cardOneDiv}`
    // var cardDivTwo = `${styles.cardDiv} ${styles.cardTwoDiv}`
    // var cardDivThree = `${styles.cardDiv} ${styles.cardThreeDiv}`
    // var cardDivFour = `${styles.cardDiv} ${styles.cardFourDiv}`

    return (
        <div className={styles.column} >
            <div className={styles.cardDiv} >

                <figure id="card-one" className={styles.flipper} >

                    <figure className={cardOneClass} >
                        <div id="left" className={styles.left}></div>
                        <div id="right" className={styles.right}></div>
                        <div id="card-one-back" className={styles.cardBack}>
                            <CardBack flipCard={flipCard} flip={"one"} project={projects[0]} images={images.draft} responsive={true} />
                        </div>
                        <div id="card-one-front" className={styles.cardFront}>
                            <CardFront flipCard={flipCard} flip={"one"} project = {projects[0]} responsive={true} />
                        </div>
                    </figure>

                </figure>

                </div>

                <div className={styles.cardDiv}>

                <figure id="card-two" className={styles.flipper} >

                    <figure className={cardTwoClass} >
                        <div id="left" className={styles.left}></div>
                        <div id="right" className={styles.right}></div>
                        <div id="card-two-back" className={styles.cardBack}>
                            <CardBack flipCard={flipCard} flip={"two"} project={projects[1]} images={images.pizza} responsive={true} />
                        </div>
                        <div id="card-two-front" className={styles.cardFront}>
                            <CardFront flipCard={flipCard} flip={"two"} project = {projects[1]} responsive={true} />
                        </div>
                    </figure>

                </figure>

                </div>

                <div className={styles.cardDiv}>

                <figure id="card-three" className={styles.flipper} >

                    <figure className={cardThreeClass} >
                        <div id="left" className={styles.left}></div>
                        <div id="right" className={styles.right}></div>
                        <div id="card-three-back" className={styles.cardBack}>
                            <CardBack flipCard={flipCard} flip={"three"} project={projects[2]} images={images.portfolio} responsive={true} />
                        </div>
                        <div id="card-three-front" className={styles.cardFront}>
                            <CardFront flipCard={flipCard} flip={"three"} project = {projects[2]} responsive={true} />
                        </div>
                    </figure>

                </figure>

                </div>

                <div className={styles.cardDiv}>

                <figure id="card-four" className={styles.flipper} >

                    <figure className={cardFourClass} >
                        <div id="left" className={styles.left}></div>
                        <div id="right" className={styles.right}></div>
                        <div id="card-four-back" className={styles.cardBack}>
                            <CardBack flipCard={flipCard} flip={"four"} project={projects[3]} images={images.myth} responsive={true} />
                        </div>
                        <div id="card-four-front" className={styles.cardFront}>
                            <CardFront flipCard={flipCard} flip={"four"} project = {projects[3]} responsive={true} />
                        </div>

                    </figure>

                </figure>

                </div>
        </div>
    )
}

export default ProjectCards
