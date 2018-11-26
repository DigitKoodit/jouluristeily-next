import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/stylesheet';

const Footer = styled.footer`
  padding: 20px;
  width: 100%;
  text-align: center;
  color: ${colors.black};
  border-top: 3px solid ${colors.red};
  max-width: 600px;
  position: relative;
  &:after {
    z-index: 0;
    position: absolute;
    content: "";
    left: 5px;
    right: 5px;
    top: -3px;
    border-top: 3px ${colors.yellow} dashed;
  }
`;

export default ({ children }) => <Footer>{children}</Footer>;
