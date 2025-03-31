import React, { useState } from "react";
import {
  Col,
  Row,
  Image,
  Avatar,
  List,
  Typography,
  Rate,
  Spin,
  Button,
  Select,
  message,
} from "antd";
import { useParams, Link } from "react-router-dom";
import getMovie from "../api/getMovieInfo";
import getReviews from "../api/getreviews";
import getLists from "../api/getLists";
import apiClient from "../api/apiClient";

const { Title, Paragraph } = Typography;
const { Option } = Select;

const Review = () => {
  const { id } = useParams();
  const userId = localStorage.getItem("userId");

  const { movie, loading, error } = getMovie(id);
  const { reviews, loadingReviews, errorReviews } = getReviews(id);
  const { lists } = getLists({ userId });

  const [selectedList, setSelectedList] = useState(null);
  const [adding, setAdding] = useState(false);

  const handleAddToList = async () => {
    if (!selectedList) {
      message.warning("Selecciona una lista primero.");
      return;
    }

    setAdding(true);
    try {
      await apiClient.patch(`/lists/add/${selectedList}`, { movieId: id });
      message.success("Película agregada a la lista.");
    } catch (error) {
      message.error("Error al agregar la película.");
    } finally {
      setAdding(false);
    }
  };

  if (loading || loadingReviews) {
    return (
      <Spin
        size="large"
        style={{ display: "block", margin: "auto", marginTop: "50px" }}
      />
    );
  }

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        margin: "5%",
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Blanco con 80% de opacidad
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Col
        xs={24}
        md={18}
        style={{ display: "flex", alignItems: "center", marginTop: "2%" }}
      >
        <Image
          src={movie.imageUrl}
          alt={movie.title}
          width={"15%"}
          style={{ marginRight: "20px" }}
        />
        <div style={{ width: "50%", marginLeft: "20px" }}>
          <Title level={3}>{movie.title}</Title>
          <Paragraph>{movie.sinopsis}</Paragraph>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <Title level={4}>Agregar a mis listas</Title>
          <Select
            placeholder="Selecciona una lista"
            style={{ width: 200 }}
            onChange={(value) => setSelectedList(value)}
          >
            {lists.map((list) => (
              <Option key={list.id} value={list.id}>
                {list.name}
              </Option>
            ))}
          </Select>
          <Button
            type="primary"
            onClick={handleAddToList}
            loading={adding}
            style={{ marginLeft: 10 }}
          >
            Agregar
          </Button>
          <Title level={4}>¿Ya viste la película? Deja una reseña</Title>
          <Link to={`/newReview/${id}`}>
            <Button>Agregar reseña</Button>
          </Link>
          <Link to={`/sse`}>
            <Button style={{ marginLeft: 10 }}>
              Mira las reviews en tiempo real
            </Button>
          </Link>
        </div>
      </Col>
      <Col span={20} style={{ margin: "5%", backgroundColor: "white" , padding: "20px", borderRadius: "8px"}}>
        <Title level={4}>Opiniones de los usuarios</Title>
        <List
          itemLayout="horizontal"
          dataSource={reviews.reviews}
          renderItem={(item, index) => (
            <List.Item>
              <Rate allowHalf disabled defaultValue={item.rate} />
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.review}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default Review;
