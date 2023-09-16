import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import { fetchMovieDetails } from 'Api/Api';
import {
  MovieDetailsContainer,
  MovieDetailsHeader,
  MovieImageContainer,
  MovieImage,
  ProductionCompanies,
} from './MovieDetailsStyles';
import LoadingSpinner from 'components/Loader';
import Button from 'components/Button';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const backLinkRef = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movieDetails) {
    return <LoadingSpinner />;
  }

  const userScorePercentage = Math.round(movieDetails.vote_average * 10);

  return (
    <div>
      <Link to={backLinkRef.current}>
        <Button text="⬅️ Go back" />
      </Link>
      <MovieDetailsContainer backdrop={movieDetails.backdrop_path}>
        <MovieDetailsHeader>
          <h1>{movieDetails.title}</h1>
          <p>User score: {userScorePercentage}%</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
          {movieDetails.production_companies.length > 0 && (
            <>
              <h2>Production companies</h2>
              <ProductionCompanies>
                {movieDetails.production_companies.map(company => (
                  <img
                    key={company.id}
                    src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                    alt={company.name}
                  />
                ))}
              </ProductionCompanies>
            </>
          )}
        </MovieDetailsHeader>
        <MovieImageContainer>
          <MovieImage
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : ''
            }
            alt={movieDetails.title}
          />
        </MovieImageContainer>
      </MovieDetailsContainer>
      <hr />
      <h3>Additional information</h3>
      <Link to="cast">
        <Button text="Cast" />
      </Link>
      <Link to="reviews">
        <Button text="Reviews" />
      </Link>
      <hr />
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
