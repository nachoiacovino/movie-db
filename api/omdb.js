import axios from 'axios';

const omdb = axios.create({
  baseURL: `http://www.omdbapi.com`,
  params: {
    apikey: process.env.OMDB_API_KEY,
  },
});

export default omdb;
