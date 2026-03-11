import '../css/footer.css'
import {FaFacebook} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer(){
    return(
        <>
        <footer className="site-footer">
        <h2>Footer</h2>
        <div className="social-links">
            <a href="https://www.facebook.com/tinyhomesMtPleasant/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-icon"
            >
                <FaFacebook size={30} />
            </a>
            <a href="tinyhomesmtpleasant@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-icon"
            >
                <MdEmail size={30} />
            </a>
        </div>
        </footer>
        </>
    );
}

export default Footer;