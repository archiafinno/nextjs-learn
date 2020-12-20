import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/navbar.jsx'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <section className="hero">
        <div className="container">
            <div className="text-wrapper w-full">
                <h1 className="title">About Me</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam adipisci, laboriosam maiores neque, perspiciatis quia officiis corrupti enim dolore voluptate id tenetur laborum quod, dolorum vel? Nihil natus cumque eaque.</p>
            </div>
        </div>
      </section>
    </>
  )
}
