import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { FacebookOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const AboutUs: React.FC = () => {
  return (
    <Layout style={{ padding: '50px 20px' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <div
            style={{
              padding: '20px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Title level={2}>Sobre Nosotros</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida
              arcu ac erat scelerisque, eu elementum nunc gravida. Sed varius
              consequat sapien, ac cursus urna scelerisque vitae. Integer vel nunc
              sit amet enim eleifend tincidunt. Integer euismod, nisi ac vestibulum
              elementum, velit nunc pretium nisi, ac sollicitudin ligula orci nec
              velit. Integer imperdiet neque eget tincidunt euismod.
            </Paragraph>
            <Paragraph>
              Curabitur a scelerisque felis. Cras nec ante turpis. Donec et feugiat
              justo. Nulla facilisi. Donec sit amet fermentum nunc. Sed tempor libero
              at risus consequat, a tincidunt leo feugiat.
            </Paragraph>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div
            style={{
              padding: '20px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <Title level={2}>Contáctanos</Title>
            <Space direction="vertical" size="large">
              <div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FacebookOutlined style={{ fontSize: '36px', color: '#3b5998' }} />
                </a>
              </div>
              <div>
                <a href="#">
                  <MailOutlined style={{ fontSize: '36px', color: '#db4437' }} />
                </a>
              </div>
            </Space>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default AboutUs;
