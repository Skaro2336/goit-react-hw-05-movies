import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'Api/Api';
import {
  ReviewsContainer,
  ReviewsHeading,
  ReviewList,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
} from './ReviewsStyles';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReview = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error();
      }
    };
    movieReview();
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews.length !== 0 && (
        <div>
          <ReviewsHeading>Movie Reviews</ReviewsHeading>
          <ReviewList>
            {reviews.map(review => (
              <ReviewItem key={review.id}>
                <ReviewAuthor>{review.author}</ReviewAuthor>
                <ReviewContent>{review.content}</ReviewContent>
              </ReviewItem>
            ))}
          </ReviewList>
        </div>
      )}
      {reviews.length === 0 && <div>No reviews available for this movie.</div>}
    </ReviewsContainer>
  );
};

export default Reviews;
