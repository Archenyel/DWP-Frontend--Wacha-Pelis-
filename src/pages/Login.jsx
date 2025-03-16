import { Form, Input, Button, Card, message, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginImage from "../assets/login.jpg"

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    setTimeout(() => {
      if (values.username === "admin" && values.password === "1234") {
        message.success("Inicio de sesión exitoso");
        navigate("/dashboard"); // Redirige al dashboard
      } else {
        message.error("Usuario o contraseña incorrectos");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "80vh" }}>
      <Col md={8} sm={24}>
        <img src={loginImage} alt="login" style={{ width: "100%" }} />
      </Col>
      <Col md={8} sm={24}>
        <Card title="Iniciar Sesión">
          <Form name="login" onFinish={onFinish} layout="vertical" style={{marginBlock: "10%"}}>
            <Form.Item
              label="Usuario"
              name="username"
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
