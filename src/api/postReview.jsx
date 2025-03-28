import apiClient from "./apiClient";

const postReview = async (id, review) => {

  try {
    const response = await apiClient.post(`/reviews/newreview/${id}`, review);
    return response.data;
  } catch (error) {
    console.error("Error posting review:", error);
    throw error;
  }
};

export default postReview;
