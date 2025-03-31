import { Form, Input, Button, message } from "antd";
import { useState } from "react";
import apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      await apiClient.post("/auth/reset-password", {
        email: values.email,
        code: values.code,
        password: values.password,
      });
      message.success("Contraseña restablecida correctamente");
      navigate("/login");
    } catch (error) {
      message.error("Error al restablecer la contraseña");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: "auto", padding: "20px", width: "80vw", backgroundColor: "white", borderRadius: "8px", marginTop: "20px" }}>
      <h1>Restablecer Contraseña</h1>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Correo Electrónico"
          name="email"
          rules={[{ required: true, message: "Por favor ingresa tu correo" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Código de Recuperación"
          name="code"
          rules={[{ required: true, message: "Por favor ingresa el código" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nueva Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: "Por favor ingresa una nueva contraseña",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Restablecer Contraseña
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPassword;
