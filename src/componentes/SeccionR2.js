import React, { useEffect, useState } from "react";
import { NavDropdown, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";//importacion biblioteca react-bootstrap
import { NavLink } from "react-router-dom";//importacion de navLink para rutas
import Foto from "../Imagenes/Ajedrez.jpg"
import Foto2 from "../Imagenes/Cubos-Rubik.avif"

const SeccionR2 = () => {
    return(
        <> 
<main className="maain">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-10 col-md-5">
            <h1>
              <span className="malcom">Otros Pasatiempos</span>
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
            Me gusta jugar ajedrez, empecé a jugar desde muy pequeño, participé en competiciones cuando era más pequeño, quedando en 2nda posición por unas tablas (Empate).
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
            Me gusta armar y coleccionar cubos de Rubik, también empecé desde pequeño, tengo a día de hoy unos 20 cubos distintos, aunque hay algunos que todavía no he podido armar.            </p>
          </div>
        </div>
      </div>
    </div>

</>

);
}

export default SeccionR2