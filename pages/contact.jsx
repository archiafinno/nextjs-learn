import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/navbar.jsx'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <section className="hero">
        <div className="container">
            <div className="text-wrapper w-full">
                <h1 className="title">Contact</h1>
                {/* <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam adipisci, laboriosam maiores neque, perspiciatis quia officiis corrupti enim dolore voluptate id tenetur laborum quod, dolorum vel? Nihil natus cumque eaque.</p> */}
                <ul className="contact-links">
                  <li className="contact-item">Email: tes@gmail.com</li>
                  <li className="contact-item">Phone: +6281211112222</li>
                </ul>
            </div>
        </div>
      </section>
    </>
  )
}
