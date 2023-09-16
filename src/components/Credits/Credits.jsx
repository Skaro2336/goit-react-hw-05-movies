import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'Api/Api';
import {
  CreditsContainer,
  CreditsHeading,
  ActorList,
  ActorItem,
} from './CreditsStyles';

const Credits = () => {
  const [credit, setCredit] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieCredit = async () => {
      try {
        const response = await fetchMovieCredits(movieId);
        setCredit(response);
      } catch (error) {
        console.error(error);
      }
    };
    movieCredit();
  }, [movieId]);

  return (
    <CreditsContainer>
      {credit.length !== 0 && (
        <div>
          <CreditsHeading>{movieId}</CreditsHeading>
          <ActorList>
            {credit.map(actor => (
              <ActorItem key={actor.id}>
                <img
                  width="200px"
                  height="300px"
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
              </ActorItem>
            ))}
          </ActorList>
        </div>
      )}
      {credit.length === 0 && (
        <div>No cast members available for this movie.</div>
      )}
    </CreditsContainer>
  );
};

export default Credits;
