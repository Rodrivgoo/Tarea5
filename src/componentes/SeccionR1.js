import React, { useEffect, useState } from "react";
import Foto from "../Imagenes/LigaChilena.jpg"
import Foto2 from "../Imagenes/Trekking.jpg"

import { NavDropdown, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";//importacion biblioteca react-bootstrap
import { NavLink } from "react-router-dom";//importacion de navLink para rutas

const SeccionR1 = () => {
    return(
        <> 

<main className="maain">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-10 col-md-5">
            <h1>
              <span className="malcom">Pasatiempos</span>
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
              Me gusta ver y jugar football, no soy fanático de ningún equipo chileno en particular, sin embargo me inclino por Unión Española, Universidad Católica y Colo Colo.
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
            Me gusta salir a practicar trekking a los diversos cerros de Santiago y sus alrededores, muchas veces son por el día, pero quedarse en una carpa a 3000 msnm no es fácil.
            </p>
          </div>
        </div>
      </div>
    </div>
</>

);
}

export default SeccionR1