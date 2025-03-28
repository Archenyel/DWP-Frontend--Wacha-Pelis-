import React from "react";
import { Col, Row, Carousel, Image, Flex, Spin } from "antd";
import BasicList from "../components/BasicList";
import useMovies from "../api/useMovies";
const contentStyle = {
  color: "#fff",
  background: "#364d79",
};

const Home = () => {
  const { movies, loading, error } = useMovies();

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
      <Row justify={"center"}>
        <Col sm={24} xs={24}>
          <Carousel autoplay>
            <div>
              <div style={contentStyle}>
                <Flex justify={"center"}>
                  <Image
                    //width={"25vw"}
                    height={"50vh"}
                    src="https://img.freepik.com/vector-gratis/cartel-evento-musica-moderna-trazo-pincel-abstracto_1361-1917.jpg?t=st=1741900475~exp=1741904075~hmac=dc67fa94b39dd60aa08fbb82cd3497a03b5f33c4f4ffaa14159d7d8349c3999c&w=740"
                  />
                  <div
                    style={{
                      backgroundColor: "black",
                      width: "25vw",
                      padding: "10px",
                    }}
                  >
                    <h2>Titulo</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt, necessitatibus molestias illo aliquam autem
                      dolorem saepe maiores sed minus deleniti quibusdam debitis
                      harum minima blanditiis architecto? Dolor ducimus debitis
                      at.
                    </p>
                  </div>
                </Flex>
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <Flex justify={"center"}>
                  <Image
                    //width={"25vw"}
                    height={"50vh"}
                    src="https://img.freepik.com/psd-gratis/plantilla-poster-negro-vive-importa_23-2148585425.jpg?t=st=1741900522~exp=1741904122~hmac=e6479cc69ab3109e7ddbe424f88dac1b9da970a6ddc1624ab31c81fc4362e3cc&w=740"
                  />
                  <div
                    style={{
                      backgroundColor: "black",
                      width: "25vw",
                      padding: "10px",
                    }}
                  >
                    <h2>Titulo</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt, necessitatibus molestias illo aliquam autem
                      dolorem saepe maiores sed minus deleniti quibusdam debitis
                      harum minima blanditiis architecto? Dolor ducimus debitis
                      at.
                    </p>
                  </div>
                </Flex>
              </div>
            </div>
          </Carousel>
        </Col>
      </Row>
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
