import React from "react";
import { Col, Row, Image, Avatar, List, Typography, Rate } from "antd";
import CommentSection from "../components/CommentSection";
const { Title, Paragraph } = Typography;

const NewReview = () => {
  return (
    <Row justify={"center"} style={{ marginTop: "20px" }}>
      <Col
        xs={24}
        md={12}
        style={{ display: "flex", alignItems: "center", marginTop: "2%" }}
      >
        <Image
          src="https://img.freepik.com/vector-gratis/portada-libro-wattpad-desconocido_23-2149452348.jpg?t=st=1741972811~exp=1741976411~hmac=12070fdbf9e1e5f2491905c32d159ebddf8a9c86137d0f24587409b71fd1e1b3&w=740"
          alt="Placeholder"
          width={"50&"}
          style={{ marginRight: "20px" }}
        />
        <div style={{ width: "50%", marginLeft: "20px" }}>
          <Title level={3}>Título de la pelicula</Title>
          <Paragraph>
            Sinopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            varius justo at magna volutpat, et posuere mauris euismod. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur
            voluptate delectus vitae deleniti amet dolorem consequuntur possimus
            soluta facere repudiandae fugiat magnam, dignissimos veritatis
            quisquam quae repellendus nam suscipit! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Illo nesciunt omnis iste, provident,
            temporibus non, esse quisquam fuga fugiat voluptate aliquid
            accusantium culpa reiciendis ratione velit tempore quibusdam
            aspernatur corrupti?
          </Paragraph>
        </div>
      </Col>
      <Col md={20} style={{ margin: "5%" }}>
        <CommentSection />
      </Col>
    </Row>
  );
};

export default NewReview;
