import styles from '../css/footer.module.css'
import united_way from '../images/united_way.webp'
import {FaFacebook} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer(){
    return(
        <>
        <footer className={styles["site-footer"]}>
        <img src={united_way}/>
        <div className={styles["social-links"]}>
            <a href="https://www.facebook.com/tinyhomesMtPleasant/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["facebook-icon"]}
            >
                <FaFacebook size={30} />
            </a>
            <a href="tinyhomesmtpleasant@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["email-icon"]}
            >
                <MdEmail size={30} />
            </a>
        </div>
        </footer>
        </>
    );
}

export default Footer;