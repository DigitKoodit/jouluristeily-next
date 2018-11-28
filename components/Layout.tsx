import * as React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import styled from 'styled-components';
import Footer from './Footer';
import { colors } from '../styles/stylesheet';

type Props = {
  title?: string;
};

const Content = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  background-color: ${colors.white};
`;

export interface NaviItem {
  href: string;
  label: string;
  divider?: string;
}

const naviTree: NaviItem[] = [
  { href: '/index', label: 'JR 2018' },
  { href: '/events', label: 'Ohjelma' },
  { href: '/notepad', label: 'Hyttimuistio', divider: colors.lightred },
  // { href: '/namegenerator', label: 'Risteilynimeni'},
  { href: '/guide', label: 'Ohjeet' },
  { href: '/terms', label: 'Matkaehdot', divider: colors.lightred },
  { href: '/loimu', label: 'Loimu' },
  { href: '/afterlecture', label: 'After Lecture' }
];

const Layout: React.SFC<Props> = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>Jouluristeily 2018</title>
      <link rel="shortcut icon" href="static/icon.svg" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Content>
      <Navigation navigationStructure={naviTree} />
      {children}
      <Footer />
    </Content>
  </React.Fragment>
);

export default Layout;
