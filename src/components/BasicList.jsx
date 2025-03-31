import React from "react";
import { Image, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

//este componente es una lista de elementos que se muestran en la pantalla
//recibe un objeto con la siguiente estructura: {title, imageUrl, id}
//title es el nombre del elemento, imageUrl es la url de la imagen y id es el id del elemento
//el componente se encarga de mostrar el nombre del elemento, la imagen y un boton que redirige a la pagina de reseñas del elemento

const BasicList = ({ title, imageUrl, id }) => {
  return (
    <Col
      sm={24}
      md={8}
      style={{
        textAlign: "center", marginTop: 20, marginBottom: 20,
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: 20,
          borderRadius: 10,
          width: "70%",
          margin: "auto",
        }}
      >
        <h2>{title}</h2>
        <Image height={"40vh"} src={imageUrl} />
        <div style={{ marginTop: "10px" }}>
          <Link to={`/review/${id}`}>
            <Button type="primary" style={{ width: "100%" }}>
              Reseñas de los usuarios
            </Button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default BasicList;
