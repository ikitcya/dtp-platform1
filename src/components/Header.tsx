import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #007BFF;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>Онлайн платформа для оформлення ДТП по Євро-протоколу</h1>
      <Nav>
        <Link to="/">Головна</Link> | <Link to="/report">Оформити ДТП</Link> | <Link to="/info">Інформація</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
