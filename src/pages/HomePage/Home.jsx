import React, { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'Api/Api';
import ProductList from 'components/MoviesList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendMovies();
        setTrendMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <ProductList products={trendMovies} />
    </div>
  );
};

export default Home;
