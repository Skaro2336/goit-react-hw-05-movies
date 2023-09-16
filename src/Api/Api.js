import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '4b34cc9253777dc6fec5c1871a98544b';

const params = {
  method: 'GET',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjM0Y2M5MjUzNzc3ZGM2ZmVjNWMxODcxYTk4NTQ0YiIsInN1YiI6IjY0OGI1ZjI3YzJmZjNkMDBlMmRlYWU1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQHFaZaU_U-h8xgMJnpwkWK8i9YXE6bi6y1QMGEr91k',
  },
};

export const fetchTrendMovies = async () => {
  const response = await axios.get(`${BASE_URL}trending/all/day`, params);
  const products = response.data.results;
  return products;
};

export const searchMoviesByName = async movieName => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,

    params
  );
  const products = response.data;
  return products;
};

export const fetchMovieDetails = async movie_id => {
  const response = await axios.get(`${BASE_URL}/movie/${movie_id}`, {
    params,
  });
  const products = response.data;
  return products;
};

export const fetchMovieCredits = async movie_id => {
  const response = await axios.get(`${BASE_URL}/movie/${movie_id}/credits`, {
    params,
  });
  const products = response.data;
  return products;
};

export const fetchMovieReviews = async movie_id => {
  const response = await axios.get(`${BASE_URL}/movie/${movie_id}/reviews`, {
    params,
  });
  const products = response.data;
  return products;
};
