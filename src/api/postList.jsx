import apiClient from "./apiClient";

//esta funcion se encarga de hacer un post a la api para crear una nueva lista
//recibe un objeto con la lista y lo envia a la api
//la api devuelve la lista creada
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
