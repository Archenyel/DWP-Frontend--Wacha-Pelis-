import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/AboutUs";
import Lists from "./pages/Lists";
import MyLists from "./pages/MyLists";
import NewReview from "./pages/NewReview";
import Profil from "./pages/Profil";
import Register from "./pages/Register";
import Review from "./pages/Review";
import NotFound from "./pages/NotFound";
import NewList from "./pages/NewList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="lists" element={<Lists />} />
        <Route path="mylists" element={<MyLists />} />
        <Route path="newreview/:id" element={<NewReview />} />
        <Route path="profil" element={<Profil />} />
        <Route path="review/:id" element={<Review />} />
        <Route path="newlist" element={<NewList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
