import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Col,
  Row,
  Button,
  Input,
  Card,
  Avatar,
  Typography,
  message,
} from "antd";
import getUserData from "../api/getUserData";
import updateUserData from "../api/updateUserData";

const { Title } = Typography;

const Profil = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  console.log(userId);
  const { user: initialUser, loading, error } = getUserData(userId);

  const [user, setUser] = useState({ name: "", phone: "", address: "" });

  useEffect(() => {
    if (initialUser) {
      setUser(initialUser);
    }
  }, [initialUser]);

  const closesesion = () => {
    localStorage.clear();
    message.success("Sesión cerrada correctamente");
    navigate("/login");
  };

  const handleChange = (key, value) => {
    setUser((prevUser) => ({ ...prevUser, [key]: value }));
  };

  const handleSave = async () => {
    updateUserData(userId, user);
  };

  return (
    <Row justify="center" gutter={[48, 16]} style={{ marginTop: 20 }}>
      <Col md={12} sm={24}>
        <Card title="Información del Usuario">
          <Avatar
            size={100}
            src={`https://robohash.org/${user.name}.png?set=set4`}
            style={{ marginBottom: 20 }}
          />
          <p>
            <strong>Nombre:</strong>
          </p>
          <Input
            value={user.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <p style={{ marginTop: 10 }}>
            <strong>Teléfono:</strong>
          </p>
          <Input
            value={user.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <p style={{ marginTop: 10 }}>
            <strong>Dirección:</strong>
          </p>
          <Input
            value={user.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />

          <Button type="primary" style={{ marginTop: 20 }} onClick={handleSave}>
            Guardar
          </Button>
        </Card>
      </Col>
      <Col md={5} sm={24}>
        <Card title="Acciones">
          <Link to="/MyReviews">
            <Button block style={{ marginBottom: 10 }}>
              Mis reviews
            </Button>
          </Link>

          <Link to="/MyLists">
            <Button block style={{ marginBottom: 10 }}>
              Mis listas
            </Button>
          </Link>

          <Button block onClick={closesesion} style={{ marginBottom: 10 }}>
            Cerrar sesión
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Profil;
