import * as React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 10px;
  width: 100%;
  text-align: center;
`;

export default ({ children }) => <Footer>{children}</Footer>;
