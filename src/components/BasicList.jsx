import React from "react";
import { Image, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

const BasicList = () => {
  return (
    <Row justify={"space-evenly"} style={{ marginTop: "20px" }}>
      <Col sm={8} style={{ textAlign: "center" }}>
        <h2>PlaceHolder</h2>
        <Image
          height={"40vh"}
          src="https://img.freepik.com/vector-gratis/poster-pelicula-suspenso-profesional_742173-3470.jpg?t=st=1741903044~exp=1741906644~hmac=a71889561900c69c27c7c0deebe6f7cccb53fecc48ecdb5e22e2a1ebab52de84&w=740"
        />
        <div style={{ marginTop: "10px" }}>
          <Link to="/review">
            <Button type="primary" style={{ marginRight: "10px" }}>
              Ver Reseñas
            </Button>
          </Link>
          <Link to="/newreview">
            <Button type="default">Reseñar</Button>
          </Link>
        </div>
      </Col>
      <Col sm={8} style={{ textAlign: "center" }}>
        <h2>PlaceHolder</h2>
        <Image
          height={"40vh"}
          src="https://img.freepik.com/psd-gratis/cartel-plantilla-agencia-funciones_23-2148797784.jpg?t=st=1741903315~exp=1741906915~hmac=66e1deb772e90e4cd0f96195ebc6f3d21bb349b42a1436e62b0e68e13768a492&w=740"
        />
        <div style={{ marginTop: "10px" }}>
          <Link to="/review">
            <Button type="primary" style={{ marginRight: "10px" }}>
              Ver Reseñas
            </Button>
          </Link>
          <Link to="/newreview">
            <Button type="default">Reseñar</Button>
          </Link>
        </div>
      </Col>
      <Col sm={8} style={{ textAlign: "center" }}>
        <h2>PlaceHolder</h2>
        <Image
          height={"40vh"}
          src="https://img.freepik.com/psd-gratis/plantilla-cartel-pelicula-creativa_23-2149839039.jpg?t=st=1741903359~exp=1741906959~hmac=ef79794955e38ebcdccc991416d854d894d7549b02bf85d2969d52c966f95fc9&w=740"
        />
        <div style={{ marginTop: "10px" }}>
          <Link to="/review">
            <Button type="primary" style={{ marginRight: "10px" }}>
              Ver Reseñas
            </Button>
          </Link>
          <Link to="/newreview">
            <Button type="default">Reseñar</Button>
          </Link>
        </div>
      </Col>

      <Col sm={8} style={{ textAlign: "center" }}>
        <h2>PlaceHolder</h2>
        <Image
          height={"40vh"}
          src="https://img.freepik.com/psd-premium/plantilla-redes-sociales-venta_542773-70.jpg?w=740"
        />
        <div style={{ marginTop: "10px" }}>
          <Link to="/review">
            <Button type="primary" style={{ marginRight: "10px" }}>
              Ver Reseñas
            </Button>
          </Link>
          <Link to="/newreview">
            <Button type="default">Reseñar</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default BasicList;
