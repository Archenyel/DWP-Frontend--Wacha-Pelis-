import React from "react";
import getLists from "../api/getLists";
import { Card } from "antd";

const ListsComponent = ({ idUser }) => {
  const { lists, loading, error } = getLists({ idUser });

  if (!lists || lists.length === 0) return <p>No hay listas disponibles.</p>;

  return (
    <Card title="Listas Creadas" style={{ marginTop: 20 }}>
      {lists.map((list, index) => (
        <p key={index}>
          <strong>{list.name}:</strong> {list.description}
        </p>
      ))}
    </Card>
  );
};

export default ListsComponent;
