import axios from 'axios';

const clientAxios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export default clientAxios;
