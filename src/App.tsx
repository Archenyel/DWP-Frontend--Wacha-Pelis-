// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import HomePage from "./pages/homePage";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        {/* Navbar */}
        <Navbar />
        
        {/* Contenido */}
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2025</Footer>
      </Layout>
    </Router>
  );
};

export default App;




