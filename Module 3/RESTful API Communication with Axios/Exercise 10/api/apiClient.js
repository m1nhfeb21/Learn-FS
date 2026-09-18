import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error("401 - Bạn chưa đăng nhập hoặc token đã hết hạn");
    }
    if (error.response?.status === 500) {
      console.error("500 - Server đang gặp lỗi");
    }

    return Promise.reject(error);
  },
);

const cleanParams = (params = {}) => {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== "",
    ),
  );
};

export const get = (url, params = {}) => {
  return apiClient.get(url, {
    params: cleanParams(params),
  });
};

export const post = (url, data) => {
  return apiClient.post(url, data);
};

export const put = (url, data) => {
  return apiClient.put(url, data);
};

export const remove = (url) => {
  return apiClient.delete(url);
};
