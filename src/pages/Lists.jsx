import React, { useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import postList from "../api/postList";
import ListsComponent from "../components/listsComponent";

const Lists = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    try {
      values.idUser = "1";
      postList(values).then((response) => {
        setLoading(false);
        message.success("Lista creada con éxito", response);

        setMovieLists([...movieLists, values]);
      });
    } catch (error) {
      setLoading(false);
      message.error("Error al crear la lista");
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto", marginTop: 20 }}>
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
      <p>Mis listas</p>

      <ListsComponent idUser={"1"} />
      <p>listas de la comunidad</p>
      <ListsComponent idUser={0}/>
    </div>
  );
};

export default Lists;
