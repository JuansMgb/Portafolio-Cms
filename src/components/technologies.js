import * as React from "react"
import "../components/Technologies.css"

import node from "../images/assets/node.png"
import js from "../images/assets/js.png"
import html from "../images/assets/html.png"
import css from "../images/assets/css.png"
import mongo from "../images/assets/mongodb.png"
import docker from "../images/assets/docker.png"
import typescript from "../images/assets/typescript.png"
import bootstrap from "../images/assets/bootstrap.png"
import react from "../images/assets/react.png"

const Technologies = () => {

    return(
        <div className="tecno">

           
            <div className="content--icon">
            <figure className="content--img">
            <img src={js}/>
            </figure>
            <h3 className="tecno--subtitle">JavaScript</h3>
            </div>

            <div className="content--icon">
            <figure className="content--img">
            <img src={typescript}/>
            </figure>
            <h3 className="tecno--subtitle">TypeScript</h3>
            </div>

            <div className="content--icon">
            <figure className="content--img">
            <img src={html}/>
            </figure>
            <h3 className="tecno--subtitle">Html</h3>
            </div>

            <div className="content--icon">
            <figure className="content--img">
            <img src={css}/>
            </figure>
            <h3 className="tecno--subtitle">Css</h3>
            </div>

            <div className="content--icon">
            <figure className="content--img">
            <img src={react}/>
            </figure>
            <h3 className="tecno--subtitle">React Native</h3>
            </div>

            <div className="content--icon">
            <figure className="content--img">
            <img src={bootstrap}/>
            </figure>
            <h3 className="tecno--subtitle">Bootstrap</h3>
            </div>

            <div className="content--icon">
            <figure className="content--img">
            <img src={node}/>
            </figure>
            <h3 className="tecno--subtitle">Node Express</h3>
            </div>

            <div className="content--icon">
            <figure className="content--img">
            <img src={mongo}/>
            </figure>
            <h3 className="tecno--subtitle">Mongo DB</h3>
            </div>

            <div className="content--icon">
            <figure className="content--img">
            <img src={docker}/>
            </figure>
            <h3 className="tecno--subtitle">Docker</h3>
            </div>

          
            
        </div>
    )
}

export default Technologies