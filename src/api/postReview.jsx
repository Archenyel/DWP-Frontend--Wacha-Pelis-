import apiClient from "./apiClient";

//esta función se encarga de enviar una reseña a la API
//recibe el id del producto y la reseña como parámetros
//y devuelve la respuesta de la API
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
