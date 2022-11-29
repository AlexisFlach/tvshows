import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
export class ApiService {

    static getShows = async () => {
        const data = await axios.get(`${API_URL}/shows`)
        return data;
    }

    static getShow = async (id: number) => {
        const data = await axios.get(`${API_URL}/shows/${id}`)
        return data;
    }

}