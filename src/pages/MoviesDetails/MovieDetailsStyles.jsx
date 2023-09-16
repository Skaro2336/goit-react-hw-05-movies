import styled from '@emotion/styled';

export const MovieDetailsContainer = styled.div`
  background-image: ${props =>
    props.backdrop
      ? `url(https://image.tmdb.org/t/p/original${props.backdrop})`
      : 'none'};
  background-size: cover;
  background-position: center;
  padding: 20px;
`;

export const MovieDetailsHeader = styled.div`
  color: white;
  text-align: left;
  margin-bottom: 20px;

  h1 {
    font-size: 28px;
    margin: 0;
  }

  p {
    font-size: 18px;
    margin: 10px 0;
  }

  h2 {
    font-size: 24px;
    margin: 20px 0 10px;
  }

  span {
    font-size: 18px;
    margin-right: 10px;
  }
`;

export const MovieImageContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ProductionCompanies = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;

  img {
    max-height: 50px;
    max-width: 200px;
    margin-right: 30px;
    margin-top: 10px;
  }
`;
