import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    
    return (
        <div className={styles.container}>
            <Link href="/">AV0CAD0</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href='/products/design'>DESIGN</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/products/development'>DEVELOPMENT</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/products/production'>PRODUCTION</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/products/photography'>PHOTOGRAPHY</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/contact'>CONTACT</Link>
                </li>
            </ul>
            <div 
                className={styles.hamburguer} 
                onClick={() => setOpenMenu(!openMenu)}
            >
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
            </div>
            <ul 
                onClick={() => setOpenMenu(!openMenu)} 
                className={styles.menu} 
                style={{ right: openMenu ? '0' : '-50vw' }}
            >
                <li className={styles.menuItem}>
                    <Link href='/products/design'>DESIGN</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/products/development'>DEVELOPMENT</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/products/production'>PRODUCTION</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/products/photography'>PHOTOGRAPHY</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/contact'>CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar