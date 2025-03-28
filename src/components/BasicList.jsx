import React from "react";
import { Image, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

const BasicList = ({ title, imageUrl, id }) => {
  return (
    <Col sm={8} style={{ textAlign: "center" }}>
      <h2>{title}</h2>
      <Image height={"40vh"} src={imageUrl} />
      <div style={{ marginTop: "10px" }}>
        <Link to={`/review/${id}`}>
          <Button type="primary" style={{ marginRight: "10px" }}>
            Ver Reseñas
          </Button>
        </Link>
        <Link to={`/newreview/${id}`}>
          <Button type="default">Reseñar</Button>
        </Link>
      </div>
    </Col>
  );
};

export default BasicList;
