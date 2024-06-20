import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'http://homologacao.tridar.log.br'

const clientAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

clientAxios.interceptors.request.use(
  async (config) => {
    if (config.url === '/login' || config.url === '/signup') {
      return config;
    }

    const accessToken = Cookies.get('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default clientAxios;
