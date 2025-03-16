import { useState } from "react";
import { Card, Form, Input, Button, List, Rate } from "antd";

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const onFinish = (values) => {
    if (!values.comment.trim()) return;

    const newComment = {
      id: Date.now(),
      text: values.comment,
    };

    setComments([...comments, newComment]);
  };

  return (
    <Card title="Review">
      <Form onFinish={onFinish} layout="vertical">
        <Rate allowHalf defaultValue={4.5} />
        <Form.Item
          name="comment"
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

      <List
        dataSource={comments}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card style={{ width: "100%" }}>{item.text}</Card>
          </List.Item>
        )}
        locale={{ emptyText: "No hay comentarios aún" }}
      />
    </Card>
  );
};

export default CommentSection;
