import axios from "axios";

const baseURL = process.env.REACT_APP_BACK_END;

const axiosInstance = axios.create({
    baseURL: baseURL,
});

export default axiosInstance;