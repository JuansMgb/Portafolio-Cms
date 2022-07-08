import * as React from "react"
import { graphql, Link } from "gatsby"
import "../index.css"


 import foto from "../images/photo_2022-05-07_20-59-57-min.jpg"

import Technologies from "../components/technologies"
import Project from "../components/project"
import Layout from "../components/layout"
import Seo from "../components/seo"

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faTwitter, } from "@fortawesome/free-brands-svg-icons"
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
          <p className="about--subtitle">Front End Dev</p>

          <div className="icons-content">
            <Link href="https://www.linkedin.com/in/juan-sebastian-63498a1a5/" target={"_blank"}><FontAwesomeIcon className="icon" icon={faLinkedin}/></Link>
            <Link href="https://github.com/JuansMgb" target={"_blank"}><FontAwesomeIcon className="icon" icon={faGithub}/></Link>
            <Link href="https://twitter.com/JuansMgb" target={"_blank"}><FontAwesomeIcon className="icon" icon={faTwitter}/></Link>
          </div>

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
          <Project />
        </section>

        <section className="section--tecno">
          <svg preserveAspectRatio="none" className="wave--top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0c151d" fill-opacity="1" d="M0,96L120,133.3C240,171,480,245,720,250.7C960,256,1200,192,1320,160L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>

          <section className="tecno--content">
            <h2 className="sub--tile">Habilidades</h2>
            <p className="sub--texts">Uso de tecnologías para el desarrollo de aplicaciones y sitios web</p>
            <Technologies />
          </section>

          <section className="section--form">
            <h3 className="sub--tile">Contactame</h3>
            <p className="sub--texts">Dejame tu mensaje</p>

            <form className="form" name="formulario" method="POST" netlify>
              <div className="form--content">

                <div className="form--label">
                  <input className="input" id="email" type="email" name="email" placeholder=" "/>
                  <label className="label--input" for="email">Correo.</label>
                </div>

                <div className="form--label">
                  <textarea className="input mensaje" type="text" name="mensaje" placeholder=" "/>
                  <label className="label--input" for="mensaje">Mensaje.</label>
                </div>

              </div>
              <button className="buton" type="submit" value="enviar">Enviar</button>

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
