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
  divider?: boolean;
}

const naviTree: NaviItem[] = [
  { href: '/index', label: 'JR 2018' },
  { href: '/about', label: 'Laiva' },
  { href: '/events', label: 'Ohjelma' },
  { href: '/tuplis', label: 'Tuplis', divider: true },
  { href: '/guide', label: 'Ohjeet' },
  { href: '/terms', label: 'Matkaehdot', divider: true },
  { href: '/loimu', label: 'Loimu' },
  { href: '/afterlecture', label: 'After Lecture' }
];

const Layout: React.SFC<Props> = ({
  children,
}) => (
  <React.Fragment>
    <Head>
      <title>Jouluristeily 2018</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Content>
      <Navigation navigationStructure={naviTree} />
      {children}
      <Footer>I'm here to stay</Footer>
    </Content>
  </React.Fragment>
);

export default Layout;
