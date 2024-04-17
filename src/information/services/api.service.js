import axios from 'axios';

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://restcountries.com/v3.1/'
        });
    }

    getData() {
        return this.api.get('name/peru');
    }
}

export default new ApiService();