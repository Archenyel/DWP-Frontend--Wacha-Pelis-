import { useState, useEffect } from "react";
import apiClient from "./apiClient";

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
