import React from "react";

const Banner = () => (
  <div className="main-banner img-container" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://stmovemadrid.com/wp-content/uploads/2020/03/nutrici%C3%B3n.jpg" alt="" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Bienvenidos Consultorio NUTRIELL</p>
          <p> El futuro de la nutricion </p>
          <p>Resgistrate para poder suscribirte a nuestros planes</p>
          <a href="/log" className="button s-mr-2" id="boton1">Iniciar Sesión</a>
          <a href="/formulario" className="button" id="boton2">Crear cuenta</a>
        </div>
      </div>
    </div>
  </div>


)
export default Banner;