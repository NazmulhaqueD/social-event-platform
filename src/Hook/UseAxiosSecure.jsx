import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import { toast } from 'react-toastify';

const axiosInstance = axios.create();

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

                })
                .catch(error => {
                    toast(error)
                })
        }
        return Promise.reject(error);
    })

    return axiosInstance;
};

export default UseAxiosSecure;