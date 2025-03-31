import { useState, useEffect } from "react";
import apiClient from "./apiClient";

//este hook es para obtener los datos de un usuario en especifico
//se le pasa el id del usuario y devuelve un objeto con los datos del usuario, un booleano de loading y un error
//se usa en el componente UserProfile.jsx
//se usa el hook useEffect para hacer la peticion a la api cuando se monta el componente y se le pasa el id del usuario como dependencia
//se usa el hook useState para guardar los datos del usuario, el loading y el error
const getUserData = (id) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await apiClient.get("/users/" + id);
        setUser(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);
  return {
    user,
    loading,
    error,
  };
};

export default getUserData;
