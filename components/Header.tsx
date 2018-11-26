import * as React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 0px 20px;
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

export default ({ children }) => <Header>{children}</Header>;
