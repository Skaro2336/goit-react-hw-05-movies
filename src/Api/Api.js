import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4b34cc9253777dc6fec5c1871a98544b';

// const params = {
//   accept: 'application/json',
//   Authorization:
//     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjM0Y2M5MjUzNzc3ZGM2ZmVjNWMxODcxYTk4NTQ0YiIsInN1YiI6IjY0OGI1ZjI3YzJmZjNkMDBlMmRlYWU1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQHFaZaU_U-h8xgMJnpwkWK8i9YXE6bi6y1QMGEr91k',
// };

export const fetchTrendMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const products = response.data.results;
  return products;
};

export const searchMoviesByName = async movieName => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`
  );
  const products = response.data.results;
  return products;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const products = response.data;
  return products;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const products = response.data;
  return products;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const products = response.data;
  return products;
};
