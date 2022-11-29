import axios from 'axios';

// export const ApiService = () => {

//     const apiService = {
//         getShows: async () => {
//             const shows = await axios.get('http://api.tvmaze.com/shows')
//             return shows;
//         }
//     }
//     return { apiService };
// }

export class ApiService {

    static getShows = async () => {
        const data = await axios.get('http://api.tvmaze.com/shows')
        return data;
    }

    static getShow = async (id: number) => {
        const data = await axios.get(`http://api.tvmaze.com/shows/${id}`)
        return data;
    }

}