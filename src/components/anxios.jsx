import axios from 'axios';

const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://85.209.9.201/api/auth/register', userData);
    console.log(response.data); // Обработайте ответ бэкенда
  } catch (error) {
    console.error('Error during registration:', error);
  }
};