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
            <img className="img--about" src={foto} alt="" />
          </figure>

          <h2 className="about--title">Juan Sebastian</h2>
          <p className="about--subtitle">Full Stack Developer</p>
          <p className="about--location">Colombia / Medellín </p>
          
          <nav className="nav--hero">
            <Link to="/" >Home</Link>
            <Link to="blog">Blog</Link>
          </nav>

        </section>
           
        <svg preserveAspectRatio="none" className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0c151d" fill-opacity="1" d="M0,96L120,112C240,128,480,160,720,160C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </header>

      <main className="main">
        

    

        <section className="section--project">

          <section className="section--about">
            <h2 className="title">Sobre Mi</h2>
            <p className="sub--texts">Me Considero una Persona Independiente Apasionada por Aprender Cosas Nuevas q me Ayuden a Alcanzar mis Objetivos.</p>
          </section>
          <h2 className="title">Proyectos</h2>
          
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

                  <a target={"_blank"} rel="noreferrer" href="https://animated-selkie-596502.netlify.app" className="projects--btn button btn--small"><box-icon color="#1e4564" size="30px" type='solid' name='share-alt'></box-icon></a>
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
                  <h3 className="projects--title">Regristro de ip</h3>
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

        
        <div className="container">
          <h2 className="title">Stack Develop</h2>
          <p className="sub--texts">Especializado en el uso de Tecnologías de Desarrollo Web</p>

          <div className="lbl-menu">
            <label for="radio2">Cliente</label>
            <label for="radio1">Stack</label>
            <label for="radio3">Servidor</label>
          </div>

          <div className="content">

            <input type="radio" name="radio" id="radio1" />
            <section className="tab1 section--tab">
              <h2 className="sub--title">Apasionado</h2>
              <h3 className="sub--title">Del Saber</h3>
              <p  className="sub--texts">Ingeniero en desarrollo de software, Me caracterizo por ser una persona emprendedora y honesta con gran sentido de aprendizaje y copentencia.</p>
              <section className="section--icons">
              <box-icon color="#1e4564" size="30px" name='javascript' type='logo' />
              <box-icon color="#1e4564" size="30px" name='typescript' type='logo' />
              <box-icon color="#1e4564" size="30px" name='html5' type='logo' />
              <box-icon color="#1e4564" size="30px" name='css3' type='logo' />
              <box-icon color="#1e4564" size="30px" name='react' type='logo' />

              <box-icon color="#1e4564" size="30px" name='git' type='logo' />
              <box-icon color="#1e4564" size="30px" name='graphql' type='logo' />
              <box-icon color="#1e4564" size="30px" name='docker' type='logo' />

              <box-icon color="#1e4564" size="30px" name='nodejs' type='logo' />
              <box-icon color="#1e4564" size="30px" name='mongodb' type='logo' />
              <box-icon color="#1e4564" size="30px" name='data' type='solid' />
                  
              
              </section>
            </section>

            <input type="radio" name="radio" id="radio2" />
            <div className="tab2">
                    <h2 className="sub--title">Desarrollo FrontEnd</h2>
                    <p className="sub--texts">Desarrollo de Aplicacion y Sitio Web</p>

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
                <p className="sub--texts">Desarrollo de Aplicacion y Sitio Web</p>

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
