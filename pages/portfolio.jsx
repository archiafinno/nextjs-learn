import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/navbar.jsx'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <section className="hero">
        <div className="container">
            <div className="text-wrapper w-full">
                <h1 className="title">My Portfolio</h1>
                {/* <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam adipisci, laboriosam maiores neque, perspiciatis quia officiis corrupti enim dolore voluptate id tenetur laborum quod, dolorum vel? Nihil natus cumque eaque.</p> */}
                <div className="portfolio-wrapper">
                  <div className="portfolio-item">
                    <img src="/movie.png" className="portfolio-image"></img>
                    <h4 className="portfolio-name">Movie Collection I</h4>
                    <p className="portfolio-category">Web Application</p>
                  </div>

                  <div className="portfolio-item">
                    <img src="/movie.png" className="portfolio-image"></img>
                    <h4 className="portfolio-name">Movie Collection II</h4>
                    <p className="portfolio-category">Web Application</p>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
