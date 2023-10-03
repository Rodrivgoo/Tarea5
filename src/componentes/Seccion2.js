import React, { useEffect, useState } from "react";
import { NavDropdown, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";//importacion biblioteca react-bootstrap
import { NavLink } from "react-router-dom";//importacion de navLink para rutas
import Foto from "../Imagenes/1366_2000.jpeg"
import Foto2 from "../Imagenes/big_bang_theory.jpg"
import Foto3 from "../Imagenes/db626980a3d452ed37a559bb10d65205a22333cf9f25b4792ad15a2351ea9e95._RI_TTW_.jpg"

const Seccion2 = () => {
    return(
        <> 
<main className="maain">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-10 col-md-5">
            <h1>
              <span className="malcom">Series</span>
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
            Ultima sitcom que he visto, la cual me parecio excelente y me encanto poder verla tanto solo como con mi pareja, sin ambergo, no es la que mas me ha enganchado y tampoco la que mas me ha emocionado.
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
            Segunda sitcom que vi, le tengo mucho cariño y la volveria a ver, es la sitcom mas larga que he visto y me gusto mucho poder empezarla desde cero con mi novia. Ademas, es la mejor que he visto, y sin duda es la que mas me ha emocionado.
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
              src={Foto3} // Asegúrate de proporcionar la ruta correcta de tu imagen
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="col-4 col-sm-4 col-md-5 d-flex align-items-center justify-content-center">
            {/* Descripción */}
            <p style={{ fontSize: "100%", textAlign: "justify" }}>
            Primera sitcom que vi, y ademas fue con mi novia, es muy buena y sin duda me emociono algunos capitulos, muy recomendable.
            </p>
          </div>
        </div>
      </div>
    </div>

</>

);
}

export default Seccion2