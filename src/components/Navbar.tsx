import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/Login">Login</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/HomePage">Contacto</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/HomePage">Mi perfil</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/HomePage"> configuración </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
