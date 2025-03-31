import React, { useEffect, useState } from "react";
import { List, Spin, Typography, Button } from "antd";
import apiClient from "../api/apiClient";

const { Title } = Typography;

//este componente muestra las reseñas del usuario logueado
//elimina una reseña al hacer click en el boton eliminar
//elimina la reseña de la base de datos y actualiza el estado local
//muestra un spinner mientras se cargan las reseñas

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  const deleteReview = (reviewId) => async () => {
    try {
      await apiClient.delete(`/reviews/delete/${reviewId}`);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== reviewId)
      );
    } catch (error) {
      console.error("Error eliminando la reseña:", error);
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await apiClient.get("/reviews/user/" + userId);
        setReviews(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div style={{ maxWidth: "80%", margin: "auto", marginTop: "20px", backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
      <Title level={2}>Mis Reseñas</Title>

      {loading ? (
        <Spin size="large" style={{ display: "block", margin: "auto" }} />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={reviews}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img
                    src={item.movie.imageUrl}
                    alt={item.movie.title}
                    style={{ borderRadius: "50%", width: 50, height: 50 }}
                  />
                }
                title={item.movie.title}
                description={item.review}
              />
              <Button type="primary" onClick={deleteReview(item.id)} danger>
                Eliminar
              </Button>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default MyReviews;
