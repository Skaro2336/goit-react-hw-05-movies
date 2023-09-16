import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  margin-top: 40px;
`;

export const Item = styled.li`
  margin: 10px;
  padding: 10px;
  color: #333;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: inherit;
  gap: 10px;

  &:hover {
    color: red;
  }
`;
