import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px 20px;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 16px;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5f51b5;
  }
`;
