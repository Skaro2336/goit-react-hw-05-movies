import styled from '@emotion/styled';

export const ActorsContainer = styled.div`
  padding: 20px;
`;

export const ActorsHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ActorList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const ActorItem = styled.li`
  text-align: center;

  img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    margin-top: 10px;
  }
`;

export const ActorInfo = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
`;

export const ActorName = styled.h3`
  font-size: 18px;
  margin-top: 5px;
`;
