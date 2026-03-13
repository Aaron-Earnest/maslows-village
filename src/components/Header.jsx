import tiny_homes_logo_1 from '../images/tiny_homes_logo_1_no_background.png';
import styles from '../css/header.module.css'
import Navbar from './Navbar';
import { useState } from 'react';

function Header(){
    const [isOpen, setOpen] = useState(false);
    return(
        <>
            <div className={styles.header}>
                <img className={styles.img} src={tiny_homes_logo_1}/>;
                <div className={styles.navbar}>
                    <Navbar isOpen={isOpen} setOpen={setOpen}/>
                </div>
            </div>
        </>
    )
}

export default Header;