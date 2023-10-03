import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imagenR1 from "../Imagenes/BA_001.jpg";
import imagenR2 from "../Imagenes/Lista Ig BA 02.jpg";
import imagenR3 from "../Imagenes/Lista Ig BA 03.jpg";
import imagenR4 from "../Imagenes/Lista Ig Lima 01.jpg";
import imagenR5 from "../Imagenes/Lista Ig Lima 02.jpg";
import imagenR6 from "../Imagenes/Lista Ig Lima 03.jpg";

const imagesData = [
  {
    image: imagenR1,
    description: "Viaje a Buenos Aires - En el obelisco"
  },
  {
    image: imagenR2,
    description: "Viaje a Buenos Aires - Invente Roman"
  },
  {
    image: imagenR3,
    description: "Viaje a Buenos Aires - En una flor de metal"
  },
  {
    image: imagenR4,
    description: "Viaje a Lima - En el mall"
  },
  {
    image: imagenR5,
    description: "Viaje a Lima - En el jardín de aguas"
  },
  {
    image: imagenR6,
    description: "Viaje a Lima - En la plaza de armas"
  }
];

const Galeria2 = () => {
  const [index, setIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleImageClick = (imagen) => {
    if (imagen === expandedImage) {
      // Si la imagen clickeada es la misma que la imagen expandida, cierra la imagen
      setExpandedImage(null);
    } else {
      // Si no, expande la imagen clickeada
      setExpandedImage(imagen);
    }
  };

  return (
    <>
      <div className="maain">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className=" col-10 col-sm-10 col-md-5">
              <h1>Carrusel de Rodrigo</h1>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                {imagesData.map((data, imageIndex) => (
                  <Carousel.Item key={imageIndex}>
                    <img
                      src={data.image}
                      className="d-block w-100"
                      alt={`Imagen ${imageIndex + 1}`}
                      onClick={() => handleImageClick(data.image)}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {expandedImage && (
        <div className="expanded-image">
          <img src={expandedImage} alt="Imagen expandida" className="col-8 col-sm-8 col-md-5" />
          <p className="description">{imagesData.find((data) => data.image === expandedImage)?.description}</p>
        </div>
      )}
    </>
  );
};

export default Galeria2;