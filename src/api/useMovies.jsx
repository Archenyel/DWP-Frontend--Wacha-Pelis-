import { useState, useEffect } from "react";
import apiClient from "./apiClient";

//este hook es para obtener las peliculas de la api y guardarlas en el state
//se usa el hook useEffect para hacer la peticion a la api y el hook useState para guardar los datos en el state
//el hook useEffect se ejecuta cuando el componente se monta y cuando el state cambia
//el hook useState se usa para guardar el state de las peliculas, el loading y el error
const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await apiClient.get("/movies");
        setMovies(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  return {
    movies,
    loading,
    error,
  };
};

export default useMovies;
