import React, { useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import postList from "../api/postList";

//este componente es para crear una nueva lista de películas
//se utiliza el hook useState para manejar el estado de la carga
//se utiliza el hook useEffect para manejar el estado de la carga
//se utiliza el hook useHistory para redirigir al usuario a la página de listas

const NewList = () => {
  const userId = localStorage.getItem("userId");
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    try {
      values.userId = localStorage.getItem("userId");
      postList(values).then((response) => {
        setLoading(false);
        message.success("Lista creada con éxito");
      });
    } catch (error) {
      setLoading(false);
      message.error("Error al crear la lista");
    }
  };

  return (
    <div style={{ maxWidth: 1200, margin: "auto", marginTop: 20 }}>
      <Card title="Crear Lista de Películas">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Nombre de la Lista"
            name="name"
            rules={[{ required: true, message: "Por favor ingresa un nombre" }]}
          >
            <Input placeholder="Ej. Mis películas favoritas" />
          </Form.Item>

          <Form.Item
            label="Descripción"
            name="description"
            rules={[
              { required: true, message: "Por favor ingresa una descripción" },
            ]}
          >
            <Input.TextArea
              placeholder="Describe de qué trata esta lista"
              rows={3}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Crear Lista
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default NewList;
