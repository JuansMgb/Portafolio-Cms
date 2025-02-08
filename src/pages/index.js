import * as React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../index.css"

import foto from "../images/photo_2022-05-07_20-59-57-min.jpg"
import project1 from "../images/project1-min.jpg"
import project2 from "../images/project2-min.jpg"
import project3 from "../images/project3-min.jpg"
import project4 from "../images/project4-min.jpg"


import Layout from "../components/layout"
import Seo from "../components/seo"


import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faTwitter, faWhatsapp, } from "@fortawesome/free-brands-svg-icons"


const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Helmet>
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
    
      <header className="hero">
        <section className="hero--content">
          <figure className="img">
            <img className="img--about" src={foto} alt="photo_2022-05-07_20-59-57-min.jpg" />
          </figure>

          <h2 className="about--title">Juan Sebastian</h2>
          <p className="about--subtitle">Full Stack Developer</p>
          <p className="about--texts">¡Apasiando Del Saber!</p>
          <p className="about--location">Colombia / Medellín</p>
          
          <nav className="nav--hero">
            <Link to="/" >Home</Link>
            <Link to="blog">Blog</Link>
          </nav>

          <section className="icons-footer">
            <a href="https://www.linkedin.com/in/juan-sebastian-63498a1a5/" target={"_blank"}><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
            <a href="https://github.com/JuansMgb" target={"_blank"}><FontAwesomeIcon className="icon" icon={faGithub}/></a>
            <a href="https://wa.me/573116309784?text=Hola :D, Dejame un mensaje" target={"_blank"}><FontAwesomeIcon className="icon" icon={faWhatsapp}/></a>
          </section>

        </section>
           
        <svg preserveAspectRatio="none" className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0c151d" fill-opacity="1" d="M0,96L120,112C240,128,480,160,720,160C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>

      </header>

      <main className="main">

        <section className="section--about">
          <h2 className="title">Sobre Mi</h2>
          <p className="sub--texts">
          Hola, Soy Juan Sebastian, un Desarrollador Full Stack, con Experiencia en el Desarrollo de Aplicaciones Web, con un Enfoque en la Creación de Proyectos Personales 🚀. 
          Mi Objetivo es Aprender y Mejorar Mis Habilidades en el Desarrollo de Software, para Poder Desempeñarme en el Mundo Laboral. 🌎  
          </p>
        </section>   

        <section className="section--project">      
          <section className="section--about">
            <h2 className="title">Proyectos</h2>
            <p className="sub--texts">listado de Proyectos Personales</p>
            <p className="sub--texts">Mis Proyectos</p>
          </section>
            
          <section className="projects" >

              <div className="projects--content">
                <article className="projects--card">
                  <img  alt="project1" src={project1} className="img--project" />
                  <div className="projects--modal">
                    <h3 className="projects--title">Piedra, Papel o Tijeras</h3>
                    <div className="projects--stack">
                      <p>JavaScript</p>
                      <p>Html</p>
                      <p>Css</p>
                    </div>

                    <a target={"_blank"} rel="noreferrer" href="juegodemanos-ppo.netlify.app" className="projects--btn button btn--small"><box-icon color="#1e4564" size="30px" type='solid' name='share-alt'></box-icon></a>
                  </div>
                </article>
              </div>

              <div className="projects--content">
                <article className="projects--card">
                  <img  alt="project2" src={project2} className="img--project" />
                            
                  <div className="projects--modal">
                    <h3 className="projects--title">Films Api</h3>
                    <div className="projects--stack">
                      <p>JavaScript</p>
                      <p>Html</p>
                      <p>Css</p>
                      <p>Api Rest</p>
                    </div>
                    <a target={"_blank"} rel="noreferrer" href="https://calm-rabanadas-efd3f0.netlify.app" className="projects--btn button btn--small"><box-icon color="#1e4564" size="30px" type='solid' name='share-alt'></box-icon></a>
                  </div>
                </article>
              </div>

              <div className="projects--content">
                <article className="projects--card">
                  <img  alt="project3" src={project3} className="img--project" />
                  <div className="projects--modal">
                    <h3 className="projects--title">Pokedex Api</h3>
                    <div className="projects--stack">
                      <p>JavaScript</p>
                      <p>Html</p>
                      <p>Css</p>
                      <p>Api Rest</p> 
                    </div>
                    <a target={"_blank"} rel="noreferrer" href="https://github.com/JuansMgb/Poke-Api" className="projects--btn button btn--small"><box-icon color="#1e4564" size="30px" type='solid' name='share-alt'></box-icon></a>
                  </div>
                </article>
              </div>

              <div className="projects--content">
                <article className="projects--card">
                  <img  alt="project4" src={project4} className="img--project" />
                              
                  <div className="projects--modal">
                    <h3 className="projects--title">Regristro de Ip</h3>
                    <div className="projects--stack">
                      <p>JavaScript</p>
                      <p>Html</p>
                      <p>Css</p>
                      <p>Api Rest</p>
                    </div>
                      <a target={"_blank"} rel="noreferrer" href="https://ipuseres.netlify.app" className="projects--btn button btn--small"><box-icon type='solid' color="#1e4564" size="30px" name='share-alt'></box-icon></a>
                  </div>
                </article>
              </div>

          </section>

        </section>

        
        <section className="content--stack">
          

          <section className="section--about">
            <h2 className="title">Stack Develop</h2>
            <p className="sub--texts">Tecnologías de Desarrollo</p>
            <p className="sub--texts">Desarrollador Full Stack, con Experiencia en el Desarrollo de Aplicaciones Web, con un Enfoque en la Creación de Proyectos Personales. </p>
          </section> 

          <div className="container">
    
            <div className="lbl-menu">
              <label for="radio2">Cliente</label>
              <label for="radio1">Stack</label>
              <label for="radio3">Servidor</label>
            </div>

            <div className="content">
              <input type="radio" name="radio" id="radio1" />
              <div className="tab1">
                <h2 className="sub--title">Apasionado</h2>
                <h4 className="sub--title">Del Saber</h4>
                
                <section className="content--icons">
                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='javascript' type='logo' />
                    <h3 className="title--icon">JavaScript</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='typescript' type='logo' />
                    <h3 className="title--icon">TypeScript</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='html5' type='logo' />
                    <h3 className="title--icon">Html5</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='css3' type='logo' />
                    <h3 className="title--icon">Css</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='react' type='logo' />
                    <h3 className="title--icon">React</h3>
                  </span>
                      
                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='tailwind-css' type='logo' />
                    <h3 className="title--icon">Tailwind</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='git' type='logo' />
                    <h3 className="title--icon">Git</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='graphql' type='logo' />
                    <h3 className="title--icon">GraphQL</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='docker' type='logo' />
                    <h3 className="title--icon">Docker</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='nodejs' type='logo' />
                    <h3 className="title--icon">Node Express Js</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='mongodb' type='logo' />
                    <h3 className="title--icon">MongoDB</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='data' type='solid' />
                    <h3 className="title--icon">MySQL</h3>
                  </span>

                </section>
              </div>

              <input type="radio" name="radio" id="radio2" />
              <div className="tab2">
                <h2 className="sub--title">Desarrollo FrontEnd</h2>
                <p className="sub--texts">Tecnologías de Desarrollo</p>

                <section className="content--icons">
                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='javascript' type='logo' />
                    <h3 className="title--icon">JavaScript</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='html5' type='logo' />
                    <h3 className="title--icon">Html5</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='css3' type='logo' />
                    <h3 className="title--icon">Css</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" type='logo' name='sass' />
                    <h3 className="title--icon">Sass</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='figma' type='logo' />
                    <h3 className="title--icon">Figma</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='react' type='logo' />
                    <h3 className="title--icon">React</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='vuejs' type='logo' />
                    <h3 className="title--icon">VueJs</h3>
                  </span>
                      
                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='tailwind-css' type='logo' />
                    <h3 className="title--icon">Tailwind</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='bootstrap' type='logo' />
                    <h3 className="title--icon">Bootstrap</h3>
                  </span>
                </section>
              </div>           

              <input type="radio" name="radio" id="radio3" />
              <div className="tab3">
                <h2 className="sub--title">Desarrollo BackEnd</h2>
                <p className="sub--texts">Tecnologías de Desarrollo</p>

                <section className="content--icons">
                  
                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='typescript' type='logo' />
                    <h3 className="title--icon">TypeScript</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='graphql' type='logo' />
                    <h3 className="title--icon">GraphQL</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='git' type='logo' />
                    <h3 className="title--icon">Git</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='docker' type='logo' />
                    <h3 className="title--icon">Docker</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='kubernetes' type='logo' />
                    <h3 className="title--icon">Kubernetes</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='nodejs' type='logo' />
                    <h3 className="title--icon">Node Express Js</h3>
                  </span>
        
                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='firebase' type='logo' />
                    <h3 className="title--icon">Firebase</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='mongodb' type='logo' />
                    <h3 className="title--icon">MongoDB</h3>
                  </span>

                  <span className="span--icon">
                    <box-icon color="#1e4564" size="30px" name='data' type='solid' />
                    <h3 className="title--icon">MySQL</h3>
                  </span>

                </section>
                  
              </div>
                      
            </div>    

          </div>

        </section>

        <svg className="fondt wave-animation" id="visual" viewBox="0 0 900 600" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path d="M0 73L21.5 69C43 65 86 57 128.8 54C171.7 51 214.3 53 257.2 57C300 61 343 67 385.8 63C428.7 59 471.3 45 514.2 43C557 41 600 51 642.8 55C685.7 59 728.3 57 771.2 59C814 61 857 67 878.5 70L900 73L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" fill="#0c151d"></path>
          <path d="M0 163L21.5 161C43 159 86 155 128.8 154C171.7 153 214.3 155 257.2 158C300 161 343 165 385.8 155C428.7 145 471.3 121 514.2 117C557 113 600 129 642.8 130C685.7 131 728.3 117 771.2 114C814 111 857 119 878.5 123L900 127L900 71L878.5 68C857 65 814 59 771.2 57C728.3 55 685.7 57 642.8 53C600 49 557 39 514.2 41C471.3 43 428.7 57 385.8 61C343 65 300 59 257.2 55C214.3 51 171.7 49 128.8 52C86 55 43 63 21.5 67L0 71Z" fill="#00101f"></path>
          <path d="M0 199L21.5 197C43 195 86 191 128.8 192C171.7 193 214.3 199 257.2 200C300 201 343 197 385.8 185C428.7 173 471.3 153 514.2 149C557 145 600 157 642.8 158C685.7 159 728.3 149 771.2 147C814 145 857 151 878.5 154L900 157L900 125L878.5 121C857 117 814 109 771.2 112C728.3 115 685.7 129 642.8 128C600 127 557 111 514.2 115C471.3 119 428.7 143 385.8 153C343 163 300 159 257.2 156C214.3 153 171.7 151 128.8 152C86 153 43 157 21.5 159L0 161Z" fill="#021b31"></path>
          <path d="M0 229L21.5 231C43 233 86 237 128.8 237C171.7 237 214.3 233 257.2 230C300 227 343 225 385.8 214C428.7 203 471.3 183 514.2 180C557 177 600 191 642.8 192C685.7 193 728.3 181 771.2 181C814 181 857 193 878.5 199L900 205L900 155L878.5 152C857 149 814 143 771.2 145C728.3 147 685.7 157 642.8 156C600 155 557 143 514.2 147C471.3 151 428.7 171 385.8 183C343 195 300 199 257.2 198C214.3 197 171.7 191 128.8 190C86 189 43 193 21.5 195L0 197Z" fill="#00315b"></path>
          <path d="M0 307L21.5 318C43 329 86 351 128.8 357C171.7 363 214.3 353 257.2 357C300 361 343 379 385.8 368C428.7 357 471.3 317 514.2 297C557 277 600 277 642.8 284C685.7 291 728.3 305 771.2 309C814 313 857 307 878.5 304L900 301L900 203L878.5 197C857 191 814 179 771.2 179C728.3 179 685.7 191 642.8 190C600 189 557 175 514.2 178C471.3 181 428.7 201 385.8 212C343 223 300 225 257.2 228C214.3 231 171.7 235 128.8 235C86 235 43 231 21.5 229L0 227Z" fill="#003664"></path>
          <path d="M0 493L21.5 489C43 485 86 477 128.8 471C171.7 465 214.3 461 257.2 464C300 467 343 477 385.8 484C428.7 491 471.3 495 514.2 491C557 487 600 475 642.8 466C685.7 457 728.3 451 771.2 456C814 461 857 477 878.5 485L900 493L900 299L878.5 302C857 305 814 311 771.2 307C728.3 303 685.7 289 642.8 282C600 275 557 275 514.2 295C471.3 315 428.7 355 385.8 366C343 377 300 359 257.2 355C214.3 351 171.7 361 128.8 355C86 349 43 327 21.5 316L0 305Z" fill="#00315b"></path>
          <path d="M0 553L21.5 552C43 551 86 549 128.8 543C171.7 537 214.3 527 257.2 527C300 527 343 537 385.8 541C428.7 545 471.3 543 514.2 544C557 545 600 549 642.8 544C685.7 539 728.3 525 771.2 524C814 523 857 535 878.5 541L900 547L900 491L878.5 483C857 475 814 459 771.2 454C728.3 449 685.7 455 642.8 464C600 473 557 485 514.2 489C471.3 493 428.7 489 385.8 482C343 475 300 465 257.2 462C214.3 459 171.7 463 128.8 469C86 475 43 483 21.5 487L0 491Z" fill="#021b31"></path>
          <path d="M0 583L21.5 582C43 581 86 579 128.8 575C171.7 571 214.3 565 257.2 565C300 565 343 571 385.8 573C428.7 575 471.3 573 514.2 573C557 573 600 575 642.8 573C685.7 571 728.3 565 771.2 566C814 567 857 575 878.5 579L900 583L900 545L878.5 539C857 533 814 521 771.2 522C728.3 523 685.7 537 642.8 542C600 547 557 543 514.2 542C471.3 541 428.7 543 385.8 539C343 535 300 525 257.2 525C214.3 525 171.7 535 128.8 541C86 547 43 549 21.5 550L0 551Z" fill="#00101f"></path>
          <path d="M0 601L21.5 601C43 601 86 601 128.8 601C171.7 601 214.3 601 257.2 601C300 601 343 601 385.8 601C428.7 601 471.3 601 514.2 601C557 601 600 601 642.8 601C685.7 601 728.3 601 771.2 601C814 601 857 601 878.5 601L900 601L900 581L878.5 577C857 573 814 565 771.2 564C728.3 563 685.7 569 642.8 571C600 573 557 571 514.2 571C471.3 571 428.7 573 385.8 571C343 569 300 563 257.2 563C214.3 563 171.7 569 128.8 573C86 577 43 579 21.5 580L0 581Z" fill="#0c151d"></path>
        </svg>

        <section className="section--med">
          <section className="section--form">
              <h3 className="title">Contactame</h3>
              <p className="sub--texts">Dejame tu mensaje</p>

              <form className="form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="form--content">
                  <div className="form--label">
                    <input className="input" id="email" type="email" name="email" placeholder=" " required />
                    <label className="label--input" htmlFor="email">Correo.</label>
                  </div>
                  <div className="form--label">
                    <textarea className="input mensaje" id="mensaje" name="mensaje" placeholder=" " required></textarea>
                    <label className="label--input" htmlFor="mensaje">Mensaje.</label>
                  </div>
                </div>
                <button className="buton" type="submit">Enviar</button>
              </form>

          </section>
      
        </section>

        

      </main>

     

      

    </Layout>
  )
}

export default Index



export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
