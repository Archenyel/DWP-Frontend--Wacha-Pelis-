import React from "react";
import { Col, Row, Image, Avatar, List, Typography, Rate } from "antd";
const { Title, Paragraph } = Typography;

const data = [
  {
    title: "El Hombre Invisible",
    description: "No vi nada en toda la película. 0/10.",
  },
  {
    title: "Tiburón",
    description: "Una historia sobre la dieta extrema de un pez con hambre.",
  },
  {
    title: "Rápidos y Furiosos 27",
    description:
      "Los coches ahora viajan en el tiempo, pero la trama sigue sin existir.",
  },
  {
    title: "El Conjuro",
    description:
      "Una familia compra una casa embrujada y actúa sorprendida cuando pasan cosas raras.",
  },
  {
    title: "Titanic",
    description:
      "Un romance hermoso… hasta que recuerdas que sí había espacio en la tabla.",
  },
  {
    title: "Interestelar",
    description: "Una clase de física que me hizo llorar.",
  },
  {
    title: "Godzilla vs Kong",
    description: "Dos monstruos se pelean y los humanos creen que importan.",
  },
  {
    title: "Avatar",
    description: "Pocahontas pero con aliens azules en 3D.",
  },
  {
    title: "El Aro",
    description:
      "Una niña muerta me obliga a ver una película mala dentro de otra película mala.",
  },
  {
    title: "IT (Eso)",
    description: "Un payaso aterrador… pero no tanto como mis facturas.",
  },
  {
    title: "Jurassic Park",
    description:
      "El clásico cuento de ‘recrear dinosaurios’ y luego preguntarse por qué fue una mala idea.",
  },
  {
    title: "Transformers",
    description:
      "Explosiones, robots y un guion escrito por un niño de 10 años.",
  },
  {
    title: "Sharknado",
    description:
      "¿Y si un tornado tuviera tiburones? Genial, ahora haz seis películas más.",
  },
  {
    title: "John Wick",
    description: "No toques al perro de un hombre si aprecias tu vida.",
  },
  {
    title: "Los Juegos del Hambre",
    description: "Reality show extremo con más muertes que rating.",
  },
  {
    title: "La La Land",
    description:
      "Un musical donde nadie obtiene lo que quiere, pero todo se ve bonito.",
  },
  {
    title: "Buscando a Nemo",
    description:
      "Un pez olvidó su hijo y yo olvidé mi dignidad al llorar con una película infantil.",
  },
  {
    title: "El Rey León",
    description:
      "Un documental de National Geographic con canciones y traumas infantiles.",
  },
];

const Review = () => {
  return (
    <Row justify="center" align="middle">
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
      <Col span={20} style={{ margin: "5%" }}>
        {" "}
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <Rate allowHalf disabled defaultValue={4.5} />
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default Review;
