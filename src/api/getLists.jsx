import { useState, useEffect } from "react";
import apiClient from "./apiClient";

//este hook es para obtener las listas de peliculas de un usuario
//si el userId es 0, devuelve todas las listas de peliculas
const getLists = ({ userId }) => {
  const [lists, setMovieLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let url = `/lists`;
  if (userId !== 0) {
    url = `/lists/${userId}`;
  }
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await apiClient.get(url);
        setMovieLists(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);
  return {
    lists,
    loading,
    error,
  };
};

export default getLists;
