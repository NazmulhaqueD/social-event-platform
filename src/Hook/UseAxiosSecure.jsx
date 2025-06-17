import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
})

const UseAxiosSecure = () => {

    const { user, logOut } = useContext(AuthContext);

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user?.accessToken}`
        return config;
    })

    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            logOut()
                .then(() => {
                    console.log('signOut user for 401 or 403 status code ')
                })
                .catch(error => {
                    console.log(error)
                })
        }
        return Promise.reject(error);
    })

    return axiosInstance;
};

export default UseAxiosSecure;