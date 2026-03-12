import styles from '../css/navbar.module.css'
import { Link } from 'react-router-dom'

    const navLinks=[
        {name: "Home", path: "/"},
                {name: "About", path: "/about",
            subLinks: [
                {name: "Management", path: "/about/management"},
                {name: "Community Impact", path: "/about/community"}
            ]
        },
        {name: "Contact", path: "/contact"}
    ]

function Navbar(){
    return(
        <>
            <ul className={styles.ul}>
                {navLinks.map((link) => (
                    <li key={link.name} className={link.subLinks ? styles.dropdown : ""}>
                        <Link to={link.path}>{link.name}</Link>
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
        </>
    );
}

export default Navbar;