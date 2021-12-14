
import styles from '../components/header.style.module.css'


const Header = props => {

    // link labels and windowWidth passed down from parent
    const {left, right, windowWidth} = props

    // link variables
    var leftLink, rightLink
    // exception handling for "home" path
    if (left == "HOME") {
        leftLink = "/"
    } else {
        leftLink = left.toLowerCase()
    }
    // exception handling for "home" path
    if (right == "HOME") {
        rightLink = "/"
    } else {
        rightLink = right.toLowerCase()
    }

    return (
        <div className={(windowWidth > 800) ? styles.mainContainer : (windowWidth < 375) ? styles.smallContainer : styles.responsiveContainer} style={{ width: `${windowWidth * .9}px` }}>
            <a href={leftLink} id="left" className={(windowWidth > 800) ? styles.nav : (windowWidth < 375) ? styles.smallNav : styles.responsiveNav}> &lt; { left }<span aria-hidden="true"></span> </a>
            <a href={rightLink} id="right" className={(windowWidth > 800) ? styles.nav : (windowWidth < 375) ? styles.smallNav : styles.responsiveNav}> { right }<span aria-hidden="true"></span> &gt; </a>
        </div>
    )
}

export default Header
