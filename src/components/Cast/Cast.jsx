import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'Api/Api';
import {
  ActorsContainer,
  ActorsHeading,
  ActorList,
  ActorItem,
  ActorInfo,
  ActorName,
} from './CastStyles';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <ActorsContainer>
      {cast.length !== 0 && (
        <>
          <ActorsHeading>Cast</ActorsHeading>
          <ActorList>
            {cast.map(actor => (
              <ActorItem key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={`${actor.name} profile`}
                  />
                ) : (
                  <img
                    src={`https://via.placeholder.com/200x300?text=No+Image`}
                    alt={`${actor.name} profile`}
                  />
                )}
                <ActorInfo>
                  <ActorName>{actor.name}</ActorName>
                  <p>Character: {actor.character}</p>
                  <p>Popularity: {actor.popularity}</p>
                </ActorInfo>
              </ActorItem>
            ))}
          </ActorList>
        </>
      )}
      {cast.length === 0 && (
        <div>No cast members available for this movie.</div>
      )}
    </ActorsContainer>
  );
};

export default Cast;
