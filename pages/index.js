import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import { data } from '../data'
import Testimonials from '../components/Testimonials'

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Personal/Agency Website</title>
        <meta name="description" content="Personal/Agency Website Using Next.js" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>   
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  )
}

export const getStaticProps = async () => {
  const services = data

  return {
    props: { services }
  }
}