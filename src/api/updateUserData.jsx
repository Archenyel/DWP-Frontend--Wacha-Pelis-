import { message } from "antd";
import apiClient from "./apiClient";

//esta función se encarga de actualizar los datos de un usuario en la API
//recibe el id del usuario y los datos a actualizar
//y devuelve la respuesta de la API
//la función es asincrona porque hace una peticion a la API
//y puede tardar un tiempo en responder

const updateUserData = async (id, userData) => {
  try {
    const response = await apiClient.patch(`/users/${id}`, userData);
    
    message.success("Datos actualizados correctamente");
    
    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    message.error("Failed to update user data.");
    throw error;
  }
};

export default updateUserData;

