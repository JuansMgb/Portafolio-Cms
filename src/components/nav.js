import * as React from "react"
import "../components/nav.css"


const Nav = () => {

    return(
        <div className="nav--content">
            <nav className="nav">
              <a href="/" >About</a>
              <a href="/blog">Blog</a>
            </nav>

            <svg preserveAspectRatio="none" className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
               <path fill="#0c151d" fill-opacity="1" d="M0,96L120,112C240,128,480,160,720,160C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
        </div>
        
    )
}

export default Nav