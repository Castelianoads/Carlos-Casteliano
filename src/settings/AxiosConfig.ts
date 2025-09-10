import axios from 'axios';

const urlApi: any = import.meta.env.VITE_URL_API;

export const AxiosConfig = axios.create({
  //baseURL: urlApi,
  headers: {
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': '*',
    //'Origin': 'https://producaomecanico.com.br'
    //'Accept': 'application/json'
  }
});

AxiosConfig.interceptors.request.use(
  (config) => {
    const token: string | null = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosConfig.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const status = error.response.status;
    if (status === 204) {
      return Promise.reject(error);
    } else if (status === 401) {
      sessionStorage.removeItem('token')
      return Promise.reject(error);
    } else if(status == 400){
      return Promise.reject(error);
    } else if(status == 422){
      return Promise.reject(error);
    } else if(status == 409){
      return Promise.reject(error);
    }else if(status == 500){
      alert('Erro no servidor');
      return Promise.reject(error); 
    }

    return Promise.reject(error);
  }
);