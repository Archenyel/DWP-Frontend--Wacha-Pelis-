import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import AboutUs from './pages/AboutUs';

const { Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar />
        
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2025</Footer>
      </Layout>
    </Router>
  );
};

export default App;




