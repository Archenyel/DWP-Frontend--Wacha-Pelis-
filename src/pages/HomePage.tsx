import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Content } = Layout;

const HomePage: React.FC = () => {
  return (
    <Layout style={{ height: '100vh', backgroundColor: '#f0f2f5' }}>
      <Content style={{ display: 'flex', justifyContent: 'center', padding: '0 20px' }}>
        <Row
          style={{
            width: '100%',
            maxWidth: '1200px', 
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '8px', 
            padding: '20px',
          }}
        >
          <Col span={24}>
            <div
              style={{
                borderLeft: '2px solid white',
                borderRight: '2px solid white',
                padding: '20px',
                height: '100%',
              }}
            >
              <h2 style={{ textAlign: 'center' }}>Espacio para el contenido</h2>
              <p style={{ textAlign: 'center' }}>Aquí irán los componentes...</p>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default HomePage;
