import React, { useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await apiClient.post("/auth/forgot-password", { email: values.email });
      message.success(
        "Si el email está registrado, recibirás un enlace para restablecer tu contraseña."
      );
      navigate("/resetpassword");
    } catch (error) {
      message.error(
        "Error al procesar la solicitud. Inténtalo de nuevo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title="Recuperar contraseña"
      style={{ width: 400, margin: "auto", marginTop: 50 }}
    >
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Correo electrónico"
          name="email"
          rules={[{ required: true, message: "Por favor ingresa tu email" }]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Enviar enlace
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ForgotPassword;
