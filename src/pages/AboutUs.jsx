import { Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

//este componente es el que se encarga de mostrar la pagina de about us
//en esta pagina se muestra una breve descripcion de la pagina y un parrafo de bienvenida

const AboutUs = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        margin: 20,
      }}
    >
      <Col xs={24} md={8} style={{ textAlign: "justify", padding: "0px" }}>
        <img
          src="https://img.freepik.com/foto-gratis/grupo-gente-joven-cine_23-2148115362.jpg?t=st=1741971580~exp=1741975180~hmac=cc7d91eb5c51ae465b997da0fa715b8d23c1f0d366303bc6a554fb05afc7a765&w=740"
          alt="about us"
          style={{ width: "70%" }}
        />
      </Col>
      <Col xs={24} md={8} style={{ textAlign: "justify", padding: "20px" }}>
        <h2>Sobre Nosotros</h2>
        <p>
          Bienvenido a nuestra plataforma, el lugar ideal
          para los amantes del cine que desean descubrir, compartir y comentar
          sobre sus películas favoritas. Nuestra misión es crear un espacio
          donde la comunidad cinéfila pueda interactuar, dejar reseñas y debatir
          sobre los mejores (y peores) momentos del cine. Nuestra Historia Este
          proyecto nació de la pasión por el séptimo arte y la tecnología.
          Queríamos un sitio donde los usuarios pudieran no solo guardar sus
          listas de películas, sino también compartirlas con otros, recibir
          recomendaciones y mantenerse actualizados con las opiniones más
          frescas sobre sus películas favoritas.
        </p>
      </Col>

      <Col xs={24} md={6} style={{ textAlign: "center", padding: "20px" }}>
        <h3>Síguenos</h3>
        <div
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined />
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default AboutUs;
