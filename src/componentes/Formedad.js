import React, { useEffect, useState } from "react";
import { NavDropdown, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";//importacion biblioteca react-bootstrap
import { NavLink } from "react-router-dom";//importacion de navLink para rutas

const Formedad = () => {
    const [edadUsuario, setEdadUsuario] = useState("");
  const [resultado, setResultado] = useState("-");

  const calcularDiferenciaEdad = () => {
    const edad = parseFloat(edadUsuario);
    let resultadoCalculado;

    if (!isNaN(edad)) {
      resultadoCalculado = edad > 21 ? edad - 21 : 21 - edad;
    } else {
      resultadoCalculado = "Por favor, ingresa una edad válida.";
    }

    setResultado(resultadoCalculado);
  };
    return(
        <> 
        <div className="container mt-5">
      <h1 className="text-center">Formulario Edad</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="edadUsuario">Edad Usuario</label>
            <input
              type="number"
              className="form-control"
              id="edadUsuario"
              value={edadUsuario}
              onChange={(e) => setEdadUsuario(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={calcularDiferenciaEdad}
          >
            Calcular diferencia de edad
          </button>
          <div className="mt-3">
            <h5>Resultado:</h5>
            <p id="result">{resultado}</p>
          </div>
        </div>
      </div>
    </div>
</>

);
}

export default Formedad