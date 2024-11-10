import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #007BFF;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© 2024 Maksym Sluchyk. Всі права захищені.</p>
    </FooterContainer>
  );
};

export default Footer;
