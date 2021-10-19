import "./styles/style.scss"
import Planes from './Planes'
import Banner from './Banner'
import Formulario from "./Formulario"
import Log from"./Log"
import Plan_1 from "./plan_1" 
import Plan_2 from './Plan_2'
import Plan_3 from './Plan_3'
import Footer from "./Footer"
import { BrowserRouter as Router, Route } from "react-router-dom"

const planes = [
  {
    "nombre": "Nutrición Clínica",
    "imagen": "https://alianzapronutricion.org/wp-content/uploads/2020/10/epigenetica-y-nutricion-1.png",
    "precio": "Info",
    "doc": "Doc.Ellie Gonzalez",
    "link":"/plan_1"
  }, {
    "nombre": "Nutricion Deportiva",
    "imagen": "https://as01.epimg.net/deporteyvida/imagenes/2019/09/21/portada/1569058373_433906_1569059091_noticia_normal_recorte1.jpg",
    "precio": "Info",
    "doc": "Roberto Garcia",
    "link":"/plan_2"
  }, {

    "nombre": "Plato del Buen comer",
    "imagen": "https://www.unea.edu.mx/blog/wp-content/uploads/2021/06/materias-de-nutrici%C3%B3n.jpeg",
    "precio": "Info",
    "doc": "Ivan Duarte",
    "link":"/plan_3"

  }

]

const App = () => (
  <>
  <Router>
    
    <Banner />
    <br></br>
    
    <h1 id="pincipal"> Nuestros Planes Alimenticios</h1>
    <div className="ed-grid m-grid-3">
      {
        planes.map(c => <Planes nombre={c.nombre} imagen={c.imagen} precio={c.precio} doc={c.doc} link={c.link} />)
      } 
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       <Route path= "/formulario" exact component={Formulario}/>
       <Route path="/log" exact component={Log}/>
<Route path="/plan_1"exact component={Plan_1}/>
<Route path="/plan_2"exact component={Plan_2}/>
<Route path="/plan_3"exact component={Plan_3}/>

    </div>
    </Router>
    <Footer/>
  </>
)
export default App;