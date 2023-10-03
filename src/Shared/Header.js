import React, { useEffect, useState } from "react";
import Foto from "../Imagenes/PAX-173957_APP-206850_ProfilePicture-1694752.png"
import { NavDropdown, Nav, Navbar, Dropdown, Button, Container, Row, Col } from "react-bootstrap";//importacion biblioteca react-bootstrap
import { NavLink } from "react-router-dom";//importacion de navLink para rutas
const Header = () => {
    return(
        <> 

<Navbar bg="dark" variant="dark" expand="md">
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <i className="bi bi-bezier2"></i>
          <span className="text-warning">Tarea 5</span>
        </Navbar.Brand>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
        <Navbar.Collapse id="menu">
          <Nav className="me-auto">
          <NavLink to="/" className="nav-link-opacity nav-link">
            Inicio
          </NavLink>

          <NavDropdown title="Galerias" id="galerias-dropdown" className="nav-link-opacity2" >
              <NavDropdown.Item >
              <NavLink to="/Galeria" className="black-text">
            Galeria Malcom
          </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <NavLink to="/Galeria2" className="black-text">
            Galeria Rorro
          </NavLink>
              </NavDropdown.Item>
               
            </NavDropdown>

          <NavLink to="/Formulario" className="nav-link-opacity2 nav-link">
            Formulario
          </NavLink>

            <NavDropdown title="Calculos" id="calculos-dropdown" className="nav-link-opacity2" >
              <NavDropdown.Item >
              <NavLink to="/Calculadora" className="black-text">
            Calculadora
          </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <NavLink to="/Formedad" className="black-text">
            Formulario Edad
          </NavLink>
              </NavDropdown.Item>

            </NavDropdown>
                <NavDropdown title="Malcom" id="seccion1-dropdown" className="nav-link-opacity2">
            <NavDropdown.Item>
              <NavLink to="/Seccion1" className="black-text">
                Sección 1 Malcom
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/Seccion2" className="black-text">
                Sección 2 Malcom
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/Seccion3" className="black-text">
                Sección 3 Malcom
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Rorro" id="seccion2-dropdown" className="nav-link-opacity2">
            <NavDropdown.Item>
              <NavLink to="/SeccionR1" className="black-text">
                Sección 1 Rorro
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/SeccionR2" className="black-text">
                Sección 2 Rorro
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/SeccionR3" className="black-text">
                Sección 3 Rorro
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          </Nav>

          <hr className="d-md-none text-white-50" />
          <Nav className="flex-row flex-wrap text-light">
          <Dropdown>
        <Dropdown.Toggle variant="link" className="nav-link p-3 btn btn-link btn-lg text-white">
          <i className="bi bi-instagram text-danger"></i>
          <small className="d-md-none ms-2">Instagram</small>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-end">
          <Dropdown.Item href="https://instagram.com/br0wed_?igshid=NGVhN2U2NjQ0Yg==">Malcom</Dropdown.Item>
          <Dropdown.Item href="https://instagram.com/Rodrivgoo">Rodrigo</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="link" className="nav-link p-3 btn btn-link btn-lg text-white">
            <i className="bi bi-github text-light"></i>
            <small className="d-md-none ms-2">GitHub</small>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-end">
            <Dropdown.Item href="https://github.com/Maalcom/intento">Malcom</Dropdown.Item>
            <Dropdown.Item href="https://github.com/Rodrivgoo/Tarea5">Rodrigo</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="link" className="nav-link p-3 btn btn-link btn-lg text-white">
            <i className="bi bi-whatsapp text-success"></i>
            <small className="d-md-none ms-2">WhatsApp</small>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-end">
            <Dropdown.Item href="https://api.whatsapp.com/send?phone=56954119146&text=">Malcom</Dropdown.Item>
            <Dropdown.Item href="https://api.whatsapp.com/send?phone=56945460538&text=">Rodrigo</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </Nav>
          </Navbar.Collapse>
        </div>
      </div>
      </Navbar>

        </>

);
}

export default Header
