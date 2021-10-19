import React,{Component} from "react";

class Log    extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <article class="card">
            
                            <div class="caja-2">
                          
                

                <h1>Iniciar Sesion</h1>

                <form>
                    <div className="for_item">
                        <label>Usuario</label>
                        <input type="email"/>
                    </div>
                    <br></br>
                    <div className="for_item">
                        <label>Contraseña  </label>
                        <input type="text"/>
                    </div>
                    <br></br>
                    <div className="for_item">
                    
                    <input classNamex="button" type="Submit" value="Enviar"/>
                </div>
                    </form>
                    </div>
                    </article>
        )
    }
}

export default Log;