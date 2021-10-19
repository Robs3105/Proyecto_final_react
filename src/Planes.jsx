import React from "react";
import PropTypes from 'prop-types'


const planes = ({ nombre, imagen, precio, doc,link }) => (
    <>
        <article class="card">
            <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={imagen} alt="" />
            </div>
            <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 class="t5 s-mb-2 s-center">
                    {nombre}
                </h3>
                <div class="s-mb-2 s-main-center">
                    <div class="card__teacher s-cross-center">

                        <span class="small">{doc}</span>
                    </div>
                </div>
                <div class="s-main-center">
                    <a class="button--ghost-alert button--tiny" href={link}>{precio}</a>
            

                </div>
            </div>
        </article>

    </>
)

planes.proptype = {
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.string,
    doc: PropTypes.string
}
planes.defaultProps = {
    title: "No se encontro plan alimenticio",
    imagen: "https://moldesde.com/wp-content/uploads/2012/02/letra_49.png.jpg",
    precio: "xxx",
    doc: "Sin doctor"
}

export default planes;