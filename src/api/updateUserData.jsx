import { message } from "antd";
import apiClient from "./apiClient";

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

