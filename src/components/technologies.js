import * as React from "react"
import "../components/Technologies.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faNodeJs, faHtml5, faCss3Alt, faReact, faJsSquare, faBootstrap } from "@fortawesome/free-brands-svg-icons"

const Technologies = () => {

    return(
        <div className="tecno">
        
            <div className="content--icon">
            <FontAwesomeIcon className="icon--tecno" icon={faHtml5}/>
            <h3 className="tecno--subtitle">Html</h3>
            </div>


            <div className="content--icon">
            <FontAwesomeIcon className="icon--tecno" icon={faCss3Alt}/>
            <h3 className="tecno--subtitle">Css</h3>
            </div>

            <div className="content--icon">
            <FontAwesomeIcon className="icon--tecno" icon={faJsSquare}/>
            <h3 className="tecno--subtitle">JavaScript</h3>
            </div>


            <div className="content--icon">
            <FontAwesomeIcon className="icon--tecno" icon={faReact}/>
            <h3 className="tecno--subtitle">React</h3>
            </div>


            <div className="content--icon">
            <FontAwesomeIcon className="icon--tecno" icon={faNodeJs}/>
            <h3 className="tecno--subtitle">Node Js</h3>
            </div>

    
            <div className="content--icon">
            <FontAwesomeIcon className="icon--tecno" icon={faBootstrap}/>
            <h3 className="tecno--subtitle">Bootstrap</h3>
            </div>

        </div>
    )
}

export default Technologies