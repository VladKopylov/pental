import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Button} from '../../ui/atoms/Button'

const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  margin-right: 20px;
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 0.01em;
  font-family:Nova, sans-serif;
  color: rgba(39, 42, 45, 0.4);
  line-height: 26px;
  font-weight:600;
`;



const View = styled.div`
  display: flex;
  align-items: center;

`;

const NavItem = () => {
  return (
    <View>
        <StyledLink to="#">Why Petal?</StyledLink>
        <StyledLink to="#">FAQ</StyledLink>
        <StyledLink to="#">About us</StyledLink>
        <Button  background="#0bf"
              hoverBack="#0af">Get early access</Button>
    </View>
  );
};

export default NavItem;
