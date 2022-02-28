import pizza from './assets/pizza-review-temp.png'

import styles from './pizza.style.module.css'

const Load = () => {
    return (
        <div style={{ width: "fit-content", margin: "auto"}}>
            <img 
                src={pizza}
                alt="pizza logo"
                width="200px"
                height="200px"
                className={styles.pizzaSpin}
                style={{ margin: "33vh 0 0 0" }}
            />
        </div>
    )
}

export default Load