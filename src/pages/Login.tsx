import React from 'react';
import { Layout, Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../assets/logo.jpg';

const { Content } = Layout;

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Login Success:', values);
  };

  return (
    <Content style={{ minHeight: '100vh' }}>
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        {/* Contenedor de 2 columnas con fondo negro */}
        <Col
          xs={24}
          sm={24}
          md={18}
          lg={18}
          style={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70vh', 
            backgroundColor: 'white',
          }}
        >
          {/* Imagen local */}
          <div
            style={{
              width: '100%', 
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <img
              src={logo}
              alt="Login"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>
          {/* Formulario de login */}
          <div
            style={{
              padding: '30px',
              width: '100%',
              color: 'white',
              backgroundColor: 'white',
              borderRadius: '8px',
            }}
          >
            <h2 style={{ textAlign: 'center', color: 'white' }}>Login</h2>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
              style={{
                maxWidth: "70%",
                margin: 'auto',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: 'white', 
              }}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Enter username" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'ingresa tu contraseña' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Log in
                </Button>
              </Form.Item>

              <Form.Item>
                <Button type="link" htmlType="submit" block>
                  Registrarte
                </Button>
              </Form.Item>
            </Form>
          </div>


        </Col>
      </Row>
    </Content>
  );
};

export default Login;