import axios from 'axios';

const API_URL = 'https://swapi.co/api/';

export const getPeople = axios.get(`${API_URL}people`).then(res => res.data);
