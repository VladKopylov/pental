import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const SpecialLink = styled(Link)`
    display:flex;
    width:149px;
    margin-left:auto;
    margin-right:auto;
    padding: 0 25px;
    justify-content:center;
    background-color:#67ddff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    border-radius:8px;
    height: 60px;
    align-items:center;
    transition: all .2s ease;
    line-height: 24px;
    letter-spacing: .01em;
    font-size: 18px;
    font-weight:600;
    text-decoration:none;
    color:white;
    font-family:Nova, sans-serif;
    :hover{
        background-color: #63cfee;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    }
`

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
        <SpecialLink to="#">Get early access</SpecialLink>
    </View>
  );
};

export default NavItem;
