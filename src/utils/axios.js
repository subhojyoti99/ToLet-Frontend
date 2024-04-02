import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://localhost:8080', // Adjust the base URL to your backend server
// });

// // Set the default headers (optional)
// instance.defaults.headers.common['Content-Type'] = 'application/json';

// export default instance;

const instance = axios.create({
    baseURL: 'http://localhost:8080', // Adjust the base URL to your backend server
});

// Request Interceptor
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Assuming your JWT is stored as 'token'
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Set the default headers (optional)
instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;