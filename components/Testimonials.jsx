import Circle from '../components/Circle'
import { users } from '../data'
import Image from 'next/image'
import styles from '../styles/Testimonial.module.css'

const Testimonials = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor='darkblue' top='-70vh' left='0' right='0' />
            <h1 className={styles.title}>Testimonials</h1>
            <div className={styles.wrapper}>
                {users.map(user => (
                    <div key={user.id} className={styles.card}>
                        <Image 
                            src={`/img/${user.logo}`}
                            alt={user.title}
                            width='30px'
                            height='30px'
                        />
                        <p className={styles.comment}>
                            {user.comment}
                        </p>
                        <div className={styles.person}>
                            <Image
                                className={styles.avatar}
                                src={`/img/${user.avatar}`}
                                alt={user.title}
                                width='45px'
                                height='45px'
                                objectFit='cover'
                            />
                            <div className={styles.info}>
                                <span className={styles.username}>{user.name}</span>
                                <span className={styles.jobTitle}>{user.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials