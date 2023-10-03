import React from "react";
import Header from "./Shared/Header";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Inicio from "./componentes/Inicio";
import Calculadora from "./componentes/Calculadora";
import Formedad from "./componentes/Formedad";
import Formulario from "./componentes/Formulario";
import Galeria from "./componentes/Galeria";
import Galeria2 from "./componentes/Galeria2";
import Seccion1 from "./componentes/Seccion1";
import Seccion2 from "./componentes/Seccion2";
import Seccion3 from "./componentes/Seccion3";
import SeccionR1 from "./componentes/SeccionR1";
import SeccionR2 from "./componentes/SeccionR2";
import SeccionR3 from "./componentes/SeccionR3";

const App = () => {
  return (
    <div
      className="App">
        {/*}Renderizado componente Top{*/}
        <Header/>{/*}Renderizado componente Header{*/}
          <Routes>{/*}Rutas{*/}
        <Route path="/" element={<Inicio />}/>
        <Route path="/Calculadora" element={<Calculadora/>}/>
        <Route path="/Formedad" element={<Formedad/>}/>
        <Route path="/Formulario" element={<Formulario/>}/>
        <Route path="/Galeria" element={<Galeria/>}/>
        <Route path="/Galeria2" element={<Galeria2/>}/>
        <Route path="/Seccion1" element={<Seccion1/>}/>
        <Route path="/Seccion2" element={<Seccion2/>}/>
        <Route path="/Seccion3" element={<Seccion3/>}/>
        <Route path="/SeccionR1" element={<SeccionR1/>}/>
        <Route path="/SeccionR2" element={<SeccionR2/>}/>
        <Route path="/SeccionR3" element={<SeccionR3/>}/>

        </Routes>
      
    </div>
  );
};

export default App