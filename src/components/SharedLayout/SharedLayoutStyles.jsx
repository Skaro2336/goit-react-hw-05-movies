import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;

export const IconLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const Links = styled(NavLink)`
  margin-left: 20px;
  text-decoration: none;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  padding: 20px 0;
  border-top: 1px solid #ccc;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 14px;
`;
