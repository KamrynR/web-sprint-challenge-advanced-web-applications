import axios from 'axios';

export const AxiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "http://localhost:3333/api",
        headers: {
            Authorization: token,
        },
    });
};