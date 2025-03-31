import { Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const AboutUs = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ backgroundColor: "white", padding: 20, borderRadius: 10, margin: 20 }}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad,
          perferendis nesciunt ea vero laudantium quasi a alias, esse omnis
          assumenda voluptatum eum, corrupti nisi officiis! Sunt molestias ipsum
          soluta? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
          eveniet ipsa omnis magni soluta officiis est consequatur qui esse
          dolor quam aliquam necessitatibus, fuga distinctio debitis aperiam
          cupiditate, magnam consectetur! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Blanditiis commodi consequatur similique repellat
          repudiandae! Molestiae deserunt adipisci expedita mollitia atque
          autem, sit illo assumenda. Sunt voluptatibus dicta pariatur possimus
          culpa? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Recusandae dignissimos reiciendis rem excepturi tempora accusamus,
          quia illo magni saepe, enim soluta repellat temporibus labore natus
          impedit, tempore molestias quis. Esse. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Assumenda neque fuga quisquam ipsum
          natus obcaecati. Quod a temporibus rem atque fuga, quidem numquam,
          praesentium, quam ipsum officia repellendus ducimus consequuntur.
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
