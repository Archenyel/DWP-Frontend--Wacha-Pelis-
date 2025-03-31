import React from "react";
import { Col, Row, Image, Avatar, List, Typography, Rate, Spin } from "antd";
import { useParams } from "react-router-dom";
import getMovie from "../api/getMovieInfo";
import CommentSection from "../components/CommentSection";
const { Title, Paragraph } = Typography;

//este componente es para mostrar la pelicula y el formulario de reseñas
//se le pasa el id de la pelicula por params
//se hace una peticion a la api para obtener la informacion de la pelicula
//se muestra la imagen, el titulo y la sinopsis de la pelicula
//se muestra el formulario de reseñas

const NewReview = () => {
  const { id } = useParams();
  const { movie, loading, error } = getMovie(id);

  if (loading) {
    return (
      <Spin
        size="large"
        style={{ display: "block", margin: "auto", marginTop: "50px" }}
      />
    );
  }
  return (
    <Row justify={"center"} style={{ marginTop: "20px" }}>
      <Col
        xs={24}
        md={12}
        style={{ display: "flex", alignItems: "center", marginTop: "2%", backgroundColor: "white", padding: "20px", borderRadius: "10px" }}
      >
        <Image
          src={movie.imageUrl}
          alt="Placeholder"
          width={"30%"}
          style={{ marginRight: "20px" }}
        />
        <div style={{ width: "50%", marginLeft: "20px", }}>
          <Title level={3}>{movie.title}</Title>
          <Paragraph>{movie.sinopsis}</Paragraph>
        </div>
      </Col>

      <Col md={20} style={{ margin: "5%" }}>
        <CommentSection id={id} />
      </Col>
    </Row>
  );
};

export default NewReview;
