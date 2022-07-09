
import * as React from "react"
import "../components/footer.css"

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faTwitter, faWhatsapp, } from "@fortawesome/free-brands-svg-icons"

import { Link } from "gatsby"

const Footer = () => {

  return(
    <footer className="footer">
         
      <nav className="nav--hero">
        <a href="/" >Home</a>
        <a href="/blog">Blog</a>
      </nav>

      <section className="icons-footer">
        <Link href="https://www.linkedin.com/in/juan-sebastian-63498a1a5/" target={"_blank"}><FontAwesomeIcon className="icon" icon={faLinkedin}/></Link>
        <Link href="https://github.com/JuansMgb" target={"_blank"}><FontAwesomeIcon className="icon" icon={faGithub}/></Link>
        <Link href="https://twitter.com/JuansMgb" target={"_blank"}><FontAwesomeIcon className="icon" icon={faTwitter}/></Link>
        <Link href="https://wa.me/573103513437?text=Hola :D, Dejame un mensaje" target={"_blank"}><FontAwesomeIcon className="icon" icon={faWhatsapp}/></Link>
      </section>

      <section className="footer--texts">
        © {new Date().getFullYear()}, Hecho Por JuanSmgb.
      </section>

    </footer>
  )

}

export default Footer