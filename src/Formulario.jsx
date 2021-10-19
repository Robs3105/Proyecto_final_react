import React,{Component} from "react";

class Formulario    extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <article class="card">
            
                            <div class="caja-1">
                          
                

                <h1>Registro de Usuarios</h1>

                <form>
                    <div className="for_item">
                        <label>Nombre Completo</label>
                        <input type="text"/>
                    </div>
                    <br></br>
                    <div className="for_item">
                        <label>Correo  </label>
                        <input type="email"/>
                    </div>
                    <br></br>
                    <div className="for_item">
                        <label>Contraseña</label>
                        <input type="text"/>
                    </div>
                    <br></br>
                    <div className="for_item">
                        <label>Telefono</label>
                        <input type="text"/>
                    </div>
                    <br></br>
                    <div className="for_item">
                        <label>Edad</label>
                        <input type="text"/>
                    </div>
                    <br></br>
                    <fieldset>
                        <legend>Elige tu Sexo</legend>
                        <label>
                        <input type="radio" name="hombre" value="H"/>Hombre
                        </label>
                        <label>
                        <input type="radio" name="mujer" value="M"/>Mujer
                        </label>
                    
                    </fieldset>
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

export default Formulario;