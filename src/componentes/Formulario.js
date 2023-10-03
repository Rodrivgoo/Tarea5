import React, { useEffect, useState } from "react";
import { NavDropdown, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";//importacion biblioteca react-bootstrap
import { NavLink } from "react-router-dom";//importacion de navLink para rutas

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [destinatario, setDestinatario] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [exito, setExito] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();

      setExito(true);
      setTimeout(() => {
        setExito(false);
      }, 3000); 
      setNombre("");
      setCorreo("");
      setDestinatario("");
      setMensaje("");
    };
    return(
        <> 
        <main className="maain">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-10 col-md-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label" style={{ fontSize: "1.4rem" }}>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label" style={{ fontSize: "1.4rem" }}>Correo</label>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="destinatario" className="form-label" style={{ fontSize: "1.4rem" }}>Destinatario</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="destinatario"
                    value={destinatario}
                    onChange={(e) => setDestinatario(e.target.value)}
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                  />
                  <span className="input-group-text" id="basic-addon2">@gmail.com</span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label" style={{ fontSize: "1.4rem" }}>Mensaje</label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {exito && (
              <div className="alert alert-success mt-3">
                Registro exitoso. ¡Gracias por tu mensaje!
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
</>

);
}

export default Formulario