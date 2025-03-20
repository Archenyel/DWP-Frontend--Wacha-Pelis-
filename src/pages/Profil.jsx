import React from "react";
import { Col, Row, Button, Input, Card, Avatar, Typography } from "antd";
import {
  UserOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./profile.css";

const { Title, Text } = Typography;

const UserInfo = ({ user }) => {
  return (
    <Row style={{ backgroundColor: "#f0f2f5", marginInline: "15%" }}>
      <Col
        md={24}
        sm={24}
        style={{ backgroundColor: "#bfbfbf", textAlign: "center" }}
      >
        <p>Informacion de la cuenta</p>
      </Col>
      <Col md={12} sm={24}>
        <p>
          Nombre: <Text strong>{user.name}</Text>
        </p>
        <p>
          Telefono: <Text strong>{user.number}</Text>
        </p>
        <p>
          correo: <Text strong>{user.email}</Text>
        </p>
      </Col>
      <Col md={12} sm={24} style={{ textAlign: "center" }}>
        <img
          style={{ width: "70%", margin: "5px" }}
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1742500359~exp=1742503959~hmac=daae381ef4b5629888d5484807861a8d3a9f6cc001f8e51351987860961da420&w=740"
          alt=""
        />
      </Col>
    </Row>
  );
};

const Profil = () => {
  const user = {
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    number: "999-999-99",
  };

  return (
    <Row justify="center" className="profile-container">
      <Col md={20} style={{ height: "70vh" }}>
        <Row align="middle" justify="center" style={{ height: "100%" }}>
          {/* Encabezado con ícono de perfil */}
          <Col md={24} sm={24} className="profile-header">
            <UserOutlined
              style={{ marginRight: "20px" }}
              className="profile-icon"
            />
            Mi perfil
          </Col>

          {/* Contenido principal con información del usuario */}
          <Col md={18} sm={24} className="profile-content">
            <UserInfo user={user} />
            <Button
              className="custom-button"
              style={{ marginTop: "20px", marginInline: "25%", width: "50%" }}
            >
              Cambiar información de la cuenta
            </Button>
          </Col>

          {/* Barra lateral con botones */}
          <Col md={6} sm={24} className="profile-sidebar center-buttons">
            <Button className="custom-button">Mis listas</Button>
            <Button className="custom-button">mis reseñas</Button>
            <Button className="custom-button">Categorias</Button>
            <Button className="custom-button">cerrar sesion</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Profil;
