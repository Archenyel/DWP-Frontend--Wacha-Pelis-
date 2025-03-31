import React from "react";
import { Navigate, Outlet } from "react-router-dom";

//este componente se encarga de redirigir a la pagina principal si el usuario ya esta logueado
//si el usuario no esta logueado, se le permite acceder a la pagina de login o registro
const PublicRoute = () => {
  const userId = localStorage.getItem("userId");

  return userId ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
