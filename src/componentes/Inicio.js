import React, { useEffect, useState } from "react";
import Foto from "../Imagenes/PAX-173957_APP-206850_ProfilePicture-1694752.png"
import Foto2 from "../Imagenes/BA_001.jpg"
import { NavDropdown, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";//importacion biblioteca react-bootstrap
import { NavLink } from "react-router-dom";//importacion de navLink para rutas

const Inicio = () => {
    return(
        <> 

<div className="container">
    <div className="row">
        <div className="col-md-6">
            <div className="posicion">
                <h2 className="letras">
                    <span className="malcom">Malcom </span> <span className="Muñoz">Muñoz</span>
                </h2>
            </div>
            <div className="maain">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className=" col-10 col-sm-10 col-md-12 col-xl-12 ">
                            <div className="card">
                                <img className="card-img-top" src={Foto} alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Descripción</h5>
                                    <p className="card-text" style={{ textAlign: 'justify' }}>
                                        <strong>Nombre:</strong> Malcom Muñoz <br />
                                        <strong>Edad:</strong> 21 años <br />
                                        <strong>Carrera:</strong> Ingeniería civil informática <br />
                                        <strong>Estado civil:</strong> Pololeando <br />
                                        <strong>Hobbies:</strong> Me gusta hacer deporte, salir a carretes y aprender cosas nuevas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="posicion">
                <h2 className="letras">
                    <span className="malcom">Rodrigo </span> <span className="Muñoz">Gómez</span>
                </h2>
            </div>
            <div className="maain">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className=" col-10 col-sm-10 col-md-12 col-xl-12 ">
                            <div className="card">
                                <img className="card-img-top" src={Foto2} alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Descripción</h5>
                                    <p className="card-text" style={{ textAlign: 'justify' }}>
                                        <strong>Nombre:</strong> Rodrigo Gómez <br />
                                        <strong>Edad:</strong> 20 años <br />
                                        <strong>Carrera:</strong> Ingeniería civil informática e industrial <br />
                                        <strong>Estado civil:</strong> En pareja <br />
                                        <strong>Hobbies:</strong> Jugar football o al pc, salir a carretear y la música, la música electrónica es mi favorita.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</>

);
}

export default Inicio