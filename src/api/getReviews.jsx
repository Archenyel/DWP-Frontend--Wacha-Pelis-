import { useState, useEffect } from "react";
import apiClient from "./apiClient";

const getReviews = (id) => {
  const [reviews, setReviwes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await apiClient.get("/reviews/" + id);
        setReviwes(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);
  return {
    reviews,
    loading,
    error,
  };
};

export default getReviews;
