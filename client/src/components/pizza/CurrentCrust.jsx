
import deepDish from './assets/deep-dish.jpg'
import nyStyle from './assets/ny-style-temp.jpg'
import sicilian from './assets/sicilian-crust-temp.png'


const CurrentCrust = props => {

    // props passed down from Crust.jsx parent
    const {crust} = props

    return (
        <div className="d-flex flex-column text-center rounded py-3 ps-2" style={{ backgroundColor: "rgba(143, 3, 3, 0.774)" }}>
            <div>

                {/* demo version of application has hard-coded images with conditional rendering */}
                {
                    (crust.name === "Sicilian") ?
                    <img 
                        src={sicilian} 
                        alt="sicilian crust"
                        height="280px"
                        width="80%"
                        className="rounded"
                    />
                    : (crust.name === "Deep Dish") ?
                    <img 
                        src={deepDish} 
                        alt="deep dish crust"
                        height="280px"
                        width="80%"
                        className="rounded"
                    />
                    :
                    <img
                    src={nyStyle} 
                        alt="ny style crust"
                        height="280px"
                        width="80%"
                        className="rounded"
                    />
                }
            </div>

            {/* descriptions of each crust */}
            {(crust.name === "Sicilian") ?
            <p className="mx-4 my-2 text-light fs-4">
                This square shaped dough will rise to over an inch thick and have a crunchy base, and an airy interior.
            </p>
            : (crust.name === "Deep Dish") ?
            <p className="mx-4 my-2 text-light fs-4">
                This pan-baked pizza is done in the classic Chicago style, with LOTS of toppings underneath and sauce on top.
            </p>
            : 
            <p className="mx-4 my-2 text-light fs-4">
                Hand-tossed, thin, cripsy, classic.
            </p>
            }

        </div>
    )
}

export default CurrentCrust
