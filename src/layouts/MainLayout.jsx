import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { HomeOutlined, BarsOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{ display: "flex", alignItems: "center", padding: "0 20px" }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
          Wacha Pelis
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ marginLeft: "auto" }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Inicio</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/aboutus">Contacto</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/profil">Mi perfil</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<BarsOutlined />}>
            <Link to="/about"></Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ backgroundColor: "#f9f9f9", }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Mi Aplicación ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default MainLayout;
