import React from "react";
import { Image, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

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
