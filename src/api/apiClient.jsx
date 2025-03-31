import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://wachapelisbackend.onrender.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
// interceptor para manejar el token de autenticación y errores de respuesta
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    // Si la petición fue exitosa, devuelve la respuesta tal cual
    return response;
  },
  (error) => {
    // Si hubo un error en la petición, devuelve el error tal cual
    return Promise.reject(error);
  }
);

export default apiClient;
