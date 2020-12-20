import Head from 'next/head'
// import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Navbar from '../components/navbar.jsx'
import Hero from '../components/index/hero.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
    </>
  )
}
