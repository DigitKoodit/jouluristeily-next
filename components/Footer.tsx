import * as React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../styles/stylesheet';

const quotes = require('../static/quotes.json');

const Footer = styled.footer`
  padding: 20px;
  width: 100%;
  text-align: center;
  color: ${colors.black};
  border-top: 5px solid ${colors.red};
  max-width: 600px;
  position: fixed;
  bottom: 0px;
  background-color: ${colors.white};
  font-family: ${fonts.title};
  &:after {
    z-index: 0;
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    top: -5px;
    border-top: 5px ${colors.yellow} dashed;
  }
`;

export default () => (
  <Footer>{quotes[Math.floor(Math.random() * quotes.length)]}</Footer>
);
