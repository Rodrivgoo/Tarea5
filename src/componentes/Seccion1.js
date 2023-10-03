import React, { useEffect, useState } from "react";
import Foto from "../Imagenes/Bolt_conquista_tricampeonato_também_nos_200_metros_1038877-18.08.2016_ffz-8090.jpg"
import Foto2 from "../Imagenes/descarga.jpg"

import { NavDropdown, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";//importacion biblioteca react-bootstrap
import { NavLink } from "react-router-dom";//importacion de navLink para rutas

const Seccion1 = () => {
    return(
        <> 

<main className="maain">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-10 col-md-5">
            <h1>
              <span className="malcom">Deportes</span>
            </h1>
          </div>
        </div>
      </div>
    </main>
    <div className="maain">
      <div className="container text-center">
        <div className="row">
          <div className="col-7 col-sm-7 col-md-5">
            {/* Imagen */}
            <img
              src={Foto} // Asegúrate de proporcionar la ruta correcta de tu imagen
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="col-4 col-sm-4 col-md-5 d-flex align-items-center justify-content-center">
            {/* Descripción */}
            <p style={{ fontSize: "100%", textAlign: "justify" }}>
              La calistenia es un deporte que he entrenado durante varios años, sin embargo, he tenido momentos donde lo he dejado por un largo periodo de tiempo, pero a pesar de todo, es un deporte que me gusta mucho y de vez en cuando sigo ejercitándome en algunas plazas.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="maain">
      <div className="container text-center">
        <div className="row">
          <div className="col-7 col-sm-7 col-md-5">
            {/* Imagen */}
            <img
              src={Foto2} // Asegúrate de proporcionar la ruta correcta de tu imagen
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="col-4 col-sm-4 col-md-5 d-flex align-items-center justify-content-center">
            {/* Descripción */}
            <p style={{ fontSize: "100%", textAlign: "justify" }}>
              Atletismo es un deporte que me encanta, estuve en la selección de mi colegio y lo realicé durante 4 años participando en algunas competencias interescolares y regionales, como así también he participado en la maratón de Santiago y otros eventos.
            </p>
          </div>
        </div>
      </div>
    </div>
</>

);
}

export default Seccion1