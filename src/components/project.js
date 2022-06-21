

import * as React from "react"
import "../components/project.css"


import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArtstation } from "@fortawesome/free-brands-svg-icons"




import project1 from "../images/project1.jpg"
import project2 from "../images/project2.jpg"
import project3 from "../images/project3.jpg"
import project4 from "../images/project4.jpg"
import { Link } from "gatsby"





const Project = () => {

 

    return(

    
        
        <section className="projects" >
        <div className="projects--content">
            <article className="projects--card">
               <img  alt="" src={project1} className="img--project" />
                <div className="projects--modal">
                    <div>
                     <span className="projects--subtitle">Play</span>
                     <h3 className="projects--title">Piedra, Papel o Tijeras</h3>
                     <Link href="https://github.com/JuansMgb/Piedra-Papel-o-Tijeras" className="projects--btn button btn--small"><FontAwesomeIcon icon={faArtstation}></FontAwesomeIcon></Link>
                    </div>
                </div>
            </article>
        </div>

        <div className="projects--content">
            <article className="projects--card">
               <img  alt="" src={project2} className="img--project" />
                <div className="projects--modal">
                    <div>
                     <span className="projects--subtitle">Web</span>
                     <h3 className="projects--title">Films Api</h3>
                     <Link href="https://github.com/JuansMgb/films-api" className="projects--btn button btn--small"><FontAwesomeIcon icon={faArtstation}></FontAwesomeIcon></Link>
                    </div>
                </div>
            </article>
        </div>

        <div className="projects--content">
            <article className="projects--card">
               <img  alt="" src={project3} className="img--project" />
                <div className="projects--modal">
                    <div>
                     <span className="projects--subtitle">Web</span>
                     <h3 className="projects--title">Pokedex Api</h3>
                     <Link href="https://github.com/JuansMgb/Poke-Api" className="projects--btn button btn--small"><FontAwesomeIcon icon={faArtstation}></FontAwesomeIcon></Link>
                    </div>
                </div>
            </article>
        </div>

        <div className="projects--content">
            <article className="projects--card">
               <img  alt="" src={project4} className="img--project" />
                <div className="projects--modal">
                    <div>
                     <span className="projects--subtitle">Animation</span>
                     <h3 className="projects--title">Animacion Css</h3>
                     <Link href="https://github.com/JuansMgb/AnimacionCss.git" className="projects--btn button btn--small"><FontAwesomeIcon icon={faArtstation}></FontAwesomeIcon></Link>
                    </div>
                </div>
            </article>
        </div>
      </section>
        
    )
}

export default Project