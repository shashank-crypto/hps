// create a navbar component
// nav has a logo, a searchbar, a list of links and a login button
// the navbar is responsive and collapses into a hamburger menu on smaller screens
// use next components

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div style={{"display" : "flex", "justifyContent" : "space-evenly", "alignItems" : "center"}}>
            <div className={styles.searchbar}>
                <input type='text' placeholder='Search' />
                
                <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} className={styles.search}/></button>
            </div>
            <div className={styles.navlink}>
            <a href='#'>
                Home
            </a>
            <a href='#series'>
                Series
            </a>
            <a href='#movies'>
                Movies
            </a>
            <a href='#mostwatched'>
                Most Watched
            </a>
            </div>
            <div className={styles.auth}>
                <Link href='/login'><button>Login</button></Link>
                <Link href={'/register'}><button>Register</button></Link>
            </div>
        </div>
    )
}

export default NavBar;