import React from "react";
import { Navigate, Outlet } from "react-router-dom";

//este componente se encarga de proteger las rutas que requieren autenticacion
//si el usuario no ha iniciado sesion, se le redirige a la pagina de login
//si el usuario ha iniciado sesion, se le permite acceder a la ruta solicitada

const ProtectedRoute = () => {
  const userId = localStorage.getItem("userId");

  return userId ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
