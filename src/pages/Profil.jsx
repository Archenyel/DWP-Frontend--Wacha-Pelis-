import React from "react";
import { Col, Row, Button } from "antd";
import "./profile.css";

const Profil = () => {
  return (
    <Row justify={"center"} style={{ marginTop: "10px" }}>
      <Col md={20} style={{ height: "70vh" }}>
        <Row align={"middle"} justify={"center"} style={{ height: "100%" }}>
          <Col
            md={24}
            sm={24}
            style={{ height: "20%", border: "2px dotted black" }}
          >
            ASDFs
          </Col>
          <Col
            md={20}
            sm={24}
            style={{
              height: "80%",
              borderLeft: "2px dotted black",
              borderBottom: "2px dotted black",
              borderRight: "2px dotted black",
            }}
          >
            ASDF
          </Col>
          <Col
            md={4}
            sm={24}
            style={{
              height: "80%",
              borderRight: "2px dotted black",
              borderBottom: "2px dotted black",
            }}
            className="center-buttons"
          >
            <Button type="dashed" className="custom-button">
              Dashed Button
            </Button>
            <Button type="dashed" className="custom-button">
              Dashed Button
            </Button>
            <Button
              type="dashed"
              className="custom-button"
              style={{ marginBottom: "0" }}
            >
              Dashed Button
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Profil;
