import { Form, Input, Button, Card, message, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../api/apiClient";
import { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/register", values);
      message.success("¡Registro exitoso!");
      console.log("Usuario creado:", response.data);
    } catch (error) {
      message.error(error.response?.data?.error || "Error al registrar");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f2f5",
      }}
    >
      <Card
        title="Registro"
        style={{ width: 350, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
      >
        <Form
          name="register"
          onFinish={onFinish}
          layout="vertical"
          disabled={loading}
        >
          <Form.Item
            label="Nombre completo"
            name="name"
            rules={[
              { required: true, message: "Nombre obligatorio" },
              { min: 3, message: "Mínimo 3 caracteres" },
            ]}
          >
            <Input placeholder="Ej: Juan Pérez" />
          </Form.Item>

          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[
              { required: true, message: "Correo obligatorio" },
              {
                type: "email",
                message: "Formato inválido (ej: usuario@dominio.com)",
              },
            ]}
          >
            <Input placeholder="usuario@ejemplo.com" />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              { required: true, message: "Contraseña obligatoria" },
              { min: 6, message: "Mínimo 6 caracteres" },
              {
                //se desactiva el patron de contraseña por motivos de desarrollo
                //pattern: /^(?=.*[A-Z])(?=.*\d).+$/,
                message: "Debe incluir al menos una mayúscula y un número",
              },
            ]}
          >
            <Input.Password placeholder="••••••" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              icon={loading ? <Spin size="small" /> : null}
            >
              {loading ? "Registrando..." : "Crear cuenta"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
