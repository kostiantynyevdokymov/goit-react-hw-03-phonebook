import styled from '@emotion/styled';

const Button = styled.button`
  margin-top: 20 px;
  weight: 100px;
  height: 50px;
  color: black;
  background-color: rgb(255, 255, 0);
  border: 8px solid #0505ec;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: rgb(212, 212, 33);
    border: 8px solid #3535b8;
  }
`;

export default Button;
