import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import { fetchMovieDetails } from 'Api/Api';
import LoadingSpinner from 'components/Loader';
import Button from 'components/Button';

import {
  MovieDetailsContainer,
  MovieDetailsHeader,
  MovieImageContainer,
  MovieImage,
  ProductionCompanies,
  Companie,
  AdditionalInfoContainer,
  AdditionalInfoButton,
  Divider,
} from './MovieDetailsStyles';

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

  return (
    <>
      <Link to={backLinkRef.current}>
        <Button text="Go back" />
      </Link>
      <MovieDetailsContainer>
        <MovieImageContainer>
          <MovieImage />
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : `https://via.placeholder.com/200x300?text=No+Image`
            }
            alt={movieDetails.title}
          />
        </MovieImageContainer>
        <MovieDetailsHeader>
          <h1>{movieDetails.title}</h1>
          <p>User score: {movieDetails.popularity}%</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
          {movieDetails.production_companies.length > 0 && (
            <>
              <h2>Production companies</h2>
              <ProductionCompanies>
                {movieDetails.production_companies.map(company => (
                  <Companie key={company.id}>
                    <img
                      src={
                        company.logo_path
                          ? `https://image.tmdb.org/t/p/w500${company.logo_path}`
                          : `https://via.placeholder.com/100x50?text=No+Image`
                      }
                      alt={company.name}
                    />
                  </Companie>
                ))}
              </ProductionCompanies>
            </>
          )}
        </MovieDetailsHeader>
      </MovieDetailsContainer>
      <Divider />
      <h3>Additional information</h3>
      <AdditionalInfoContainer>
        <Link to="cast">
          <AdditionalInfoButton text="Cast" />
        </Link>
        <Link to="reviews">
          <AdditionalInfoButton text="Reviews" />
        </Link>
      </AdditionalInfoContainer>
      <Divider />
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
