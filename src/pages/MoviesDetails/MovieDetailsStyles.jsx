import styled from '@emotion/styled';
import Button from 'components/Button';

export const MovieDetailsContainer = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MovieDetailsHeader = styled.div`
  color: black;
  text-align: left;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-top: 20px;

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

  @media (min-width: 320px) and (max-width: 767px) {
    max-width: 80vw;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 50vw;
  }
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
  }
`;
export const Companie = styled.div``;

export const AdditionalInfoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const AdditionalInfoButton = styled(Button)``;

export const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;
