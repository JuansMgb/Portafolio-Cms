
import * as React from "react"

import { Link } from "gatsby"
import "../components/footer.css"

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faTwitter, faWhatsapp, } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {

  return(
    <footer className="footer">
         
      <nav className="nav--hero">
        <Link to="/" >Home</Link>
        <Link to="blog">Blog</Link>
      </nav>

      <section className="icons-footer">
        <a href="https://www.linkedin.com/in/juan-sebastian-63498a1a5/" target={"_blank"}><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
        <a href="https://github.com/JuansMgb" target={"_blank"}><FontAwesomeIcon className="icon" icon={faGithub}/></a>
        <a href="https://twitter.com/JuansMgb" target={"_blank"}><FontAwesomeIcon className="icon" icon={faTwitter}/></a>
        <a href="https://wa.me/573103513437?text=Hola :D, Dejame un mensaje" target={"_blank"}><FontAwesomeIcon className="icon" icon={faWhatsapp}/></a>
      </section>

      <section className="footer--texts">
        © {new Date().getFullYear()}, Desarrollado Por <a href="https://github.com/JuansMgb" target={"_blank"}>JuanSmgb</a>.
      </section>

    </footer>
  )

}

export default Footer