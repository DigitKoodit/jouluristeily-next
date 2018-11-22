import * as React from 'react';
import styled from 'styled-components';
import { colors, shadows } from '../styles/stylesheet';

const Header = styled.header`
  background-color: ${colors.lightred};
  padding: 10px;
  width: 100%;
  box-shadow: ${shadows.low};
`;

export default ({ children }) => <Header>{children}</Header>;
