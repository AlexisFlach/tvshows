import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const BASE_URL = "http://api.tvmaze.com";
export const BASE_URL__SHOWS = `${BASE_URL}/shows`;
export const BASE_URL__SHOWS__SEARCH = `${BASE_URL}/search?q=`;
const config: AxiosRequestConfig = { baseURL: BASE_URL };

export const axiosInstance: AxiosInstance = axios.create(config);
