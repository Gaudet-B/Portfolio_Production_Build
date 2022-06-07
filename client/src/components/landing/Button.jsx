/** 
 * ???
 * 
 */

import styles from '../../styles/landing.style.module.css'


const Button = props => {

    // const { title } = props
    const { windowWidth } = props

    return (
        <div id="" className={styles.button}>
            <a id={`${props.title}`} href={`/${props.title}`} className="" >
                {(windowWidth > 800) ? <div className={styles.mask}></div> : null}
            </a>
            <div id={`${props.title}-label`} className=""></div>
        </div>
    )
}

export default Button