import axios from 'axios';

export const pokemonService = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});