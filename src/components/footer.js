
import * as React from "react"
import "../components/footer.css"

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faTwitter, } from "@fortawesome/free-brands-svg-icons"

import { Link } from "gatsby"

const Footer = () => {

    return(
        <footer className="footer">
         
         <nav className="nav--hero">
          <a href="/" >Home</a>
          <a href="/blog">Blog</a>
        </nav>
        <div className="icons-footer">
          <Link href="https://www.linkedin.com/in/juan-sebastian-63498a1a5/"><FontAwesomeIcon className="icon" icon={faLinkedin}/></Link>
          <Link href="https://github.com/JuansMgb"><FontAwesomeIcon className="icon" icon={faGithub}/></Link>
          <Link href="https://twitter.com/JuansMgb"><FontAwesomeIcon className="icon" icon={faTwitter}/></Link>
        </div>
         <div className="footer--texts">
         © {new Date().getFullYear()}, Echo Por El Conchi :y
         </div>
   
     
  
        </footer>
    )

}

export default Footer