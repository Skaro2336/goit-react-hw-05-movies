import styled from '@emotion/styled';

export const Btn = styled.button`
  width: 130px;
  height: 30px;
  margin-top: 20px;
  border-radius: 4px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: none;
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #5f51b5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.2);
  }
`;
