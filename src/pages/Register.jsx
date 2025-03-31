import { Form, Input, Button, Card, message, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../api/apiClient";
import { useState } from "react";


// Este componente es la página de registro de usuario
// Se utiliza para crear una nueva cuenta de usuario en la aplicación
// Se utiliza el hook useNavigate de react-router-dom para redirigir al usuario después de registrarse
// Se utiliza el hook useState para manejar el estado de carga del formulario
// Se utiliza el componente Form de antd para crear el formulario de registro
// Se utiliza el componente Input de antd para los campos de entrada
// Se utiliza el componente Button de antd para el botón de envío

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/register", values);
      message.success("¡Registro exitoso!");
      navigate("/login");
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
