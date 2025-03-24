import React from "react";
import { Row, Col, Button, Image } from "antd";

const Lists = () => {
  return (
    <>
      <Row
        align={"middle"}
        justify={"space-between"}
        style={{
          marginTop: "20px",
          backgroundColor: "#f0f2f5",
          marginInline: "5%",
          minHeight: "5vh",
        }}
      >
        <Col md={5}>Nombre de la lista</Col>
        <Col md={5}>Lista de elementos</Col>
        <Col md={5}>Descripcion</Col>
        <Col md={5}>botones</Col>
      </Row>

      <Row
        align={"middle"}
        justify={"space-between"}
        style={{
          marginTop: "20px",
          backgroundColor: "#f0f2f5",
          marginInline: "5%",
          minHeight: "5vh",
        }}
      >
        <Col md={5}>Nombre de la lista</Col>
        <Col md={5}>Lista de elementos</Col>
        <Col md={5}>Descripcion</Col>
        <Col md={5}>botones</Col>
      </Row>
      
    </>
  );
};

export default Lists;
