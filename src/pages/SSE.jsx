import React, { useState, useEffect } from "react";
import { Card, List, Typography, Button, Space, Avatar, message } from "antd";
import { CommentOutlined, CloseOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const MovieComments = () => {
  const [comments, setComments] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [eventSource, setEventSource] = useState(null);

  const connectToSSE = () => {
    const source = new EventSource("http://localhost:3000/sse/comments");

    source.onopen = () => {
      setIsConnected(true);
      message.success("Conectado al stream de comentarios");
    };

    source.onmessage = (event) => {
      const newComment = JSON.parse(event.data);
      setComments((prev) => [
        {
          id: Date.now(),
          content: newComment.comment,
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev.slice(0, 9),
      ]);
    };

    source.onerror = () => {
      setIsConnected(false);
      source.close();
      message.error("Error en la conexión");
    };

    setEventSource(source);
  };

  const disconnectFromSSE = () => {
    if (eventSource) {
      eventSource.close();
      setIsConnected(false);
      message.info("Conexión cerrada");
    }
  };

  useEffect(() => {
    connectToSSE();

    return () => {
      disconnectFromSSE();
    };
  }, []);

  return (
    <Card
      title={
        <Space>
          <CommentOutlined />
          <Text strong>Stream de Comentarios en Tiempo Real</Text>
        </Space>
      }
      extra={
        isConnected ? (
          <Button danger icon={<CloseOutlined />} onClick={disconnectFromSSE}>
            Detener
          </Button>
        ) : (
          <Button type="primary" onClick={connectToSSE}>
            Conectar
          </Button>
        )
      }
      style={{ width: "100%", maxWidth: 600, margin: "auto" }}
    >
      <div style={{ height: 400, overflowY: "auto" }}>
        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<CommentOutlined />} />}
                title={<Text type="secondary">{item.timestamp}</Text>}
                description={item.content}
              />
            </List.Item>
          )}
          locale={{
            emptyText: isConnected
              ? "Esperando comentarios..."
              : "No conectado",
          }}
        />
      </div>

      <div style={{ marginTop: 16, textAlign: "center" }}>
        <Text type="secondary">
          {isConnected
            ? "Recibiendo nuevos comentarios cada 3 segundos..."
            : 'Presiona "Conectar" para iniciar el stream'}
        </Text>
      </div>
    </Card>
  );
};

export default MovieComments;
