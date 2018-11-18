import * as React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import styled from 'styled-components';

type Props = {
  title?: string;
};

const Content = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const naviTree = [
  { href: '/about', label: 'About' },
  { href: '/index', label: 'Home' },
  { href: '/organizations', label: 'Organizations' },
  { href: '/events', label: 'Events' }
];

const Layout: React.SFC<Props> = ({
  children,
  title = 'This is the default title'
}) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Content>
      <Navigation navigationStructure={naviTree} />
      {children}
      <footer>I'm here to stay</footer>
    </Content>
  </React.Fragment>
);

export default Layout;
