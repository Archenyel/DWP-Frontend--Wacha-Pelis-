import { useState, useEffect } from "react";
import apiClient from "./apiClient";

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
