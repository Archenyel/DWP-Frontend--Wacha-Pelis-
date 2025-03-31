import React from "react";
import { useState } from "react";
import getLists from "../api/getLists";
import { List, Typography, Button, message } from "antd";
import { Link } from "react-router-dom";
import apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

//este componente se encarga de mostrar las listas creadas por la comunidad
//el componente recibe como props el id del usuario que ha iniciado sesion
//si el id es 0 significa que el usuario es un visitante y no puede borrar listas

const ListsComponent = ({ userId }) => {
  const navigate = useNavigate();
  const [key, setKey] = useState(0);
  const { lists, loading, error } = getLists({ userId });

  const publicList = userId == 0;

  if (!lists || lists.length === 0)
    return (
      <div
        style={{ textAlign: "center", marginTop: 20, backgroundColor: "white" }}
      >
        <p>No hay listas disponibles.</p>
      </div>
    );

  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/lists/${id}`);
      message.success("Lista eliminada correctamente.");
      navigate("/blanck"); // Redirige temporalmente
      setTimeout(() => navigate(-1), 50); // Vuelve atrás inmediatamente
    } catch (error) {
      console.error("Error al eliminar la lista:", error);
    }
  };

  return (
    <>
      <Title level={3}>Listas creadas por la comunidad</Title>
      <List
        itemLayout="horizontal"
        dataSource={lists}
        renderItem={(list) => (
          <List.Item
            actions={[
              <Link to={`/list/${list.id}`} key={list.id}>
                <Button type="primary">Ver el contenido de esta lista</Button>
              </Link>,
              !publicList && (
                <Button danger onClick={() => handleDelete(list.id)}>
                  Borrar
                </Button>
              ),
            ]}
          >
            <List.Item.Meta
              title={<strong>{list.name}</strong>}
              description={list.description}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default ListsComponent;
