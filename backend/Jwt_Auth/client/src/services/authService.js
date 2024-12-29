import axios from 'axios';

const API_URL = 'http://localhost:5051/api/auth';

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/signin`, credentials);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
};