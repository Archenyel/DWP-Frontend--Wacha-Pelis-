import React from "react";
import { Col, Row, Image, Avatar, List, Typography, Rate, Spin } from "antd";
import getReviews from "../api/getreviews";
import { useParams } from "react-router-dom";
import getMovie from "../api/getMovieInfo";

const { Title, Paragraph } = Typography;

const Review = () => {
  const { id } = useParams();
  const { movie, loading, error } = getMovie(id);
  console.log(movie);
  const { reviews, loadingReviews, errorReviews } = getReviews(id);

  if (loading || loadingReviews) {
    return (
      <Spin
        size="large"
        style={{ display: "block", margin: "auto", marginTop: "50px" }}
      />
    );
  }

  return (
    <Row justify="center" align="middle">
      <Col
        xs={24}
        md={12}
        style={{ display: "flex", alignItems: "center", marginTop: "2%" }}
      >
        <Image
          src={movie.imageUrl}
          alt="Placeholder"
          width={"50%"}
          style={{ marginRight: "20px" }}
        />
        <div style={{ width: "50%", marginLeft: "20px" }}>
          <Title level={3}>{movie.title}</Title>
          <Paragraph>{movie.sinopsis}</Paragraph>
        </div>
      </Col>
      <Col span={20} style={{ margin: "5%" }}>
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
