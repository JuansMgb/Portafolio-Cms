
import * as React from "react"

import { Link } from "gatsby"
import "../components/footer.css"

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faTwitter, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {

  return(
    <footer className="footer">
         
      <nav className="nav--hero">
        <Link to="/" >Home</Link>
        <Link to="blog">Blog</Link>
      </nav>

      <h3 className="info--sucial">Mis Redes de Contact</h3>

      <section className="icons-content">
        <a href="https://www.instagram.com/konchiser/" target={"_blank"}><FontAwesomeIcon className="icon" icon={faInstagram}/></a>
        <a href="https://www.linkedin.com/in/juans-crs-b306bb345/" target={"_blank"}><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
        <a href="https://github.com/JuansMgb" target={"_blank"}><FontAwesomeIcon className="icon" icon={faGithub}/></a>
        <a href="https://wa.me/573015736640?text=Holaa :D, Dejame un mensaje" target={"_blank"}><FontAwesomeIcon className="icon" icon={faWhatsapp}/></a>
      </section>

      <section className="footer--texts">
        © {new Date().getFullYear()}, Desarrollado Por <a href="https://github.com/JuansMgb" target={"_blank"}>JuanSmgb</a>.
      </section>

    </footer>
  )

}

export default Footer