import { Form, Input, Button, Card, message, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { use, useState } from "react";
import loginImage from "../assets/login.jpg";
import api from "../api/apiClient";

//este componente es para el login de la aplicacion, se encarga de enviar el email y la contraseña al backend y 
// recibir el token de autenticacion, si el login es exitoso se redirige a la pagina principal
// si el login falla se muestra un mensaje de error

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    setEmail(values.email);

    try {
      await api
        .post("/auth/login", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          const { userId } = response.data;
          setUserId(userId);
        });

      message.info("Código de verificación enviado a tu email.");
      setIsCodeSent(true);
    } catch (error) {
      message.error("Credenciales inválidas.");
    } finally {
      setLoading(false);
    }
  };

  const onVerifyCode = async (values) => {
    setLoading(true);

    try {
      const response = await api.post("/auth/verify-2fa", {
        userId: userId,
        code: values.code,
      });

      const { token, user, role } = response.data;

      localStorage.setItem("authToken", token);
      localStorage.setItem("user", user);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId);

      message.success(`Bienvenido, ${user}!`);
      navigate("/");
    } catch (error) {
      message.error("Código incorrecto o expirado.");
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
        <Card title={isCodeSent ? "Verificar Código" : "Iniciar Sesión"}>
          {isCodeSent ? (
            <Form name="verify-2fa" onFinish={onVerifyCode} layout="vertical">
              <Form.Item
                label="Código de Verificación"
                name="code"
                rules={[{ required: true, message: "Ingresa el código" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                >
                  Verificar Código
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Form name="login" onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Ingresa tu email" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Contraseña"
                name="password"
                rules={[{ required: true, message: "Ingresa tu contraseña" }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                >
                  Iniciar sesión
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="link" onClick={() => navigate("/register")} block>
                  No tienes cuenta? Regístrate aquí
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  type="link"
                  onClick={() => navigate("/forgotpassword")}
                  block
                >
                  Olvidaste tu contraseña?
                </Button>
              </Form.Item>
            </Form>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
