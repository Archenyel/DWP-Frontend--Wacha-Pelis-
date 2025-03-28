import { useState } from "react";
import { Card, Form, Input, Button, List, Rate } from "antd";
import postReview from "../api/postReview";

const CommentSection = ({ id }) => {
  const [rate, setRate] = useState(0);
  const onFinish = (values) => {
    if (!values.review.trim()) return;

    values.rate = rate;
    values.name = "Anonymous";
    postReview(id, values)
      .then((response) => {
        console.log("Review posted successfully:", response);
      })
      .catch((error) => {
        console.error("Error posting review:", error);
      });
  };

  return (
    <Card title="Deja tu opinion de la pelicula para ayudar a otros">
      <Form onFinish={onFinish} layout="vertical">
        <Rate allowHalf onChange={setRate} defaultValue={0} />
        <Form.Item
          name="review"
          rules={[{ required: true, message: "Escribe una review" }]}
        >
          <Input.TextArea
            rows={3}
            placeholder="Escribe tu review de la pelicula..."
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Publicar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CommentSection;
