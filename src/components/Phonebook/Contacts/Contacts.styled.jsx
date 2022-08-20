import styled from '@emotion/styled';

const ContactsList = styled.div`
  & p {
    margin-bottom: 10px;
  }
  & ul {
    margin-top: 10 px;
  }
  & li {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 20px;
    width: 300px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
  }
  & span {
    margin-left: 10px;
  }
`;

export default ContactsList;
