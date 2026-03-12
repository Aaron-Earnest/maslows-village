import tiny_homes_logo_1 from '../images/tiny_homes_logo_1_no_background.png';
import styles from '../css/header.module.css'

function Header(){
    return(
        <>
            <img className={styles.img} src={tiny_homes_logo_1}/>;
        </>
    )
}

export default Header;