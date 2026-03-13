import styles from '../css/navbar.module.css'
import { Link } from 'react-router-dom'
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

    const navLinks=[
        {name: "Home", path: "/"},
        {name: "About", path: "/about",
            subLinks: [
                {name: "Management", path: "/about/management"},
                {name: "Community Impact", path: "/about/community"}
            ]
        },
        {name: "Contact", path: "/contact"},
        {name: "News", path: "/news"}
    ]

function Navbar(){
    const [isOpen, setOpen] = useState(false);

    return(
        <>
            <div className={styles.stickyNavbar}>
                <div className={styles.hamburgerWrapper}>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
                </div>
                <ul className={`${styles.ul} ${isOpen ? styles.navActive : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name} className={link.subLinks ? styles.dropdown : ""}>
                            <Link to={link.path} onClick={() => setOpen(false)}>{link.name}</Link>
                            {link.subLinks && (
                                <ul className={styles["dropdown-menu"]}>
                                    {link.subLinks.map((sub) => (
                                        <li key={sub.name}>
                                            <Link to={sub.path}>{sub.name}</Link>
                                        </li>
                            ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Navbar;