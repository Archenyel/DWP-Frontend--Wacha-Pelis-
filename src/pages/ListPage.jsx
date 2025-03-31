import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List, Typography, Spin, Card, Image, Button } from "antd";
import apiClient from "../api/apiClient";

const { Title } = Typography;

const ListPage = () => {
  const { id } = useParams(); // Obtiene el ID de la lista desde la URL
  const userId = localStorage.getItem("userId"); // Obtiene el ID del usuario desde el almacenamiento local
  console.log("userId", userId);
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);

  const deleteMovieFromList = (movieId) => async () => {
    try {
      await apiClient.delete(`/lists/remove/${id}`, {
        data: { movieId },
      });
      setList((prevList) => ({
        ...prevList,
        movies: prevList.movies.filter((movie) => movie.id !== movieId),
      }));
    } catch (error) {
      console.error("Error eliminando la película de la lista:", error);
    }
  };

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await apiClient.get(`/lists/content/${id}`);
        setList(response.data);
        console.log("Lista obtenida:", response.data);
      } catch (error) {
        console.error("Error obteniendo la lista:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchList();
  }, [id]);

  if (loading)
    return (
      <Spin
        size="large"
        style={{ display: "block", margin: "auto", marginTop: "50px" }}
      />
    );
  if (!list)
    return (
      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
          fontSize: "40px",
          margin: "5%",
        }}
      >
        lista sin contenido.
      </div>
    );

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Card title={list.name} style={{ margin: "20px" }}>
        <Title level={4}>{list.description}</Title>
        <List
          itemLayout="horizontal"
          dataSource={list.movies}
          renderItem={(movie) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Image width={50} src={movie.imageUrl} />}
                title={<strong>{movie.title}</strong>}
                description={movie.synopsis}
              />
              {String(movie.userId) == String(userId) && (
                <Button
                  color="pink"
                  variant="solid"
                  style={{ marginLeft: "auto" }}
                  onClick={() => deleteMovieFromList(movie.id, id)}
                >
                  Borrar
                </Button>
              )}
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default ListPage;
