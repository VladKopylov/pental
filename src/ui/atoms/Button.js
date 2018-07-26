import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  width: 200px;
  margin:0px;
  padding: 0 20px;
  outline:none;
  justify-content: center;
  background-color: ${p => p.background};
  border: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 55px;
  cursor:pointer;
  align-items: center;
  transition: all 0.2s ease;
  line-height: 24px;
  letter-spacing: 0.01em;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: white;
  font-family: Nova, sans-serif;
  :hover {
    background-color: ${p => p.hoverBack};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const AnimatedButton = Button.extend`
  :hover {
    transform: translate(0, -4px);
}
`
