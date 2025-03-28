import { useState, useEffect } from "react";
import apiClient from "./apiClient";

const getLists = ({ idUser }) => {
  const [lists, setMovieLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let url = `/lists`;
  if (idUser !== 0) {
    url = `/lists/${idUser}`;
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
