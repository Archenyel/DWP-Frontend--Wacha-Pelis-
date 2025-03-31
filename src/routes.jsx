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
import ListPage from "./pages/ListPage";
import blanck from "./pages/blanck";
import MyReviews from "./pages/MyReviews";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import MovieComments from "./pages/SSE";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="sse" element={<MovieComments />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="lists" element={<Lists />} />
        <Route element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="aboutus" element={<AboutUs />} />
        <Route element={<ProtectedRoute />}>
          <Route path="mylists" element={<MyLists />} />
          <Route path="newreview/:id" element={<NewReview />} />
          <Route path="profil" element={<Profil />} />
          <Route path="review/:id" element={<Review />} />
          <Route path="newlist" element={<NewList />} />
          <Route path="list/:id" element={<ListPage />} />
          <Route path="blanck" element={<blanck />} />
          <Route path="myreviews" element={<MyReviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
