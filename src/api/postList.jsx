import apiClient from "./apiClient";

const postList = async (list) => {
  try {
    const response = await apiClient.post(`/lists/newList`, list);
    return response.data;
  } catch (error) {
    console.error("Error posting review:", error);
    throw error;
  }
};

export default postList;
