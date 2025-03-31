import { useState, useEffect } from "react";
import apiClient from "./apiClient";

//este hook es para obtener la info de una pelicula en especifico
//recibe el id de la pelicula y devuelve la info, loading y error
//se usa en el componente MovieDetails.jsx

const getMovie = (id) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await apiClient.get("/movies/"+id);
        setMovie(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  return {
    movie,
    loading,
    error,
  };
};

export default getMovie;
