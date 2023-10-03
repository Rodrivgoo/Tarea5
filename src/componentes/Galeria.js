import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imagen1 from "../Imagenes/WhatsApp Image 2023-08-08 at 17.40.48.jpeg";
import imagen2 from "../Imagenes/WhatsApp Image 2023-09-25 at 19.10.08.jpeg";
import imagen3 from "../Imagenes/WhatsApp Image 2023-09-25 at 19.11.13.jpeg";

const imagesData = [
  {
    image: imagen1,
    description: "Descripción de la imagen 1"
  },
  {
    image: imagen2,
    description: "Descripción de la imagen 2"
  },
  {
    image: imagen3,
    description: "Descripción de la imagen 3"
  }
];

const Galeria = () => {
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
              <h1>Carrusel de Malcom</h1>
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

export default Galeria;