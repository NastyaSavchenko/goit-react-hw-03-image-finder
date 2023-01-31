import axios from 'axios';

const key = '32589447-ffbdd7a8f0a573b29764024b7';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const FetchApi = async searchName => {
  const response = axios.get(
    `?q=${searchName}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default {
  FetchApi,
};
