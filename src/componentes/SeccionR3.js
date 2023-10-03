import React, { useEffect, useState } from "react";
import Foto from "../Imagenes/Tidal.png"
import Foto2 from "../Imagenes/Controlador.jpg"
import { NavDropdown, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";//importacion biblioteca react-bootstrap
import { NavLink } from "react-router-dom";//importacion de navLink para rutas

const SeccionR3 = () => {
    return(
        <> 

<main className="maain">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-10 col-md-5">
            <h1>
              <span className="malcom">Música</span>
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
            Soy un antisistema y no me gusta Spotify, uso Tidal y esas son algunas de mis playlist, desde reggaeton y trap hasta electronica y rock.
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
            De la misma manera que me gusta la música, me gusta mezclar múscia, sobre todo House y Tech, aunque no lo hago en público por vergüenza.
            </p>
          </div>
        </div>
      </div>
    </div>

</>

);
}

export default SeccionR3