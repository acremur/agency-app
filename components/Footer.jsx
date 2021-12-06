import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.catdL}>
                <h1 className={styles.title}>AV0CAD0 CREATIVES</h1>
                <h1 className={styles.linkTItle}>
                    <Link href='/contact'>
                        <span className={styles.linkText}>WORK WITH US</span>
                    </Link>
                    <Image 
                        src={'/img/link.png'}
                        alt='link'
                        width='40px'
                        height='40px'
                    />
                </h1>
            </div>
            <div className={styles.catdS}>
                <div className={styles.cardItem}>
                    12 ADAM STREET NY <br /> USA
                </div>
                <div className={styles.cardItem}>
                    CONTACT@GMAIL.COM <br /> 213 465 7987
                </div>
            </div>
            <div className={styles.catdS}>
                <div className={styles.cardItem}>
                    FOLLOW US <br /> __FB __IN __BE _TW
                </div>
                <div className={styles.cardItem}>
                    © 2022 JOSE INTERACTIVE <br /> ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer