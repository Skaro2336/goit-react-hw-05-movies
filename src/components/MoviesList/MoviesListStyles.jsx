import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const TrendingHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  gap: 10px;
`;
