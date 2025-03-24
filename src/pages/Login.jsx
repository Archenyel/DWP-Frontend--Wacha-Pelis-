import { Form, Input, Button, Card, message, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginImage from "../assets/login.jpg";
import api from "../api/apiClient";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const response = await api.post("/login", {
        email: values.email,
        password: values.password,
      });

      const { token, user } = response.data;

      localStorage.setItem("authToken", token);

      message.success(`Bienvenido, ${user.name}!`);
    } catch (error) {
      if (error.response) {
        const errorMsg =
          error.response.data?.message || "Credenciales inválidas";
        message.error(errorMsg);
      } else {
        message.error("Error de conexión");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "80vh" }}>
      <Col md={8} sm={24}>
        <img src={loginImage} alt="login" style={{ width: "100%" }} />
      </Col>
      <Col md={8} sm={24}>
        <Card title="Iniciar Sesión">
          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            style={{ marginBlock: "10%" }}
          >
            <Form.Item
              label="email"
              name="email"
              rules={[
                { required: true, message: "Por favor ingresa tu usuario" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                { required: true, message: "Por favor ingresa tu contraseña" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Iniciar sesión
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
