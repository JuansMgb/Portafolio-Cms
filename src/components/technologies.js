import * as React from "react"
import "../components/Technologies.css"

const Technologies = () => {
    return(
    
        <div className="container">
            <div className="lbl-menu">
                <label for="radio1">FrontEnd</label>
                <label for="radio2">BackEnd</label>
            </div>
        
            <div className="content">
                <input type="radio" name="radio" id="radio1" />
                <div className="tab1">
                    <h2>Inicio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis similique, expedita officiis enim iusto alias autem doloribus deleniti. Alias mollitia inventore neque dicta fuga, quos quis, facere at quae, laudantium est asperiores illo nulla nisi iure eum, aperiam facilis in.</p>
                </div>
            
                <input type="radio" name="radio" id="radio2" />
                <div className="tab2">
                    <h2>Servicios</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis similique, expedita officiis enim iusto alias autem doloribus deleniti. Alias mollitia inventore neque dicta fuga, quos quis, facere at quae, laudantium est asperiores illo nulla nisi iure eum, aperiam facilis in.</p>
                </div>
            </div>
        </div>
            
            

    )
}

export default Technologies