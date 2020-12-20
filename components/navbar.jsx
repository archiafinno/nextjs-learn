import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'

function Navbar({ router }) {
  const navs = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Contact", href: "/contact" },
  ]
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">Ninno.</h1>
          <ul className="nav-links">
            { navs.map((el, index) => (
              <li key={index}><Link href={el.href}><a className={`nav-item ${ router.pathname === el.href ? 'active' : '' }`}>{el.text}</a></Link></li>
            ))}

            {/* <li ><Link href="/"><a className="nav-item">Home</a></Link></li>
            <li ><Link href="/about"><a className="nav-item">About</a></Link></li>
            <li ><Link href="/portfolio"><a className="nav-item">Portfolio</a></Link></li>
            <li ><Link href="/contact"><a className="nav-item">Contact</a></Link></li> */}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Navbar)
