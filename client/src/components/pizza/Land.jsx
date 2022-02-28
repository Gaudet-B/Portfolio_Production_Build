
import Login from './Login'
import RegisterModal from './RegisterModal'

import styles from './pizza.style.module.css'

const Land = props => {

    const { showShop } = props

    const text = `Continue as guest >`

    return (
        <div className={styles.shop}>
            <div className="d-flex flex-row justify-content-between">

                <div className="d-flex flex-column bg-light rounded my-3 me-3" style={{ width: "63%" }}>

                    {/* quick login access */}
                    <Login className="flex-2" />

                    {/* registration process handled in modal */}
                    <RegisterModal />

                </div>

                {/* continue as guest */}
                <div className="d-flex flex-column bg-light rounded p-3 justify-content-evenly my-3" style={{ width: "34%" }}>
                    <p className="link-danger text-decoration-none fw-bold"  onClick={showShop} style={{ cursor: "pointer" }} >{text}</p>
                </div>

            </div>
        </div>
    )
}

export default Land