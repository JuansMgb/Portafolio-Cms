import * as React from "react"
import { graphql, Link } from "gatsby"
import "../index.css"

import foto from "../images/photo_2022-05-07_20-59-57-min.jpg"
import project1 from "../images/project1-min.jpg"
import project2 from "../images/project2-min.jpg"
import project3 from "../images/project3-min.jpg"
import project4 from "../images/project4-min.jpg"

import Technologies from "../components/technologies"
import Layout from "../components/layout"
import Seo from "../components/seo"

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArtstation } from "@fortawesome/free-brands-svg-icons"
import { Helmet } from "react-helmet"



const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`



  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Helmet>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
    
      <header className="hero">
        <section className="hero--content">
          <figure className="img">
            <img className="img--about" src={foto} alt="" />
          </figure>

          <h2 className="about--title">Juan Sebastian</h2>
          <p className="about--subtitle">Full Stack Developer</p>
          <p className="about--location">Colombia / Medellín </p>
          
          <nav className="nav--hero">
            <a href="/" >Home</a>
            <a href="/blog">Blog</a>
          </nav>

        </section>
           
        <svg preserveAspectRatio="none" className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0c151d" fill-opacity="1" d="M0,96L120,112C240,128,480,160,720,160C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </header>

      <main className="main">
        <section className="about">
          <h2 className="title">Sobre Mi</h2>
          <p className="sub--texts">Me caracterizo por ser una persona emprendedora; 
            cuento con un gran sentido de responsabilidad y creatividad, abierto adquirir nuevos conocimientos, 
            comprometido con mis responsabilidades.
          </p>
        </section>
      
        <section className="section--project">
          <h2 className="title">Mis Projectos</h2>
      
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
                            <Link target={"_blank"} href="https://animated-selkie-596502.netlify.app" className="projects--btn button btn--small"><FontAwesomeIcon icon={faArtstation}></FontAwesomeIcon></Link>
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
                            <Link target={"_blank"} href="https://calm-rabanadas-efd3f0.netlify.app" className="projects--btn button btn--small"><FontAwesomeIcon icon={faArtstation}></FontAwesomeIcon></Link>
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
                            <Link target={"_blank"} href="https://github.com/JuansMgb/Poke-Api" className="projects--btn button btn--small"><FontAwesomeIcon icon={faArtstation}></FontAwesomeIcon></Link>
                        </div>
                    </article>
                </div>

                <div className="projects--content">
                    <article className="projects--card">
                      <img  alt="project4" src={project4} className="img--project" />
                        
                        <div className="projects--modal">
                        <h3 className="projects--title">Regristro de ip</h3>
                            <div className="projects--stack">
                            <p>JavaScript</p>
                            <p>Html</p>
                            <p>Css</p>
                            <p>Api Rest</p>
                            </div>
                            <Link target={"_blank"} href="https://ipuseres.netlify.app" className="projects--btn button btn--small"><FontAwesomeIcon icon={faArtstation}></FontAwesomeIcon></Link>
                        </div>
                    </article>
                </div>

          </section>
        </section>

        <section className="section--tecno">
          <svg preserveAspectRatio="none" className="wave--top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0c151d" fill-opacity="1" d="M0,96L120,133.3C240,171,480,245,720,250.7C960,256,1200,192,1320,160L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>

          <section className="tecno--content">
            <h2 className="sub--tile">Habilidades</h2>
            <p className="sub--texts">Uso de tecnologías para el desarrollo</p>
            <p className="sub--texts">de aplicaciones y sitios web</p>
            <Technologies />
          </section>

          <section className="section--form">
            <h3 className="sub--tile">Contactame</h3>
            <p className="sub--texts">Dejame tu mensaje</p>

            <form className="form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact"/>
              <div className="form--content">

                <div className="form--label">
                  <input required className="input" id="email" type="email" name="email" placeholder=" "/>
                  <label className="label--input" for="email">Correo.</label>
                </div>

                <div className="form--label">
                  <textarea required className="input mensaje" id="mensaje" type="text" name="mensaje" placeholder=" " ></textarea>
                  <label className="label--input">Mensaje.</label>
                </div>
                

              </div>
              <button className="buton" type="submit">Enviar</button>

            </form>

          </section>

      
          <svg preserveAspectRatio="none" className="wave--botton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0c151d" fill-opacity="1" d="M0,96L120,133.3C240,171,480,245,720,250.7C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
          </svg>
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
