import React from "react";
import { Col, Row, Carousel, Image, Spin, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import BasicList from "../components/BasicList";
import useMovies from "../api/useMovies";

const contentStyle = {
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const imgStyle = {
  marginTop: "2px",
  marginBottom: "2px",
  display: "block",
  width: 273,
};

const Home = () => {
  const { movies, loading, error } = useMovies();
  const sortMovies = movies.slice().sort(() => Math.random() - 0.5);

  if (loading) {
    return (
      <Spin
        size="large"
        style={{ display: "block", margin: "auto", marginTop: "50px" }}
      />
    );
  }
  if (error) {
    return <p>Hubo un error al cargar las películas</p>;
  }

  return (
    <>
      <Typography.Title
        level={2}
        style={{
          color: "white",
        }}
      >
        Peliculas destacadas
      </Typography.Title>
      <Row
        justify="center"
        style={{
          maxWidth: "100vw",
          backgroundColor: "#364d79",
          margin: "auto",
        }}
      >
        <Col sm={8} xs={8}>
          <Carousel autoplay arrows>
            {sortMovies.slice(0, 3).map((movie) => (
              <div key={movie.id}>
                <div style={contentStyle}>
                  <Image
                    src={movie.imageUrl}
                    alt={movie.title}
                    style={imgStyle}
                  />

                  <Typography.Title
                    level={4}
                    style={{
                      color: "#fff",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    {movie.title}
                  </Typography.Title>
                  <Link to={`/review/${movie.id}`}>
                    <Button type="primary" style={{ marginBottom: "18px" }}>
                      Reseñas de los usuarios
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Typography.Title
        level={2}
        style={{
          color: "white",
        }}
      >
        Catalogo
      </Typography.Title>
      <Row justify={"space-evenly"}>
        {movies.map((movie) => (
          <BasicList
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imageUrl={movie.imageUrl}
          />
        ))}
      </Row>
    </>
  );
};

export default Home;
