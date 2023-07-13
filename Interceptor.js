import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:3001/api/',
  // Add any additional configuration as needed
});

// Add an interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if the error response has a status code indicating token expiration
    if (error.response && error.response.status === 401) {
      // Redirect the user to the login page or perform any other desired action
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
