import styled from 'styled-components';

export const Input = styled.input`
  text-overflow: ellipsis;
  height:60px;
  overflow: hidden;
  border: 0;
  border-radius:5px;
  font-family: "Nova, sans-serif";
  outline: none;
  background-color:#F2F4F8;
  font-size: 20px;
  padding: 35px 20px;
  margin: 0;
  :focus{
    ::placeholder{
      opacity: 0; transition: opacity 0.3s ease;
    }
  }
  ::placeholder{
    font-size: 20px;
  color: #A7A7A7;

    font-family: "Nova, sans-serif";
    font-weight:400;
    opacity: 1; transition: opacity 0.3s ease;
  }
  } 
`;
